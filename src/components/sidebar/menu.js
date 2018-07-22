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
  a {
    text-decoration: none;
    color: black;
  }
`

export default class Menu extends Component {
  render() {
    return (
      <MenuList>
        <MenuListItem><Link to = '/'>Blog</Link></MenuListItem>
        <MenuListItem><Link to = '/about'>About Me</Link></MenuListItem>
        <MenuListItem><Link to = '/projects'>Projects</Link></MenuListItem>         
        <MenuListItem><Link to = '/contact'>Contact</Link></MenuListItem>
        <MenuListItem><Link to = '/contact'>中文</Link></MenuListItem>
      </MenuList>
    )
  }
}
