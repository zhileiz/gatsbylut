import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import email from '../images/email.svg'

import Menu from './sidebar/menu'

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
  font-family: Chivo, 'Hans';
  font-weight: 900;
`

const Subtitle = styled.div`
  margin-top: 5px;
  font-family: Chivo, 'Hans';
  font-size: 16px;
`

const Intro = styled.div`
  margin-top: 20px;
  padding-left: 0px;
  font-family: "Muli", 'Hans';
  font-size: 14px;
`

export default class Sidebar extends Component {
  render() {
    const avatar = this.props.avatar;
    const name = this.props.info.name ;
    const title = this.props.info.title ;
    const intro = this.props.info.intro ;
    const githubLink = this.props.info.links.github;
    const linkedinLink = this.props.info.links.github;
    const emailLink = this.props.info.links.github;
    return (
      <OuterDiv>
        <ContainerDiv>
          <ImgContainer>
            <Img styles = {{ width: 150, height: 150,borderRadius: 5,}} sizes={avatar.sizes}/>
          </ImgContainer>
          <Title>{name}</Title>
          <Subtitle>{title}</Subtitle>
          <Intro>{intro}</Intro>
          <IconGroup>
            <a href = {githubLink}><IconWrapper><Icon src={github} atl="github" /></IconWrapper></a>
            <a href = {emailLink}><IconWrapper><Icon src={email} atl="github" /></IconWrapper></a> 
            <a href = {linkedinLink}><IconWrapper><Icon src={linkedin} atl="github" /></IconWrapper></a>
          </IconGroup>
          <Menu activeTab={this.props.activeTab} isCH={this.props.isCH}/>
        </ContainerDiv>
      </OuterDiv>
    )
  }
}