import React from 'react';
import {Col, Divider, Row} from "antd";

const Movie = () => (
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
                This is a React application for managing and viewing a collection of movies.
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
                <ol>
                    <li>Displays a list of popular movies fetched from the TMDb API.</li>
                    <li>Allows users to add movies to their watchlist.</li>
                    <li>Allows users to mark movies as watched.</li>
                    <li>Search engine</li>
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
                    <li>React Router</li>
                    <li>TMDb API</li>
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
                <a href="https://github.com/HazelV16/ReactMovie" target="_blank" style={{ textDecoration: 'none' }}>Go to GitHub</a>
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
                    <source src={`${process.env.PUBLIC_URL}/Showcase/movie.mov`} type="video/mp4"/>
                </video>
            </Col>
        </Row>

    </>
)
export default Movie;