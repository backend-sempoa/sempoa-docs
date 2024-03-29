// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SEMPOA ERP",
  tagline:
    "Software Akuntansi Online Terintegrasi untuk Kembangkan Bisnis Tanpa Batas",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-sempoa.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "backend-sempoa", // Usually your GitHub org/user name.
  projectName: "sempoa-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/backend-sempoa/sempoa-docs/blob/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/backend-sempoa/sempoa-docs/blob/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Sempoa",
        logo: {
          alt: "Sempoa Logo",
          src: "img/favicon-sempoa.ico",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://sempoa.id/?utm_source=sempoa-docs&utm_medium=link&utm_campaign=sempoa-docs&utm_content=navbar',
          //   label: 'Coba Sempoa',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Hubungi Kami",
                to: "mailto:info@sempoa.id",
              },

              {
                label: "Coba Sempoa",
                href: "https://sempoa.id/?utm_source=sempoa-docs&utm_medium=link&utm_campaign=sempoa-docs&utm_content=footer",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} All Rights Reserved. PT Sempoa Prima Teknologi. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["php"],
      },
    }),
};

module.exports = config;
