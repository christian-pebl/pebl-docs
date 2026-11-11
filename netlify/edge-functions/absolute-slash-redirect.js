// The docs are served at www.pebl-cic.co.uk/docs/ through the website's /docs/* proxy (Christian, 11 Nov 2026).
// A page asked for without its slash gets Netlify's own redirect, which is relative ("Location: /subcam/"); the
// browser would resolve that against www.pebl-cic.co.uk and land on a website page. This makes such a Location a
// full www address. It runs only for paths that end without a slash and have no file extension (see config), so
// pages, assets and the slashed URLs every link uses never invoke it.
const WWW = 'https://www.pebl-cic.co.uk/docs';

export default async (request, context) => {
  const res = await context.next();
  const loc = res.headers.get('location');
  if (res.status >= 300 && res.status < 400 && loc && loc.startsWith('/') && !loc.startsWith('//')) {
    const headers = new Headers(res.headers);
    headers.set('location', WWW + loc);
    return new Response(null, { status: res.status, headers });
  }
  return res;
};

export const config = {
  pattern: '^/.*[^/]$',
  excludedPattern: '\.[A-Za-z0-9]+$',
};
