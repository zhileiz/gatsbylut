import React from 'react'
import styled from 'styled-components'

const Title = styled.h3`
    font-family: 'Chivo', 'Hans';
    font-size: 20px;
    margin: 0px;
    margin-bottom: 0.8rem;
    color: black;
`

const Point = styled.li`
    margin-bottom: 0.2rem;
`

const ProjectItem = ({project}) => (
  <div>
    <Title>{project.title}</Title>
    <ul style={{marginBottom: '5px'}}>
      {project.points.map((node, i) => {
        return <Point key={i}>{node}</Point>
      })}
    </ul>
    
  </div>
)

export default ProjectItem