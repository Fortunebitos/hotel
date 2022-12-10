import React from "react";
import Card from "react-bootstrap/Card";
import "./HCard.scss";
const HCardRooms = ({ src, title, text, className, font }) => {
  return (
    <>
      <Card style={{ width: "35rem", marginRight: "1rem", border: "none" }}>
        <Card.Img variant="top" src={src} style={{ height: "25rem" }} />
        <Card.Body>
          <Card.Title className={className}>{title}</Card.Title>
          <Card.Text className={font}>{text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default HCardRooms;
