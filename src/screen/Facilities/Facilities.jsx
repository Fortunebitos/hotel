import React from "react";
import AutoPlay from "../../components/autoswiper/AutoPlay";
import "./facilities.scss";
import CFooter from "../../components/Footer/CFooter";
import Navbar from "../../components/container/Navbar/navbar";

const Facilities = () => {
  return (
    <>
      <Navbar />
      <AutoPlay />
      <div className="main-cl">
        <p className="fc-sot">Sotto Cebu Hotel : Cebu City Facilities</p>
      </div>
      <div className="for-met">
        <p className="t1-ceb">
          Apart from comfortable rooms, this hotel in Cebu City has put together
          a list of facilities for business and leisure that will provide more
          pleasure and convenience to all guests.
        </p>
        <p className="ev-ts">For Meetings and Events</p>

        <ul className="fc-nav">
          <li className="t2">
            Soto Grande Cebu Ballroom – Covering 270 sqm, it can accommodate up
            to 200 guests banquet-style or 350 guests theater-style. The
            ballroom can also be divided into 3 smaller rooms.
          </li>
          <li className="t2">
            Conference halls – With an area ranging from 65 to 135 sqm, these
            are ideal venues for more private meetings and events.
          </li>
          <li className="t2">
            Boardroom – Catering to up to 20 persons, the Boardroom ensures that
            all your meeting needs are addressed with ease and efficiency.
          </li>
        </ul>
      </div>
      <div className="for-met">
        <p className="ev-ts">For Dining and Recreation</p>

        <ul className="fc-nav">
          <li className="t2">
            Cafe Soto Grande – this restaurant at the hotel’s ground floor
            serves scrumptious Filipino and international dishes
          </li>
          <li className="t2">
            Gym – fully equipped to meet your health and fitness requirements
          </li>
          <li className="t2">Swimming pool – open daily from 3PM to 5PM</li>
        </ul>
        <p className="t1">
          For group events, the hotel accommodation in Baguio City has a
          catering menu that fits various occasions.
        </p>
      </div>
      <CFooter />
    </>
  );
};

export default Facilities;
