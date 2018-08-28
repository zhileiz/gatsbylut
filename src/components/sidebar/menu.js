import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { css } from 'styled-components'


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

const MenuList = styled.div`
  margin-top: 40px;
  ${media.tablet`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  `}
`
const MenuListItem = styled.div`
  margin: 5px 0px;
  font-family: "Chivo", 'Hans';
  font-size: 15px;
  a {
    text-decoration: none;
    color: black;
  }
`
export default class Menu extends Component {

  render() {

    const activeStyle = { fontWeight: 900, borderBottom: "1px solid black", paddingBottom: 2 };
    const currTab = this.props.activeTab;

    const pages = this.props.isCH ? [
      '/ch', '/about-ch', '/projects-ch', '/contact-ch', '/',
    ] : [
      '/', '/about', '/projects', '/contact', '/ch',   
    ];

    const pageNames = this.props.isCH ? [
      '博客', '关于我', '项目', '联系我', 'English'
    ] : [
      'Blog', 'About Me', 'Projects', 'Contact', '中文'
    ];

    return (
      <MenuList>
        {pages.map((path, i) => {
          return (
          <MenuListItem key={i}>
            <Link to = {path} style={path === currTab ? activeStyle : {}}>
              {pageNames[i]}
            </Link>
          </MenuListItem>)
        })}
      </MenuList>
    )

  }
}
