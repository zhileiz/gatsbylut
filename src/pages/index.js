import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import PostItem from '../components/postItem'
import Sidebar from '../components/sidebar'

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const MainDiv = styled.div`
  width: 70%;
`;

const ContainerDiv = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 50px;
`;

const IndexPage = ({data}) => (
  <ContentDiv>
    <Sidebar info={data}/>
    <MainDiv>
      <ContainerDiv>
        {data.allMarkdownRemark.edges.map(({node}) => {
          return <PostItem post={node}/>
        })}
        {data.allMarkdownRemark.edges.map(({node}) => {
          return <PostItem post={node}/>
        })}
        {data.allMarkdownRemark.edges.map(({node}) => {
          return <PostItem post={node}/>
        })}
        {data.allMarkdownRemark.edges.map(({node}) => {
          return <PostItem post={node}/>
        })}
        {data.allMarkdownRemark.edges.map(({node}) => {
          return <PostItem post={node}/>
        })}
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