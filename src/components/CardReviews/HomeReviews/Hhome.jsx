import React from "react";
import Rating from "@mui/material/Rating";
import "./hhome.scss";
const Hhome = (props) => {
  const { name, star, time, content, cCard } = props;
  return (
    <>
      <div className={cCard}>
        <div className="c-top">
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

export default Hhome;
