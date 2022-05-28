import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Dashboard = (props) => {
    return (
        <div   className='container'>
            <Tab.Container id="left-tabs-example" >
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column text-center">
                            <Nav.Item>
                                <Nav.Link className='bg-secondary text-light my-3' href='/dashboard'>MY ORDERS</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='bg-secondary text-light mb-3' href='/dashboard/addReview'>ADD A REVIEW</Nav.Link>
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