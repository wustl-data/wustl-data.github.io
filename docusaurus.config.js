// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Data Wrangling @ WashU',
  tagline: 'CSE 314A / DCDS 510',
  url: 'https://wustl-data.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Libre+Baskerville',
    'http://fonts.cdnfonts.com/css/source-sans-pro'
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wustl-data', // Usually your GitHub org/user name.
  projectName: 'wustl-data.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css')
          ]
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CSE 314A | DCDS 510',
        logo: {
          alt: 'My Site Logo',
          src: 'img/color-long-washu.svg',
        },
        items: [
          { type: 'doc', docId: "assignments/index", label: 'Assignments', position: 'left' },
          { type: 'doc', docId: "exercises/index", label: 'Exercises', position: 'left' },
          { type: 'doc', docId: "resources/index", label: 'Resources', position: 'left' },
          { type: 'doc', docId: "environment/index", label: 'Environment', position: 'left' },
          {
            href: 'https://github.com/wustl-data',
            label: 'GitHub',
            position: 'right',
          },

          { label: 'Piazza', href: 'https://piazza.com/wustl/fall2022/cse314adcds510/home', position: 'right' },
          { label: 'GradeScope', href: 'https://www.gradescope.com/courses/409551', position: 'right' }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/links',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),

};

module.exports = config;
