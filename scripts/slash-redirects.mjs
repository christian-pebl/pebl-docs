// After the build: for every page folder (build/x/index.html), a small build/x.html that sends the browser to the
// full www address with the slash. Without it, /x gets Netlify's own slash redirect, which is relative
// ("Location: /x/"); answered through www.pebl-cic.co.uk's /docs/* proxy, that would send the browser to
// www.pebl-cic.co.uk/x/, a website page. A _redirects rule cannot do this: Netlify matches /x and /x/ alike, so a
// forced rule loops and an unforced one is shadowed by the page. Netlify serves x.html at /x, and x/index.html
// still answers /x/.
import { readdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const BUILD = 'build';
const WWW = 'https://www.pebl-cic.co.uk/docs';
let n = 0;
async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const d = join(dir, e.name);
    if (existsSync(join(d, 'index.html')) && !existsSync(`${d}.html`)) {
      const url = `${WWW}/${relative(BUILD, d).split(sep).join('/')}/`;
      await writeFile(`${d}.html`, `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><title>Moved</title>` +
        `<meta name="robots" content="noindex"><link rel="canonical" href="${url}">` +
        `<meta http-equiv="refresh" content="0; url=${url}"></head><body><p><a href="${url}">${url}</a></p></body></html>\n`);
      n += 1;
    }
    await walk(d);
  }
}
await walk(BUILD);
console.log(`slash-redirects: ${n} page(s) given a slashless forward`);
