import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutMe from "../assets/profilephoto.jpeg";

export const About = () => {
  return (
    <section className="about" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
                <img src={AboutMe}/>
          </Col>
          <Col size={12} md={6}>
              <div className={"animate__animated animate__fadeIn"}>
                <h2>Get To Know Me</h2>
                <p>After graduating with a degree in computer science from Montana State University, I ventured into graphic design as a full-time church media manager. At the intersection of coding and design, I love helping small businesses and Christian ministries develop effective websites. When not designing, I enjoy coding in coffee shops, jogging with my husband, and sewing for my handmade crafting business.</p>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}