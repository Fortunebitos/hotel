import React, { useState } from "react";
import "./mdal.scss";
import BOption from "../../components/Option/BookOp/BOption";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import emailjs from "@emailjs/browser";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
export const MDal = () => {
  const [phone, setPhone] = useState();
  const [show, setShow] = useState(false);

  const [bdatas, setBdatas] = useState({
    bnumber: "WEC5EF1663772894",
    coment: "",
    label: "",
    username: "",
    country: "",
    uGmail: "",
    rGmail: "",
    cIn: "Check-in: Saturday, November 26, 2022 from 14:00",
    cOut: "Check-out: Monday, November 28, 2022 until 12:00",
    bRooms: "Deluxe",
    bOn: null,
    rPrice: "5,000.00",
    tPrice: "5,000.00",
    bPrice: "5,000.00 Prices include all local taxes.",
    nUnit: "",
    nGuest1: "",
    nGuest2: "",
  });

  const {
    bnumber,
    coment,
    label,
    username,
    lastname,
    country,
    uGmail,
    rGmail,
    cIn,
    cOut,
    bRooms,

    rPrice,
    tPrice,
    bPrice,
    nUnit,
    nGuest1,
    nGuest2,
  } = bdatas;

  const onHandleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBdatas({ ...bdatas, [name]: value });
  };

  const today = new Date();
  const date = today.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  let datas = {
    bnumber: bnumber,
    coment: coment,
    label: label,
    username: username,
    lastname: lastname,
    country: country,
    uGmail: uGmail,
    rGmail: rGmail,
    phone: phone,
    cIn: cIn,
    cOut: cOut,
    bRooms: bRooms,
    bOn: date,
    rPrice: rPrice,
    tPrice: tPrice,
    bPrice: bPrice,
    nUnit: nUnit,
    nGuest1: nGuest1,
    nGuest2: nGuest2,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_u72w9m7", "sgc_3vfbjk9", datas, "XnZuPLhuMpPQh2z20")
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
    <div className="main">
      <div className="sec-main">
        <div className="thir-main">
          <Link className="rt-ro" to="/reservation">
            <img
              src="https://res.cloudinary.com/dkg6aexz0/image/upload/v1667802812/Android_Small_-_1_3_px8ilz.png"
              alt=""
              className="rm-img"
            />
          </Link>
        </div>
        <div className="fort-main">
          <p>
            <b>Soto Grande Cebu Hotel </b>
          </p>

          <div className="fifth-main">
            <p>
              <b>Check-in:</b> Saturday, November 26, 2022 from 14:00
              <br />
              <b>Check-out :</b> Monday, November 28, 2022 until 12:00
              <br />
              (Travelling on different dates?)
            </p>
          </div>
        </div>
        <div className="six-main">
          <p>
            <b>Accommodation Booking</b>
          </p>

          <div className="sev-main">
            <div className="ac-bk">
              <p>
                <b>Deluxe</b>
                <br />
                <b className="fc">Free cancellation before Nov 20, 2022</b>
                <br />
                <b>Details:</b> 1 room, 1 night, 2 adults included in price
              </p>
            </div>
            <div className="a-roww">
              <div className="eight-main">
                <span>Number of units</span>
                <select
                  name="nUnit"
                  value={nUnit}
                  onChange={onHandleChange}
                  className="ct-name"
                >
                  <option value="0">0 room</option>
                  <option value="1">1 room</option>
                </select>
              </div>
              <div className="b-columnn">
                <div className="eight-main1">
                  <span>Number of guest1</span>
                  <select
                    name="nGuest1"
                    value={nGuest1}
                    onChange={onHandleChange}
                    className="ct-name"
                  >
                    <option value="2 adults">2 adults</option>
                    <option value="1 adult, 1 child">1 adult, 1 child</option>
                    <option value="1 adult">1 adult</option>
                  </select>
                </div>

                <div className="eight-main2">
                  <span>Number of guest 2</span>
                  <select
                    name="nGuest2"
                    value={nGuest2}
                    onChange={onHandleChange}
                    className="ct-name"
                  >
                    <option value="2 adults">2 adults</option>
                    <option value="1 adult, 1 child">1 adult, 1 child</option>
                    <option value="1 adult">1 adult</option>
                  </select>
                </div>
              </div>
              <div className="nine-main">
                <p>
                  <b>₱ 5,000</b>
                  <br />
                  Booking Policies
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="m-wrapper">
          <div className="left-panel">
            <div className="a-top">
              <span>
                <b>Profile Summary</b>
              </span>
              <div className="ac">
                <div className="ac-row">
                  <span className="title">Accommodation charge</span>
                  <span className="amount">₱ 2,800.00</span>
                </div>
              </div>
              <div className="tc-roww">
                <div className="tc">
                  <div className="tcc-row">
                    <span className="title">
                      <b>Total price</b>
                    </span>
                    <span className="amount">
                      <b>₱ 2,800.00</b>
                    </span>
                  </div>
                  <div className="col-pc">
                    <span className="price">
                      Prices include all local taxes.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="a-center">
              <span className="title">Deposit Due Now</span>
              <span className="amount">₱ 2,800.00</span>
            </div>
            <div className="bp">
              <span className="title">
                <b>Booking Policies</b>
              </span>
            </div>
            <div className="a-bot">
              <span className="title">Studio</span>
              <span className="cancel">
                <b>Cancellation:</b> If cancelled, modified or no show, the full
                booking item amount will be charged.
              </span>
              <span className="pym">
                Payment: Full booking item amount will be charged.
              </span>
            </div>
          </div>

          <div className="right-panel">
            <div className="b-top">
              <span>
                <b>Guest Details</b>
              </span>
            </div>
            <div className="b-bottom">
              <div className="b-center">
                <div className="name-row">
                  <div className="b-titles">
                    <span>Title</span>
                    <select
                      name="label"
                      value={label}
                      onChange={onHandleChange}
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Dr.">Dr.</option>
                    </select>
                  </div>
                  <div className="b-fname">
                    <span>First Name</span>
                    <input
                      name="username"
                      value={username}
                      onChange={onHandleChange}
                      type="name"
                    ></input>
                  </div>
                  <div className="b-lname">
                    <span>Last Name</span>
                    <input
                      type="name"
                      name="lastname"
                      value={lastname}
                      onChange={onHandleChange}
                    ></input>
                  </div>
                </div>

                <div className="gmail">
                  <div className="g-titles">
                    <span>Email</span>
                    <input
                      type="email"
                      name="uGmail"
                      value={uGmail}
                      onChange={onHandleChange}
                    ></input>
                  </div>
                  <div className="g-type">
                    <span>Retype email</span>
                    <input
                      type="email"
                      name="rGmail"
                      value={rGmail}
                      onChange={onHandleChange}
                    ></input>
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
                    <span>Country</span>
                    <BOption
                      name="country"
                      value={country}
                      onChange={onHandleChange}
                      className="cn-option"
                    />
                  </div>
                </div>

                <div className="b-end">
                  <div className="g-ac">
                    <span>Additional comments (optional)</span>
                    <textarea
                      type="text"
                      name="coment"
                      value={coment}
                      onChange={onHandleChange}
                      className="g-txt"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="a-row">
                <div className="py">
                  <span className="title">
                    <b>Pay With</b>
                  </span>
                </div>

                <div className="a-bot1">
                  <span>
                    We guarantee your booking now and we will contact you soon
                    to inform about the payment policies. By clicking on the
                    button below you indicate that you have read and agree to
                    the Booking Policies.
                  </span>
                  <span className="pym">
                    Payment: Full booking item amount will be charged.
                  </span>
                </div>
                <div className="b-bot">
                  <input className="in-put" type="checkbox"></input>
                  <span>
                    Please check this box to indicate that you have read and
                    agree to the Booking Policies.
                  </span>
                  <div className="md-bt" onClick={sendEmail}>
                    <LockClockOutlinedIcon className="md-ic" />
                    Confirm Book
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MDal;
