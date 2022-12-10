import React from "react";
import "./smallhead.scss";

const SmallHeader = ({ title, cTitle }) => {
  return (
    <>
      <div className={cTitle}>
        <span className="sh-soto">{title}</span>
      </div>
    </>
  );
};

export default SmallHeader;
