import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

function MiniNavber() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const categoryoption = (
    <div className="">
      <div class="hover-trigger">
        Clothes/Fashion
        <div class="mini-navbar">
          <Link to="/clothes/Pants">Pants</Link>
          <Link to="/clothes/Shirt">Shirt</Link>
          <Link to="/clothes/Jacket">Jacket</Link>
          <Link to="/clothes/T-Shirt">T-Shirt</Link>
          <Link to="/clothes/Polo Shirt">Polo Shirt</Link>
          <Link to="/clothes/Panjabi">Panjabi</Link>
          <Link to="/clothes/Benarosi">Benarosi</Link>
          <Link to="/clothes/Three Piece">Three Piece</Link>
          <Link to="/clothes/Two Piece">Two Piece</Link>
          <Link to="/clothes/One Piece">One Piece</Link>
          <Link to="/clothes/Lehenga">Lehenga</Link>
        </div>
      </div>
      <div class="hover-trigger">
        Shoes
        <div class="mini-navbar">
          <a href="#">Boys Wear</a>
          <a href="#">Girls Wear</a>
          <a href="#">Gents Wear</a>
          <a href="#">Ladies Wear</a>
          <a href="#">Kids Wear</a>
        </div>
      </div>
      <div class="hover-trigger">
        Electronics
        <div class="mini-navbar">
          <a href="#">Mobile</a>
          <a href="#">LED TV</a>
          <a href="#">Smart TV</a>
        </div>
      </div>
      <div class="hover-trigger">
        Health/Beauty
        <div class="mini-navbar">
          <a href="#">Hair Oil</a>
          <a href="#">Shoap</a>
          <a href="#">White Cream</a>
          <a href="#">Body Spray</a>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className=" custom-mini">
        <div className="container d-flex justify-content-between">
          <div>
            <div className="d-lg-none">
              <div class="coustom-mini-nav" onClick={handleShow}>
                Category
              </div>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Category</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="">
                    <div class="hover-trigger">
                      Clothes/Fashion
                      <div class="mini-navbar">
                        <a href="/clothes/Pants">Pants</a>
                        <a href="/clothes/Shirt">Shirt</a>
                        <a href="/clothes/Jacket">Jacket</a>
                        <a href="/clothes/T-Shirt">T-Shirt</a>
                        <a href="/clothes/Polo Shirt">Polo Shirt</a>
                        <a href="/clothes/Panjabi">Panjabi</a>
                        <a href="/clothes/Benarosi">Benarosi</a>
                        <a href="/clothes/Three Piece">Three Piece</a>
                        <a href="/clothes/Two Piece">Two Piece</a>
                        <a href="/clothes/One Piece">One Piece</a>
                        <a href="/clothes/Lehenga">Lehenga</a>
                      </div>
                    </div>
                    <div class="hover-trigger">
                      Shoes
                      <div class="mini-navbar">
                        <a href="#">Boys Wear</a>
                        <a href="#">Girls Wear</a>
                        <a href="#">Gents Wear</a>
                        <a href="#">Ladies Wear</a>
                        <a href="#">Kids Wear</a>
                      </div>
                    </div>
                    <div class="hover-trigger">
                      Electronics
                      <div class="mini-navbar">
                        <a href="#">Mobile</a>
                        <a href="#">LED TV</a>
                        <a href="#">Smart TV</a>
                      </div>
                    </div>
                    <div class="hover-trigger">
                      Health/Beauty
                      <div class="mini-navbar">
                        <a href="#">Hair Oil</a>
                        <a href="#">Shoap</a>
                        <a href="#">White Cream</a>
                        <a href="#">Body Spray</a>
                      </div>
                    </div>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
            <div className="d-none d-lg-block">
              <div className="">
                <div class="hover-trigger">
                  Clothes/Fashion
                  <div class="mini-navbar">
                    <Link to="/clothes/Pants">Pants</Link>
                    <Link to="/clothes/Shirt">Shirt</Link>
                    <Link to="/clothes/Jacket">Jacket</Link>
                    <Link to="/clothes/T-Shirt">T-Shirt</Link>
                    <Link to="/clothes/Polo Shirt">Polo Shirt</Link>
                    <Link to="/clothes/Panjabi">Panjabi</Link>
                    <Link to="/clothes/Benarosi">Benarosi</Link>
                    <Link to="/clothes/Three Piece">Three Piece</Link>
                    <Link to="/clothes/Two Piece">Two Piece</Link>
                    <Link to="/clothes/One Piece">One Piece</Link>
                    <Link to="/clothes/Lehenga">Lehenga</Link>
                  </div>
                </div>
                <div class="hover-trigger">
                  Shoes
                  <div class="mini-navbar">
                    <a href="#">Boys Wear</a>
                    <a href="#">Girls Wear</a>
                    <a href="#">Gents Wear</a>
                    <a href="#">Ladies Wear</a>
                    <a href="#">Kids Wear</a>
                  </div>
                </div>
                <div class="hover-trigger">
                  Electronics
                  <div class="mini-navbar">
                    <a href="#">Mobile</a>
                    <a href="#">LED TV</a>
                    <a href="#">Smart TV</a>
                  </div>
                </div>
                <div class="hover-trigger">
                  Health/Beauty
                  <div class="mini-navbar">
                    <a href="#">Hair Oil</a>
                    <a href="#">Shoap</a>
                    <a href="#">White Cream</a>
                    <a href="#">Body Spray</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link class="coustom-mini-nav" to="/aboutUs">
              About Us
            </Link>
            <Link class="coustom-mini-nav" to="/privacyPolicy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniNavber;
