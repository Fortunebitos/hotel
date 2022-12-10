import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./collapse.scss";
import { availDateList } from "../../context/HCardList";

const AvailList = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={3}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 3,
          },
          "@0.75": {
            slidesPerView: 4,
          },
          "@1.00": {
            slidesPerView: 6,
          },
          "@1.50": {
            slidesPerView: 8,
          },
        }}
        className="mySwiper8"
      >
        {availDateList.map((item, i) => {
          return (
            <SwiperSlide className="rs-ss">
              <div key={i} className="al-row">
                <span className="al-date">{item.date}</span>
                <span className="al-price"> ₱ {item.amount}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default AvailList;
