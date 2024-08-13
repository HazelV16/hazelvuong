import React from 'react';
import {Anchor, Col, Divider, Layout, Row, theme, FloatButton} from "antd";
import Educations from "./Educations";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Certificates from "./Certificates";
import styled from "styled-components";
const { Content} = Layout;
const CustomAnchor = styled(Anchor)`
    .ant-anchor-link-title {
        text-decoration: none;
    }
`;
const Resume = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Content
                style={{
                    height: '90%',
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
                    <Row>
                        {/*<Col flex="100px">*/}
                        <Col span={4}>
                            <CustomAnchor
                                // affix={false}
                                // onChange={onChange}
                                replace
                                items={[
                                    {
                                        key: 'resume',
                                        href: '#resume',
                                        title: 'RESUME',
                                    },
                                    {
                                        key: 'educations',
                                        href: '#educations',
                                        title: 'EDUCATIONS',
                                    },
                                    {
                                        key: 'skills',
                                        href: '#skills',
                                        title: 'SKILLS',
                                    },
                                    {
                                        key: 'experiences',
                                        href: '#experiences',
                                        title: 'EXPERIENCES',
                                    },
                                    {
                                        key: 'certificates',
                                        href: '#certificates',
                                        title: 'CERTIFICATES',
                                    },
                                ]}
                            />
                        </Col>
                        <Col span={20}>
                            <Divider orientation="left" style={{fontSize: 30}}>RESUME</Divider>
                            <a href="/Hazel_Vuong_CV.pdf" download className="resume-download-link" id="resume"
                               style={{textDecoration: 'none', fontSize: 25}}>
                                Download PDF file of Resume
                            </a>

                            <div
                                id="educations"
                                style={{
                                    border: 1,
                                    borderColor: "black",
                                    borderStyle: "dashed",
                                    borderRadius: 1,
                                    alignItems: "center",
                                    height: "50px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    justifyContent: "center",
                                    margin: '10px',
                                }}>
                                EDUCATIONS
                            </div>
                            <Educations/>

                            <div
                                id="skills"
                                style={{
                                    border: 1,
                                    borderColor: "black",
                                    borderStyle: "dashed",
                                    borderRadius: 1,
                                    alignItems: "center",
                                    height: "50px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    justifyContent: "center",
                                    margin: '10px',
                                }}>
                                SKILLS
                            </div>
                            <Skills/>

                            <div
                                id="experiences"
                                style={{
                                    border: 1,
                                    borderColor: "black",
                                    borderStyle: "dashed",
                                    borderRadius: 1,
                                    alignItems: "center",
                                    height: "50px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    justifyContent: "center",
                                    margin: '10px',
                                }}>
                                EXPERIENCES
                            </div>
                            <Experiences/>

                            <div
                                id="certificates"
                                style={{
                                    border: 1,
                                    borderColor: "black",
                                    borderStyle: "dashed",
                                    borderRadius: 1,
                                    alignItems: "center",
                                    height: "50px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    justifyContent: "center",
                                    margin: '10px',
                                }}>
                                CERTIFICATES
                            </div>
                            <Certificates/>
                        </Col>
                    </Row>
                </div>
            </Content>
            <FloatButton.BackTop visibilityHeight={0} />
        </Layout>

    )
};

export default Resume;
