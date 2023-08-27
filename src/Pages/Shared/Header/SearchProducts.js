import React from "react";
import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchProducts({ part }) {
  const { _id, name, img, price, salePrice, quantity, orderQuantity } = part;

  const nPrice = parseInt(price);
  const nSalePrice = parseInt(salePrice);
  const discount = nPrice - nSalePrice;
  const navigate = useNavigate();
  const parchase = (id) => {
    navigate(`/purchase/${id}`);
    window.location.reload(false);
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
        Save:{" "}
        <span style={{ fontSize: "15px", fontWeight: "1000" }}>&#2547;</span>
        {discount}
      </Badge>
      <div className="card-body ">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Price:
          <b style={{ color: "#ef4a23", marginRight: "5px" }}>
            <span className="taka">&#2547;</span>
            {salePrice}
          </b>
          <span className="text-decoration-line-through">{price}</span>
        </p>
        <p className="card-text">Available Quantity: {quantity}</p>
        <p className="card-text">Minimum Order Quantity: {orderQuantity}</p>
      </div>
    </div>
  );
}

export default SearchProducts;
