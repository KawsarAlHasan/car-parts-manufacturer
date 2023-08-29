import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

function Test() {
  const [myOrders, setMyOrders] = useState([]);
  console.log(myOrders);
  useEffect(() => {
    const getMyOrders = async () => {
      const url = `https://manufacturer-server-side.onrender.com/clothes?subCategory=pants`;
      const { data } = await axios.get(url);
      setMyOrders(data);
    };
    getMyOrders();
  }, []);
  return (
    <div className="w-50">
      {/* <Carousel>
        <div style={{ width: "300px" }}>
          <img src="https://res.cloudinary.com/daizkkv04/image/upload/v1690075068/t6fzcynqmdomxuiuzfbu.jpg" />
        </div>
        <div style={{ width: "300px" }}>
          <img src="https://res.cloudinary.com/daizkkv04/image/upload/v1690112942/wv9iqyhraqf7r53gfulu.jpg" />
        </div>
        <div style={{ width: "300px" }}>
          <img src="https://res.cloudinary.com/daizkkv04/image/upload/v1690138826/hq6mhznbiujkglfksqwl.jpg" />
        </div>
      </Carousel> */}
    </div>
  );
}

export default Test;
