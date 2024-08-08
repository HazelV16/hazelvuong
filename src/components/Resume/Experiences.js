import React from 'react';
import {Col, Divider, Row} from "antd";
import {Link} from "react-router-dom";
const Experiences = () => {
    const rowStyle = {
        // margin: '0px',
    };
    return (
        <>
            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                    <strong>July 2023 - July 2024</strong>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                    Academic staff for Database Modelling and Information Management topic at <a href="https://www.flinders.edu.au/" target="_blank" style={{ textDecoration: 'none' }}>Flinders University</a>
                </Col>
            </Row>

            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                    <ul>
                        <li>Delivered computer lab materials to undergraduate and graduate-level</li>
                        <li>Provided and supervised students in database projects</li>
                        <li>Conducted weekly review sessions, clarifying doubts, and reinforcing classroom lessons (up to 20 students per class). </li>
                    </ul>
                </Col>
            </Row>

            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                    <strong>Achievement:</strong>
                </Col>
            </Row>

            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                    <ul>
                        <li>Received consistently positive feedback from students for clarity in explanations and patience in guiding them through topics</li>
                    </ul>
                </Col>
            </Row>

            <Divider style={{
                margin: '15px',
            }} />

            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                    <strong>July 2022 - July 2024</strong>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                    Full-time student at Flinders University at <a href="https://www.flinders.edu.au/" target="_blank" style={{ textDecoration: 'none' }}>Flinders University</a>
                </Col>
            </Row>

            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={15} style={{marginTop:'10px'}}>
                    <strong>Achievement:</strong>
                </Col>
            </Row>

            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                    <ul>
                        <li>Chancellor’s Letter of Commendation for excellent academic performance</li>
                        <li>All my projects got High Distinction mark. Project details are on the <Link to="/Showcase" style={{ textDecoration: 'none' }}>SHOWCASE</Link> tab.</li>
                    </ul>
                </Col>
            </Row>

            <Divider style={{
                margin: '15px',
            }} />

            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                    <strong>February - May 2023</strong>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                    NextGen program extern at <a href="https://www.servicenow.com/au/company/global-impact/social/digital-readiness/nextgen.html" target="_blank" style={{ textDecoration: 'none' }}>ServiceNow</a>
                </Col>
            </Row>

            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                    <ul>
                        <li>Experience with ServiceNow development tools, including Studio, Automated Test Framework (ATF), Flow design, scripting, configuration, ITSM, and Service Portal and ServiceNow platform and its modules, including Incident, Problem, Change, and Service Catalog.</li>
                    </ul>
                </Col>
            </Row>

            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={15} style={{marginTop:'10px'}}>
                    <strong>Achievement:</strong>
                </Col>
            </Row>

            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                    <ul>
                        <li>Developed a ServiceNow app that automates the incident management process by creating incidents from emails and assigning them to appropriate support groups based on keywords and categories.</li>
                        <li>Implemented a self-service portal on ServiceNow platform that allows employees to submit service requests and track their status in real-time.</li>
                    </ul>
                </Col>
            </Row>


        </>
    )
}
export default Experiences;