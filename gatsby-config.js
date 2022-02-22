/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 const path = require('path');

 require('dotenv').config({
   path: `.env.${process.env.NODE_ENV}`
 });

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Severus Snape",
    titleTemplate: "%s · The Real Hero",
    description:
      "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/snape.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@occlumency",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: '367f180dc7cf4db6b7fa14a0b7b7eb51ed5c',
        serviceId: 'wakabayashitest',
        apis: [
          {
            endpoint: 'news',
          },
        ],
      },
    },
  ],
}
