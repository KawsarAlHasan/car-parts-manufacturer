import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

function MiniNavber() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className=" custom-mini">
        <div className="container d-flex justify-content-between">
          <div>
            <div className="d-block d-lg-none">
              <div className="coustom-mini-nav" onClick={handleShow}>
                Category
              </div>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Category</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="">
                    <div className="hover-trigger">
                      Clothes/Fashion
                      <div className="mini-navbar">
                        <a href="/products/clothes/Pant">Pant</a>
                        <a href="/products/clothes/Shirt">Shirt</a>
                        <a href="/products/clothes/Jacket">Jacket</a>
                        <a href="/products/clothes/T-Shirt">T-Shirt</a>
                        <a href="/products/clothes/Polo Shirt">Polo Shirt</a>
                        <a href="/products/clothes/Panjabi">Panjabi</a>
                        <a href="/products/clothes/Benarosi">Benarosi</a>
                        <a href="/products/clothes/Three Piece">Three Piece</a>
                        <a href="/products/clothes/Two Piece">Two Piece</a>
                        <a href="/products/clothes/One Piece">One Piece</a>
                        <a href="/products/clothes/Lehenga">Lehenga</a>
                      </div>
                    </div>
                    <div className="hover-trigger">
                      Shoes
                      <div className="mini-navbar">
                        <a href="/products/shoes/Boys">Boys</a>
                        <a href="/products/shoes/Girls">Girls</a>
                        <a href="/products/shoes/Gents">Gents</a>
                        <a href="/products/shoes/Ladies">Ladies</a>
                        <a href="/products/shoes/Kids">Kids</a>
                      </div>
                    </div>
                    <div className="hover-trigger">
                      Electronics
                      <div className="mini-navbar">
                        <a href="/products/electronics/Mobile">Mobile</a>
                        <a href="/products/electronics/LED TV">LED TV</a>
                        <a href="/products/electronics/Smart TV">Smart TV</a>
                      </div>
                    </div>
                    <div className="hover-trigger">
                      Health/Beauty
                      <div className="mini-navbar">
                        <a href="/products/Health-Beauty/Hair Oil">Hair Oil</a>
                        <a href="/products/Health-Beauty/Shoap">Shoap</a>
                        <a href="/products/Health-Beauty/White Cream">
                          White Cream
                        </a>
                        <a href="/products/Health-Beauty/Body Spray">
                          Body Spray
                        </a>
                      </div>
                    </div>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
            <div className="d-none d-lg-block">
              <div className="">
                <div className="hover-trigger">
                  Clothes/Fashion
                  <div className="mini-navbar">
                    <Link to="/products/clothes/Pant">Pant</Link>
                    <Link to="/products/clothes/Shirt">Shirt</Link>
                    <Link to="/products/clothes/Jacket">Jacket</Link>
                    <Link to="/products/clothes/T-Shirt">T-Shirt</Link>
                    <Link to="/products/clothes/Polo Shirt">Polo Shirt</Link>
                    <Link to="/products/clothes/Panjabi">Panjabi</Link>
                    <Link to="/products/clothes/Benarosi">Benarosi</Link>
                    <Link to="/products/clothes/Three Piece">Three Piece</Link>
                    <Link to="/products/clothes/Two Piece">Two Piece</Link>
                    <Link to="/products/clothes/One Piece">One Piece</Link>
                    <Link to="/products/clothes/Lehenga">Lehenga</Link>
                  </div>
                </div>
                <div className="hover-trigger">
                  Shoes
                  <div className="mini-navbar">
                    <Link to="/products/shoes/Boys">Boys</Link>
                    <Link to="/products/shoes/Girls">Girls</Link>
                    <Link to="/products/shoes/Gents">Gents</Link>
                    <Link to="/products/shoes/Ladies">Ladies</Link>
                    <Link to="/products/shoes/Kids">Kids</Link>
                  </div>
                </div>
                <div className="hover-trigger">
                  Electronics
                  <div className="mini-navbar">
                    <Link to="/products/electronics/Mobile">Mobile</Link>
                    <Link to="/products/electronics/LED TV">LED TV</Link>
                    <Link to="/products/electronics/Smart TV">Smart TV</Link>
                  </div>
                </div>
                <div className="hover-trigger">
                  Health/Beauty
                  <div className="mini-navbar">
                    <Link to="/products/Health-Beauty/Hair Oil">Hair Oil</Link>
                    <Link to="/products/Health-Beauty/Shoap">Shoap</Link>
                    <Link to="/products/Health-Beauty/White Cream">
                      White Cream
                    </Link>
                    <Link to="/products/Health-Beauty/Body Spray">
                      Body Spray
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link className="coustom-mini-nav" to="/aboutUs">
              About
            </Link>
            <Link className="coustom-mini-nav" to="/contact">
              Contact
            </Link>
            <Link className="coustom-mini-nav" to="/privacyPolicy">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniNavber;
