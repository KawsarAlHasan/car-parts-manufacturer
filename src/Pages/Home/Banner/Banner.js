import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner2.jpg";
import banner2 from "../../../images/banner4.jpg";
import banner3 from "../../../images/banner5.jpg";
import cs1 from "../../../images/glasses-category-img-2.jpg";
import cs2 from "../../../images/retail-black-friday-small-banner-2-opt.jpg";
import cs3 from "../../../images/retail-black-friday-small-banner-1-opt.jpg";
import cs4 from "../../../images/retail-black-friday-small-banner-4-opt.jpg";

const Banner = (props) => {
  return (
    <div className="container mt-2">
      <div style={{ height: "75%" }} className="row">
        <div className="col-lg-9">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={banner1} alt="First slide" />
              <Carousel.Caption>
                <h3>Polo Shirt</h3>
                <button className="c-btn">SHOPING NOW</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={banner2} alt="Second slide" />

              <Carousel.Caption>
                <h3>Ladies Jacket</h3>
                <button className="c-btn">SHOPING NOW</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={banner3} alt="Third slide" />

              <Carousel.Caption>
                <h3>Ladies Jacket</h3>
                <button className="c-btn">SHOPING NOW</button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-lg-3 d-none d-lg-block">
          <h2 className="text-center mt-5 pb-4">
            Cooming <span className="text-danger">Soon...</span>
          </h2>
          <div className="row">
            <div className="col-6">
              <img src={cs1} className="img-fluid" alt="" />
              <h6 className="text-center mb-3">Sun Glasses</h6>
            </div>
            <div className="col-6">
              <img src={cs2} className="img-fluid" alt="" />
              <h6 className="text-center mb-3">Sun Glasses</h6>
            </div>
            <div className="col-6">
              <img src={cs3} className="img-fluid" alt="" />
              <h6 className="text-center mb-3">Sun Glasses</h6>
            </div>
            <div className="col-6">
              <img src={cs4} className="img-fluid" alt="" />
              <h6 className="text-center mb-3">Sun Glasses</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
