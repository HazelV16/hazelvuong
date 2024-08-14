import React from 'react';
import {Col, Divider, Row} from "antd";

const WeatherToDo = () => (
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
                This is a <i style={{color:'deeppink'}}>personal project</i> implementing React for my web development journey.
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
                React application featuring a TodoList component and a Weather component.
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
                    <li>TodoList Component: Allows users to add, delete, and mark tasks as complete.</li>
                    <li>Weather Component: Fetches weather information and displays it to the user.</li>
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
                    <li>React</li>
                    <li>Ant Design</li>
                    <li>OpenWeather API</li>
                    <li>npm</li>
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
                <a href="https://github.com/HazelV16/ReactWeatherTodoList" target="_blank" style={{ textDecoration: 'none' }}>Go to GitHub</a>
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
                    <source src="/Showcase/QuizAppDemo.mov" type="video/mp4"/>
                </video>
            </Col>
        </Row>

    </>
)
export default WeatherToDo;