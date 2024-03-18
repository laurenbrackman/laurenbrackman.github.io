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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className='item'>
                            <img src={WebflowIcon} alt="Image"/>
                            <h5>WebFlow</h5>
                        </div>
                        <div className='item'>
                            <img src={HTMLIcon} alt="Image"/>
                            <h5>HTML/CSS</h5>
                        </div>
                        <div className='item'>
                            <img src={FigmaIcon} alt="Image"/>
                            <h5>Figma</h5>
                        </div>
                        <div className='item'>
                            <img src={AdobeIcon} alt="Image"/>
                            <h5>Adobe Creative Cloud</h5>
                        </div>
                        <div className='item'>
                            <img src={PythonIcon} alt="Image"/>
                            <h5>Flask</h5>
                        </div>
                        <div className='item'>
                            <img src={GitIcon} alt="Image"/>
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