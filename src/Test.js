import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "./images/banner2.jpg";
import slide_image_2 from "./images/banner4.jpg";
import slide_image_3 from "./images/banner5.jpg";

function Test() {
  return (
    <div className="container1">
      <Swiper
        style={{ zIndex: 0 }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img
            className="d-block w-100"
            src={slide_image_1}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="d-block w-100"
            src={slide_image_2}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="d-block w-100"
            src={slide_image_3}
            alt="slide_image"
          />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Test;
