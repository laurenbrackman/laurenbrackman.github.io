import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/contact-img.svg";

export const About = () => {
  return (
    <section className="about" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
                <img className={"animate__animated animate__zoomIn"} src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
              <div className={"animate__animated animate__fadeIn"}>
                <h2>Get In Touch</h2>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}