import React, { useState } from "react";
import Navbar from "../../components/container/Navbar/navbar";
import AutoPlay from "../../components/autoswiper/AutoPlay";
import "./cn.scss";
import BOption from "../../components/Option/BookOp/BOption";
import PhoneInput from "react-phone-number-input";
import BookNow from "../../components/button/TButton";
import CFooter from "../../components/Footer/CFooter";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
const CNitems = () => {
  const [phone, setPhone] = useState();
  const [show, setShow] = useState(false);

  const [bdatas, setBdatas] = useState({
    coment: "",
    label: "",
    fullname: "",
    uGmail: "",
    country: "",
  });

  const { coment, label, fullname, uGmail, country } = bdatas;

  const onHandleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBdatas({ ...bdatas, [name]: value });
  };

  let datas = {
    coment: coment,
    label: label,
    fullname: fullname,
    uGmail: uGmail,
    country: country,
    phone: phone,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_u72w9m7", "template_onhz8er", datas, "XnZuPLhuMpPQh2z20")
      .then(
        () => {
          alert("Success");
          setShow(!show);
        },
        (error) => {
          alert(error);
        }
      );
  };
  return (
    <>
      <Navbar />
      <AutoPlay />
      <div className="c-mani">
        <div className="c-top">
          <p>Contact Soto Grande Cebu Hotel in Cebu City, Phillipines</p>
        </div>
        <div className="c-mid">
          <div className="c-left">
            <div className="ad-ss">
              <p>
                <b>Address:</b> 155 Mother Ignacia Avenue, Quezon City,
                Philippines
                <br />
                <Link className="rs-to" to="/location">
                  Click here to view our location.
                </Link>
              </p>

              <p className="ad-ph">
                <b>Phone:</b> +63 9615 690 642
                <br /> <b>Mobile:</b> +63 917 893 2676
              </p>

              <p className="ad-qc">
                Have the luxury of a central location, along with high quality
                accommodation and facilities and stay at La Breza Hotel in
                Quezon City. Contact us today.
              </p>
            </div>
          </div>

          <div className="c-right">
            <div className="b-contain">
              <div className="f-row">
                <div className="bc-column">
                  <span>Title</span>
                  <select name="label" value={label} onChange={onHandleChange}>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Dr.">Dr.</option>
                  </select>
                </div>
                <div className="ac-column">
                  <span>Full Name</span>
                  <input
                    type="name"
                    name="fullname"
                    value={fullname}
                    onChange={onHandleChange}
                  />
                </div>
              </div>
              <div className="gmail">
                <div className="gm-column">
                  <span>Email</span>
                  <input
                    type="email"
                    name="uGmail"
                    value={uGmail}
                    onChange={onHandleChange}
                  />
                </div>
              </div>
              <div className="cn-number">
                <div className="cn-title">
                  <span>Contact phone</span>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={setPhone}
                    defaultCountry="PH"
                    international
                    className="ph-cp"
                  />
                </div>
                <div className="cn-country">
                  <span>Nationality (optional)</span>
                  <BOption
                    name="country"
                    value={country}
                    onChange={onHandleChange}
                  />
                </div>
              </div>
              <div className="c-sd">
                <div className="c-st">
                  <span>Send To</span>
                  <select name="name">
                    <option value="">General</option>
                  </select>
                </div>
              </div>
              <div className="cm-send">
                <div className="cm">
                  <span>Send</span>
                  <textarea
                    type="text"
                    name="coment"
                    value={coment}
                    onChange={onHandleChange}
                    className="cn-txt"
                  ></textarea>
                </div>
              </div>
              <BookNow bname="book-wrapper5" label="Send" onClick={sendEmail} />
            </div>
          </div>
        </div>
      </div>
      <CFooter />
    </>
  );
};

export default CNitems;
