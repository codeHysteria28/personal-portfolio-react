import React from 'react';
import { Row, Col } from 'react-bootstrap';
import aldeva from '../assets/logo-fullv2.png';
import spire from '../assets/1587731699370.png';
import gamer from '../assets/gamer.png';
import vava from '../assets/logo_small.png';
import medarna from '../assets/logo.png';
import stolarstvo from '../assets/main-logo.png';
import bio from '../assets/logo.jpg';
import './Experience.css';

const Experience = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h2 id="experience" className="text-center discover_heading">Experience</h2>
            <br/><br/>
                <Row>
                    <Col xs={12} md={6} className="aldeva_digital">
                        <Row>
                            <Col xs={3}><img src={aldeva} alt="Aldeve Digital" className="company_imgs"/></Col>
                            <Col xs={9}>
                                <h2>Aldeva Digital</h2>
                                <p>FULL-STACK DEV</p>
                            </Col>
                        </Row>
                        <p>
                            - Developing “Daily standups and calendar plugin” for Jira<br/>
                            - Mainly working with ReactJS and PHP Laravel<br/>
                            - Version control with Bitbucket<br/>
                        </p>
                    </Col>
                    <Col xs={12} md={6} className="spire_software">
                        <Row>
                            <Col xs={3}><img src={spire} alt="Spire Solutions" className="company_imgs"/></Col>
                            <Col xs={9}>
                                <h2>Spire Solutions</h2>
                                <p>UI FRONTEND DEV / AWS DEVOPS</p>
                            </Col>
                        </Row>
                        <p>
                            - Developing “Daily standups and calendar plugin” for Jira<br/>
                            - Mainly working with ReactJS and PHP Laravel<br/>
                            - Version control with Bitbucket<br/>
                        </p>
                    </Col>
                </Row>
        </div>
    );
};

export default Experience;