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
          editUrl: 'https://github.com/christian-pebl/pebl-docs/tree/main/',
        },
        blog: false,
        theme: {
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
      image: 'img/hero-lander-frames.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'PEBL CIC',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg',
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
            label: 'Hire & Warranty',
            position: 'left',
          },
          {
            href: 'https://www.pebl-cic.co.uk',
            label: 'pebl-cic.co.uk',
            position: 'right',
          },
          {
            href: 'https://github.com/christian-pebl/pebl-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'SubCam User Guide', to: '/subcam'},
              {label: 'PEBL App', to: '/pebl-app'},
              {label: 'Mooring Guide', to: '/mooring-guide'},
              {label: 'FAQ', to: '/subcam/faq'},
              {label: 'Hire & Warranty', to: '/hire-and-warranty'},
            ],
          },
          {
            title: 'PEBL CIC',
            items: [
              {label: 'Main website', href: 'https://www.pebl-cic.co.uk'},
              {label: 'GitHub', href: 'https://github.com/christian-pebl'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PEBL CIC. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
