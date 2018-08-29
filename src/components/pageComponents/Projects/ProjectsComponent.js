import React from 'react'
import ProjectItem from './ProjectItem'

const ProjectsComponent = ({data}) => (
  <div>
    {data.map((node, i) => {
        return <div style={{marginBottom: '1.5rem'}}>
            <ProjectItem project={node}/>
        </div>
    })}
  </div>
)

export default ProjectsComponent