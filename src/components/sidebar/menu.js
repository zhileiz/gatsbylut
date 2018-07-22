import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

const MenuList = styled.div`
  margin-top: 40px;
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
