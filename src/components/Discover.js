import react from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './Discover.css';
import pc_guy from '../assets/web-development.png';
import goal from '../assets/goal.png';

const Discover = () => {
    return (
        <>
            <h2 id="discover" class="text-center discover_heading">Discover</h2>
            <Row className="d-flex align-items-center justify-content-center mb-5 border_col">
                <Col md={6} className="text-center">
                    <img className="pc_guy mb-5" src={pc_guy} alt="pc guy"/>
                    <p className="text-justify">
                        From the moment I produced “Hello World” in the 
                        console of my first application, I knew I was hooked into 
                        the world of software development. But software development 
                        has never been “just a job” for me, it offered an engaging 
                        challenge to continually learn and improve my 
                        skills in creating high-quality software.
                    </p>
                </Col>
                <Col md={6} className="text-center goal_div">
                    <img className="pc_guy mb-5" src={goal} alt="pc guy"/>
                    <p className="text-justify">
                        What started with a simple “Hello World” has 
                        become a full-fledged passion that only
                        gets more and more exciting as the years go by. 
                        In my free time I enjoy to keep up
                        with new tech. I like to travel, do sports and spend
                        my free time with family.
                    </p>
                </Col>
            </Row>
            <br/>
        </>
    );
}

export default Discover;