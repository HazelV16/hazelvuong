import React from 'react';
import {Col, Divider, Row} from "antd";
const Certificates = () => {
    return (
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
                    <a href="https://drive.google.com/file/d/1Hu6QuzDavtCocSIh53MR6TzpXCOJdIs6/view" target="_blank"
                       style={{textDecoration: 'none'}}>
                        ServiceNow Certified System Administrator
                    </a>
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
                    Issued in January 2024
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
                    <a href="https://www.credly.com/badges/96ff5142-e799-4570-9637-29d915743362/public_url"
                       target="_blank" style={{textDecoration: 'none'}}>
                        CyberOps Associate Issued by Cisco
                    </a>
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
                    Issued in November 2022
                </Col>
            </Row>
        </>
    )
}

export default Certificates;