import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const MasonryContentWrapper = styled.div`
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  padding: 5px;
`

const MasonryContentBody = styled.div`
  padding: 10px;
`

export const MasonryLayout = styled.div`
  width: 100%;
  column-count: 3;
  -webkit-column-count: 3;
  column-gap: 0;
  -webkit-column-gap: 0;
`

const ImgWrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

export const MasonryImg = ({imgInfo}) => (
  <MasonryContentWrapper>
    <MasonryContentBody>
      <ImgWrapper>
        <Img style={{width: '100%'}} sizes={imgInfo.sizes}/>           
      </ImgWrapper>
    </MasonryContentBody>
  </MasonryContentWrapper>
)

var start = new Date("June 27, 2017");
var now = new Date();

const numberOfDaysSince = (date) => (
    Math.round((now-start)/(1000*60*60*24)) - 1
)

const CounterDiv = styled.div`
    padding: 1.5rem;
    font-family: "Chivo";
    text-align: center;
    width: 100%;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    h3 {
        margin: 0px;
        margin-bottom: 6px;
        color: #333;
    }
    color: #aaa;
`

const CountSpan = styled.span`
    color: crimson;
`

export const MasonryCounter = () => (
  <MasonryContentWrapper>
    <MasonryContentBody>
      <CounterDiv>
          <h3><CountSpan>{numberOfDaysSince()}</CountSpan> days ago</h3>
          He asked, she said yes... ❤️
      </CounterDiv>
    </MasonryContentBody>
  </MasonryContentWrapper>
)
