import React from 'react'

import Sidebar from '../components/sidebar/sidebar'
import {ContentDiv, MainDiv, ContainerDiv} from '../components/foundation'
import ProjectsComponent from '../components/pageComponents/Projects/ProjectsComponent'

const ProjectsPage = ({data}) => (
  <ContentDiv>
    <Sidebar avatar={data.avatar} info={data.site.siteMetadata.info} activeTab="/projects" isCH={false}/>
    <MainDiv>
      <ContainerDiv>
        <ProjectsComponent data={data.site.siteMetadata.projects}/>
      </ContainerDiv>
    </MainDiv>
  </ContentDiv>
)

export default ProjectsPage

export const query = graphql`
  query projectsQuery {
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
        },
        projects {
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