import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Col, Row } from "react-bootstrap";
import { RStar1 } from "../../../context/ReviewsDatu";
import Hhome from "../../CardReviews/HomeReviews/Hhome";
import { Autoplay, Pagination } from "swiper";
import "./hmswiper.scss";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="hm-main1">
        <Swiper
          modules={[Autoplay, Pagination]}
          style={{ marginBottom: "1rem" }}
          className="swipers"
          autoplay={{ delay: 7000 }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <h1>"</h1>
            <p>
              Located in a wide, no-traffic, peaceful environment, with close
              <br />
              access to EDSA, it offers apartments to let or buy, plus a Condo
              hotel
              <br />
              with lunch and dinner buffet. - Fortune Bitos Jr.
            </p>
            <Row>
              {RStar1.map((item, index) => {
                return (
                  <Col>
                    <Hhome key={index} star={item.star} />
                  </Col>
                );
              })}
            </Row>

            <div className="hm-a">
              <span>TRAVELLER'S REVIEW</span>
              <Link className="c2-lo" to="/reviews">
                <p>read more</p>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1>"</h1>
            <p>
              The Bathroom are clean, and the staff are also beautiful, the room
              is good
              <br />
              access to EDSA, it offers apartments to let or buy, plus a Condo
              hotel
              <br />
              with lunch and dinner buffet. - Reynaldo Mimis.
            </p>
            <Row>
              {RStar1.map((item, index) => {
                return (
                  <Col>
                    <Hhome key={index} star={item.star} />
                  </Col>
                );
              })}
            </Row>
            <div className="hm-a">
              <span>TRAVELLER'S REVIEW</span>
              <Link className="c2-lo" to="/reviews">
                <p>read more</p>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1>"</h1>
            <p>
              The Bathroom are clean, and the staff are also beautiful, the room
              is good
              <br />
              access to EDSA, it offers apartments to let or buy, plus a Condo
              hotel
              <br />
              with lunch and dinner buffet. - Novs Bts.
            </p>
            <Row>
              {RStar1.map((item, index) => {
                return (
                  <Col>
                    <Hhome key={index} star={item.star} />
                  </Col>
                );
              })}
            </Row>
            <div className="hm-a">
              <span>TRAVELLER'S REVIEW</span>
              <Link className="c2-lo" to="/reviews">
                <p>read more</p>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1>"</h1>
            <p>
              The Staff are beautiful and I hope we meet each other
              <br />
              access to Santa Lucia, it offers apartments
              <br />
              with lunch and dinner buffet. - Richard Cleaofe.
            </p>
            <Row>
              {RStar1.map((item, index) => {
                return (
                  <Col>
                    <Hhome key={index} star={item.star} />
                  </Col>
                );
              })}
            </Row>
            <div className="hm-a">
              <span>TRAVELLER'S REVIEW</span>
              <Link className="c2-lo" to="/reviews">
                <p>read more</p>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1>"</h1>
            <p>
              The food is good and also the room, pool is clean and the staff
              are smiling
              <br />
              access to EDSA, it offers apartments to let or buy, plus a Condo
              hotel
              <br />
              with lunch and dinner buffet. - Chris Bobis.
            </p>
            <Row>
              {RStar1.map((item, index) => {
                return (
                  <Col>
                    <Hhome key={index} star={item.star} />
                  </Col>
                );
              })}
            </Row>
            <div className="hm-a">
              <span>TRAVELLER'S REVIEW</span>
              <Link className="c2-lo" to="/reviews">
                <p>read more</p>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1>"</h1>
            <p>
              The food is good and also the room, pool is clean and the staff
              are smiling
              <br />
              access to EDSA, it offers apartments to let or buy, plus a Condo
              hotel
              <br />
              with lunch and dinner buffet. - Path Sanchez.
            </p>
            <Row>
              {RStar1.map((item, index) => {
                return (
                  <Col>
                    <Hhome key={index} star={item.star} />
                  </Col>
                );
              })}
            </Row>
            <div className="hm-a">
              <span>TRAVELLER'S REVIEW</span>
              <Link className="c2-lo" to="/reviews">
                <p>read more</p>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1>"</h1>
            <p>
              I am very satisfy, the rooms are clean and also the smell is good.
              <br />
              access to EDSA, it offers apartments to let or buy, plus a Condo
              hotel
              <br />
              with lunch and dinner buffet. - Mie Bitos.
            </p>
            <Row>
              {RStar1.map((item, index) => {
                return (
                  <Col>
                    <Hhome key={index} star={item.star} />
                  </Col>
                );
              })}
            </Row>
            <div className="hm-a">
              <span>TRAVELLER'S REVIEW</span>
              <Link className="c2-lo" to="/reviews">
                <p>read more</p>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
