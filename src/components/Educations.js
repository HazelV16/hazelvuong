import React from 'react';
import {Col, Divider, Row} from 'antd';
const Educations = () => (
    <>
    <Row>
        <Col
            xs={{
                span: 5,
                offset: 1,
            }}
            lg={{
                span: 10,
                offset: 0,
            }}
            style={{
                flexWrap: 'wrap',
                fontWeight: 'bold',
            }}
        >
            Master of Information Technology at <i>Flinders University </i>
        </Col>
        <Col
            xs={{
                span: 11,
                offset: 1,
            }}
            lg={{
                span: 4,
                offset: 2,
            }}

        >
            GPA: <strong>6.8</strong>/7.0
        </Col>
        <Col
            xs={{
                span: 5,
                offset: 1,
            }}
            lg={{
                span: 6,
                offset: 2,
            }}
        >
            July 2022 - July 2024
        </Col>
    </Row>

    <Divider style={{
        margin: '15px',
    }} />

    <Row>
        <Col
            xs={{
                span: 5,
                offset: 1,
            }}
            lg={{
                span: 10,
                offset: 0,
            }}
            style={{
                flexWrap: 'wrap',
                fontWeight: 'bold',
            }}
        >
            Bachelor of Business (Information System) at <i>RMIT University</i>
        </Col>
        <Col
            xs={{
                span: 11,
                offset: 1,
            }}
            lg={{
                span: 4,
                offset: 2,
            }}

        >
            GPA: <strong>3.4</strong>/4.0
        </Col>
        <Col
            xs={{
                span: 5,
                offset: 1,
            }}
            lg={{
                span: 6,
                offset: 2,
            }}
        >
            July 2019 - July 2022
        </Col>
    </Row>
    </>
);
export default Educations;