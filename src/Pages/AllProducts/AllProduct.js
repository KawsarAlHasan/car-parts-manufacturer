import React from "react";
import { Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AllProduct({ part }) {
  const { _id, name, img, price, salePrice, quantity, orderQuantity } = part;
  const nPrice = parseInt(price);
  const nSalePrice = parseInt(salePrice);
  const discount = nPrice - nSalePrice;
  const navigate = useNavigate();
  const parchase = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div
      onClick={() => parchase(_id)}
      className="shadow-lg card custom-card  pb-3"
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
      <div class="card-body ">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">
          Price:
          <b style={{ color: "#ef4a23", marginRight: "5px" }}> ${price}</b>
          <span className="text-decoration-line-through">{salePrice}</span>
        </p>
        <p class="card-text">Available Quantity: {quantity}</p>
        <p class="card-text">Minimum Order Quantity: {orderQuantity}</p>

        <Button size="sm" variant="primary">
          PLACE ORDER
        </Button>
      </div>
    </div>
  );
}

export default AllProduct;
