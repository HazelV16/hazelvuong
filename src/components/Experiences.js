import React from 'react';
import {Col, Row} from "antd";
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
                <Col xs={2} sm={4} md={6} lg={8} xl={15} style={{margin:'5px'}}>
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
                <Col xs={2} sm={4} md={6} lg={8} xl={15} style={{margin:'5px'}}>
                    <ul>
                        <li>Received consistently positive feedback from students for clarity in explanations and patience in guiding them through topics</li>
                    </ul>
                </Col>
            </Row>

        </>
    )
}
export default Experiences;