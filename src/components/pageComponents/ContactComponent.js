import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import './material/materialize.css'
import './material/materialize.js'

const FormDiv = styled.form`
    .formInnerLine {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        .nameLine {
            width: 30%;
        }
        .emailLine {
            width: 65%;
        }
    }
    .submitter {
        padding: 10px 0px;
        border: none;
        background: none;
        font-size: 20px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: 500;
        color: #666666;
    }
    .submitter:hover {
        color: #26a69a;
    }
`;

const ContactComponent = ({post}) => (
    <div>
        <FormDiv action="https://formspree.io/zheng.zhilei@hotmail.com" method="POST">
            <div className="formInnerLine">
                <div className="nameLine">
                    <label>Your Name:</label>
                    <input type="text" name="name" required/> <br/>
                </div>
                <div className="emailLine">
                    <label>Your Email:</label>
                    <input type="email" name="_replyto" required/><br/>
                </div>
            </div>
            <div>
                <label>What is your topic today?</label>
                <input type="text" name="_replyto" required/><br/>
            </div>
            <div>
                <label>Your Message</label>
                <input type="text" name="_replyto" required/><br/>
            </div>
            <input type="submit" value="Send" className="submitter"/>
        </FormDiv>
    </div>
)

export default ContactComponent