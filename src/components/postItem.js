import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import box from '../images/box.svg'
import pencil from '../images/pencil.svg'

const Title = styled.div`
  a {
    h3 {
      font-family: 'Chivo', 'Hans';
      font-size: 20px;
      margin: 0px;
    }
    color: black;
    text-decoration: none;
  }
  margin-bottom: 5px;
`

const Excerpt = styled.div`
  p {
    font-family: 'Muli', 'Hans';
    font-size: 15px;
  }
  a {
    font-family: 'Muli', 'Hans';
    font-size: 15px;
    color: black;
    font-weight: 900;
  }
`;

const MetaArea = styled.div`
  margin-bottom: 5px;
  font-family: 'Muli', 'Hans';
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    margin: 0px;
    margin-right: 3px;
  }
`

const CategoryInfo = styled.div`
  margin-right: 5px;
`

const PostItem = ({post}) => (
  <div>
    <Title>
      <Link to={post.frontmatter.link}>
        <h3>{post.frontmatter.title}</h3>
      </Link>
    </Title>
    <MetaArea>
      <div>
        Updated at {post.frontmatter.date}
      </div>
      <CategoryInfo>
        <img src={box} width="10"/>
        {post.frontmatter.category}
      </CategoryInfo>
    </MetaArea>
    <Excerpt>
      <p>{post.frontmatter.summary}<Link to={post.frontmatter.link}>MORE</Link></p>
    </Excerpt>
  </div>
)

export default PostItem