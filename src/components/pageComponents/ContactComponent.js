import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import './material/materialize.css'

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
        margin-top: 1.5rem;
    }
    .submitter {
        padding: 15px 0px;
        border: none;
        background: none;
        font-weight: 500;
        font-size: 1rem;
        color: #666666;
    }
    .submitter:hover {
        color: #26a69a;
    }
    .centerizer {
        width: 100%;
        text-align: center;
    }
`;

const ContactComponent = ({post}) => (
    <div>
        <FormDiv action="https://formspree.io/zheng.zhilei@hotmail.com" method="POST">
            <div className="formInnerLine">
                <div className="nameLine">
                    <label>Your Name:</label>
                    <input type="text" name="NAME" required/> <br/>
                </div>
                <div className="emailLine">
                    <label>Your Email:</label>
                    <input type="email" name="_replyto" required/><br/>
                </div>
            </div>
            <div>
                <label>What is your topic today?</label>
                <input type="text" name="TOPIC" required/><br/>
            </div>
            <div>
                <label>Your Message</label>
                <input type="text" name="CONTENT" required/><br/>
            </div>
            <div className="centerizer">
                <input type="submit" value="Send" className="submitter"/>
            </div>
        </FormDiv>
    </div>
)

export default ContactComponent