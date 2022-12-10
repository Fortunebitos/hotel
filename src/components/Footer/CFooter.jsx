import React from "react";
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from "cdbreact";
import "./cfooter.scss";
import { Link } from "react-router-dom";
const CFooter = () => {
  return (
    <CDBFooter className="cf-sot">
      <CDBBox display="flex" alignItems="center" className="cf-main">
        <CDBBox display="flex" alignItems="center">
          <img
            src="https://res.cloudinary.com/dkg6aexz0/image/upload/v1667803530/Android_Small_-_1_4_e06kg7.png"
            alt=""
            className="rm-img"
            min-width="100%"
          />

          <span className="cf-soto">
            Address: 155 Mother Ignacia Avenue, Quezon City, Philippines
            <br /> Phone: +63 2 8990 4452 <br />
            Mobile: +63 917 893 2676
          </span>
        </CDBBox>
        <CDBBox>
          <Link className="cf-copyt" to="/menu">
            Sitemap
          </Link>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="cf-fb">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="cf-fb">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="cf-fb">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
      <CDBBox alignItems="center">
        <span className="copy-right">@Copyright reserved 2022</span>
        <p>Fortune Bitos Dev.</p>
      </CDBBox>
    </CDBFooter>
  );
};
export default CFooter;
