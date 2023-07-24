import React from "react";
import UseParts from "../../Shared/Hooks/UseParts";
import LoadingImage from "../../../images/loading.gif";
import Part from "./Part/Part";
import "./Parts.css";
import { Card, Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";

const Parts = (props) => {
  const [parts, isLoading] = UseParts();

  return (
    <div>
      <h1 className="text-center custom-margin-top-10 pb-4">
        Products <span className="text-danger">Items</span>
      </h1>

      <div className="container product-container-main">
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
            .slice(0, 6)
            .map((part) => <Part key={part._id} part={part}></Part>)
        )}
      </div>
      <div className="container my-3 text-end">
        <Link className="text-decoration-none" to="/products">
          See All products
        </Link>
      </div>
    </div>
  );
};

export default Parts;
