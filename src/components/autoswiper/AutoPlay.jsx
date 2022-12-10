import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { General } from "../../context/ImageList";
import "./autoplay.scss";

const AutoPlay = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination]}
        style={{ marginBottom: "1rem" }}
        className="mySwiper"
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      >
        {General.map((item, i) => {
          return (
            <SwiperSlide className="sw-wrapper" key={i}>
              <img src={item} alt="slider" className="sw-img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default AutoPlay;
