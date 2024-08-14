import React from 'react';
import {Col, Divider, Row} from "antd";

const DataAnalysis = () => (
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
                This is a project under the "Data Science" topic in my bachelor's course.
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
                Combining and cleaning data from multiple CSV files into a single dataframe, and then performing data
                exploration and analysis to identify and address data issues and relationships.
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row justify="start">
            <Col xs={2} sm={4} md={6} lg={8} xl={4} style={{marginLeft: '30px'}}><strong>Team Size</strong></Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={5} style={{marginLeft: '30px'}}>1 person</Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={3} style={{marginLeft: '30px'}}><strong>Duration</strong></Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={8} style={{marginLeft: '30px'}}>3 weeks (Effort: ~10h / week)</Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>My implementation</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                <ol>
                    <li>Merge all the CSV files in 1 single frame</li>
                    <li>Remove extra whitespaces and types errors</li>
                    <li>Sanity checks for invalid values</li>
                    <li>Handling missing values process</li>
                    <li>Remove duplicates</li>
                    <li>Perform 10 different types of data analysis ranging from simple to complex</li>
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
                Python (pandas, numpy, matplotlib), Jupyter notebook
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
                Visualise top 10 vehicles with the most owners
            </li>
            <img src="/Showcase/DataAnalysis/top10Vehicle.png" alt="top 10 vehicles with the most owners"
                 style={{width: '50%', height: 'auto', marginLeft: '30px', marginBottom: '20px',}}/>
        </ul>

        <ul>
            <li style={{marginLeft: '30px', marginBottom: '20px', color: '#7a00cc'}}>
                Relationship between vehicle fuel type and male owners
            </li>
            <img src="/Showcase/DataAnalysis/FuelMale1.png" alt="Relationship between vehicle fuel type and male owners"
                 style={{width: '50%', height: 'auto', marginLeft: '30px', marginBottom: '20px',}}/>
            <img src="/Showcase/DataAnalysis/FuelMale.png" alt="Relationship between vehicle fuel type and male owners"
                 style={{width: '50%', height: 'auto', marginLeft: '30px', marginBottom: '20px',}}/>
        </ul>

        <ul>
            <li style={{marginLeft: '30px', marginBottom: '20px', color: '#7a00cc'}}>
                Relationship between power and male owners
            </li>
            <img src="/Showcase/DataAnalysis/PowerMale.png" alt="Relationship between power and male owners"
                 style={{width: '50%', height: 'auto', marginLeft: '30px', marginBottom: '20px',}}/>
            <img src="/Showcase/DataAnalysis/PowerMale1.png" alt="Relationship between power and male owners"
                 style={{width: '50%', height: 'auto', marginLeft: '30px', marginBottom: '20px',}}/>
        </ul>

    </>
)
export default DataAnalysis