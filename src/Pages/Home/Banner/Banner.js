import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner2.jpg";
import banner2 from "../../../images/banner4.jpg";
import banner3 from "../../../images/banner5.jpg";

const Banner = (props) => {
  return (
    <div className="container">
      <div style={{ height: "75%" }} className="row">
        <div className="col-lg-9">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={banner1} alt="First slide" />
              <Carousel.Caption>
                <h3>Car Engine</h3>
                <p>A car engine is an internal combustion engine</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={banner2} alt="Second slide" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={banner3} alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-lg-3" style={{ border: "1px solid red" }}></div>
      </div>
    </div>
  );
};

export default Banner;
