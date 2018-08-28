import React from 'react'

import PostItem from '../components/postItem'
import Sidebar from '../components/sidebar/sidebar'

import {ContentDiv, MainDiv, ContainerDiv} from '../components/foundation'

const IndexPage = ({data}) => (
  <ContentDiv>
    <Sidebar avatar={data.avatar} info={data.site.siteMetadata.info} activeTab="/" isCH={false}/>
    <MainDiv>
      <ContainerDiv>
        {data.allMarkdownRemark.edges.map(({node}, i) => {
          return <PostItem post={node} key={i}/>
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
        desc,
        info {
          name
          title
          titleLink
          titleLinkURL
          title2
          title2Link
          title2LinkURL
          intro
          links {
            github
            linkedin
            email
            rss
          }
        }
      }
    }
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC}
      filter: {
        frontmatter: {
          published: { eq: true }
          lang: {eq: "en"}
        }
      }
    ) {
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
    avatar: imageSharp(id: {regex: "/avatar.jpg/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`