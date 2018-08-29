import React from 'react'

import Sidebar from '../components/sidebar/sidebar'
import {ContentDiv, MainDiv, ContainerDiv} from '../components/foundation'
import ContactComponent from '../components/pageComponents/ContactComponent'

const ContactPage = ({data}) => (
  <ContentDiv>
    <Sidebar avatar={data.avatar} info={data.site.siteMetadata.info} activeTab="/contact" isCH={false}/>
    <MainDiv>
      <ContainerDiv>
        <div>
          <h1>Contact</h1>
        </div>
        <ContactComponent/>
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
    avatar: imageSharp(id: {regex: "/avatar.jpg/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`