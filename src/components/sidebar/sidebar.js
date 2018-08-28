import React, { Component } from 'react'
import styled from 'styled-components'

import Menu from './menu'
import IconGroup from './iconGroup'
import Avatar from './avatar'
import {ContainerDiv, Title, Subtitle, Intro, media} from '../foundation'

const OuterDiv = styled.div`
  width: 30%;
  margin-top: 50px;
  border-right: 1px solid #ccc;
  ${media.tablet`
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
    text-align: center;
  `}
`;

export default class Sidebar extends Component {
  render() {
    const {name, title, titleLink, titleLinkURL, title2, title2Link, title2LinkURL, intro} = this.props.info;
    return (
      <OuterDiv>
        <ContainerDiv style={{marginTop: "0px"}}>
          <Avatar avatar = {this.props.avatar}/>
          <Title>{name}</Title>
          <Subtitle>{title} <a href={titleLinkURL}>{titleLink}</a></Subtitle>
          <Subtitle>{title2} <a href={title2LinkURL}>{title2Link}</a></Subtitle>
          <Intro>{intro}</Intro>
          <IconGroup links = {this.props.info.links}/>
          <Menu activeTab={this.props.activeTab} isCH={this.props.isCH}/>
        </ContainerDiv>
      </OuterDiv>
    )
  }
}