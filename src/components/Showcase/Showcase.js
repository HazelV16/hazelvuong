import React from 'react';
import {Anchor, Col, Divider, Layout, Row, theme} from 'antd';
import styled from 'styled-components';
import PersonalPortfolio from "./PersonalPortfolio";
import DevOps from "./DevOps";
import CloudComputing from "./CloudComputing";
const { Content} = Layout;
const onChange = (link) => {
    console.log('Anchor:OnChange', link);
};
const CustomAnchor = styled(Anchor)`
    .ant-anchor-link-title {
        text-decoration: none;
    }
`;
const Showcase = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Content
                style={{
                    padding: '0 48px',
                    margin: '20px',
                }}>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <Row>
                        <Col span={4}>
                            <CustomAnchor
                                replace
                                items={[
                                    {
                                        key: 'personal-portfolio',
                                        href: '#personal-portfolio',
                                        title: 'Personal Portfolio Project',
                                    },
                                    {
                                        key: 'devOps',
                                        href: '#devOps',
                                        title: 'DevOps Project',
                                    },
                                    {
                                        key: 'cloud',
                                        href: '#cloud',
                                        title: 'Cloud Computing Project',
                                        // children: [
                                        //     {
                                        //         key: '4',
                                        //         href: '#anchor-props',
                                        //         title: 'Anchor Props',
                                        //     },
                                        //     {
                                        //         key: '5',
                                        //         href: '#link-props',
                                        //         title: 'Link Props',
                                        //     },
                                        // ],
                                    },
                                ]}
                            />
                        </Col>
                        <Col span={20}>
                            <Divider orientation="left" style={{fontSize: 30}}>Details of projects I have
                                implemented</Divider>
                            <div
                                id="personal-portfolio"
                                style={{
                                    alignItems: "center",
                                    display: "flex",
                                    fontSize: 20,
                                    color: "#3366cc",
                                    margin: '10px',
                                }}>
                                Personal portfolio project
                            </div>
                            <PersonalPortfolio/>

                            <div
                                id="devOps"
                                style={{
                                    alignItems: "center",
                                    display: "flex",
                                    fontSize: 20,
                                    color: "#3366cc",
                                    margin: '10px',
                                    marginTop: '50px',
                                }}>
                                DevOps project
                            </div>
                            <DevOps/>

                            <div
                                id="cloud"
                                style={{
                                    alignItems: "center",
                                    display: "flex",
                                    fontSize: 20,
                                    color: "#3366cc",
                                    margin: '10px',
                                    marginTop: '50px',
                                }}>
                                Cloud Computing project
                            </div>
                            <CloudComputing/>

                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    )
};
export default Showcase;