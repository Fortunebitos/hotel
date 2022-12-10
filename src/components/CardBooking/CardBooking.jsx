import React from "react";
import "./CardBooking.scss";
import { Link } from "react-router-dom";
const CardBooking = () => {
  return (
    <>
      <div className="cb-main">
        <span className="bt-reserve">Our Rooms</span>
      </div>
      <div className="bt-wrapper">
        <div className="bt-booking">
          <div className="x-content">
            <h4 className="x-title">Studio</h4>
            <p className="x-price">
              price from <b>P 2,500</b> per night
            </p>
            <div className="ft-btn">
              <Link className="c-lo" to="/reservation">
                <span className="ft-label">Book Now</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="x-booking2">
          <div className="x-content2">
            <h4 className="x-title2">Deluxe</h4>
            <p className="x-price2">
              price from <b>P 5,550</b> per night
            </p>
            <div className="ft-btn2">
              <Link className="c2-lo" to="/reservation">
                <span className="ft-label2">Book Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBooking;
