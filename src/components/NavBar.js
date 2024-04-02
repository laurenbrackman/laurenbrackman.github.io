import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from "../assets/name.png";
import navIcon1 from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import gitHubIcon from "../assets/github.png";
import navIcon3 from "../assets/instagram.png";
import Resume from "../assets/Lauren_Brackman_Resume.pdf";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Lauren Brackman"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link padding-10' : 'navbar-link padding-10'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link padding-10' : 'navbar-link padding-10'} onClick={()=>onUpdateActiveLink('skills')}>About</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon padding-10">
                <a href="https://www.linkedin.com/in/laurenbrackman/"><img src={navIcon1} alt=""/></a>
                <a href="https://github.com/laurenbrackman"><img src={gitHubIcon} alt=""/></a>
                <a href="https://www.instagram.com/brackmanwebsites/"><img src={navIcon3} alt=""/></a>
                <a href="mailto:lgbrackman@gmail.com"><img src={emailIcon} alt=""/></a>
            </div>
            <div className="padding-10"> 
              <a href={Resume}><button className="vvd" target="_blank"><span>View My Resume</span></button></a>
            </div>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}