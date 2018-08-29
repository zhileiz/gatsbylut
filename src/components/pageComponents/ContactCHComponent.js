import React from 'react'
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

const ContactCHComponent = ({post}) => (
    <div>
        <FormDiv action="https://formspree.io/zheng.zhilei@hotmail.com" method="POST">
            <div className="formInnerLine">
                <div className="nameLine">
                    <label>您的姓名:</label>
                    <input type="text" name="EMAIL" required/> <br/>
                </div>
                <div className="emailLine">
                    <label>您的邮箱:</label>
                    <input type="email" name="_replyto" required/><br/>
                </div>
            </div>
            <div>
                <label>信息主题:</label>
                <input type="text" name="TOPIC" required/><br/>
            </div>
            <div>
                <label>您的信息:</label>
                <input type="text" name="CONTENT" required/><br/>
            </div>
            <div className="centerizer">
                <input type="submit" value="发送" className="submitter"/>
            </div>
        </FormDiv>
    </div>
)

export default ContactCHComponent