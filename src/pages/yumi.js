import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {MasonryLayout, MasonryImg, MasonryCounter} from '../components/Masonry'

const today = 21;

const GalleryPage = ({data}) => (
    <MasonryLayout>
        <MasonryCounter/>
        {data.allFile.edges.map(({node}) => {
          return <MasonryImg imgInfo={node.childImageSharp}/>
        })}
    </MasonryLayout>
)

export default GalleryPage;

export const query = graphql`
  query galleryQuery {
    allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`