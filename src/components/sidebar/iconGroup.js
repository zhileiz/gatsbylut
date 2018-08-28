import React, { Component } from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

import githubIcon from '../../images/github.svg'
import linkedinIcon from '../../images/linkedin.svg'
import emailIcon from '../../images/email.svg'
import rssIcon from '../../images/rss.svg'

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

const IconGroupWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  width: 135px;
  justify-content: space-between;
  ${media.tablet`
    width: 100%;
    align-items: flex-center;
    justify-content: center;
  `}
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
  ${media.tablet`
    margin: 0px 10px;
  `}
`

export default class IconGroup extends Component {
  render() {
    const {github, email, linkedin, rss} = this.props.links;
    return (
      <IconGroupWrapper>
        {/* <p>{links.linkedin}</p> */}
        <a href = {github}><IconWrapper><Icon src={githubIcon} atl="github" /></IconWrapper></a>
        <a href = {email}><IconWrapper><Icon src={emailIcon} atl="github" /></IconWrapper></a> 
        <a href = {linkedin}><IconWrapper><Icon src={linkedinIcon} atl="github" /></IconWrapper></a>
        <a href = {rss}><IconWrapper><Icon src={rssIcon} atl="github" /></IconWrapper></a>
      </IconGroupWrapper>
    )
  }
}