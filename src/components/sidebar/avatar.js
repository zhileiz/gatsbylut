import React, { Component } from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import Img from 'gatsby-image'

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

const ImgContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  display: block;
  text-align: center;
  ${media.tablet`
    margin: auto;
  `}
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
