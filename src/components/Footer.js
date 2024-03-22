import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/name.png";
import navIcon1 from "../assets/nav-icon1.svg";
import gitHubIcon from "../assets/github.png";
import emailIcon from "../assets/email.png";
import navIcon3 from "../assets/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="#"><img src={navIcon1} alt=""/></a>
                <a href="#"><img src={gitHubIcon} alt=""/></a>
                <a href="#"><img src={navIcon3} alt=""/></a>
                <a href="#"><img src={emailIcon} alt=""/></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}