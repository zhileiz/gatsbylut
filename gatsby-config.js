module.exports = {
  siteMetadata: {
    title: 'TutsBlog',
    desc: "ZhileiZ's implementation of LevelUpTuts ProGatsby Series"
  },
  plugins: [
    `gatsby-plugin-react-helmet`, 
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "img",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blog",
        path: `${__dirname}/src/posts`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Chivo`,
          `Muli`
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
            },
          },
          `gatsby-remark-katex`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `20`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              showCaptions: true,
              linkImagesToOriginal: false
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`
  ],
}
