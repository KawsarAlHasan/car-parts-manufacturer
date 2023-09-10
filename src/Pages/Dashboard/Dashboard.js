import React, { useState } from "react";
import { Col, Nav, Offcanvas, Row, Tab } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import useAdmin from "../Shared/Hooks/useAdmin";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import menuicon from "../../images/app-menu.png";

const Dashboard = (props) => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const [isAdmin] = useAdmin(user?.email);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = (
    <Nav variant="pills" className="flex-column text-center">
      <Nav.Item>
        <Nav.Link
          className="bg-secondary text-light  mt-4 mb-3"
          href="/dashboard"
        >
          MY PROFILE
        </Nav.Link>
      </Nav.Item>
      {isAdmin ? (
        <>
          <Nav.Item>
            <Nav.Link
              className="bg-secondary text-light mb-3"
              href="/dashboard/users"
            >
              ALL USERS
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="bg-secondary text-light mb-3"
              href="/dashboard/manageOrders"
            >
              MANAGE ORDERS
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="bg-secondary text-light mb-3"
              href="/dashboard/addParts"
            >
              ADD PRODUCTS
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="bg-secondary text-light mb-3"
              href="/dashboard/addCategory"
            >
              ADD CATEGORY
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="bg-secondary text-light mb-3"
              href="/dashboard/manageProducts"
            >
              MANAGE PRODUCTS
            </Nav.Link>
          </Nav.Item>
        </>
      ) : (
        <>
          <Nav.Item>
            <Nav.Link
              className="bg-secondary text-light mb-3"
              href="/dashboard/myOrders"
            >
              MY ORDERS
            </Nav.Link>
          </Nav.Item>
        </>
      )}
      <Nav.Item onClick={handleSignOut}>
        <Nav.Link className="bg-secondary text-light mb-3" href="/login">
          SIGN OUT
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

  return (
    <div className="container">
      <Tab.Container id="left-tabs-example">
        <div className="d-block d-md-none">
          <h3>
            Options:{" "}
            <span onClick={handleShow}>
              <img width="35px" src={menuicon} alt="" />
            </span>
          </h3>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Options</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>{options}</Offcanvas.Body>
          </Offcanvas>
        </div>
        <Row>
          <Col sm={3} className="d-none d-md-block">
            {options}
          </Col>
          <Col sm={9}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Dashboard;
