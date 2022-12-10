import React from "react";
import "./gallery.scss";
import Swiper from "../../components/SwiperLayout/RSwiper";
import { General, Rooms, Pool } from "../../context/ImageList";
import AutoPlay from "../../components/autoswiper/AutoPlay";
import CFooter from "../../components/Footer/CFooter";
import Navbar from "../../components/container/Navbar/navbar";
const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="gallery-fb">
        <div className="gallery-sp">
          <AutoPlay />
        </div>
        <div className="f-container">
          <p className="rs-o">Sotto Grande Cebu Hotel : Gallery</p>
          <Swiper data={General} title="General" />
          <Swiper data={Rooms} title="Rooms" />
          <Swiper data={Pool} title="Pool" />
        </div>
      </div>

      <CFooter />
    </>
  );
};

export default Gallery;
