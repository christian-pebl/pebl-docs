// Copies the three Latin web fonts the site uses from the @fontsource packages into static/fonts/, so they are
// served from docs.pebl-cic.co.uk itself as plain files. Importing the @fontsource CSS instead made the bundler
// inline the font files into the render-blocking stylesheet (it grew from about 15 KB to over 100 KB gzipped),
// which slowed the first paint. Runs before `npm run build` and `npm start` (see package.json).
import {copyFileSync, mkdirSync} from 'node:fs';
import {createRequire} from 'node:module';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const require = createRequire(import.meta.url);
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'static', 'fonts');
mkdirSync(out, {recursive: true});

const files = [
  ['@fontsource-variable/jost', 'jost-latin-wght-normal.woff2'],
  ['@fontsource/roboto', 'roboto-latin-400-normal.woff2'],
  ['@fontsource/roboto', 'roboto-latin-700-normal.woff2'],
];
for (const [pkg, file] of files) {
  const src = join(dirname(require.resolve(`${pkg}/package.json`)), 'files', file);
  copyFileSync(src, join(out, file));
  console.log(`fonts: ${pkg}/files/${file} -> static/fonts/${file}`);
}
