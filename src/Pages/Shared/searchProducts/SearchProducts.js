import React, { useEffect, useState } from "react";
import SearchProduct from "./SearchProduct";
import Loading from "../Loading/Loading";

function SearchProducts({ inputValue }) {
  const [isLoading, setIsLoading] = useState(false);

  const [parts, setParts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://manufacturer-server-side.onrender.com/carParts")
      .then((res) => res.json())
      .then((data) => {
        setParts(data);
        setIsLoading(false);
      });
  }, [inputValue]);

  let lowercaseValue = inputValue.toLowerCase();

  if (inputValue.length === 0) {
    return (
      <h2 className="text-center my-4">You have not searched for anything</h2>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="container">
        <div className="product-container-main">
          {parts.length === 0
            ? console.log("hello")
            : parts
                .filter(
                  (part) =>
                    part.name.toLowerCase().includes(lowercaseValue) ||
                    part.category.toLowerCase().includes(lowercaseValue) ||
                    part.age.toLowerCase().includes(lowercaseValue) ||
                    part.gender.toLowerCase().includes(lowercaseValue) ||
                    part.availability.toLowerCase().includes(lowercaseValue)
                )
                .map((part) => (
                  <div className="" key={part._id}>
                    <SearchProduct part={part}></SearchProduct>
                  </div>
                ))}
        </div>
      </div>
    </div>
  );
}

export default SearchProducts;
