import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const { _id, name, img, description, price, quantity, orderQuantity } = part;
  const navigate = useNavigate();

  const parchase = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="shadow-lg card  pb-3" style={{ borderRadius: "30px" }}>
      <img
        style={{ borderRadius: "30px 30px  0 0", height: "300px" }}
        src={img}
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">Price: $ {price}</p>
        <p class="card-text">Available Quantity: {quantity}</p>
        <div className="d-flex justify-content-between">
          <p class="card-text">Minimum Order Quantity: {orderQuantity}</p>

          <Button
            style={{ marginTop: "-10px" }}
            variant="primary"
            size="sm"
            onClick={() => parchase(_id)}
          >
            PLACE ORDER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Part;
