import React from "react";
import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchProduct({ part }) {
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
      className="shadow-lg card custom-card "
      style={{ borderRadius: "20px" }}
    >
      <img
        style={{ borderRadius: "20px 20px  0 0", height: "200px" }}
        src={img}
        alt=""
      />
      <Badge className="discount" pill bg="primary">
        Save:
        <span style={{ fontSize: "15px", fontWeight: "1000" }}> &#2547;</span>
        {discount}
      </Badge>
      <div className="card-body">
        <h5 className="c-m-0 card-title">{name}</h5>
        <p className="c-m-0 card-text">
          Price:
          <b style={{ color: "#ef4a23", marginRight: "5px" }}>
            <span className="taka"> &#2547;</span>
            {salePrice}
          </b>
          <span className="text-decoration-line-through">{price}</span>
        </p>
        <p className="card-text c-m-0 d-flex">
          <span className="d-none d-md-block">Available </span> Quantity:
          {quantity}
        </p>
        <p className="card-text c-m-0">Minimum Order: {orderQuantity}</p>
      </div>
    </div>
  );
}

export default SearchProduct;
