import React from 'react';
import {Col, Divider, Row} from "antd";

const PersonalPortfolio = () => (
    <>
        <div
            style={{
                border: 1,
                borderColor: "black",
                // borderStyle: "dashed",
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
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                This is my project to build an online portfolio website for myself
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }} />

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Technologies</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                ReactJS (due to my preference)
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }} />

        <Row>
            <Col xs={20} sm={40} md={60} lg={80} xl={6} style={{marginLeft: '30px'}}>
                <strong>Tools Used</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <ul>
                    <li>WebStorm</li>
                    <li>Git</li>
                    <li>Ant Design</li>
                </ul>
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }} />

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Source Code</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <a href="https://github.com/HazelV16/hazelvuong" target="_blank" style={{ textDecoration: 'none' }}>Go to GitHub</a>
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }} />

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Final Product</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <a>Fill in later</a>
            </Col>
        </Row>
    </>
)
export default PersonalPortfolio