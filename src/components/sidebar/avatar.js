import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ImgContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
`

export default class Avatar extends Component {
  render() {
    const imgStyle = { width: 150, height: 150, borderRadius: 5};
    return (
      <ImgContainer>
        <Img styles = {imgStyle} sizes={this.props.avatar.sizes}/>
      </ImgContainer>
    )
  }
}
