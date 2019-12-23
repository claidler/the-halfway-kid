module.exports = {
  siteMetadata: {
    title: `The Halfway Kid`,
    description: `Music by The Halfway Kid`,
    url: `https://www.thehalfwaykid.com`,
    type: `website`,
    developer: `Chris Laidler`,
    artist: `The Halfway Kid`,
    keywords: `halfway, kid, chris, laidler, music, crumbs`,
  },
  plugins: [
    `gatsby-plugin-less`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the-halfway-kid`,
        short_name: `halfway-kid`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
