import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { useTheme } from "./ThemeContext";
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

export default function Navigation() {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <>
            <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg">
                <Navbar.Brand>
                    <img src={logo} alt="Logo" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Home">
                            <div className="menues">
                                <Link to="/Home" style={{ textDecoration: 'none' }}>
                                    Home
                                </Link>
                            </div>

                        </Nav.Link>
                        <Nav.Link as={Link} to="/AboutUs">
                            <div className="menues">
                                <Link to="/AboutUs" style={{ textDecoration: 'none' }}>
                                    About us
                                </Link>
                            </div></Nav.Link>
                        <Nav.Link as={Link} to="/Service">
                            <div className="menues">
                                <Link to="/Service" style={{ textDecoration: 'none' }}>
                                    Services
                                </Link>
                            </div>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact">
                            <div className="menues">
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                Contact us
                            </Link>
                        </div></Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">

                        <div className="Theme">
                            <button onClick={toggleDarkMode}>
                                {darkMode ? 'Light Mode' : 'Dark Mode'}
                            </button>
                        </div>

                        <div className="order">
                           <Link to="/Order" style={{ textDecoration: 'none' }}><button>Order Now!</button></Link> 
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </>
    );
}
