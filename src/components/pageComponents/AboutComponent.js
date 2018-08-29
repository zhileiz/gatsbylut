import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Title = styled.h3`
    font-family: 'Chivo', 'Hans';
    font-size: 20px;
    margin: 0px;
    margin-bottom: 0.8rem;
    margin-top: 0.8rem;
    color: black;
`

const List = styled.ul`
  li {
    margin-bottom: 0.3rem;
    margin-top: 0rem;
  }
  margin-bottom: 1.2rem;
`

const ExpTitle = styled.h4`
  font-family: 'Chivo', 'Hans';
  font-size: 15px;
  margin: 0px;
  margin-bottom: 0.8rem;
  margin-top: 0.8rem;
  color: black;
`


export const AboutComponent = ({post}) => (
  <div>
    <Title>Currently</Title>
    <List>
      <li>Junior at University of Pennsylvania studying CIS/NETS</li>
      <li>Teaching Assistant for UPenn CIS-196: Ruby on Rails</li>
      <li>Software Engineer at Pennlabs</li>
    </List>
    <Title>Skills</Title>
    <List>
      <li>iOS app development with Swift / Objective-C</li>
      <li>Web development with Ruby and JavaScript</li>
      <li>Other language skills: Java, Python, C</li>
      <li>Other skills: Prototyping with Sketch and InvisionApp</li>
    </List>
    <Title>Exprience</Title>
    <ExpTitle>RED City (Xiaohongshu) · Mobile Engineer · 2018.5 - 2018.8</ExpTitle>
    <List>
      <li>Implemented homepage feed UI with Texture(AsyncDisplayKit) for iOS</li>
      <li>Optimized image preloading and managed image decoding operations by reimplementing Texture's ASImageDownloaderProtocol.</li>
      <li>Optimized feed scrolling performance for Android by replacing TextViews with asynchronously rendered StaticLayouts.</li>
      <li>Built gesture-aware animations for scrolling events, and raised global engagement and by 2%.</li>
    </List>
    <ExpTitle>China Unicom · Frontend/Data Engineer · 2017.5 - 2017.8</ExpTitle>
    <List>
      <li>Built a real-time city population analytics dashboard with JavaScript.</li>
      <li>Created a heatmap by projecting 1km * 1km grids onto the map and assign colors based on real-time data.</li>
      <li>Implemented various charts for data visualization with D3.js</li>
      <li>Used Ajax to fetch data and refresh heatmap and graphs every 1 minute.</li>
    </List>
  </div>
)

export default AboutComponent