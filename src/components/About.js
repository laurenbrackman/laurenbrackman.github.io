import { Container, Row, Col } from "react-bootstrap";
import AboutMe from "../assets/profilephoto.jpeg";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
                <img src={AboutMe} alt="Headshot of Lauren Brackman"/>
          </Col>
          <Col size={12} md={6}>
                <h2>Get To Know Me</h2>
                <p>After graduating with a degree in computer science from Montana State University, I ventured into graphic design as a full-time church media manager. At the intersection of coding and design, I love helping people develop clean and effective websites. Need custom code or branding photography? My skills and interests cover a wide range of topics to best support your website's needs! When not working on websites, I enjoy reading in coffee shops, jogging and rock climbing with my husband, and sewing for my handmade crafting business.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}