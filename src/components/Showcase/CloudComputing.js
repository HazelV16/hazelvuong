import React from 'react';
import {Col, Divider, Row} from "antd";

const CloudComputing = () => (
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
                This is a project under the "Cloud Computing" topic in my master's course.
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }} />

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Project Objectives</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                Use Node-RED and various cloud services to develop a Tourism Application.
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row justify="start">
            <Col xs={2} sm={4} md={6} lg={8} xl={4} style={{marginLeft: '30px'}}><strong>Team Size</strong></Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={5} style={{marginLeft: '30px'}}>5 people</Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={3} style={{marginLeft: '30px'}}><strong>Duration</strong></Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={8} style={{marginLeft: '30px'}}>8 weeks (Effort: ~10h / week / person)</Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Scope of Work</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                Develop a tourism website to enhance user visit's planning
                <ul>
                    <li>Node-RED Editor allowing administrators to modify the system's source code</li>
                    <li>Client side allowing users to view tour package, weather, etc</li>
                    <li>Feedback from clients will be sent to admin team via email</li>
                </ul>
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>System main features</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                <ol>
                    <li>Tour packages</li>
                    <li>IBM Watson Chatbot</li>
                    <li>Currency Conversion</li>
                    <li>Weather conditions</li>
                    <li>Destination Reviews</li>
                    <li>Contact form</li>
                </ol>
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Technologies and Tools Used</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                <ul>
                    <li>HTML, Bootstrap</li>
                    <li>IBM Watson Assistant</li>
                    <li>Node-RED (flow-based programming tool) and its palette</li>
                    <li>Google Cloud</li>
                    <li>Cloud API Services: OpenWeatherMapAPI, REST countries API, Google Map API, etc</li>
                </ul>
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Application Overview</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                <img src={`${process.env.PUBLIC_URL}/Showcase/Cloud/ApplicationOverview.png`} alt="Application Overview"
                     style={{width: '70%', height: 'auto'}}/>
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>My Contribution</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={17}>
                I was a key player from idea to implementation:
                <ul>
                    <li>Propose ideas and outline system requirements</li>
                    <li>Plan and manage project progress</li>
                    <li>Support other team members in implementing their parts</li>
                    <li>Integrate the whole system</li>
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
                Cannot be made public due to the integrity
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
                    <source src={`${process.env.PUBLIC_URL}/Showcase/Cloud/SEATourism.mp4`} type="video/mp4"/>
                </video>
            </Col>
        </Row>

    </>
)
export default CloudComputing;