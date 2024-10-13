import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner2.jpg";
import banner2 from "../../../images/banner4.jpg";
import banner3 from "../../../images/banner5.jpg";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const Banner = (props) => {
  const { data: upComing, isLoading } = useQuery("upComing", () =>
    fetch(
      "https://manufacturer-website-server-side-y96m.vercel.app/upComing"
    ).then((res) => res.json())
  );

  // const [upComing, setUpComing] = useState('')

  return (
    <div className="container mt-2">
      <div style={{ height: "75%" }} className="row">
        <div className="col-lg-9">
          <Carousel style={{ zIndex: 0 }}>
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
            {isLoading ? (
              <Loading />
            ) : (
              upComing?.slice(0, 4).map((uCng) => (
                <div key={uCng._id} className="col-6">
                  <img src={uCng.img} className="img-fluid" alt="" />
                  <h6 className="text-center mb-3">{uCng.name}</h6>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
