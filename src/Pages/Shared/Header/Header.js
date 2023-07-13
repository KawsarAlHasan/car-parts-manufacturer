import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import profile from "../../../images/profile-logo.png";

const Header = (props) => {
  const [user] = useAuthState(auth);

  console.log(user);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      sticky="top"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="/">
          CAR<span className="text-danger"> PARTS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/">HOME</Nav.Link>
            {user && (
              <>
                <Nav.Link href="/dashboard">DASHBOARD</Nav.Link>
                <Nav.Link href="/dashboard">
                  <img
                    style={{
                      borderRadius: "15px",
                      height: "30px",
                      width: "30px",
                    }}
                    src={user?.photoURL || profile}
                    alt=""
                  />
                </Nav.Link>
              </>
            )}
            {user ? (
              <Nav.Link href="/login" onClick={handleSignOut}>
                SIGN OUT
              </Nav.Link>
            ) : (
              <>
                <Nav.Link href="/login">LOGIN</Nav.Link>
                <Nav.Link href="/signup">REGISTER</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
