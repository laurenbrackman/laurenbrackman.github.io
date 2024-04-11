import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/profile-white.png";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
                <span className="tagline">WELCOME WELCOME WELCOME</span>
                <h1>{`Hi, I'm Lauren`}</h1>
                <h3>I'm a Web Designer and Developer.</h3>
                <h3>I love working with churches, small businesses, and startups.</h3>
          </Col>
          <Col xs={12} md={6} xl={5}>
             <img src={headerImg} alt="Headshot of Lauren Brackman"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}