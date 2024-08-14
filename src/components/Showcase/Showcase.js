import React, {useEffect, useState} from 'react';
import {Anchor, Col, Divider, FloatButton, Layout, Row, theme} from 'antd';
import styled from 'styled-components';
import PersonalPortfolio from "./PersonalPortfolio";
import DevOps from "./DevOps";
import CloudComputing from "./CloudComputing";
import DataAnalysis from "./DataAnalysis";
import Testing from "./Testing";
import {Link} from "react-router-dom";
import ShopEasy from "./ShopEasy";
import QuizApp from "./QuizApp";
import WeatherToDo from "./WeatherToDo";
const { Content} = Layout;


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
                    marginTop:'40px',
                }}>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <Row>
                        <Col span={4} style={{position:'fixed',}}>
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
                                    {
                                        key: 'dataAnalysis',
                                        href: '#dataAnalysis',
                                        title: 'Data Analysis Project',
                                    },
                                    {
                                        key: 'unitTesting',
                                        href: '#unitTesting',
                                        title: 'Unit Testing Project',
                                    },
                                    {
                                        key: '',
                                        href: '#',
                                        title: 'Additional Personal Project',

                                        children: [
                                            {
                                                key: 'ShopEasy',
                                                href: '#ShopEasy',
                                                title: 'ShopEasy Application',
                                            },
                                            {
                                                key: 'QuizApp',
                                                href: '#QuizApp',
                                                title: 'QuizApp Application',
                                            },
                                            {
                                                key: 'WeatherToDo',
                                                href: '#WeatherToDo',
                                                title: 'Weather&ToDo Application',
                                            },
                                        ],
                                    },

                                ]}
                            />
                        </Col>
                        <Col span={20} style={{marginLeft: '200px'}}>
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

                            <div
                                id="dataAnalysis"
                                style={{
                                    alignItems: "center",
                                    display: "flex",
                                    fontSize: 20,
                                    color: "#3366cc",
                                    margin: '10px',
                                    marginTop: '50px',
                                }}>
                                Data Analysis project
                            </div>
                            <DataAnalysis/>

                            <div
                                id="unitTesting"
                                style={{
                                    alignItems: "center",
                                    display: "flex",
                                    fontSize: 20,
                                    color: "#3366cc",
                                    margin: '10px',
                                    marginTop: '50px',
                                }}>
                                Unit Testing project
                            </div>
                            <Testing/>

                            <div
                                id="ShopEasy"
                                style={{
                                    alignItems: "center",
                                    display: "flex",
                                    fontSize: 20,
                                    color: "#3366cc",
                                    margin: '10px',
                                    marginTop: '50px',
                                }}>
                                ShopEasy Application Project
                            </div>
                            <ShopEasy/>

                            <div
                                id="QuizApp"
                                style={{
                                    alignItems: "center",
                                    display: "flex",
                                    fontSize: 20,
                                    color: "#3366cc",
                                    margin: '10px',
                                    marginTop: '50px',
                                }}>
                                Simple QuizApp Project
                            </div>
                            <QuizApp/>

                            <div
                                id="WeatherToDo"
                                style={{
                                    alignItems: "center",
                                    display: "flex",
                                    fontSize: 20,
                                    color: "#3366cc",
                                    margin: '10px',
                                    marginTop: '50px',
                                }}>
                                Weather and To Do List Application
                            </div>
                            <WeatherToDo/>

                        </Col>
                    </Row>
                </div>
            </Content>
            <FloatButton.BackTop visibilityHeight={0}/>
        </Layout>
    )
};
export default Showcase;