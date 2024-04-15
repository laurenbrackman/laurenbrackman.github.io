import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/profile-white.png";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
        <Col xs={12} md={6} xl={5}>
             <img src={headerImg} alt="Headshot of Lauren Brackman"/>
          </Col>
          <Col xs={12} md={6} xl={7}>
                <h1 className="line1">Hi, I'm <span className="underline">Lauren</span>.</h1>
                <h3 className="line2">I'm a <span className="goldbox">Web Designer</span> <span className="bluebox">& Developer</span></h3>
                <h3 className="line3">Who works with <span  className="goldbox">Churches</span></h3>
                <h3 className="line4"><span  className="bluebox">Small Businesses</span><span className="goldbox2">Startups</span></h3>
          </Col>
        </Row>
      </Container>
    </section>
  )
}