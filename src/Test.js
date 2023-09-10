import React, { useState, useEffect } from "react";

const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 3",
  "Item 3",
  "Item 3",
  "Item 3",
  "Item 3",
  "Item 3",
  "Item 3",
  "Item 3",
  "Item 3",
  "Item 3",
  "Item 3",
  "Item 3",
  "Item 3",
  "Item 3",
  "Item 3",
  "Item 4",
  "Item 3",
  // Add more items as needed
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container1">
      <div className="carousel1">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item1 ${
              index === currentIndex ? "active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
