import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/name.png";
import navIcon1 from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import gitHubIcon from "../assets/github.png";
import navIcon3 from "../assets/instagram.png";

export const Footer = () => {
  return (
<footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} sm={6} className="text-center">
            <img src={logo} className="logo" alt="Lauren Brackman" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/laurenbrackman/"><img src={navIcon1} alt="Linkedin Icon"/></a>
              <a href="https://github.com/laurenbrackman"><img src={gitHubIcon} alt="Gitub Icon"/></a>
              <a href="https://www.instagram.com/brackmanwebsites/"><img src={navIcon3} alt="Instagram Icon"/></a>
              <a href="mailto:lgbrackman@gmail.com"><img src={emailIcon} alt="Email Icon"/></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}