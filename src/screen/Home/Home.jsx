import "./home.scss";
import HCardRooms from "../../context/HCardRooms";
import { HCardList } from "../../context/HCardList";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import CardBooking from "../../components/CardBooking/CardBooking";
import CFooter from "../../components/Footer/CFooter";
import { Link } from "react-router-dom";
import HMswiper from "../../components/SwiperLayout/HomeSwiper/HMswiper";
import Navbar from "../../components/container/Navbar/navbar";
const Home = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="h-main">
          <div className="h-brow">
            <div className="h-left">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Start Date"
                  startDate={startDate}
                  endDate={endDate}
                  renderInput={(params) => <TextField {...params} />}
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e);
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className="h-center">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  className="d-wrapper"
                  label="End Date"
                  startDate={startDate}
                  endDate={endDate}
                  renderInput={(params) => <TextField {...params} />}
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e);
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className="h-right">
              <Link className="c2-lo" to="/reservation">
                <span className="d-book">BOOK NOW</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-title">
          <span>Soto Grande Cebu Hotel | Cebu City, Philippines</span>
        </div>
        <div className="h-p-wrapper">
          <p className="h-p1">
            Sotogrande Cebu, a prime development of Sta. Lucia Land, Inc in the
            City of Pines is a mixture of classy and charming living. Enjoy the
            cool weather the city has to offer anytime you want without worrying
            about the hassle of finding a place to stay.
          </p>
          <p className="h-p2">
            Known for being the "More Beautiful Beach of the Philippines", Cebu
            City is a go-to place for locals because of its cool climate even on
            sunny days. Nowadays, the city is considered to be one the most
            progressive due to the opportunities being opened.
          </p>
        </div>

        <div className="card-wrapper">
          {HCardList.map((item, i) => {
            return (
              <HCardRooms
                src={item.icon}
                title={item.title}
                text={item.des}
                className="cf-title"
                font="cf-des"
              />
            );
          })}
        </div>

        <div className='"card-wrapper'>
          <CardBooking />
        </div>
        <div className="c-home">
          <HMswiper />
        </div>
      </div>
      <CFooter />
    </>
  );
};
export default Home;
