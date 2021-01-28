import React from 'react'
import { Navbar,Nav } from 'react-bootstrap';
import style from './Header.css';
import logo_brand from '../assets/logo_brand.png';

const Header = () => {
    return (
        <Navbar bg="white" expand="lg">
            <Navbar.Brand><img src={logo_brand} alt="Logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#home">Discover</Nav.Link>
                    <Nav.Link href="#link">Technologies</Nav.Link>
                    <Nav.Link href="#link">Experience</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;