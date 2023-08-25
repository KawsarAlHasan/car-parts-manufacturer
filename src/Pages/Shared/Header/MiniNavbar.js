import React from "react";
import { Link } from "react-router-dom";

function MiniNavbar() {
  return (
    <div className=" custom-mini">
      <div className="container">
        <div class="hover-trigger">
          Pants
          <div class="mini-navbar">
            <Link to="pants/pants">Pants</Link>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
          </div>
        </div>
        <div class="hover-trigger">
          Jacket
          <div class="mini-navbar">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
          </div>
        </div>
        <div class="hover-trigger">
          Shirt Pants
          <div class="mini-navbar">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
          </div>
        </div>
        <div class="hover-trigger">
          Punjabi
          <div class="mini-navbar">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniNavbar;
