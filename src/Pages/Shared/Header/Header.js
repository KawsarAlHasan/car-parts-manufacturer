import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand href="/">CAR<span className='text-danger'> PARTS</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/myPortfolio">MY PORTFOLIO</Nav.Link>
                        <Nav.Link href="/blogs">BLOGS</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">LOGIN</Nav.Link>
                        <Nav.Link href="/register">REGISTER</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;