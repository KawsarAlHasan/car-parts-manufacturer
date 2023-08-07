import React, { useEffect, useState } from "react";
import logo from "../../../images/20230722_163020.png";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

function MyOrder() {
  const [user] = useAuthState(auth);
  const { orderId } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const url = `https://manufacturer-server-side.onrender.com/orders/${orderId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [orderId]);

  console.log(order);

  return (
    <div>
      <div>
        <h4>Thank you {user?.displayName}, Your order have been received !</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>INVOICE</h4>
            <h6>
              Status : <span className="text-primary">Panding</span>
            </h6>
          </div>
          <div className="col-md-6">
            <img src={logo} alt="" style={{ width: "120px" }} />
            <h6>Dhaka, Bangladesh</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
