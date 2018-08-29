import React from 'react'
import styled from 'styled-components'

const Title = styled.h3`
    font-family: 'Chivo', 'Hans';
    font-size: 20px;
    margin: 0px;
    margin-bottom: 0.8rem;
    margin-top: 0.8rem;
    color: black;
`

const List = styled.ul`
  li {
    margin-bottom: 0.3rem;
    margin-top: 0rem;
  }
  margin-bottom: 1.2rem;
`

const ProjectItem = ({project}) => (
  <div>
    <Title><a href={project.link}>{project.title}</a></Title>
    <List style={{marginBottom: '5px'}}>
      {project.points.map((node, i) => {
        return <li key={i}>{node}</li>
      })}
    </List>
    
  </div>
)

export default ProjectItem