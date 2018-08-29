import React from 'react'
import styled from 'styled-components'

import Sidebar from '../components/sidebar/sidebar'
import {ContentDiv, MainDiv, ContainerDiv} from '../components/foundation'
import ContactCHComponent from '../components/pageComponents/ContactCHComponent'

const Title = styled.h3`
    font-family: 'Chivo', 'Hans';
    font-size: 20px;
    margin: 0px;
    margin-bottom: 0.8rem;
    margin-top: 0.8rem;
    color: black;
`

const ContactCHPage = ({data}) => (
  <ContentDiv>
    <Sidebar avatar={data.avatar} info={data.site.siteMetadata.chInfo} activeTab="/contact-ch" isCH={true}/>
    <MainDiv>
      <ContainerDiv>
        <Title>与我联系</Title>
        您可通过领英或github搜索用户名“zhileiz”找到我. 您也可以编辑邮件发送至 zhileiz@seas.upenn.edu, 或通过以下的表单向我发送信息:
        <ContactCHComponent/>
      </ContainerDiv>
    </MainDiv>
  </ContentDiv>
)

export default ContactCHPage

export const query = graphql`
  query contactCHQuery {
    site {
      siteMetadata {
        title,
        desc,
        chInfo {
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