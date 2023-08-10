import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ViewOrder() {
  const [selectValue, setSelectValue] = useState("");
  const { orderId } = useParams();

  const [orderProducts, setOrderProducts] = useState({});
  console.log(orderProducts);
  useEffect(() => {
    const url = `https://manufacturer-server-side.onrender.com/manageOrders/${orderId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrderProducts(data));
  }, []);

  return (
    <div>
      <p>{orderProducts?.userName}</p>
      <Form.Select
        size="sm"
        onChange={(e) => setSelectValue(e.target.value)}
        aria-label="Default select example"
      >
        <option value="Delivered">Delivered</option>
        <option value="Pending">Pending</option>
        <option value="Processing">Processing</option>
        <option value="Cancel">Cancel</option>
      </Form.Select>
    </div>
  );
}

export default ViewOrder;
