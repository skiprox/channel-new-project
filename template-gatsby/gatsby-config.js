require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: `<%= title %>`,
    description: `<%= description %>`,
    author: `@channelstudio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/src/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `<%= title %>`,
        short_name: `<%= slug %>`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-sass`,
    {
      resolve : `gatsby-plugin-sitemap`,
      options : {
        exclude: []
      }
    },
    `gatsby-plugin-robots-txt`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
