// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'module';

const require = createRequire(import.meta.url);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PEBL Docs',
  tagline: 'Documentation for PEBL CIC ocean monitoring kit',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.pebl-cic.co.uk',
  baseUrl: '/',
  // Every page is served from a folder (/subcam/), so the canonical and sitemap URLs must end with a slash.
  // Without this, 32 of 40 sitemap URLs pointed at addresses that Netlify 301s to the slash version.
  trailingSlash: true,

  // Self-hosted fonts, as on www.pebl-cic.co.uk: fetch the heading and body fonts early so text settles sooner.
  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preload', href: '/fonts/jost-latin-wght-normal.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'preload', href: '/fonts/roboto-latin-400-normal.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous'},
    },
  ],

  organizationName: 'christian-pebl',
  projectName: 'pebl-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          // Fonts are declared in custom.css and served from /fonts/ (copied from @fontsource by scripts/copy-fonts.mjs).
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Navy header in both colour modes, like www.pebl-cic.co.uk, so the logo is always the white one.
      navbar: {
        title: 'Docs',
        style: 'dark',
        logo: {
          alt: 'PEBL CIC',
          src: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Guides',
            position: 'left',
            items: [
              {label: 'SubCam User Guide', to: '/subcam'},
              {label: 'PEBL App', to: '/pebl-app'},
              {label: 'Mooring Guide', to: '/mooring-guide'},
              {label: 'FAQ and troubleshooting', to: '/subcam/faq'},
            ],
          },
          {
            to: '/hire-and-warranty',
            label: 'Terms & Policies',
            position: 'left',
          },
          // Links back to the product pages on www.pebl-cic.co.uk, opened in the same tab like the website's own menu.
          {
            href: 'https://www.pebl-cic.co.uk/subcam',
            label: 'SubCam',
            position: 'right',
            target: '_self',
            className: 'pebl-www-link',
          },
          {
            href: 'https://www.pebl-cic.co.uk/growprobe',
            label: 'GrowProbe',
            position: 'right',
            target: '_self',
            className: 'pebl-www-link',
          },
          {type: 'search', position: 'right'},
          {
            href: 'https://www.pebl-cic.co.uk/order',
            label: 'Get a quote',
            position: 'right',
            target: '_self',
            className: 'pebl-www-link pebl-quote',
          },
        ],
      },
      // Footer facts copied from the website (src/data/site.ts in pebl-website, checked there against Companies House).
      footer: {
        style: 'dark',
        logo: {
          alt: 'PEBL CIC',
          src: 'img/logo-dark.svg',
          href: 'https://www.pebl-cic.co.uk',
          target: '_self',
          width: 110,
        },
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'SubCam User Guide', to: '/subcam'},
              {label: 'PEBL App', to: '/pebl-app'},
              {label: 'Mooring Guide', to: '/mooring-guide'},
              {label: 'FAQ', to: '/subcam/faq'},
              {label: 'Terms & Policies', to: '/hire-and-warranty'},
            ],
          },
          {
            title: 'Contact',
            items: [
              {html: '<a class="footer__link-item" href="tel:+447905672766">07905 672766</a>'},
              {html: '<a class="footer__link-item" href="mailto:hello@pebl-cic.co.uk">hello@pebl-cic.co.uk</a>'},
              {html: '<span class="pebl-footer-address">29 Glan Yr Afon Road, Sketty, Swansea, SA2 9JA, United Kingdom</span>'},
              {html: '<a class="footer__link-item" href="http://linkedin.com/company/pebl-cic/">LinkedIn</a>'},
              {html: '<a class="footer__link-item" href="https://www.instagram.com/pebl_cic/">Instagram</a>'},
            ],
          },
          {
            title: 'PEBL CIC',
            items: [
              {html: '<a class="footer__link-item" href="https://www.pebl-cic.co.uk">Main website</a>'},
              {html: '<a class="footer__link-item" href="https://pebl-data.cloud/">Partner sign-in</a>'},
              {html: '<a class="footer__link-item" href="https://www.fishspotter.app/">FishSpotter</a>'},
              {label: 'Privacy notice', to: '/hire-and-warranty/privacy'},
            ],
          },
        ],
        copyright:
          'Plant Ecology Beyond Land (PEBL) CIC is a community interest company limited by shares, registered in England and Wales, company number ' +
          '<a href="https://find-and-update.company-information.service.gov.uk/company/12076622">12076622</a>. ' +
          'Registered office: 29 Glan Yr Afon Road, Sketty, Swansea, SA2 9JA. VAT number GB 351 9490 83.' +
          `<br />&copy; ${new Date().getFullYear()} PEBL`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
