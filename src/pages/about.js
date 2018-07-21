import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import PostItem from '../components/postItem'
import Sidebar from '../components/sidebar'

import {ContentDiv, MainDiv, ContainerDiv} from '../components/foundation'

const IndexPage = ({data}) => (
  <ContentDiv>
    <Sidebar info={data}/>
    <MainDiv>
      <ContainerDiv>
        <div>
          <h1>About</h1>
          <p>Lorem ipsum dolor amet etsy normcore distillery prism street art. Art party ugh hella vaporware. Gochujang hella adaptogen air plant hot chicken skateboard. Artisan butcher dreamcatcher health goth chillwave.</p>
          <p>Synth VHS keffiyeh, iPhone wayfarers cloud bread vape. Bushwick vinyl synth yr ramps hexagon vaporware farm-to-table cornhole leggings hell of kickstarter readymade gastropub. Lo-fi man bun deep v tumeric. Man braid thundercats four loko, vape waistcoat pitchfork quinoa next level shaman.</p>
        </div>
      </ContainerDiv>
    </MainDiv>
  </ContentDiv>
)

export default IndexPage

export const query = graphql`
  query aboutQuery {
    site {
      siteMetadata {
        title,
        desc
      }
    }
    avatar: imageSharp(id: {regex: "/photo.jpg/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`