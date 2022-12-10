import React, { useState } from "react";
import "./reserve.scss";
import { Link } from "react-router-dom";
import RList from "../../components/reservList/RList";
import Booking from "../../components/booking/Booking";
import AutoPlay from "../../components/autoswiper/AutoPlay";
import CFooter from "../../components/Footer/CFooter";
import { DateList } from "../../context/InfoList";
import Navbar from "../../components/container/Navbar/navbar";
const Reserve = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const onhandleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <>
      <Navbar />
      <div className="rs-co">
        <div className="rs-so">
          <AutoPlay />
        </div>
        <div className="rs-to">
          <p className="rs-o">
            Sotto Grande Cebu Hotel : Accommodation Cebu City Philippines
          </p>
          <Link className="rt-ro" to="/rooms">
            Rooms
          </Link>
          <Link className="rt-ro" to="/reservation">
            Reservations
          </Link>
        </div>

        <div className="rs-head">
          <RList />

          <Booking
            uriIMG={DateList[0].uriIMG}
            rBooked={DateList[0].rBooked}
            bedSize={DateList[0].bedSize}
            dRooms={DateList[0].dRooms}
            nUnits={DateList[0].nUnits}
            amount={DateList[0].amount}
            cDate={DateList[0].cDate}
            nGuests={DateList[0].nGuests}
            toggleShow={onhandleCalendar}
            showShow={showCalendar}
          />

          <Booking
            uriIMG={DateList[1].uriIMG}
            rBooked={DateList[1].rBooked}
            bedSize={DateList[1].bedSize}
            dRooms={DateList[1].dRooms}
            nUnits={DateList[1].nUnits}
            amount={DateList[1].amount}
            cDate={DateList[1].cDate}
            nGuests={DateList[1].nGuests}
            toggleShow={onhandleCalendar}
            showShow={showCalendar}
          />

          <Booking
            uriIMG={DateList[2].uriIMG}
            rBooked={DateList[2].rBooked}
            bedSize={DateList[2].bedSize}
            dRooms={DateList[2].dRooms}
            nUnits={DateList[2].nUnits}
            amount={DateList[2].amount}
            cDate={DateList[2].cDate}
            nGuests={DateList[2].nGuests}
            toggleShow={onhandleCalendar}
            showShow={showCalendar}
          />

          <Booking
            uriIMG={DateList[3].uriIMG}
            rBooked={DateList[3].rBooked}
            bedSize={DateList[3].bedSize}
            dRooms={DateList[3].dRooms}
            nUnits={DateList[3].nUnits}
            amount={DateList[3].amount}
            cDate={DateList[3].cDate}
            nGuests={DateList[3].nGuests}
            toggleShow={onhandleCalendar}
            showShow={showCalendar}
          />
        </div>
      </div>
      <CFooter />
    </>
  );
};

export default Reserve;
