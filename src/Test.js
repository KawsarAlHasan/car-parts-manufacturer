import React, { useEffect, useState } from "react";
import axios from "axios";

function Test() {
  const searchHandle = (event) => {
    console.warn(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={searchHandle}
        placeholder="Search products..."
      />
      <input
      // ... input field ...
      />
      <ul>
        {/* {searchResults.map((product) => (
          <li key={product.id}>
            {product.name} - {product.description}
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default Test;
