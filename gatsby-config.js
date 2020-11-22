require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Chetan",
    author: "Chetan Kumar",
    keywords: ["Chetan", "Kumar", "Blog", "starter"],
    siteUrl: "https://chetankumar.com",
    description: "A beautiful and featureful gatsby blog starter for bloggers!"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
          },
        ],
      },	  
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ck-gatsby-blog`,
        short_name: `ckbhatia`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/home.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
