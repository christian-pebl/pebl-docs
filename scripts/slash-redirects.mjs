// After the build: for every page folder (build/x/index.html), a redirect from /x to its full www address with the
// slash. Netlify's own slash redirect is relative ("Location: /x/"), which, answered through www.pebl-cic.co.uk's
// /docs/* proxy, would send the browser to www.pebl-cic.co.uk/x/, a website page. Written to build/_redirects,
// which Netlify reads before netlify.toml. Not forced: Netlify matches /x and /x/ alike, and an existing page
// (x/index.html) shadows an unforced rule, so /x/ is served and only /x redirects.
import { readdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const BUILD = 'build';
const WWW = 'https://www.pebl-cic.co.uk/docs';
const lines = [];
async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const d = join(dir, e.name);
    if (existsSync(join(d, 'index.html'))) {
      const path = '/' + relative(BUILD, d).split(sep).join('/');
      lines.push(`${path}  ${WWW}${path}/  301`);
    }
    await walk(d);
  }
}
await walk(BUILD);
lines.sort();
await writeFile(join(BUILD, '_redirects'), `# Written by scripts/slash-redirects.mjs after the build.\n${lines.join('\n')}\n`);
console.log(`slash-redirects: ${lines.length} page folder(s)`);
