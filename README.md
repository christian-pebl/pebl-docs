# PEBL Docs

Documentation site for PEBL CIC ocean monitoring kit, published at **https://docs.pebl-cic.co.uk**.

Built with [Docusaurus 3](https://docusaurus.io/). Hosted on **Netlify**, which builds automatically on every push to `main` (live in about a minute).

## Content structure

All pages live under `docs/` and the sidebar is generated from the folder structure:

- `index.mdx` - hub landing page with cards linking to each guide
- `subcam/` - SubCam User Guide (hardware, connect and configure, operating, specification, maintenance, mounting, FAQ)
- `pebl-app/` - PEBL App guide (configure, schedule, data and media)
- `mooring-guide/` - Mooring Guide and frame configurations
- `hire-and-warranty/` - Hire Terms and Conditions, and the product Warranty

Framework and theming live in the repo: `docusaurus.config.js` (navbar, footer), `src/css/custom.css` (PEBL brand palette), and `sidebars.js`.

## Editing and publishing

Markdown content (`docs/` and `static/`) is authored in PEBL's shared Drive copy and published with the `publish.ps1` script kept alongside it, which mirrors the content into this repo, commits, and pushes. Framework files (`docusaurus.config.js`, `src/`) are edited directly in this repo.

A push to `main` triggers an automatic Netlify build and deploy.

> Deployment is via Netlify, not GitHub Pages. The leftover `vercel.json` is not the live config; live redirects belong in `netlify.toml`.

## Local development

```bash
npm install
npm start        # dev server with live reload
npm run build    # production build into build/
npm run serve    # serve the production build locally
```

## Internal templates

`_templates/` holds page templates (`new-page.md`, `new-section-index.md`) and the internal `hire-confirmation-template.md` (the per-customer hire document that references the published Hire Terms). The `_templates/` folder is excluded from publishing and is not part of the live site.
