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

const rssStyle = {
  background: "linear-gradient(45deg, #ff7b0d 0%,#ffa84c 100%)" 
}

const linkedinStyle = {
  background: "linear-gradient(45deg, #0077b5 0%,#49c0f0 100%)"
}

const gmailStyle = {
  background: "linear-gradient(45deg, #b31217 0%,#e52d27 100%)"
}

const githubStyle = {
  background: "linear-gradient(45deg, #0e0e0e 0%,#7d7e7d 99%)"
}

export default class IconGroup extends Component {
  render() {
    const {github, email, linkedin, rss} = this.props.links;
    return (
      <IconGroupWrapper>
        <a href = {github} target="_blank"><IconWrapper style={githubStyle}><Icon src={githubIcon} atl="github" /></IconWrapper></a>
        <a href = {"mailto:" + email} target="_blank"><IconWrapper style={gmailStyle}><Icon src={emailIcon} atl="github" /></IconWrapper></a> 
        <a href = {linkedin} target="_blank"><IconWrapper style={linkedinStyle}><Icon src={linkedinIcon} atl="github" /></IconWrapper></a>
        <a href = {rss} target="_blank"><IconWrapper style={rssStyle}><Icon src={rssIcon} atl="github" /></IconWrapper></a>
      </IconGroupWrapper>
    )
  }
}