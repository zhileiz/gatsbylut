import React, { Component } from 'react'
import styled from 'styled-components'

import Menu from './menu'
import IconGroup from './iconGroup'
import Avatar from './avatar'
import {ContainerDiv, Title, Subtitle, Intro} from '../foundation'

const OuterDiv = styled.div`
  width: 30%;
  margin-top: 50px;
  border-right: 1px solid #ccc;
`;

const ImgContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
`

export default class Sidebar extends Component {
  render() {
    const {name, title, intro} = this.props.info;
    return (
      <OuterDiv>
        <ContainerDiv style={{marginTop: "0px"}}>
          <Avatar avatar = {this.props.avatar}/>
          <Title>{name}</Title>
          <Subtitle>{title}</Subtitle>
          <Intro>{intro}</Intro>
          <IconGroup links = {this.props.info.links}/>
          <Menu activeTab={this.props.activeTab} isCH={this.props.isCH}/>
        </ContainerDiv>
      </OuterDiv>
    )
  }
}