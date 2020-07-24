module.exports = {
  title: "Site Name Loading...",
  tagline: "Longhorn. Student. Dreamer.",
  url: "https://phamousq.github.io",
  baseUrl: "/my-website/",
  favicon: "img/favicon.ico",
  organizationName: "phamousq", // Usually your GitHub org/user name.
  projectName: "my-website", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Quinton Pham",
      logo: {
        alt: "My Site Logo",
        src: "img/photo.jpg",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Guides",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        { to: "about", label: "About Me", position: "right" },
        // {
        //   href: "https://www.instagram.com/phamousq/",
        //   label: "Instagram",
        //   position: "right",
        // },
      ],
    },
    // footer: {
    //   style: "dark",
    //   links: [
    //     {
    //       title: "Docs",
    //       items: [
    //         {
    //           label: "Style Guide",
    //           to: "docs/",
    //         },
    //         {
    //           label: "Second Doc",
    //           to: "docs/doc2/",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Community",
    //       items: [
    //         {
    //           label: "Stack Overflow",
    //           href: "https://stackoverflow.com/questions/tagged/docusaurus",
    //         },
    //         {
    //           label: "Discord",
    //           href: "https://discordapp.com/invite/docusaurus",
    //         },
    //         {
    //           label: "Twitter",
    //           href: "https://twitter.com/docusaurus",
    //         },
    //       ],
    //     },
    //     {
    //       title: "More",
    //       items: [
    //         {
    //           label: "Blog",
    //           to: "blog",
    //         },
    //         {
    //           label: "GitHub",
    //           href: "https://github.com/facebook/docusaurus",
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "doc1",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
