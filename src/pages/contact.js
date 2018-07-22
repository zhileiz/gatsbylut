import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import PostItem from '../components/postItem'
import Sidebar from '../components/sidebar'

import {ContentDiv, MainDiv, ContainerDiv} from '../components/foundation'

const ContactPage = ({data}) => (
  <ContentDiv>
    <Sidebar avatar={data.avatar} info={data.site.siteMetadata.info} activeTab="/contact" isCH={false}/>
    <MainDiv>
      <ContainerDiv>
        <div>
          <h1>Contact</h1>
        </div>
      </ContainerDiv>
    </MainDiv>
  </ContentDiv>
)

export default ContactPage

export const query = graphql`
  query contactQuery {
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