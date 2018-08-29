import React from 'react'

import Sidebar from '../components/sidebar/sidebar'
import {ContentDiv, MainDiv, ContainerDiv} from '../components/foundation'
import ProjectsComponent from '../components/pageComponents/Projects/ProjectsComponent'

const ProjectsCHPage = ({data}) => (
  <ContentDiv>
    <Sidebar avatar={data.avatar} info={data.site.siteMetadata.chInfo} activeTab="/projects-ch" isCH={true} />
    <MainDiv>
      <ContainerDiv>
        <ProjectsComponent data={data.site.siteMetadata.chprojects}/>
      </ContainerDiv>
    </MainDiv>
  </ContentDiv>
)

export default ProjectsCHPage

export const query = graphql`
  query projectsCHQuery {
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
        chprojects {
          title
          points
          link
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