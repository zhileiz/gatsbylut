module.exports = {
  siteMetadata: {
    title: 'Zhilei Zheng',
    desc: "Zhilei Zheng is a software engineer",
    info: {
      name: 'Zhilei Zheng',
      title: 'Software Engineer',
      intro: "A Markdown-formatted document should be publishable as-is, as plain text, without looking like it's been marked up with tags or formatting instructions. While Markdown's syntax has been influenced by several existing text-to-HTML filters.",
      links: {
        github: 'https://github.com/zhileiz',
        linkedin: 'https://github.com/zhileiz',
        email: 'https://github.com/zhileiz'
      }
    },
    chInfo: {
      name: '郑智镭',
      title: '软件工程师',
      intro: "我知道的是阿里巴巴旗下的闲鱼技术团队。闲鱼是国内最早几个使用 Flutter 开发的 App。他们还写一组系列文章，介绍 Flutter 的使用感想和开发经验。",
      links: {
        github: 'https://github.com/zhileiz',
        linkedin: 'https://github.com/zhileiz',
        email: 'https://github.com/zhileiz'
      }
    }
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
        name: "gallery",
        path: `${__dirname}/src/gallery`
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
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`
  ],
}
