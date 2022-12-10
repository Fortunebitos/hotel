import React from "react";
import AutoPlay from "../../components/autoswiper/AutoPlay";
import "./menu.scss";
import { Link } from "react-router-dom";
import CFooter from "../../components/Footer/CFooter";
import Navbar from "../../components/container/Navbar/navbar";
const MenuList = () => {
  return (
    <>
      <Navbar />
      <AutoPlay />
      <div className="m-menu">
        <p>Sitemap</p>

        <div className="m-second">
          <ul className="m-nav">
            <li className="cf-copyt">
              <Link className="cf-copyt" to="/home">
                Home
              </Link>
            </li>
          </ul>

          <ul className="m-nav">
            <li className="cf-copyt">
              <Link className="cf-copyt" to="/rooms">
                Rooms
              </Link>
            </li>
          </ul>

          <ul className="m-nav">
            <li className="cf-copyt">
              <Link className="cf-copyt" to="/reservation">
                Reservation
              </Link>
            </li>
          </ul>

          <ul className="m-nav">
            <li className="cf-copyt">
              <Link className="cf-copyt" to="/gallery">
                Facilities
              </Link>
            </li>
          </ul>

          <ul className="m-nav">
            <li className="cf-copyt">
              <Link className="cf-copyt" to="/gallery">
                Gallery
              </Link>
            </li>
          </ul>

          <ul className="m-nav">
            <li className="cf-copyt">
              <Link className="cf-copyt" to="/reviews">
                Reviews
              </Link>
            </li>
          </ul>

          <ul className="m-nav">
            <li className="cf-copyt">
              <Link className="cf-copyt" to="/location">
                Location
              </Link>
            </li>
          </ul>

          <ul className="m-nav">
            <li className="cf-copyt">
              <Link className="cf-copyt" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <ul className="m-nav">
            <li className="cf-copyt">
              <Link className="cf-copyt" to="/home">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <CFooter />
    </>
  );
};

export default MenuList;
