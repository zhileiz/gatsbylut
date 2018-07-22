import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Sidebar from '../components/sidebar'

import {ContentDiv, MainDiv, ContainerDiv} from '../components/foundation'

const NotFoundPage = ({data}) => (
  <ContentDiv>
    <Sidebar avatar={data.avatar} info={data.site.siteMetadata.info}/>
    <MainDiv>
      <ContainerDiv>
        <div>
          <h1>404 Not Found!</h1>
          <p>This page is not ready yet / does not exist.<br/>
          But you are welcomed to view this following video clip of <b>my cat</b>.</p>
        </div>
      </ContainerDiv>
    </MainDiv>
  </ContentDiv>
)

export default NotFoundPage

export const query = graphql`
  query notFoundQuery {
    site {
      siteMetadata {
        title,
        desc,
        info {
          name
          title
          intro
          links {
            github
            linkedin
            email
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