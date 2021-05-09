module.exports = {
  siteMetadata: {
    siteUrl: "https://edias.space",
    title: "edias",
    menuLinks:[
      {
        name: 'Contact',
        link: "mailto:owen@edias.space"
      },
      {
        name: 'Dev',
        link: "/dev/",
      }
    ]
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "29a318bb029f15e51cea92b82d120a",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-89529803-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-mailgo",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    }
  ],
};
