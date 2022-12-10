import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/container/Navbar/navbar";
import { AreaLocationInfo } from "../../context/AreaLocationData";
import LocItems from "../../components/LocationItems/LocItems";
import "./location.scss";
import CFooter from "../../components/Footer/CFooter";
const Location = () => {
  return (
    <>
      <Navbar />
      <Container className="google-map-code" fluid>
        <Col>
          <iframe
            title="myFrame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.5168197590474!2d124.01350561484105!3d10.300460170614762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9971ff4adb4ab%3A0xb0b412db2c90fc1e!2sSotogrande%20Hotel%20%26%20Resort!5e0!3m2!1sen!2sph!4v1665976827153!5m2!1sen!2sph"
            width="100%"
            height="500"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex=""
          />
          <div className="l-title">
            <p className="s-name">Soto Grande Cebu Hotel : Cebu Philippines</p>
          </div>
          <Row className="l-panel">
            <Col>
              <Col className="a-title">
                <span>{AreaLocationInfo.datas.title}</span>
              </Col>
              <Col className="a-p1">
                <span>{AreaLocationInfo.datas.p1}</span>
              </Col>
              <Col className="a-p2">
                <span>{AreaLocationInfo.datas.p2}</span>
              </Col>
              <Col className="a-p3">
                <span>
                  While billeted here, other interesting places to visit
                  include:
                </span>
                <LocItems />
                <p>
                  Additionally, 2 of the country’s biggest TV networks are very
                  near. Visiting ABS-CBN network only takes a 5-minute walk,
                  while going to GMA network from this hotel in Quezon City only
                  takes a 5-minute drive.
                </p>
              </Col>
            </Col>
            <Row></Row>
          </Row>
        </Col>
      </Container>
      <CFooter />
    </>
  );
};

export default Location;
