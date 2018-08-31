import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

require("prismjs/themes/prism.css");
require(`katex/dist/katex.min.css`)

const Title = styled.h1`
  font-family: "Chivo", 'Hans';
  width: 100%;
  text-align: center;
  margin-top: 60px;
`;

const MetaInfo = styled.div`
  max-width: 70%;
  text-align: center;
  display: inline-block;
  h5 {
    font-family: "Muli", 'Hans';
    color: #999;
  }
`

const Markdown = styled.div`
  text-align: left;
  h1,h2,h3,h4,h5,h6 {
    font-family: "Chivo", 'Hans';
    margin-top: 1.45rem;
  }
  ul, ol {
    margin-left: 2rem;
    li {
      padding-left: 0.45rem;
    }
  }
  p, li {
    font-family: "Muli", 'Hans';
    margin-bottom: 0.5rem;
    line-height: 1.5;
    a {
      transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
      border-bottom: 1px solid #e0d6eb;
      box-shadow: inset 0 -2px 0px 0px #e0d6eb;
      text-decoration: none;
      font-weight: 900;
      color: black;
    }
    a:hover {
      background: #e0d6eb;
    }
  }
  .gatsby-resp-image-wrapper {
    margin: 2rem;
  }
  img {
    margin: 2rem;
  }
  blockquote {
    color: #999;
    p {
      font-family: "Chivo", 'Hans';
    }
    border-left: 3px solid #ccc;
    padding: 1rem;
    margin: 0.45rem;
    margin-top: 0rem;
    padding-top: 0.1rem;
    padding-bottom: 0.3rem;
  }
`

const EndLine = styled.div`
  margin-top: 60px;
  margin-bottom: 100px;
  width: 300px;
  height: 10px;
  border-top: 5px solid black;
  display: inline-block;
`

const BackButton = styled.div`
  position: fixed;
  left: 30px;
  bottom: 30px;
  a {
    font-family: 'Chivo', 'Hans';
    font-size: 20px;
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: #26a69a;
  }
`

const getBackPage = (lang) => {
  if (lang === 'en') {
    return "/"
  } else {
    return "/ch"
  }
}

export default class PostPage extends Component {
  render() {
    const {data} = this.props;
    return (
      <div style={{maxWidth: '1024px', margin: 'auto'}}>
        <div style= {{textAlign: 'center', width: '90%', margin: 'auto'}}>
          <Title>{data.markdownRemark.frontmatter.title}</Title>
          <MetaInfo>
            <h5>Updated at {data.markdownRemark.frontmatter.date}</h5>
          </MetaInfo>
          <Markdown dangerouslySetInnerHTML = {{__html: data.markdownRemark.html}}></Markdown>
          <EndLine></EndLine>
        </div>
        <BackButton><a href={getBackPage(data.markdownRemark.frontmatter.lang)}>Back</a></BackButton>
      </div>
    )
  }
}

export const query = graphql`
  query PostQuery($link: String!) {
    markdownRemark(frontmatter:{
      link: {
        eq: $link
      }
    }){
      html
      frontmatter{
        summary
        title
        lang
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
