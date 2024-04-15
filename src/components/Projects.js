import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import Brightvineimg1 from "../assets/bv1.png"
import NBBimg1 from "../assets/nbb1.png"
import GMTRimg1 from "../assets/GMTR-F3.png"

export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                <p className="sampling">A sampling of my favorite case studies!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Brightvine</Nav.Link>
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
                  <img src={Brightvineimg1} alt="Website Designs for fin-tech company"/>
                  <button>Explore Case Study</button>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                      <img src={NBBimg1} alt="Website Designs for Montana bison company"/>
                      <button>Explore Case Study</button>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                      <img src={GMTRimg1} alt="Website Designs for Christian Clothing Brand"/>
                      <button>Explore Case Study</button>
                  </Tab.Pane>
                  
                  </Tab.Content>

                </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}