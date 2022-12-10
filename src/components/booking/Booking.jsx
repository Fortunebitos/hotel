import BookNow from "../../components/button/TButton";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import { CTooltip } from "@coreui/react";
import "./booking.scss";
import AvailList from "../AvailList/AvailList";
import { CCollapse, CCardBody } from "@coreui/react";
import React, { useState } from "react";
import { DateList } from "../../context/InfoList";
import { Link } from "react-router-dom";

const Booking = (props) => {
  const [showAmeni1, setShowAmeni1] = useState(false);
  const [showAmeni2, setShowAmeni2] = useState(false);
  const [showAmeni3, setShowAmeni3] = useState(false);

  const { uriIMG, rBooked, bedSize, dRooms, nUnits, cDate, nGuests, amount } =
    props;

  const onHandleAmenities1 = () => {
    setShowAmeni1(!showAmeni1);
  };

  const onHandleAmenities2 = () => {
    setShowAmeni2(!showAmeni2);
  };

  const onHandleAmenities3 = () => {
    setShowAmeni3(!showAmeni3);
  };

  return (
    <>
      <div className="booking">
        <div className="top">
          <img src={uriIMG} alt="" className="image-room" />
          <div className="wrapper">
            <span className="title">{rBooked}</span>
            <span className="p1" onClick={onHandleAmenities1}>
              View all amenities
            </span>
            <CCollapse visible={showAmeni1}>
              <CCardBody className="t-1">
                <ul>
                  <li className="t1">{DateList[0].aminities1}</li>
                  <li className="t1">{DateList[0].aminities2}</li>
                  <li className="t1">{DateList[0].aminities3}</li>
                  <li className="t1">{DateList[0].aminities4}</li>
                  <li className="t1">{DateList[0].aminities5}</li>
                </ul>
              </CCardBody>
            </CCollapse>

            <p className="p1">
              Bed size: {bedSize} Queen Bedroom size: {dRooms} sqm
            </p>
            <div className="free-wrapper">
              <div className="refund">
                <span className="p2">No refund</span>

                <CTooltip placement="right" className="ctool">
                  <ErrorOutlinedIcon
                    className="error-icon"
                    onClick={onHandleAmenities2}
                  />
                </CTooltip>
              </div>
              <div className="break">
                <span className="p2">Breakfast included </span>
                <RestaurantOutlinedIcon className="res" />
              </div>
            </div>
          </div>

          <div className="b-cost">
            <span className="b-details">Rooms Details</span>
            <div className="b-row1">
              <span className="b-rooms">Number of units : {nUnits} room</span>
              <span className="b-rooms">
                Number of guests : {nGuests} adults
              </span>
              <span className="b-tcost">Total price: {amount} per night</span>
            </div>

            <div className="h-right">
              <Link className="c2-lo" to="/mdal">
                <BookNow bname="book-wrapper1" label="Book Now" />
              </Link>
              <BookNow bname="book-wrapper2" label="Cancel" />
            </div>
          </div>
        </div>
        <CCollapse visible={showAmeni2}>
          <CCardBody>
            <div className="error-toast">
              <div className="cancel">
                <p>
                  <b>Cancellation: </b>If cancelled, modified or in case of
                  no-show, no penalty will be charged.
                </p>
              </div>
              <div className="in">
                <p>
                  <b>Check-in: </b>14:00
                </p>
              </div>
              <div className="out">
                <p>
                  <b>Check-out: </b>12:00
                </p>
              </div>
              <div className="other">
                <p>
                  <b>Other Policies:</b> Guests aged 12 and above are considered
                  adults and require additional rate.
                </p>
              </div>
            </div>
          </CCardBody>
        </CCollapse>
        <div className="col-center">
          <div className="center">
            <div className="lcenter">
              <span className="c-title">{rBooked} - Room Only (OTA)</span>
              <span className="c-warn">Free cancellation before {cDate}</span>
            </div>
            <div className="mcenter">
              <PeopleAltOutlinedIcon className="people" />
              <span className="m-adults"> {nGuests} adults</span>
            </div>
            <div className="mmid">
              <span className="m-amount">₱ {amount}</span>
              <span className="m-per">per night</span>
            </div>
            <div className="mright">
              <select id="rooms" className="b-rooms">
                <option value="0">0 rooms</option>
                <option value="1">1 rooms</option>
                <option value="2">2 rooms </option>
                <option value="3">3 rooms</option>
                <option value="4">4 rooms</option>
                <option value="5">5 rooms</option>
                <option value="6">6 rooms </option>
                <option value="7">7 rooms</option>
                <option value="8">8 rooms</option>
                <option value="9">9 rooms</option>
                <option value="10">10 rooms</option>
              </select>
              <CalendarMonthOutlinedIcon
                onClick={onHandleAmenities3}
                className="cal"
              />
            </div>
          </div>
        </div>

        <CCollapse visible={showAmeni3}>
          <CCardBody>
            <AvailList />
          </CCardBody>
        </CCollapse>
      </div>
    </>
  );
};

export default Booking;
