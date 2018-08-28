import styled from 'styled-components'
import { css } from 'styled-components'

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  ${media.tablet`
    display: block;
  `}
`;

export const MainDiv = styled.div`
  width: 70%;
  ${media.tablet`
    width: 100%;
  `}
`;

export const ContainerDiv = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 50px;
  font-family: 'Muli', 'Hans';
  font-size: 15px;
`;

export const Title = styled.div`
  font-size: 20px;
  margin-top: 20px;
  font-family: Chivo, 'Hans';
  font-weight: 900;
  margin-bottom: 15px;
`

export const Subtitle = styled.div`
  font-size: 15px;
  font-family: Chivo, 'Hans';
  a {
    color: #666;
  }
`

export const Intro = styled.div`
  margin-top: 20px;
  padding-left: 0px;
  font-family: "Muli", 'Hans';
  font-size: 14px;
`