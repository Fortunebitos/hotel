import React from "react";
import "./error.scss";
const Error = () => {
  return (
    <>
      <div className="fort-bitos">
        <div className="cancel">
          <p>
            <b className="err-cl">Cancelation:</b> If cancelled, modified or no
            show, the full booking item amount will be charge.
          </p>
        </div>
        <div className="cancel">
          <p>
            <b className="err-cl">Payment:</b> Full booking item amount will be
            charged.
          </p>
        </div>
        <div className="cancel">
          <p>
            <b className="err-cl">Check-in:</b>14:00
          </p>
        </div>
        <div className="cancel">
          <p>
            <b className="err-cl">Check-in:</b>14:00
          </p>
        </div>
      </div>
    </>
  );
};

export default Error;
