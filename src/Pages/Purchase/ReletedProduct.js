import React from "react";
import { Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ReletedProduct({ product }) {
  const { _id, name, img, price, salePrice, quantity, orderQuantity } = product;
  const navigate = useNavigate();
  const nPrice = parseInt(price);
  const nSalePrice = parseInt(salePrice);
  const discount = nPrice - nSalePrice;

  const parchase = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div
      onClick={() => parchase(_id)}
      className="shadow-lg card custom-card mb-3 pb-3"
      style={{ borderRadius: "30px" }}
    >
      <img
        style={{ borderRadius: "30px 30px  0 0", height: "300px" }}
        src={img}
        alt=""
      />
      <Badge className="discount" pill bg="primary">
        Save: {discount}
      </Badge>
      <div className="card-body ">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Price:
          <b style={{ color: "#ef4a23", marginRight: "5px" }}> ${salePrice}</b>
          <span className="text-decoration-line-through">{price}</span>
        </p>
        <p className="card-text">Available Quantity: {quantity}</p>
        <p className="card-text">Minimum Order Quantity: {orderQuantity}</p>

        <Button size="sm" variant="primary">
          PLACE ORDER
        </Button>
      </div>
    </div>
  );
}

export default ReletedProduct;
