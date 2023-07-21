import React from "react";
import UseParts from "../Shared/Hooks/UseParts";
import LoadingImage from "../../images/loading.gif";
import "../Home/Parts/Parts.css";
import { Card, Placeholder } from "react-bootstrap";
import AllProduct from "./AllProduct";

function AllProducts() {
  const [parts, isLoading] = UseParts();
  return (
    <div>
      <div>
        <h1 className="text-center py-4">
          Parts <span className="text-danger">Items</span>
        </h1>

        <div className="container parts-container">
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
            parts.map((part) => (
              <AllProduct key={part._id} part={part}></AllProduct>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
