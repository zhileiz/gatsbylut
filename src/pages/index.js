import React from 'react'
import Link from 'gatsby-link'

const PostListing = ({post}) => (
  <div>
    <Link to={post.frontmatter.link}>
      <h3>{post.frontmatter.title}</h3>
    </Link>
    <p>{post.frontmatter.summary}</p>
  </div>
)

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>{data.site.siteMetadata.desc}</p>
    <p>Now go build something great.</p>
    <Link to="/about/">Go to About</Link>
    <div>
      {data.allMarkdownRemark.edges.map(({node}) => {
        return <PostListing post={node}/>
      })}
    </div>
  </div>
)

export default IndexPage

export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title,
        desc
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            link
            title
            date
            summary
            subtitle
          }
        }
      }
    }
  }
`