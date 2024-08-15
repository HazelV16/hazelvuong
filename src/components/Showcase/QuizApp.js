import React from 'react';
import {Col, Divider, Row} from "antd";

const QuizApp = () => (
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
                Basic online quiz application that allows a user to create, edit, and take quizzes, and view scores upon completion.
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
                    <li>Question management: Read, Update, Delete questions</li>
                    <li>Quiz Functionality: Taking quiz, Answer Submission, Score Calculation, Score Display</li>
                    <li>Additional features: Random Question Order, Time Limit for Quiz</li>
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
                    <li>ASP.NET Core Razor Pages, Entity Framework Core</li>
                    <li>C#</li>
                    <li>JetBrains Rider</li>
                    <li>SQLite</li>
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
                <a href="https://github.com/HazelV16/QuizApp" target="_blank" style={{ textDecoration: 'none' }}>Go to GitHub</a>
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row justify="start">
            <Col xs={2} sm={4} md={6} lg={8} xl={4} style={{marginLeft: '30px'}}><strong>Project Structure</strong></Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <img src={`${process.env.PUBLIC_URL}/Showcase/ProjStructure.png`} alt="Project Structure"
                     style={{width: '40%', height: 'auto'}}/>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={3} style={{marginLeft: '-100px'}}><strong>Database overview</strong></Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={7} style={{marginLeft: '30px'}}>
                <img src={`${process.env.PUBLIC_URL}/Showcase/ProjDb.png`} alt="Project Database"
                     style={{width: '60%', height: 'auto'}}/>
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
                    <source src={`${process.env.PUBLIC_URL}/Showcase/QuizAppDemo.mov`} type="video/mp4"/>
                </video>
            </Col>
        </Row>

    </>
)
export default QuizApp;