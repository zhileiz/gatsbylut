import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/sidebar/sidebar'
import {ContentDiv, MainDiv, ContainerDiv} from '../components/foundation'
import ContactComponent from '../components/pageComponents/ContactComponent'

const Title = styled.h3`
    font-family: 'Chivo', 'Hans';
    font-size: 20px;
    margin: 0px;
    margin-bottom: 0.8rem;
    margin-top: 0.8rem;
    color: black;
`

const ContactPage = ({data}) => (
  <ContentDiv>
    <Sidebar avatar={data.avatar} info={data.site.siteMetadata.info} activeTab="/contact" isCH={false}/>
    <MainDiv>
      <ContainerDiv>
        <Title>Contact Me</Title>
        You may find me on linkedin or github with the username "zhileiz". Also, you may shoot me an email at zhileiz@seas.upenn.edu, or send me a direct message below:
        <ContactComponent/>
      </ContainerDiv>
    </MainDiv>
  </ContentDiv>
)

export default ContactPage

export const query = graphql`
  query contactQuery {
    site {
      siteMetadata {
        title,
        desc,
        info {
          name
          title
          titleLink
          titleLinkURL
          title2
          title2Link
          title2LinkURL
          intro
          links {
            github
            linkedin
            email
            rss
          }
        }
      }
    }
    avatar: imageSharp(id: {regex: "/avatar.jpg/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`