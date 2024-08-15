import React from 'react';
import {Col, Divider, Row} from "antd";

const DevOps = () => (
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
                This is a project under the "Enterprise Systems DevOps Project" topic in my master's course.
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
                To apply DevOps principles and tools to the software development processes.
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row justify="start">
            <Col xs={2} sm={4} md={6} lg={8} xl={4} style={{marginLeft: '30px'}}><strong>Team Size</strong></Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={5} style={{marginLeft: '30px'}}>9 people</Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={3} style={{marginLeft: '30px'}}><strong>Duration</strong></Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={8} style={{marginLeft: '30px'}}>4 sprints in 12 weeks (Effort: ~10h /
                week / person)</Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Scope of Work</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={15}>
                <ul>
                    <li>Develop a meeting portal</li>
                    <li>Create and maintain database</li>
                    <li>Create and maintain DevOps pipelines</li>
                </ul>
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Technologies</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <ul>
                    <li>Frontend: Angular</li>
                    <li>Backend: ExpressJs, RESTful API</li>
                    <li>Database: MySQL</li>
                </ul>
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Tools Used</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <ul>
                    <li>Azure DevOps</li>
                    <li>Git</li>
                    <li>AWS EC2</li>
                    <li>JWT (JSON Web Tokens)</li>
                    <li>Visual Studio Code</li>
                    <li>Postman</li>
                </ul>
            </Col>
        </Row>

        <Divider style={{
            margin: '15px',
        }}/>

        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6} style={{marginLeft: '30px'}}>
                <strong>Team Structure</strong>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <img src={`${process.env.PUBLIC_URL}/Showcase/DevOps/TeamStructure.drawio.png`} alt="Team Structure"
                     style={{width: '120%', height: 'auto'}}/>
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
                I have participated in almost all phases of the project:
                <ul>
                    <li>Be the first to initiate and outline system requirements with PM and PO</li>
                    <li>Designed Entity Relationship Diagram (ERD) from system requirements and contributed ideas to
                        Database design
                    </li>
                    <li>Assisted other team members in completing their parts</li>
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
        <div style={{fontSize: 15, color: '#8080ff', marginLeft: '30px'}}>Brief overview of project implementation</div>

        <ul>
            <li style={{marginLeft: '30px', marginBottom: '20px', color: '#7a00cc'}}>
                Use case diagram for committee board meeting management system
            </li>
            <img src={`${process.env.PUBLIC_URL}/Showcase/DevOps/UseCase.png`} alt="Use Case Diagram for board management system"
                 style={{width: '50%', height: 'auto', marginLeft: '30px', marginBottom: '20px',}}/>
        </ul>

        <ul>
            <li style={{marginLeft: '30px', marginBottom: '20px', color: '#7a00cc'}}>
                Board meeting management system Entity Relationship Diagram
            </li>
            <img src={`${process.env.PUBLIC_URL}/Showcase/DevOps/ERD.png`} alt="Board meeting management system Entity Relationship Diagram"
                 style={{width: '50%', height: 'auto', marginLeft: '30px', marginBottom: '20px',}}/>
        </ul>

        <ul>
            <li style={{marginLeft: '30px', marginBottom: '20px', color: '#7a00cc'}}>
                Visualisation of Frontend Architecture
            </li>
            <img src={`${process.env.PUBLIC_URL}/Showcase/DevOps/FrontendArchitecture.png`} alt="Frontend Architecture"
                 style={{width: '50%', height: 'auto', marginLeft: '30px', marginBottom: '20px',}}/>
        </ul>

        <ul>
            <li style={{marginLeft: '30px', marginBottom: '20px', color: '#7a00cc'}}>
                Visualisation of Backend Architecture
            </li>
            <img src={`${process.env.PUBLIC_URL}/Showcase/DevOps/BackendArchitecture.png`} alt="Backend Architecture"
                 style={{width: '50%', height: 'auto', marginLeft: '30px', marginBottom: '20px',}}/>
        </ul>

        <ul>
            <li style={{marginLeft: '30px', marginBottom: '20px', color: '#7a00cc'}}>
                CI/CD Pipeline
            </li>
            <img src={`${process.env.PUBLIC_URL}/Showcase/DevOps/Pipeline.png`} alt="Pipeline"
                 style={{width: '50%', height: 'auto', marginLeft: '30px', marginBottom: '20px',}}/>
        </ul>

        <ul>
            <li style={{marginLeft: '30px', marginBottom: '20px', color: '#7a00cc'}}>
                Testing approach
            </li>
            <img src={`${process.env.PUBLIC_URL}/Showcase/DevOps/TestingApproach.png`} alt="Testing Approach"
                 style={{width: '50%', height: 'auto', marginLeft: '30px', marginBottom: '20px',}}/>
        </ul>

        <ul>
            <li style={{marginLeft: '30px', marginBottom: '20px', color: '#7a00cc'}}>
                Final result
            </li>
            <img src={`${process.env.PUBLIC_URL}/Showcase/DevOps/FinalResult.png`} alt="Final Result"
                 style={{width: '50%', height: 'auto', marginLeft: '30px', marginBottom: '20px',}}/>
        </ul>

        <div style={{fontSize: 15, color: '#8080ff', marginLeft: '30px'}}>TO DO</div>
        <ul>
            <li style={{marginLeft: '30px', marginBottom: '5px',}}>Implement error or exception handling</li>
            <li style={{marginLeft: '30px', marginBottom: '5px',}}>Implement unit and automated testing</li>
            <li style={{marginLeft: '30px', marginBottom: '5px',}}>Perform design pattern to increase the reusability of data structure and source code.</li>
        </ul>

    </>
)
export default DevOps;