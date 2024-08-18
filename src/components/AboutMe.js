import React, {useEffect, useState} from 'react';
import {Layout, theme, Col, Divider, Row} from "antd";
import {Link} from "react-router-dom";
const { Content} = Layout;
const pictures = [
    process.env.PUBLIC_URL + "/AboutMe1.JPG",
    process.env.PUBLIC_URL + "/AboutMe2.png",
];

const getRandomPicture = () => {
    const randomIndex = Math.floor(Math.random() * pictures.length);
    return pictures[randomIndex];
};

const AboutMe = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [randomPicture, setRandomPicture] = useState(getRandomPicture());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setRandomPicture(getRandomPicture());
        }, 6000); // Change picture every 60 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <Layout>
            <Content
                style={{
                    padding: '0 48px',
                    margin: '50px',
                }}
            >
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {/*Content*/}
                    <Divider orientation="left">A bit about myself</Divider>
                    <Row>
                        <Col span={13}>
                            <h3>Hi,</h3>
                            <div>
                                My name is Hazel Vuong. I am currently located in Adelaide, South Australia.
                            </div>
                            <div style={{height: '20px'}}/>
                            <div>
                                As a new graduate of Master of IT degree from Flinders University. I have prepared
                                myself for the market since my first year of the degree.
                                I have experience as an <strong>Academic staff in Database</strong> topic, and
                                an <strong>extern at ServiceNow</strong> in Australia.
                                Eventually, I find my <strong>passion for software development</strong>. During my
                                master course and spare time,
                                I have created several small projects to satisfy the topic requirements and my love for
                                software development.
                            </div>
                            <div style={{height: '20px'}}/>
                            <div>
                                I have not yet understood any programming languages deeply due to lack of experience
                                within field.
                                However, I have been exposed to various programming languages, such as <strong>Java, C#,
                                Python, HTML, CSS, JavaScript</strong>,etc.
                                While studying different programming languages, I realised I could learn coding
                                languages quite quickly to meet the project requirements.
                                Normally, I spend around a week getting used to the fundamentals of a new language and
                                another week adapting it to meet the needs of my project.
                                Additionally, I can spend hours designing, coding, debugging, and observing the results
                                without getting bored.
                            </div>
                            <div style={{height: '20px'}}/>
                            <div>
                                The details of my developed projects are on the <Link to="/Showcase" style={{ textDecoration: 'none' }}>SHOWCASE</Link> tab.
                            </div>
                        </Col>
                        <Col xs={2} sm={6} md={9} lg={8} xl={2}>
                        </Col>
                        <Col span={4}>
                            <img src={randomPicture} alt="Random" style={{width: '200%', height: 'auto'}}/>
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    );
};

export default AboutMe;
