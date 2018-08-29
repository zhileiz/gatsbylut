import React from 'react'

import Sidebar from '../components/sidebar/sidebar'
import {ContentDiv, MainDiv, ContainerDiv} from '../components/foundation'
import AboutComponent from '../components/pageComponents/AboutComponent'

const AboutPage = ({data}) => (
  <ContentDiv>
    <Sidebar avatar={data.avatar} info={data.site.siteMetadata.info} activeTab="/about" isCH={false}/>
    <MainDiv>
      <ContainerDiv>
        <div>
          <h1>About</h1>
          <AboutComponent/>
        </div>
      </ContainerDiv>
    </MainDiv>
  </ContentDiv>
)

export default AboutPage

export const query = graphql`
  query aboutQuery {
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