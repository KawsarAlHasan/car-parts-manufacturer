import React, { useState } from "react";
import { Col, Nav, Offcanvas, Row, Tab } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Shared/Hooks/useAdmin";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import menuicon from "../../images/app-menu.png";
import Loading from "../Shared/Loading/Loading";

const Dashboard = (props) => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

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
      {isAdminLoading ? (
        <Loading />
      ) : isAdmin ? (
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
          <Nav.Item>
            <Nav.Link
              className="bg-secondary text-light mb-3"
              href="/dashboard/upComingItems"
            >
              UP COMING ITEMS
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
            <Nav variant="pills" className="flex-column text-center">
              <Nav.Item>
                <Link className="c-dashboard" to="/dashboard">
                  <Nav.Link className="bg-secondary text-light  mt-4 mb-3">
                    MY PROFILE
                  </Nav.Link>
                </Link>
              </Nav.Item>
              {isAdmin ? (
                <>
                  <Nav.Item>
                    <Link className="c-dashboard" to="/dashboard/users">
                      <Nav.Link className="bg-secondary text-light mb-3">
                        ALL USERS
                      </Nav.Link>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link className="c-dashboard" to="/dashboard/manageOrders">
                      <Nav.Link className="bg-secondary text-light mb-3">
                        MANAGE ORDERS
                      </Nav.Link>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link className="c-dashboard" to="/dashboard/addParts">
                      <Nav.Link className="bg-secondary text-light mb-3">
                        ADD PRODUCTS
                      </Nav.Link>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link className="c-dashboard" to="/dashboard/addCategory">
                      <Nav.Link className="bg-secondary text-light mb-3">
                        ADD CATEGORY
                      </Nav.Link>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      className="c-dashboard"
                      to="/dashboard/manageProducts"
                    >
                      <Nav.Link className="bg-secondary text-light mb-3">
                        MANAGE PRODUCTS
                      </Nav.Link>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link className="c-dashboard" to="/dashboard/upComingItems">
                      <Nav.Link className="bg-secondary text-light mb-3">
                        UP COMING ITEMS
                      </Nav.Link>
                    </Link>
                  </Nav.Item>
                </>
              ) : (
                <>
                  <Nav.Item>
                    <Link className="c-dashboard" to="/dashboard/myOrders">
                      <Nav.Link className="bg-secondary text-light mb-3">
                        MY ORDERS
                      </Nav.Link>
                    </Link>
                  </Nav.Item>
                </>
              )}
              <Nav.Item onClick={handleSignOut}>
                <Link className="c-dashboard" to="/login">
                  <Nav.Link className="bg-secondary text-light mb-3">
                    SIGN OUT
                  </Nav.Link>
                </Link>
              </Nav.Item>
            </Nav>
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
