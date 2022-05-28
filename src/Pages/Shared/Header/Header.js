import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Header = (props) => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
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
                        {
                            user && <Nav.Link href="/dashboard">DASHBOARD</Nav.Link>
                        }
                        {
                            user ? <Nav.Link href="/login" onClick={handleSignOut}>SIGN OUT</Nav.Link>
                                :
                                <>
                                    <Nav.Link href="/login">LOGIN</Nav.Link>
                                    <Nav.Link href="/signup">REGISTER</Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;