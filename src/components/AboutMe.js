import React from 'react';
import {Layout, theme, Col, Divider, Row} from "antd";
const { Content} = Layout;


const AboutMe = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
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
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                            Col
                        </Col>
                        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                            Col
                        </Col>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                            Col
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    );
};

export default AboutMe;
