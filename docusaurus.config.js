// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome, Wranglers!',
  tagline: 'CSE 314A | DCDS 510',
  url: 'https://wustl-data.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Roboto',
    'https://fonts.cdnfonts.com/css/source-sans-pro',
    'https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.css'

  ],
  scripts: [
    {
      src: "https://cdn.datacamp.com/dcl-react.js.gz",
      type: "text/javascript",
      async: true
    },
    {
      src: "https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.js",
      type: "text/javascript"
    },
    "/js/fullcalendar.js"
  ],
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wustl-data', // Usually your GitHub org/user name.
  projectName: 'wustl-data.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

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
            'https://github.com/wustl-data/wustl-data.github.io/edit/main/',
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
          { to: 'modules', label: 'Modules', position: 'left' },
          { to: 'resources', label: 'Resources', position: 'left' },
          { to: 'project', 'label': 'Project', position: 'left' },
          { label: 'Piazza', href: 'https://piazza.com/wustl/fall2022/cse314adcds510/home', position: 'right' },
          { label: 'GradeScope', href: 'https://wustl.instructure.com/courses/91017/external_tools/3422?display=borderless', position: 'right' }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Piazza',
                href: 'https://piazza.com/wustl/fall2022/cse314adcds510/home',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Tyler C Schlichenmeyer. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),

};

module.exports = config;
