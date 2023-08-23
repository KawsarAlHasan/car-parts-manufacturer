import React, { useState } from "react";
import UseParts from "../Shared/Hooks/UseParts";
import LoadingImage from "../../images/loading.gif";
import "../Home/Parts/Parts.css";
import { Accordion, Button, Card, Form, Placeholder } from "react-bootstrap";
import AllProduct from "./AllProduct";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function AllProducts() {
  const [parts, isLoading] = UseParts();
  const [searchValue, setSearchValue] = useState("");
  let lowercaseValue = searchValue.toLowerCase();

  const handleSearch = (even) => {
    even.preventDefault();
  };
  const filterCategory = (even) => {
    even.preventDefault();
  };
  const filterGenter = (even) => {
    even.preventDefault();
  };
  const filterAvailability = (even) => {
    even.preventDefault();
  };
  const filterAge = (even) => {
    even.preventDefault();
  };

  const filterProduct = (
    <>
      {/* price range  */}
      {/* <Card>
        <Card.Body>
          <Card.Title>Price Range</Card.Title>
          <Form.Control
            className="d-inline"
            type="number"
            placeholder="min"
            style={{ width: "40%", marginRight: "5px" }}
          />
          <Form.Control
            className="d-inline"
            type="number"
            placeholder="max"
            style={{ width: "40%", marginRight: "5px" }}
          />
          <Button className="d-inline" variant="primary">
            C
          </Button>
        </Card.Body>
      </Card> */}

      {/* category  */}
      <Accordion className="mt-2" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <b>Category</b>
          </Accordion.Header>
          <Accordion.Body>
            <form onSubmit={filterCategory}>
              <div className="d-flex">
                <Form.Check
                  label="Pant"
                  name="group1"
                  type="radio"
                  value="pant"
                  onClick={(e) => setSearchValue(e.target.value)}
                  id={`inline-radio-1`}
                />
                <Form.Check
                  className="costum-left36"
                  label="Shirt"
                  name="group1"
                  type="radio"
                  value="shirt"
                  onClick={(e) => setSearchValue(e.target.value)}
                  id={`inline-radio-1`}
                />
              </div>
              <div className="d-flex">
                <Form.Check
                  label="Jacket"
                  name="group1"
                  type="radio"
                  value="jacket"
                  onClick={(e) => setSearchValue(e.target.value)}
                  id={`inline-radio-2`}
                />

                <Form.Check
                  className="mx-4"
                  label="T-Shirt"
                  name="group1"
                  type="radio"
                  value="t-shirt"
                  onClick={(e) => setSearchValue(e.target.value)}
                  id={`inline-radio-1`}
                />
              </div>
              <div className="d-flex">
                <Form.Check
                  label="Punjabi"
                  name="group1"
                  type="radio"
                  value="punjabi"
                  onClick={(e) => setSearchValue(e.target.value)}
                  id={`inline-radio-2`}
                />
                <Form.Check
                  className="mx-3"
                  label="Three Pieces"
                  name="group1"
                  type="radio"
                  value="three pieces"
                  onClick={(e) => setSearchValue(e.target.value)}
                  id={`inline-radio-2`}
                />
              </div>
              <div className="d-flex">
                <Form.Check
                  label="Sharee/Benarasi"
                  name="group1"
                  type="radio"
                  value="sharee benarasi"
                  onClick={(e) => setSearchValue(e.target.value)}
                  id={`inline-radio-2`}
                />
              </div>
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* gender */}
      <Accordion className="mt-2" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <b>Gender</b>
          </Accordion.Header>
          <Accordion.Body>
            <form onSubmit={filterGenter}>
              <div className="d-flex">
                <Form.Check
                  label="Men's"
                  name="group2"
                  type="radio"
                  value="men's"
                  onClick={(e) => setSearchValue(e.target.value)}
                  id={`inline-radio-101`}
                />
                <Form.Check
                  className="mx-3"
                  label="Women's"
                  name="group2"
                  type="radio"
                  value="women's"
                  onClick={(e) => setSearchValue(e.target.value)}
                  id={`inline-radio-102`}
                />
              </div>
              <div className="d-flex">
                <Form.Check
                  label="Boy's"
                  name="group2"
                  type="radio"
                  value="boy's"
                  onClick={(e) => setSearchValue(e.target.value)}
                  id={`inline-radio-102`}
                />
                <Form.Check
                  className="mx-3"
                  label="Girl's"
                  name="group2"
                  type="radio"
                  value="girl's"
                  onClick={(e) => setSearchValue(e.target.value)}
                  id={`inline-radio-102`}
                />
              </div>
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* age */}
      <Accordion className="mt-2" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <b>Age</b>
          </Accordion.Header>
          <Accordion.Body>
            <form onSubmit={filterAge}>
              <Form.Check
                label="Children"
                name="group2"
                type="radio"
                value="children"
                onClick={(e) => setSearchValue(e.target.value)}
                id={`inline-radio-101`}
              />
              <Form.Check
                label="Young Man"
                name="group2"
                type="radio"
                value="young man"
                onClick={(e) => setSearchValue(e.target.value)}
                id={`inline-radio-102`}
              />
              <Form.Check
                label="Old Man"
                name="group2"
                type="radio"
                value="old man"
                onClick={(e) => setSearchValue(e.target.value)}
                id={`inline-radio-102`}
              />
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Availability */}
      <Accordion className="mt-2" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <b>Availability</b>
          </Accordion.Header>
          <Accordion.Body>
            <form onSubmit={filterAvailability}>
              <Form.Check
                label="In Stock"
                name="group3"
                type="radio"
                value="in stock"
                onClick={(e) => setSearchValue(e.target.value)}
                id={`inline-radio-201`}
              />
              <Form.Check
                label="Up Coming"
                name="group3"
                type="radio"
                value="up coming"
                onClick={(e) => setSearchValue(e.target.value)}
                id={`inline-radio-202`}
              />
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );

  return (
    <div className="container">
      {/* search input */}
      <div className="row">
        <div className="col-7 col-lg-12">
          <Form
            className="py-3 d-flex justify-content-center"
            onSubmit={handleSearch}
          >
            <Form.Control
              type="search"
              placeholder="Product Search..."
              className="w-75"
              aria-label="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Form>
        </div>

        <div className="col-4  d-lg-none ">
          <div className="d-flex">
            <b style={{ marginTop: "20px", marginRight: "-10px" }}>Filter:</b>
            <Navbar
              style={{ marginTop: "5px" }}
              key="lg"
              expand="lg"
              className="bg-body-tertiary mb-3"
            >
              <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-lg`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                      Product Filter
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    {/* filter products */}
                    {filterProduct}
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>

      <div className="row">
        <div className=" d-none d-lg-block col-lg-3">
          {/* filter products */}
          {filterProduct}
        </div>
        <div className="col-12 col-lg-9 ">
          <div className="parts-container">
            {isLoading ? (
              <>
                <Card style={{ width: "20rem" }}>
                  <Card.Img variant="top" src={LoadingImage} />
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                      <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                      <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                  </Card.Body>
                </Card>
                <Card style={{ width: "20rem" }}>
                  <Card.Img variant="top" src={LoadingImage} />
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                      <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                      <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                  </Card.Body>
                </Card>
                <Card style={{ width: "20rem" }}>
                  <Card.Img variant="top" src={LoadingImage} />
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                      <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                      <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                  </Card.Body>
                </Card>
              </>
            ) : (
              parts
                .filter(
                  (part) =>
                    part.name.toLowerCase().includes(lowercaseValue) ||
                    part.category.toLowerCase().includes(lowercaseValue) ||
                    part.age.toLowerCase().includes(lowercaseValue) ||
                    part.gender.toLowerCase().includes(lowercaseValue) ||
                    part.availability.toLowerCase().includes(lowercaseValue)
                )
                .map((part) => (
                  <AllProduct key={part._id} part={part}></AllProduct>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
