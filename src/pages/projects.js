import React from 'react'

import Sidebar from '../components/sidebar/sidebar'
import {ContentDiv, MainDiv, ContainerDiv} from '../components/foundation'

const ProjectsPage = ({data}) => (
  <ContentDiv>
    <Sidebar avatar={data.avatar} info={data.site.siteMetadata.info} activeTab="/projects" isCH={false}/>
    <MainDiv>
      <ContainerDiv>
        <div>
          <h1>Projects</h1>
          <p>Lorem ipsum dolor amet etsy normcore distillery prism street art. Art party ugh hella vaporware. Gochujang hella adaptogen air plant hot chicken skateboard. Artisan butcher dreamcatcher health goth chillwave.</p>
          <p>Synth VHS keffiyeh, iPhone wayfarers cloud bread vape. Bushwick vinyl synth yr ramps hexagon vaporware farm-to-table cornhole leggings hell of kickstarter readymade gastropub. Lo-fi man bun deep v tumeric. Man braid thundercats four loko, vape waistcoat pitchfork quinoa next level shaman.</p>
        </div>
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