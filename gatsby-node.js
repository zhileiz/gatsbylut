const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === "MarkdownRemark") {
    const link = createFilePath({
      node,
      getNode,
      basePath: "blog"
    });
    createNodeField({
      node,
      name: "link",
      value: `/blog${link}`
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                link
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.link,
          component: path.resolve("./src/posts/blog.js"),
          context: {
            link: `${node.frontmatter.link}`
          }
        });
      });
      resolve();
    });
  });
};
