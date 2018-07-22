import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import YouTube from 'react-youtube'

import Sidebar from '../components/sidebar/sidebar'

import {ContentDiv, MainDiv, ContainerDiv} from '../components/foundation'

const opts = {
  height: '390',
  width: '640',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    loop: 1,
    playlist: "Q3oItpVa9fs",
    start: 44
  }
};

const NotFoundPage = ({data}) => (
  <ContentDiv>
    <Sidebar avatar={data.avatar} info={data.site.siteMetadata.info} isCH={false}/>
    <MainDiv>
      <ContainerDiv>
        <div>
          <h1>404 Not Found!</h1>
          <p>This page is not ready yet / does not exist.<br/>
          But you are welcomed to view this awesome video clip of music and science by <b>CYMATICS from Stanford</b>.</p>
          <YouTube
            videoId="Q3oItpVa9fs"
            playList="Q3oItpVa9fs"
            loop={1}
            opts={opts}
          />
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