import React from "react";
import UseParts from "../../Shared/Hooks/UseParts";
import Part from "./Part/Part";
import "./Parts.css";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Parts = (props) => {
  const [products, isLoading] = UseParts();

  return (
    <div>
      <h2 className="text-center custom-margin-top-10">
        Featured <span className="text-danger">Products</span>
      </h2>
      <h6 className="text-center mb-4">Check & Get Your Desired Product!</h6>

      <div className="container product-container-main">
        {isLoading ? (
          <Loading />
        ) : (
          products
            .slice(0, 15)
            .map((product) => <Part key={product._id} part={product}></Part>)
        )}
      </div>
      <div className="container my-3 text-end">
        <Link className="text-decoration-none" to="/products">
          See All products
        </Link>
      </div>
    </div>
  );
};

export default Parts;
