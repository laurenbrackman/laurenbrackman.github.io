import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import Elevate1 from "../assets/Elevate1.png";
import NBBimg1 from "../assets/banner (2).png";
import GMTRimg1 from "../assets/banner (3).png";
import Elevate2 from "../assets/Elevate2.png"; // Change to the appropriate image file
import NBBimg2 from "../assets/nbb1.png"; // Change to the appropriate image file
import GMTRimg2 from "../assets/GMTR-F1.png"; // Change to the appropriate image file
import ProjectOverlay from "./ProjectOverlay";

export const Projects = () => {
  const [showOverlay, setShowOverlay] = useState(false); // State to manage overlay visibility
  const [activeTab, setActiveTab] = useState("first"); // State to track active tab
  const [activeProject, setActiveProject] = useState(""); // State to track active project
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State to track window width

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOverlayToggle = (eventKey, projectName) => {
    setShowOverlay(!showOverlay);
    setActiveTab(eventKey);
    setActiveProject(projectName);
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  const handleTabSelect = (eventKey) => {
    setShowOverlay(false);
    setActiveProject(""); 
    setActiveTab(eventKey);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                <p className="sampling">A sampling of my favorites!</p>
                <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={handleTabSelect}>
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Elevate</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">NBB</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">GMTR</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content id="slideInUp" className="content">

                <Tab.Pane eventKey="first">
                  <img src={windowWidth < 750 ? Elevate2 : Elevate1} alt="Website Designs for Montana gym" />
                  <h3>Elevate Fitness & Performance Training</h3>
                  <h5>Figma Designs & Wix Development for Local Gym</h5>
                  <button onClick={() => handleOverlayToggle("first", "Elevate")}>{showOverlay ? "Close Case Study" : "Explore Case Study"}</button>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <img src={windowWidth < 750 ? NBBimg2 : NBBimg1} alt="Website Designs for Montana bison ranch" />
                  <h3>North Bridger Bison</h3>
                  <h5>AdobeXD Designs for Montana Bison Company</h5>
                  <button onClick={() => handleOverlayToggle("second", "NBB")}>{showOverlay ? "Close Case Study" : "Explore Case Study"}</button>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <img src={windowWidth < 750 ? GMTRimg2 : GMTRimg1} alt="Website Designs for Christian Clothing Brand" />
                  <h3>God Made the Rainbow</h3>
                  <h5>Figma Designs & Shopify Development for Christian Clothing Brand</h5>
                  <button onClick={() => handleOverlayToggle("third", "GMTR")}>{showOverlay ? "Close Case Study" : "Explore Case Study"}</button>
                </Tab.Pane>
              </Tab.Content>

              {showOverlay && <ProjectOverlay activeProject={activeProject} onClose={() => setShowOverlay(false)} />} 
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
