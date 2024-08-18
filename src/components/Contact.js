import React from 'react';
import {Divider, Layout, theme} from "antd";
const { Content} = Layout;

const Contact = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Content
                style={{
                    padding: '0 48px',
                    margin: '50px',
                }}>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <Divider orientation="left" style={{fontSize: '30px'}}>Contact</Divider>
                    <div style={{marginLeft: '82px', marginBottom: '20px'}}>If you want to discuss more, please contact
                        me via
                    </div>
                    <div style={{marginLeft: "100px"}}>
                        <ul>
                            <li style={{marginBottom: '15px'}}>
                                Email: <a href="mailto:hazelvuong@gmail.com" target="_blank"  rel="noreferrer"
                                          style={{textDecoration: 'none'}}>hazelvuong@gmail.com</a>
                            </li>
                            <li>
                                LinkedIn: <a href="https://www.linkedin.com/in/hazel-v-b74863212/" target="_blank"  rel="noreferrer"
                                             style={{textDecoration: 'none'}}>Hazel Vuong</a>
                            </li>
                        </ul>
                    </div>
                    <div style={{marginLeft: '82px', marginBottom: '20px'}}>
                        Thank you!!!
                    </div>
                </div>

            </Content>
        </Layout>
    )

};

export default Contact;
