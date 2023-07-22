import React, { useState } from "react";
import UseParts from "../Shared/Hooks/UseParts";
import LoadingImage from "../../images/loading.gif";
import "../Home/Parts/Parts.css";
import { Accordion, Button, Card, Form, Placeholder } from "react-bootstrap";
import AllProduct from "./AllProduct";

function AllProducts() {
  const [parts, isLoading] = UseParts();
  const [value, setValue] = useState("");
  console.log(value);
  const handleSearch = (even) => {
    even.preventDefault();
  };
  return (
    <div className="container">
      <Form
        className="py-4 d-flex justify-content-center"
        onSubmit={handleSearch}
      >
        <Form.Control
          type="search"
          placeholder="Product Search..."
          className="w-75"
          aria-label="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form>

      <div class="row">
        <div class="col-md-3">
          <Card>
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
          </Card>

          <Accordion className="mt-2" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <b>Category</b>
              </Accordion.Header>
              <Accordion.Body>
                <Form.Check id={"category"} label={`john`} />
                <Form.Check id={"category"} label={`john`} />
                <Form.Check id={"category"} label={`john`} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion className="mt-2" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <b>Availability</b>
              </Accordion.Header>
              <Accordion.Body>
                be requested from another domain outside the domain from which
                the resource originated. It is a mechanism supported in HTML5
                that manages XMLHttpRequest access to a domain different.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div class="col-md-9">
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
                .filter((part) => part.name.toLowerCase().includes(value))
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
