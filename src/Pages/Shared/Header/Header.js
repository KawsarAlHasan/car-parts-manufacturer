import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import profile from "../../../images/profile-logo.png";
import Logo from "../../../images/20230722_163020.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [user] = useAuthState(auth);

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
          <img
            alt=""
            src={Logo}
            width="99"
            height="35"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">
                  ALL PRODUCTS
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/addtocard">
                  My Card
                </Link>
              </li>
            </ul>

            {user && (
              <>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link" to="/dashboard">
                      DASHBOARD
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/dashboard">
                      <img
                        style={{
                          borderRadius: "15px",
                          height: "30px",
                          width: "30px",
                        }}
                        src={user?.photoURL || profile}
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </>
            )}
            {user ? (
              <li class="nav-item" onClick={handleSignOut}>
                <Link class="nav-link" to="/login">
                  SIGN OUT
                </Link>
              </li>
            ) : (
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/LOGIN">
                    LOGIN
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/register">
                    REGISTER
                  </Link>
                </li>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
