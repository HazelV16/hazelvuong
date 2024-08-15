import React from 'react';
import {Col, Divider, Row} from "antd";

const Testing = () => (
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
                This is a project under the "Application Development" topic in my master's course.
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Project objectives</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                <ul>
                    <li>Develop a command line application that can parse data from a file including data from YouTube
                        API, process and find Trending Topics
                    </li>
                    <li>Perform JUnit Test for the project</li>
                </ul>
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row justify="start">
            <Col xs={2} sm={4} md={6} lg={8} xl={4} style={{marginLeft: '30px'}}><strong>Team Size</strong></Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={5} style={{marginLeft: '30px'}}>2 people</Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={3} style={{marginLeft: '30px'}}><strong>Duration</strong></Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={8} style={{marginLeft: '30px'}}>4 weeks (Effort: ~10h / week /
                person)</Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Technologies</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                Java, JUnit Test, SVN (subversion management tool)
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
                <ul>
                    <li>Contributed ideas for the solution</li>
                    <li>Developed a whole console application</li>
                    <li>Prepared test data</li>
                    <li>Write JUnit Test script</li>
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

        <div style={{fontSize: 15, color: '#8080ff', marginLeft: '30px'}}>Some pictures of the final result</div>

        <ul>
            <li style={{marginLeft: '30px', marginBottom: '20px', color: '#7a00cc'}}>
                Console application main menu
            </li>
            <img src={`${process.env.PUBLIC_URL}/Showcase/Testing/ConsoleOuput.png`} alt="Console application main menu"
                 style={{width: '50%', height: 'auto', marginLeft: '30px', marginBottom: '20px',}}/>
        </ul>

        <ul>
            <li style={{marginLeft: '30px', marginBottom: '20px', color: '#7a00cc'}}>
                Unit test sample
            </li>
            <img src={`${process.env.PUBLIC_URL}/Showcase/Testing/TestingSample.png`} alt="Unit test sample"
                 style={{width: '50%', height: 'auto', marginLeft: '30px', marginBottom: '20px',}}/>
        </ul>
    </>
)
export default Testing