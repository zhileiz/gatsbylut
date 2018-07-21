import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import email from '../images/email.svg'

const OuterDiv = styled.div`
  width: 30%;
  margin-top: 50px;
  border-right: 1px solid #ccc;
`;

const ContainerDiv = styled.div`
  width: 80%;
  margin: auto;
`;

const ImgContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
`

const IconGroup = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100px;
  justify-content: space-between;
`

const Icon = styled.img`
  width: 15px;
  height: 15px;
`

const IconWrapper = styled.div`
  width: 25px;
  height: 25px;
  padding: 5px;
  background: #bbb;
  border-radius: 5px;
`

const Title = styled.div`
  margin-top: 20px;
  font-family: Chivo;
  font-weight: 900;
`

const Subtitle = styled.div`
  margin-top: 5px;
  font-family: Chivo;
  font-size: 16px;
`

const Intro = styled.div`
  margin-top: 20px;
  padding-left: 0px;
  font-family: "Muli";
  font-size: 14px;
`

const Menu = styled.div`
  margin-top: 40px;
`

const MenuItem = styled.div`
  margin: 5px 0px;
  font-family: "Chivo";
  a {
    text-decoration: none;
    color: black;
  }
`

const Sidebar = ({info}) => (
  <OuterDiv>
    <ContainerDiv>
      <ImgContainer>
        <Img styles = {{ width: 150, height: 150,borderRadius: 5,}} sizes={info.avatar.sizes}/>
      </ImgContainer>
      <Title>Zhilei Zheng</Title>
      <Subtitle>Software Engineer</Subtitle>
      <Intro>
        A Markdown-formatted document should be publishable as-is, as plain text, without looking like it's been marked up with tags or formatting instructions. While Markdown's syntax has been influenced by several existing text-to-HTML filters.
      </Intro>
      <IconGroup>
        <Link><IconWrapper><Icon src={github} atl="github" /></IconWrapper></Link>
        <Link><IconWrapper><Icon src={email} atl="github" /></IconWrapper></Link> 
        <Link><IconWrapper><Icon src={linkedin} atl="github" /></IconWrapper></Link>
      </IconGroup>
      <Menu>
        <MenuItem><Link to = '/about'>About</Link></MenuItem>
        <MenuItem><Link to = '/contact'>Contact</Link></MenuItem>
        <MenuItem><Link to = '/about'>About</Link></MenuItem>
      </Menu>
    </ContainerDiv>
  </OuterDiv>
)

export default Sidebar