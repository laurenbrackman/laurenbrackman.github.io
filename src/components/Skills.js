import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from "react-bootstrap";
import GitIcon from "../assets/git.png";
import HTMLIcon from "../assets/html.png";
import PythonIcon from "../assets/python.png";
import FigmaIcon from "../assets/figma.png";
import WebflowIcon from "../assets/webflow.png";
import AdobeIcon from "../assets/cc.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>
                        My Toolkit
                    </h2>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className='item'>
                            <img src={WebflowIcon} alt="Wwebflow Icon"/>
                            <h5>WebFlow</h5>
                        </div>
                        <div className='item'>
                            <img src={HTMLIcon} alt="HTML Icon"/>
                            <h5>HTML/CSS</h5>
                        </div>
                        <div className='item'>
                            <img src={FigmaIcon} alt="Figma Icon"/>
                            <h5>Figma</h5>
                        </div>
                        <div className='item'>
                            <img src={AdobeIcon} alt="Adobe CC Icon"/>
                            <h5>Adobe Creative Cloud</h5>
                        </div>
                        <div className='item'>
                            <img src={PythonIcon} alt="Python Icon"/>
                            <h5>Flask</h5>
                        </div>
                        <div className='item'>
                            <img src={GitIcon} alt="Git Icon"/>
                            <h5>Git</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}