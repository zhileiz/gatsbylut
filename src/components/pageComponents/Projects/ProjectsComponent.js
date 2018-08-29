import React from 'react'
import ProjectItem from './ProjectItem'
import Img from 'gatsby-image'

const ProjectsComponent = ({data, pictures}) => (
  <div>
    {data.map((node, i) => {
        return <div style={{marginBottom: '25px'}}>
            <ProjectItem project={node}/>
            <Img style={{width: '100%'}} sizes={pictures[i].node.childImageSharp.sizes}/> 
        </div>
    })}
  </div>
)

export default ProjectsComponent