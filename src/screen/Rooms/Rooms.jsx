import React, { useState } from "react";
import "./rooms.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/container/Navbar/navbar";
import RoomItems from "../../components/RoomItems/RoomItems";
import AutoPlay from "../../components/autoswiper/AutoPlay";
import CFooter from "../../components/Footer/CFooter";
function Rooms() {
  const [showInfo, setShowInfo] = useState(false);
  const [showIcon, setShowIcon] = useState("");
  const [showTitle, setShowTitle] = useState("");
  const [showMeter, setShowMeter] = useState();
  const [showMax, setShowMax] = useState();

  const getRoomTypeData = (title, img, sqm, guest) => {
    setShowIcon(img);
    setShowTitle(title);
    setShowMeter(sqm);
    setShowMax(guest);
    setShowInfo(true);
  };

  const MenuRoomsType = [
    {
      title: "Studio",
      img: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1665626267/sgbh_colection/pic6_pgsidz.jpg",
      sqm: 35.95,
      mGuest: 2,
    },
    {
      title: "Deluxe",
      img: "https://i.ibb.co/sKf0hxj/photo-1631049552057-403cdb8f0658-ixlib-rb-1-2.jpg",
      sqm: 47.93,
      mGuest: 1,
    },
    {
      title: "1 Bedroom Suite",
      img: "https://i.ibb.co/Jp6c3zr/photo-1631049421450-348ccd7f8949-ixlib-rb-1-2.jpg",
      sqm: 68.96,
      mGuest: 3,
    },
    {
      title: "2 Bedroom Suite",
      img: "https://i.ibb.co/XDXqH7X/photo-1621293954908-907159247fc8-ixlib-rb-1-2.jpg",
      sqm: 68.96,
      mGuest: 1,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="rs-cb">
        <div className="rs-sc">
          <AutoPlay />
        </div>
        <div className="rs-tr">
          <p className="rs-p">
            Sotto Grande Cebu Hotel : Accommodation Cebu City Philippines
          </p>
          <Link className="rs-rm" to="/rooms">
            Rooms
          </Link>
          <Link className="rs-rm" to="/reservation">
            Reservations
          </Link>
          <div className="rs-ft">
            <p className="rs-fo">
              Find retreat in the 64 rooms of this accommodation in Quezon City.
              Decked in soothing colors,
              <br /> the design creates a most restful ambience.
            </p>
            <div className="rs-fh">
              <p className="rs-es">
                Each of the Studio, Deluxe Room, and 1 and 2 Bedroom Suites in
                this hotel in Quezon City offers <br />
                comfort and privacy, and comes complete with amenities the
                modern traveler requires.
              </p>
              <RoomItems />
              <div className="rm-fo">
                <div className="rm-container">
                  {MenuRoomsType.map((item, i) => {
                    return (
                      <button
                        key={i}
                        className="tablink"
                        onClick={() =>
                          getRoomTypeData(
                            item.title,
                            item.img,
                            item.sqm,
                            item.mGuest
                          )
                        }
                      >
                        {item.title}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="rm-column">
                {showInfo ? (
                  <img src={showIcon} alt="" className="rm-img" />
                ) : (
                  <img
                    src="https://res.cloudinary.com/dkbbweo5x/image/upload/v1665626267/sgbh_colection/pic6_pgsidz.jpg"
                    alt=""
                    className="rm-img"
                  />
                )}

                <div className="rm-row">
                  <p>{showInfo ? showTitle : "Studio"}</p>
                  <ul className="rs-nav">
                    <li className="t1">{showInfo ? showMeter : 35.95} sqm</li>
                    <li className="t1">
                      Maximum number of paying guests: {showInfo ? showMax : 2}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CFooter />
    </>
  );
}

export default Rooms;
