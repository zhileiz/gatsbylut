import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ContactComponent = ({post}) => (
    <form action="https://formspree.io/zheng.zhilei@hotmail.com" method="POST">
        <label>Name:</label>
        <input type="text" name="name"/> <br/>
        <label>Email:</label>
        <input type="email" name="_replyto"/><br/>
        <input type="submit" value="Send"/>
    </form>
)

export default ContactComponent