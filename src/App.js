import React from "react";
import Reviews from "./screen/Reviews/Reviews";
import Contact from "./screen/ContactUs/Contact";
import Rooms from "./screen/Rooms/Rooms";
import Facilities from "./screen/Facilities/Facilities";
import Gallery from "./screen/Gallery/Gallery";
import Home from "./screen/Home/Home";
import Location from "./screen/location/Location";
import Reservation from "../src/screen/Reservation/Reserve";
import { Routes as Fortune, Route as Mimis } from "react-router-dom";
import MenuList from "../src/screen/menu/MenuList";
import "./App.css";
import MDal from "../src/components/MdalR/MDal";
function App() {
  return (
    <>
      <div className="root">
        <Fortune>
          <Mimis path="hotel/" element={<Home />} />
          <Mimis path="/" element={<Home />} />
          <Mimis path="/home" element={<Home />} />
          <Mimis path="/rooms" element={<Rooms />} />
          <Mimis path="/reservation" element={<Reservation />} />
          <Mimis path="/facilities" element={<Facilities />} />
          <Mimis path="/gallery" element={<Gallery />} />
          <Mimis path="/reviews" element={<Reviews />} />
          <Mimis path="/contact" element={<Contact />} />
          <Mimis path="/location" element={<Location />} />
          <Mimis path="/menu" element={<MenuList />} />
          <Mimis path="/mdal" element={<MDal />} />
        </Fortune>
      </div>
    </>
  );
}

export default App;
