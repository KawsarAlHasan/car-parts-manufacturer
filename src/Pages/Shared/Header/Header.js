import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import profile from "../../../images/profile-logo.png";
import Logo from "../../../images/20230722_163020.png";
import heart from "../../../images/icon/heart-regular.svg";
import cart from "../../../images/icon/cart-shopping-solid.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = (props) => {
  const [user] = useAuthState(auth);

  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const getMyOrders = async () => {
      const url = `https://manufacturer-server-side.onrender.com/addToCard?email=${user?.email}`;
      const { data } = await axios.get(url);
      setMyOrders(data);
    };
    getMyOrders();
  }, [user]);

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
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  ALL PRODUCTS
                </Link>
              </li>
            </ul>

            {user && (
              <>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link title="Wish List" className="nav-link" to="/wishlist">
                      <img
                        style={{
                          height: "30px",
                          width: "30px",
                        }}
                        src={heart}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      title="My Cart"
                      className="nav-link custom-card2"
                      to="/addtocard"
                    >
                      <img
                        style={{
                          height: "30px",
                          width: "30px",
                        }}
                        src={cart}
                        alt=""
                      />
                      <p className="navbar-indicator">
                        {myOrders?.length === 0 ? 0 : myOrders?.length}
                      </p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      title="My Profile"
                      className="nav-link"
                      to="/dashboard"
                    >
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
            {!user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/LOGIN">
                    LOGIN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
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
