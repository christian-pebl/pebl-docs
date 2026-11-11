#!/usr/bin/env bash
# Proof for scripts/netlify-ignore.sh (the Netlify ignore command). Builds a throwaway git repo, makes real commits,
# and runs the script with the variables Netlify sets (CONTEXT, CACHED_COMMIT_REF, COMMIT_REF). Expected outcomes are
# written here by hand from the rules in the script's header, not read from the script.
#   Run: bash tests/netlify_ignore_check.sh      (exit 0 = every case right)
set -u
script="$(cd "$(dirname "$0")/.." && pwd)/scripts/netlify-ignore.sh"
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
cd "$tmp"
git init -q -b main
git config user.email t@example.invalid
git config user.name test
git config core.autocrlf false
mkdir -p src docs static scripts tests .github/workflows
for f in src/page.astro docs/page.md static/f.pdf scripts/s.mjs tests/a.py .github/workflows/w.yml CLAUDE.md README.md; do echo 0 > "$f"; done
git add -A && git commit -qm base

fails=0
expect() { # expect BUILD|SKIP label cached head [context]
  out=$(CONTEXT="${5-production}" CACHED_COMMIT_REF="$3" COMMIT_REF="$4" bash "$script")
  code=$?
  got=BUILD; [ $code -eq 0 ] && got=SKIP
  if [ "$got" = "$1" ]; then echo "ok    $1  $2"; else echo "FAIL  wanted $1 got $got  $2  [$out]"; fails=$((fails+1)); fi
}
edit() { for f in "$@"; do echo $RANDOM >> "$f"; done; git add -A; git commit -qm "edit $*"; git rev-parse HEAD; }
base=$(git rev-parse HEAD)

# Skips (positive controls: the script must be able to say SKIP)
h=$(edit CLAUDE.md);                 expect SKIP "CLAUDE.md only" "$base" "$h"
h2=$(edit tests/a.py); expect SKIP "tests only" "$h" "$h2"
h3=$(edit .github/workflows/w.yml README.md); expect SKIP ".github and README only" "$h2" "$h3"
git checkout -qb feature; f1=$(edit tests/a.py); git checkout -q main
git merge -q --no-ff feature -m "Merge PR: records"; m=$(git rev-parse HEAD)
expect SKIP "PR merge bringing records only" "$h3" "$m"

# Builds
s=$(edit docs/page.md);               expect BUILD "docs page" "$m" "$s"
t=$(edit scripts/s.mjs);              expect BUILD "scripts/ (the prebuild uses it)" "$s" "$t"
c=$(edit CLAUDE.md static/f.pdf);   expect BUILD "CLAUDE.md plus a site file" "$t" "$c"
n=$(edit CLAUDE.md); echo 0 > CLAUDE.md.bak; git add -A; git commit -qm bak; b=$(git rev-parse HEAD)
expect BUILD "CLAUDE.md.bak is not CLAUDE.md" "$n" "$b"
git commit -q --allow-empty -m "Rebuild"; e=$(git rev-parse HEAD)
expect BUILD "empty commit" "$b" "$e"
d=$(edit README.md); git commit -q --allow-empty -m "Rebuild"; e2=$(git rev-parse HEAD)
expect BUILD "README change then empty commit" "$e" "$e2"
git checkout -qb feature2; edit src/page.astro >/dev/null; git checkout -q main
git merge -q --no-ff feature2 -m "Merge PR: site"; m2=$(git rev-parse HEAD)
expect BUILD "PR merge bringing a site file" "$e2" "$m2"
expect BUILD "same commit rebuilt (Trigger deploy)" "$m2" "$m2"
expect BUILD "no last-build ref" "" "$m2"
expect BUILD "unknown last-build ref" "0123456789abcdef0123456789abcdef01234567" "$m2"
x=$(edit CLAUDE.md)
expect BUILD "deploy preview, CLAUDE.md only" "$m2" "$x" deploy-preview
expect BUILD "branch deploy, CLAUDE.md only" "$m2" "$x" branch-deploy

[ $fails -eq 0 ] && echo "all cases right" || echo "$fails case(s) wrong"
exit $fails
