import "./navbar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarItems from "./NavbarItems";

function Navbar() {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };

  return (
    <nav className="nav">
      <div className="nav_brand">
        <img
          src="https://res.cloudinary.com/dkg6aexz0/image/upload/v1667802812/Android_Small_-_1_3_px8ilz.png"
          alt=""
          className="rm-img1"
        />
      </div>
      <ul className={active}>
        {NavbarItems.map((item, i) => {
          return (
            <li className="nav_items" key={i}>
              <NavLink to={item.path} className="nav_link">
                {item.link}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
