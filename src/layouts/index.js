import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import './index.css'
import favicon from './../images/favicon.ico'

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    ><link rel="icon" type="image/x-icon" href={favicon} /></Helmet>
    <div
      style={{
        width: '100%',
        background: '#eee',
      }}
    >
      <div style={{ margin: '0 auto', maxWidth: 1024,}}>
        {children()}
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: {regex: "/bg.jpeg/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
