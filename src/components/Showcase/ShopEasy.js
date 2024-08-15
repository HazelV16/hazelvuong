import React from 'react';
import {Col, Divider, Row} from "antd";

const ShopEasy = () => (
    <>
        <div
            style={{
                border: 1,
                borderColor: "black",
                borderRadius: 1,
                alignItems: "center",
                height: "50px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                margin: '10px',
                backgroundColor: '#D3D3D3',
            }}>
            Project overview
        </div>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Background</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                This is a <i style={{color:'deeppink'}}>personal project</i> implementing Razor Page for my web development journey.
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Project Objectives</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                Developing an e-commerce website called "ShopEasy" using ASP.NET Core Razor Pages.
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>System requirements</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                The website will allow users to:
                <ol>
                    <li>View product list</li>
                    <li>View product details.</li>
                    <li>Add products to a shopping cart.</li>
                    <li>Proceed to checkout (Not integrated with online payment).</li>
                </ol>
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Technologies and Tools used</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                <ul>
                    <li>ASP.NET Core Razor Pages</li>
                    <li>C#</li>
                    <li>JetBrains Rider</li>
                </ul>
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Source Code</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={17} style={{color: 'red',}}>
                <a href="https://github.com/HazelV16/ShopEasy" target="_blank" style={{ textDecoration: 'none' }}>Go to GitHub</a>
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Final Product Demo</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={17}>
                <video width="100%" height="auto" controls>
                    <source src={`${process.env.PUBLIC_URL}/Showcase/ShopEasyDemo.mov`} type="video/mp4"/>
                </video>
            </Col>
        </Row>
    </>
)
export default ShopEasy;