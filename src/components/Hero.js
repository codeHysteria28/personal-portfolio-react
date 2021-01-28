import react from 'react';
import my_photo from '../assets/1585309388755.jpeg';
import { Row, Col, Image } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
    return (
        <Row className="discover_row">
            <Col className="text-center">
                <img className="my_photo" src={my_photo} alt="Photo of myself"/>
            </Col>
            <Col className="my-auto">
                <h1 className="heading_name">BRANISLAV BUNA</h1>
                <h2 className="heading_role">FULL-STACK DEVELOPER</h2>
            </Col>
        </Row>
    );
}

export default Hero;