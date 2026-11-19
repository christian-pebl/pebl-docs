"""Check the three Mooring Guide worked examples against the rope rule and their own arithmetic.

    python tests/mooring_examples_check.py        (exit 0 = every check right)

The rule (Deployment page, 18 Nov 2026): every rope is as long as the depth at high tide plus 20%.
The rope lengths expected below are written by hand from that rule, not read from the pages:
    5 m deep -> 6 m,  10 m deep -> 12 m,  20 m deep -> 24 m.  The rope between two surface buoys is 2 m at any depth.

For each example page it checks that
  - the depth in the Example line is the one expected, and is given at high tide;
  - every rope in the Bill of Materials is the expected length;
  - each rope's cost is its length x the coil price printed in the same row / the coil length, to the nearest penny;
  - the TOTAL is the sum of the rows;
  - the text and the picture's description give the same rope length;
and that the summary table on the Frame Configurations page repeats each depth and total.

Why: the May 2026 pages had ropes 5 m and 10 m longer than their own diagrams, two rope costs that were a few
pence out, and one total that did not add up (found 19 Nov 2026).
"""
import os
import re
import sys
from decimal import Decimal as D, ROUND_HALF_UP

# Give another copy of docs/mooring-guide as the first argument to check that instead (the May pages must fail).
ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'docs', 'mooring-guide')
EXPECT = {                       # page: (depth at high tide in m, rope length in m)
    'low-exposure.md': (5, 6),
    'med-exposure.md': (10, 12),
    'high-exposure.md': (20, 24),
}
BUOY_ROPE_M = 2
SUMMARY_NAME = {'low-exposure.md': 'Low', 'med-exposure.md': 'Med', 'high-exposure.md': 'High'}

fails = []
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')      # the pound sign, on a Windows console


def check(ok, what):
    print(('ok    ' if ok else 'FAIL  ') + what)
    if not ok:
        fails.append(what)


def read(*parts):
    with open(os.path.join(ROOT, *parts), encoding='utf-8') as f:
        return f.read()


def pounds(s):
    return D(s.replace(',', ''))


totals = {}
for page, (depth, rope_m) in EXPECT.items():
    text = read('frame-configurations', page)
    m = re.search(r'\*\*Example:\*\*\s*(\d+) m depth( at high tide)?', text)
    check(bool(m) and int(m.group(1)) == depth and bool(m.group(2)), f'{page}: example is {depth} m depth at high tide')

    rows = [[c.strip() for c in line.strip().strip('|').split('|')] for line in text.splitlines() if line.startswith('| **')]
    rope_rows = [r for r in rows if 'rope' in r[0].lower()]
    check(len(rope_rows) >= 2, f'{page}: found {len(rope_rows)} rope rows')
    row_sum = D(0)
    total = None
    for name, spec, cost in rows:
        name = name.strip('*')
        if name == 'TOTAL':
            total = pounds(re.search(r'£([\d,]+\.\d\d)', cost).group(1))
            continue
        first = pounds(re.search(r'£([\d,]+\.\d\d)', cost).group(1))
        row_sum += first
        if 'rope' not in name.lower():
            continue
        length = D(re.search(r'Polysteel(?: Leaded)?, (\d+(?:\.\d+)?) m', spec).group(1))
        want_len = BUOY_ROPE_M if name == 'Surface buoy rope' else rope_m
        check(length == want_len, f'{page}: {name} is {want_len} m (page says {length} m)')
        coil = re.search(r'Sold in (\d+) m length at £([\d,]+\.\d\d)', cost)
        want_cost = (length * pounds(coil.group(2)) / D(coil.group(1))).quantize(D('0.01'), rounding=ROUND_HALF_UP)
        check(first == want_cost, f'{page}: {name} costs £{want_cost} = {length} m x £{coil.group(2)} / {coil.group(1)} m (page says £{first})')
    check(total is not None and total == row_sum, f'{page}: TOTAL £{total} is the sum of its rows (£{row_sum})')
    totals[page] = total

    said = re.search(r'plus 20%, so (\d+) m here', text)
    check(bool(said) and int(said.group(1)) == rope_m, f'{page}: text says the ropes are {rope_m} m')
    alt = re.search(r'!\[([^\]]+)\]\(/img/rigging-', text)
    alt_lengths = {int(x) for x in re.findall(r'(\d+) m (?:floating|sinking)', alt.group(1))} if alt else set()
    check(alt_lengths == {rope_m}, f'{page}: picture description gives {rope_m} m ropes (found {sorted(alt_lengths)})')
    check(bool(alt) and f'{depth} m of water at high tide' in alt.group(1), f'{page}: picture description gives {depth} m at high tide')

summary = read('frame-configurations', 'index.md')
check('every rope is as long as that depth plus 20%' in summary, 'index.md: states the rope rule')
for page, (depth, _) in EXPECT.items():
    m = re.search(r'\| \*\*' + SUMMARY_NAME[page] + r'\*\* \| (\d+) m \| [^|]+ \| \*\*£([\d,]+\.\d\d)\*\* \|', summary)
    check(bool(m) and int(m.group(1)) == depth and pounds(m.group(2)) == totals[page],
          f'index.md: {SUMMARY_NAME[page]} row is {depth} m and £{totals[page]}')

deployment = read('deployment.md')
check('depth at high tide plus 20%' in deployment, 'deployment.md: still gives the rule as the depth at high tide plus 20%')

print('\n%d check(s) failed' % len(fails) if fails else '\nall checks passed')
sys.exit(1 if fails else 0)
