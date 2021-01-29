import React from 'react';
import { Row, Col } from 'react-bootstrap';
import js from '../assets/javascript.png';
import css3 from '../assets/css-3.png';
import html from '../assets/html.png';
import git from '../assets/git.png';
import php from '../assets/php.png';
import mysql from '../assets/mysql.png';
import atom from '../assets/atom.png';
import mongo from '../assets/mongodb-3-1175138.png';
import bitbucket from '../assets/bitbucket.png';
import aws from '../assets/aws.png';
import './Technologies.css';

const Technologies = () => {
    const images = [js,git,php,atom,css3,html,bitbucket,mysql,mongo,aws];
    return(
        <div className="technologies_div">
            <h2 id="technologies" className="text-center discover_heading">Technologies</h2>
            <Row>
                <Col className="text-center" md={12}>
                    {
                        images.map(src => {
                            return <img key={Math.random() * 987} src={src} alt="technologies" className="images_technologies"/>;
                        })
                    }
                </Col>
            </Row>
        </div>
    );
}

export default Technologies;