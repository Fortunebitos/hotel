import React from "react";
import "./ccarrd.scss";
import Rating from "@mui/material/Rating";

const Ccard = (props) => {
  const { name, star, time, content, icon, cCard } = props;
  return (
    <>
      <div className={cCard}>
        <div className="c-top">
          <img src={icon} alt="Profile" className="c-pro" />

          <div className="c-name">
            <div className="c-fort">
              <Rating
                name="read-only"
                value={star}
                readOnly
                className="c-star"
              />
              <span className="time">{time}</span>
            </div>
            <span className="name">{name}</span>
          </div>
        </div>
        <div className="c-bottom">
          <p className="cc-content">{content}</p>
        </div>
      </div>
    </>
  );
};

export default Ccard;
