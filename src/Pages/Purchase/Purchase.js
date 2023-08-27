import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Form, Placeholder } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import UseParts from "../Shared/Hooks/UseParts";
import LoadingImage from "../../images/loading.gif";
import ReletedProduct from "./ReletedProduct";
import RatingsReviews from "./RatingsReviews";

const Purchase = (props) => {
  const [parts, isLoading] = UseParts();
  const [user] = useAuthState(auth);

  const { purchaseId } = useParams();

  const [purchase, setPurchase] = useState({});

  const [orderQuantity, setOrderQuantity] = useState("");

  const amount = parseInt(orderQuantity) * parseInt(purchase.salePrice);

  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setOrderQuantity(e.target.value);
    }
  };

  useEffect(() => {
    const url = `http://localhost:5000/carParts/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, [purchaseId]);

  const categoryFilter = purchase.category;

  const handlePurchase = (even) => {
    even.preventDefault();
    const uQuantity = parseInt(even.target.quantity.value);
    const email = even.target.email.value;

    const partsPurchase = {
      partsId: purchase._id,
      parts: purchase.name,
      partsQuantity: purchase.quantity,
      minimumQuantity: purchase.orderQuantity,
      pImg: purchase.img,
      pPrice: purchase.price,
      userQuantity: uQuantity,
      email: email,
      amount: amount,
      productCode: purchase.productCode,
    };

    fetch("http://localhost:5000/addToCard", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(partsPurchase),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Your ${uQuantity} Product add to card is successful`);
          window.location.reload(false);
        } else {
          toast.error(
            `oh no! you are wrong!! You need to purchase between ${partsPurchase.minimumQuantity} and ${partsPurchase.partsQuantity}.`
          );
        }
      });
  };

  return (
    <div className="">
      <div className="row container-fluid ">
        <div className="col-md-6 shadow-lg custom-img-div text-center my-3">
          <img className="custom-img-fluid" src={purchase.img} alt="" />
        </div>

        <div className="col-md-6 my-3">
          <h1 className="text-center">
            Product <span className="text-danger">Details</span>
          </h1>
          <div className="mx-4">
            <h4>
              Name: <b>{purchase.name}</b>
            </h4>
            <Badge
              className="px-3 py-2 costum-margin-right"
              inline
              pill
              bg="success"
            >
              Category: {purchase.category}
            </Badge>
            <Badge
              className="px-3 py-2 costum-margin-right"
              inline
              pill
              bg="success"
            >
              Brand: {purchase.brand}
            </Badge>
            <Badge
              className="px-3 py-2 costum-margin-right"
              inline
              pill
              bg="success"
            >
              Status: {purchase.availability}
            </Badge>
            <Badge
              className="px-3 py-2 costum-margin-right"
              inline
              pill
              bg="success"
            >
              Quantity: {purchase.quantity}
            </Badge>
            <Badge
              className="px-3 py-2 costum-margin-right"
              inline
              pill
              bg="success"
            >
              Minimum Order: {purchase.orderQuantity}
            </Badge>
          </div>

          <div className="mx-4 mt-2">
            <h6>
              Sale Price: <b>{purchase.salePrice}</b>
            </h6>
            <h6>
              Regular Price: <b>{purchase.price}</b>
            </h6>
            <h6>Available Quantity: {purchase.quantity}</h6>
            <h6>Minimum Order Quantity: {purchase.orderQuantity}</h6>
            <h6>
              Product Code: <b>{purchase.productCode}</b>
            </h6>
            <h6>
              Color Family:{" "}
              {purchase.colorfamily
                ? purchase.colorfamily?.map((cf, i) => <b key={i}>{cf}, </b>)
                : "All Sizes Available"}
            </h6>
            <h6>
              Size:{" "}
              {purchase.size
                ? purchase.size?.map((s, i) => <b key={i}>{s}, </b>)
                : "All Sizes Available"}{" "}
              {purchase.customize}
            </h6>
          </div>
          <Form className="mx-4" onSubmit={handlePurchase}>
            {/* order quantity */}
            <div className="d-flex ">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Order Quantity:</Form.Label>
                <Form.Control
                  className=""
                  name="quantity"
                  type="number"
                  placeholder="Enter Order Quantity"
                  required
                  value={orderQuantity}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3 mx-2" controlId="formBasicEmail">
                <Form.Label>Your Order Amount:</Form.Label>
                <Form.Control
                  className=""
                  placeholder="Your order amount"
                  type="number"
                  value={amount}
                />
              </Form.Group>
            </div>

            <Form.Control
              className=" d-none"
              name="email"
              defaultValue={user.email}
              disabled
            />
            <Form.Control
              className=" d-none"
              name="productCode"
              defaultValue={purchase.productCode}
              disabled
            />

            <Button variant="primary" type="submit">
              Add to Card
            </Button>
          </Form>
        </div>
      </div>
      <div className="row container-fluid">
        <div className="col-md-6 col-lg-8  my-4">
          <p className="mx-4">
            <b>Description:</b> {purchase.description}
          </p>
          <div className="my-3">
            <RatingsReviews></RatingsReviews>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4">
          <h2>
            Related <span className="text-danger">Products</span>
          </h2>
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
            </>
          ) : (
            parts
              .filter(
                (product) =>
                  product.name.toLowerCase().includes(categoryFilter) ||
                  product.category.includes(categoryFilter)
              )
              .map((product) => (
                <ReletedProduct
                  key={product._id}
                  product={product}
                ></ReletedProduct>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Purchase;
