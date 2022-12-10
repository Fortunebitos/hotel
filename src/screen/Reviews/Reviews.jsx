import { Container, Col, Row } from "react-bootstrap";
import CcaRrd from "../../components/CardReviews/CcaRrd";
import { RDatu } from "../../context/ReviewsDatu";
import FBItems from "../../context/ReviewsItem";
import SmallHeader from "../../components/smalheader/SmallHeader";
import Navbar from "../../components/container/Navbar/navbar";
import "./revies.scss";
import CFooter from "../../components/Footer/CFooter";
const Reviews = () => {
  return (
    <>
      <Navbar />
      <Container className="review">
        <Col>
          <Row className="r-row">
            {FBItems.map((item, index) => {
              return (
                <Col key={index}>
                  <span className="active">
                    {item.title}
                    <b>{item.count}</b>
                  </span>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col>
              <SmallHeader
                title="Soto Grande Cebu - Feedbacks"
                cTitle="sh-title"
              />
            </Col>
          </Row>
        </Col>
        <Row className="r1-row">
          {RDatu.map((item, index) => {
            return (
              <Col>
                <CcaRrd
                  key={index}
                  icon={item.icon}
                  name={item.name}
                  star={item.star}
                  time={item.time}
                  content={item.content}
                  cCard="c-card"
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <CFooter />
    </>
  );
};

export default Reviews;
