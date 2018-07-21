import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import PostItem from '../components/postItem'
import Sidebar from '../components/sidebar'

import {ContentDiv, MainDiv, ContainerDiv} from '../components/foundation'

const IndexPage = ({data}) => (
  <ContentDiv>
    <Sidebar info={data}/>
    <MainDiv>
      <ContainerDiv>
        {data.allMarkdownRemark.edges.map(({node}) => {
          return <PostItem post={node}/>
        })}
      </ContainerDiv>
    </MainDiv>
  </ContentDiv>
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
            category
            date(formatString: "MMMM DD, YYYY")
            summary
            subtitle
          }
        }
      }
    }
    avatar: imageSharp(id: {regex: "/photo.jpg/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`