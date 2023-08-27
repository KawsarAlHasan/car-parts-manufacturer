import React, { useState, useEffect } from "react";

function ScrollComponent() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Scroll Component</h1>
      <p>Scroll Y position: {scrollY}px</p>
    </div>
  );
}

export default ScrollComponent;
