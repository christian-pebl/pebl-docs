// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

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
            to: '/mooring-guide',
            label: 'Mooring Guide',
            position: 'right',
          },
          {
            href: 'https://www.pebl-cic.co.uk',
            label: 'pebl-cic.co.uk',
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
              {label: 'SubCam User Guide', to: '/'},
              {label: 'Specification', to: '/specification'},
              {label: 'Mooring Guide', to: '/mooring-guide'},
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
