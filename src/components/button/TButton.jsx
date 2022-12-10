import React from "react";
import "./tbutton.scss";

const TButton = ({ label, onClick, bname }) => {
  return (
    <>
      <div className={bname}>
        <div className="btn-book" onClick={onClick}>
          <span>{label}</span>
        </div>
      </div>
    </>
  );
};

export default TButton;
