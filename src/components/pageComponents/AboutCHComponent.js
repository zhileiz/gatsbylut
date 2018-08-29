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

export const AboutCHComponent = ({post}) => (
    <div>
      <Title>目前状况</Title>
      <List>
        <li>美国宾夕法尼亚大学<a href="https://www.nets.upenn.edu/">网络系统工程专业</a>大三学生</li>
        <li>宾大<a href="https://www.seas.upenn.edu/~cis196/">CIS-196</a>：Ruby后端开发课程助教</li>
        <li><a href="https://pennlabs.org/">Pennlabs</a>软件开发组iOS工程师</li>
      </List>
      <Title>技术能力</Title>
      <List>
        <li>用Swift / Objective-C开发iOS App</li>
        <li>用Ruby和JavaScript开发网页后端和前端</li>
        <li>其他语言擅长还有: Java, Python, C</li>
        <li>其他技能: 用Sketc和InvisionApp开发App原型</li>
      </List>
      <Title>过往经历</Title>
      <ExpTitle>小红书 · 移动开发工程师 · 2018.5 - 2018.8</ExpTitle>
      <List>
        <li>用Texture(AsyncDisplayKit)重写小红书首页Feed流UI</li>
        <li>重新实现Texture中ASImageDownloaderProtocol以统一管理后台图片解码任务，优化Feed流图片预加载</li>
        <li>用异步渲染的StaticLayout代替TextView优化安卓Feed流滑动性能</li>
        <li>重写与滑动手势有关的UI动画，结果提升全局engagement达2个百分点</li>
      </List>
      <ExpTitle>中国联通上海大数据中心 · 前端工程师 · 2017.5 - 2017.8</ExpTitle>
      <List>
        <li>负责为⼤数据中⼼“海豚”实时⼈⼝分析项⽬编写前端JavaScript</li>
        <li>为上海市划定1公⾥ x 1公⾥的栅格，使其根据数据上色，已实现人口热力图</li>
        <li>⽤D3.js绘制各式数据展示图标。</li>
        <li>⽤Ajax每分钟调取后端实时⼈⼝数据，并刷新⻚⾯热⼒图和各统计图标。</li>
        <li>⽤JQuery开发前端交互操作，实现区县选择、拖拽选区等业务常⽤操作。</li>
      </List>
    </div>
  )

export default AboutCHComponent