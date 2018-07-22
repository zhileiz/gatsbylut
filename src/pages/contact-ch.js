import React from 'react'

import Sidebar from '../components/sidebar/sidebar'
import {ContentDiv, MainDiv, ContainerDiv} from '../components/foundation'

const ContactCHPage = ({data}) => (
  <ContentDiv>
    <Sidebar avatar={data.avatar} info={data.site.siteMetadata.chInfo} activeTab="/contact-ch" isCH={true}/>
    <MainDiv>
      <ContainerDiv>
        <div>
          <h1>Contact</h1>
        </div>
      </ContainerDiv>
    </MainDiv>
  </ContentDiv>
)

export default ContactCHPage

export const query = graphql`
  query contactCHQuery {
    site {
      siteMetadata {
        title,
        desc,
        chInfo {
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
    avatar: imageSharp(id: {regex: "/photo.jpg/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`