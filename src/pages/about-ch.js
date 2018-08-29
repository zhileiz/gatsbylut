import React from 'react'

import Sidebar from '../components/sidebar/sidebar'
import {ContentDiv, MainDiv, ContainerDiv} from '../components/foundation'
import AboutCHComponent from '../components/pageComponents/AboutCHComponent'


const AboutCHPage = ({data}) => (
  <ContentDiv>
    <Sidebar avatar={data.avatar} info={data.site.siteMetadata.chInfo} activeTab="/about-ch" isCH={true}/>
    <MainDiv>
      <ContainerDiv>
        <AboutCHComponent/>
      </ContainerDiv>
    </MainDiv>
  </ContentDiv>
)

export default AboutCHPage

export const query = graphql`
  query aboutCHQuery {
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
    avatar: imageSharp(id: {regex: "/avatar.jpg/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`