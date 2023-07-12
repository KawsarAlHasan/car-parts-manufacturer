import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Purchase = (props) => {
  const [user] = useAuthState(auth);

  const { purchaseId } = useParams();

  const [purchase, setPurchase] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/carParts/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);

  const handlePurchase = (even) => {
    even.preventDefault();
    const uQuantity = parseInt(even.target.quantity.value);
    const name = even.target.name.value;
    const email = even.target.email.value;
    const phone = even.target.phone.value;
    const address = even.target.address.value;

    const partsPurchase = {
      partsId: purchase._id,
      parts: purchase.name,
      partsQuantity: purchase.quantity,
      minimumQuantity: purchase.orderQuantity,
      pImg: purchase.img,
      pPrice: purchase.price,
      userQuantity: uQuantity,
      userName: name,
      userEmail: email,
      userPhone: phone,
      userAddress: address,
    };

    fetch("http://localhost:5000/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(partsPurchase),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Your ${uQuantity} parts purchase is successful`);
        } else {
          toast.error(
            `oh no! you are wrong!! You need to purchase between ${partsPurchase.minimumQuantity} and ${partsPurchase.partsQuantity}.`
          );
        }
      });
  };

  return (
    <div className="row container gx-5">
      <div className="col-md-7 shadow-lg text-center my-3 pb-3">
        <h2>{purchase.name}</h2>
        <img className="img-fluid" src={purchase.img} alt="" />
        <h6>Price: $ {purchase.price}</h6>
        <p>{purchase.description}</p>
      </div>

      <div className="col-md-5 container my-3">
        <h1 className="text-center">
          Purchase <span className="text-danger">Now</span>
        </h1>
        <h6 className="text-center">Available Quantity: {purchase.quantity}</h6>
        <h6 className="text-center">
          Minimum Order Quantity: {purchase.orderQuantity}
        </h6>

        <Form onSubmit={handlePurchase}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Purchase Quantity:</Form.Label>
            <Form.Control
              className="mb-2"
              name="quantity"
              type="number"
              placeholder="Enter Purchase Quantity"
              required
            />

            <Form.Control
              className="mb-2"
              name="name"
              type="text"
              defaultValue={user.displayName || ""}
              placeholder="Enter Your Name"
              required
            />

            <Form.Control
              className="mb-2"
              name="email"
              defaultValue={user.email}
              disabled
            />

            <Form.Control
              className="mb-2"
              name="phone"
              type="number"
              placeholder="Enter Your Phone Number"
            />

            <Form.Control
              className="mb-2"
              name="address"
              type="text"
              placeholder="Enter Your Address"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Please Purchases
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Purchase;
