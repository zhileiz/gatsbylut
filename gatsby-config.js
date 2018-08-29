module.exports = {
  siteMetadata: {
    title: 'Zhilei Zheng',
    desc: "Zhilei Zheng is a software engineer",
    description: `A fantastic new static site generator.`,
    siteUrl: `https://www.zhileiz.com/`,
    info: {
      name: 'Zhilei Zheng',
      title: 'Junior',
      titleLink: '@UPenn-NETS',
      titleLinkURL: 'https://www.nets.upenn.edu/',
      title2: 'Software Engineer',
      title2Link: '@Pennlabs',
      title2LinkURL: 'https://pennlabs.org/',
      intro: "To build scalable, beautiful, and performant software for the web and the mobile world. To tackle all software challenges of tomorrow.",
      links: {
        github: 'https://github.com/zhileiz',
        email: 'zhileiz@seas.upenn.edu',
        linkedin: 'https://www.linkedin.com/in/zhileiz/',
        rss: 'https://zhileiz.com/rss.xml'
      }
    },
    chInfo: {
      name: '郑智镭',
      title: '大三学生',
      titleLink: '@UPenn-NETS',
      titleLinkURL: 'https://www.nets.upenn.edu/',
      title2: '开发者',
      title2Link: '@Pennlabs',
      title2LinkURL: 'https://pennlabs.org/',
      intro: "为网络和移动的世界搭建可伸缩、高颜值、高性能的应用和服务。为一切明天的软件挑战时刻准备着。",
      links: {
        github: 'https://github.com/zhileiz',
        rss: 'https://zhileiz.com/rss.xml',
        email: 'zhileiz@seas.upenn.edu',
        linkedin: 'https://www.linkedin.com/in/zhileiz/'
      }
    },
    projects: [
      {
        title: "PennMobile - Campus Life Assistant App (iOS)",
        points: [
          "The official UPenn app developed by Pennlabs.",
          "Implemented laundry room washer/dryer availability lookup feature.",
          "Enabled push notiﬁcations using Firebase Cloud Messaging.",
          "Integrated Mapkit and implemented TF-IDF algorithm for building search.",
        ]
      },
      {
        title: "Recipublic - Recipe Sharing Platform (Web)",
        points: [
          "Course project inspired by Facebook and Github. Users may update user profile, add friendship, post and browse recipes, fork and edit recipes.",
          "Used Node JS and AWS DynamoDB for the backend.",
          "Implemented user authentication with password encryption.",
          "Implemented pagerank algorithm for friend recommendations.",
          "Integrated Amazon S3 for storing user avatar and recipe pictures."
        ]
      }
    ],
    chprojects: [
      {
        title: "PennMobile - 宾大校园生活app（iOS）",
        points: [
          "The official UPenn app developed by Pennlabs.",
          "Implemented laundry room washer/dryer availability lookup feature.",
          "Enabled push notiﬁcations using Firebase Cloud Messaging.",
          "Integrated Mapkit and implemented TF-IDF algorithm for building search.",
        ]
      },
      {
        title: "Recipublic - 食谱分享平台（Web）",
        points: [
          "Course project inspired by Facebook and Github. Users may update user profile, add friendship, post and browse recipes, fork and edit recipes.",
          "Used Node JS and AWS DynamoDB for the backend.",
          "Implemented user authentication with password encryption.",
          "Implemented pagerank algorithm for friend recommendations.",
          "Integrated Amazon S3 for storing user avatar and recipe pictures."
        ]
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`, 
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
        name: "projectimgs",
        path: `${__dirname}/src/projectImgs`
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
    `gatsby-transformer-sharp`,
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
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
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
          }
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.html,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.link,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.link,
                });
              });
            },
            query: `
              {
                site {
                  siteMetadata {
                    title
                    description
                    siteUrl
                    site_url: siteUrl
                  }
                }
                allMarkdownRemark(
                  sort: {order: DESC, fields: [frontmatter___date]}, 
                  filter: {
                    frontmatter: {
                      published: {eq: true}
                      lang: {eq: "en"}
                    }
                  }) 
                {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                        link
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.html,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.link,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.link,
                });
              });
            },
            query: `
              {
                site {
                  siteMetadata {
                    title
                    description
                    siteUrl
                    site_url: siteUrl
                  }
                }
                allMarkdownRemark(
                  sort: {order: DESC, fields: [frontmatter___date]}, 
                  filter: {
                    frontmatter: {
                      published: {eq: true}
                      lang: {eq: "ch"}
                    }
                  }) 
                {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                        link
                      }
                    }
                  }
                }
              }
            `,
            output: "/ch-rss.xml",
          },
        ],
      },
    },
  ],
}
