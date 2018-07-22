import React from 'react'
import {MasonryLayout, MasonryImg, MasonryCounter} from '../components/masonry'

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