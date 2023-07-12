import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const { _id, name, img, description, price, quantity, orderQuantity } = part;
  const navigate = useNavigate();

  const parchase = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="shadow-lg rounded text-center pb-3">
      <h2>{name}</h2>
      <img className="img-fluid" src={img} alt="" />
      <h6>Price: $ {price}</h6>
      <h6>Available Quantity: {quantity}</h6>
      <h6>Minimum Order Quantity: {orderQuantity}</h6>
      <p>{description}</p>
      <button className="btn btn-primary" onClick={() => parchase(_id)}>
        PLACE ORDER
      </button>
    </div>
  );
};

export default Part;
