import React from 'react';
import {Col, Divider, Row} from "antd";
const Skills = () => {
    return (
        <>
        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                <strong>Programming Languages</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                Python, Java, C#, HTML, CSS, JavaScript, RStudio
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }} />

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                <strong>Frameworks and Libraries</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                .NET, ReactJS, ExpressJS, Bootstrap, JUnit, Ant Design
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }} />

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                <strong>Database</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                MySQL, SQLite, SQL Server, MongoDB
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }} />

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                <strong>Tools</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={13}>
                GitHub, VS Code, Postman, ServiceNow, Node-Red, Jetbrains, Azure DevOps, MacOS
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }} />

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                <strong>Qualification</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                <a href="https://drive.google.com/file/d/1Hu6QuzDavtCocSIh53MR6TzpXCOJdIs6/view" target="_blank" style={{ textDecoration: 'none' }}>
                    ServiceNow Certified System Administrator
                </a>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                Issued January 2024
            </Col>
        </Row>


        </>
    )
};

export default Skills;