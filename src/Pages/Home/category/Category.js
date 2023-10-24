import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";
import pantImage from "../../../images/category/pant.jpg";
import shirtImage from "../../../images/category/shirt.jpeg";
import jacketImage from "../../../images/category/Jacket.jpg";
import twoPieceImage from "../../../images/category/two-piece.jpg";
import threePieceImage from "../../../images/category/ThreePiece.jpg";
import tShirtImage from "../../../images/category/t-shirt.jpg";
import sherwaniImage from "../../../images/category/sherwani.jpg";
import poloShirtImage from "../../../images/category/polo-shirt.jpeg";
import onePieceImage from "../../../images/category/one-piece.jpg";
import lehengaImage from "../../../images/category/lehenga.jpg";
import ladiesImage from "../../../images/category/Ladies.jpg";
import kidsImage from "../../../images/category/kids.jpg";
import benarosiImage from "../../../images/category/Benarosi.jpg";
import boysShoesImage from "../../../images/category/boys-shoes.jpg";
import girlsShoesImage from "../../../images/category/girls-shoes.jpg";
import gentsShoesImage from "../../../images/category/gentsShoes.jpg";

function Category() {
  return (
    <div>
      <h2 className="text-center custom-margin-top-10">
        Featured<span className="text-danger"> Categories</span>
      </h2>
      <h6 className="text-center mb-4">
        Get Your Desired Product from Featured Category!
      </h6>

      <div className="container">
        <div className="row">
          <div className="col-6 col-lg-3">
            <div className="row">
              <Link
                to="clothes/Pant"
                className="col-6 castom-padding custom-underline"
              >
                <div className="shadow-lg  " style={{ borderRadius: "20px" }}>
                  <img
                    style={{
                      borderRadius: "20px 20px  0 0",
                      width: "100%",
                    }}
                    src={pantImage}
                    alt=""
                  />

                  <div className="card-body">
                    <p className="c-m-0 text-uppercase text-center">PANT</p>
                  </div>
                </div>
              </Link>
              <Link
                to="clothes/Shirt"
                className="col-6 castom-padding custom-underline"
              >
                <div className="shadow-lg  " style={{ borderRadius: "20px" }}>
                  <img
                    style={{
                      borderRadius: "20px 20px  0 0",
                      width: "100%",
                    }}
                    src={shirtImage}
                    alt=""
                  />

                  <div className="card-body">
                    <p className="c-m-0 text-uppercase  text-center">Shirt</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="row">
              <div className="col-6 castom-padding">
                <div className="shadow-lg  " style={{ borderRadius: "20px" }}>
                  <img
                    style={{
                      borderRadius: "20px 20px  0 0",
                      width: "100%",
                    }}
                    src={jacketImage}
                    alt=""
                  />

                  <div className="card-body">
                    <p className="c-m-0 text-uppercase text-center">JACKET</p>
                  </div>
                </div>
              </div>
              <div className="col-6 castom-padding">
                <div className="shadow-lg  " style={{ borderRadius: "20px" }}>
                  <img
                    style={{
                      borderRadius: "20px 20px  0 0",
                      width: "100%",
                    }}
                    src={tShirtImage}
                    alt=""
                  />

                  <div className="card-body">
                    <p className="c-m-0 text-uppercase text-center">T-Shirt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="row">
              <div className="col-6 castom-padding">
                <div className="shadow-lg  " style={{ borderRadius: "20px" }}>
                  <img
                    style={{
                      borderRadius: "20px 20px  0 0",
                      width: "100%",
                    }}
                    src={poloShirtImage}
                    alt=""
                  />

                  <div className="card-body">
                    <p className="c-m-0 text-uppercase text-center">
                      polo shirt
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 castom-padding">
                <div className="shadow-lg  " style={{ borderRadius: "20px" }}>
                  <img
                    style={{
                      borderRadius: "20px 20px  0 0",
                      width: "100%",
                    }}
                    src={sherwaniImage}
                    alt=""
                  />

                  <div className="card-body">
                    <p className="c-m-0 text-uppercase text-center">Panjabi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="row">
              <div className="col-6 castom-padding">
                <div className="shadow-lg  " style={{ borderRadius: "20px" }}>
                  <img
                    style={{
                      borderRadius: "20px 20px  0 0",
                      width: "100%",
                    }}
                    src={benarosiImage}
                    alt=""
                  />

                  <div className="card-body">
                    <p className="c-m-0 text-uppercase text-center">Benarosi</p>
                  </div>
                </div>
              </div>
              <div className="col-6 castom-padding">
                <div className="shadow-lg  " style={{ borderRadius: "20px" }}>
                  <img
                    style={{
                      borderRadius: "20px 20px  0 0",
                      width: "100%",
                    }}
                    src={threePieceImage}
                    alt=""
                  />

                  <div className="card-body">
                    <p className="c-m-0 text-uppercase text-center">
                      three piece
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="row">
              <div className="col-6 castom-padding">
                <div className="shadow-lg  " style={{ borderRadius: "20px" }}>
                  <img
                    style={{
                      borderRadius: "20px 20px  0 0",
                      width: "100%",
                    }}
                    src={twoPieceImage}
                    alt=""
                  />

                  <div className="card-body">
                    <p className="c-m-0 text-uppercase text-center">
                      two Piece
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 castom-padding">
                <div className="shadow-lg  " style={{ borderRadius: "20px" }}>
                  <img
                    style={{
                      borderRadius: "20px 20px  0 0",
                      width: "100%",
                    }}
                    src={onePieceImage}
                    alt=""
                  />

                  <div className="card-body">
                    <p className="c-m-0 text-uppercase text-center">
                      one piece
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="row">
              <div className="col-6 castom-padding">
                <div className="shadow-lg  " style={{ borderRadius: "20px" }}>
                  <img
                    style={{
                      borderRadius: "20px 20px  0 0",
                      width: "100%",
                    }}
                    src={lehengaImage}
                    alt=""
                  />

                  <div className="card-body">
                    <p className="c-m-0 text-uppercase text-center">lehenga</p>
                  </div>
                </div>
              </div>
              <div className="col-6 castom-padding">
                <div className="shadow-lg  " style={{ borderRadius: "20px" }}>
                  <img
                    style={{
                      borderRadius: "20px 20px  0 0",
                      width: "100%",
                    }}
                    src={boysShoesImage}
                    alt=""
                  />

                  <div className="card-body">
                    <p className="c-m-0 text-uppercase text-center">
                      boys shoes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="row">
              <div className="col-6 castom-padding">
                <div className="shadow-lg  " style={{ borderRadius: "20px" }}>
                  <img
                    style={{
                      borderRadius: "20px 20px  0 0",
                      width: "100%",
                    }}
                    src={girlsShoesImage}
                    alt=""
                  />

                  <div className="card-body">
                    <p className="c-m-0 text-uppercase text-center">
                      Girls shoes
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 castom-padding">
                <div className="shadow-lg  " style={{ borderRadius: "20px" }}>
                  <img
                    style={{
                      borderRadius: "20px 20px  0 0",
                      width: "100%",
                    }}
                    src={gentsShoesImage}
                    alt=""
                  />

                  <div className="card-body">
                    <p className="c-m-0 text-uppercase text-center">
                      gents shoes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="row">
              <div className="col-6 castom-padding">
                <div className="shadow-lg  " style={{ borderRadius: "20px" }}>
                  <img
                    style={{
                      borderRadius: "20px 20px  0 0",
                      width: "100%",
                    }}
                    src={ladiesImage}
                    alt=""
                  />

                  <div className="card-body">
                    <p className="c-m-0 text-uppercase text-center">
                      Ladies shoes
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 castom-padding">
                <div className="shadow-lg  " style={{ borderRadius: "20px" }}>
                  <img
                    style={{
                      borderRadius: "20px 20px  0 0",
                      width: "100%",
                    }}
                    src={kidsImage}
                    alt=""
                  />

                  <div className="card-body">
                    <p className="c-m-0 text-uppercase text-center">
                      Kids shoes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
