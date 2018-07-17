import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>{data.site.siteMetadata.desc}</p>
    <p>Now go build something great.</p>
    <Link to="/about/">Go to About</Link>
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
  }
`