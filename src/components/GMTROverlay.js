import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Moodboard from "../assets/gmtrmood.png";
import Brand from "../assets/gmtr_brand.png";
import OldGMTR1 from "../assets/gmtr_home1.png";
import OldGMTR2 from  "../assets/gmtr_footer1.png";
import GMTRSS1 from "../assets/Home Page 1.jpg"
import GMTRSS2 from "../assets/Home Page 2.jpg"
import GMTRSS3 from "../assets/Home Page 5.jpg"

const GMTROverlay = () => {
  return (
    <div className="overlay">
      <div className="overlay-content">
      <h3>The Client</h3>
        <p>For this personal case study, I embarked on launching a Christian apparel business called "God Made the Rainbow." This business specializes in providing biblically inspired clothing and accessories that aim to convey counter-cultural biblical truths, particularly surrounding the symbolism of the rainbow.</p>
        <h3>The Problem</h3>
        <p>This business needs a brand identity and web presence that supports its strong mission. Its designs should be encouraging, shareable, and bold in conveying God’s meaning behind the rainbow, yet should not be confused with a campaign against LGBTQ+ pride.</p>
        <h3>My Role</h3>
        <p>As the designer and entrepreneur behind "God Made the Rainbow," my role was to conceptualize, develop, and execute the brand's vision and mission. This encompassed everything from defining the problem statement to crafting a brand identity, designing the apparel line, and developing an online platform to showcase and sell the products.</p>
        <h3>The Solution</h3>
        <p>The solution involved developing a cohesive brand package and product mockups that were gender-neutral, clean, and bold. I then crafted a visually engaging and user-friendly website for God Made the Rainbow that prioritized intuitive navigation and engaging visuals, with a mission-first approach.</p>
        <h3>The Process</h3>
        <h5>Brand Design Process</h5>
        <li>The design process began with comprehensive research on competitors in the Christian apparel industry, followed by the development of AI-supported empathy maps and personas to understand the target audience's pain points and preferences. Mood boards were created based on this information. This is my favorite step to gather inspiration for the visual brand elements and ensure consistency in my final designs. The refined mood board informed the creation of a distinct verbal and visual brand identity, including the brand name, slogan, values, tone of voice, and brand story.</li>
        <Container class="projectphotos">
        <Row>
            <Col><img src={Moodboard} alt="mood board with rainbow apparel"></img></Col>
            <Col><img src={Brand} alt="Brand for christian clothing company with logo suite"></img></Col>
        </Row>
        </Container>
        
        <h5>Web Design Process</h5>
        <li>Initially, I jumped straight into prototypes of a final web design. However, I acknowledged that this leap bypassed essential steps such as wireframing and style strategy. This oversight resulted in a web design that diverged significantly from the bold and clean branding style established earlier, leaning instead towards a more muted and nature-inspired aesthetic that aligns with my personal style preferences. </li>
        <Container class="projectphotos">
        <Row>
            <Col sm={12} md={6}><img src ={OldGMTR1}alt="Home Page Design"></img></Col>
            <Col sm={12} md={6}><img src ={OldGMTR2} alt="Footer of Home Page Design"></img></Col>
        </Row>
        </Container>
        <li>I made the decision to pause and reassess my approach, committing to creating a new design with a clear plan and strategy to guide its development. I returned to the drawing board, prioritizing the creation of wireframes to outline the website's structure and layout systematically. I developed a comprehensive style strategy that drew inspiration from the client's bold and clean branding to create three design directions to choose from. This experience served as a valuable lesson in the importance of prioritizing strategic planning over personal preferences.</li>
        <Container class="projectphotos">
        <Row>
            <Col sm={12} md={4}><img src ={GMTRSS1} alt="Home Page Design"></img></Col>
            <Col sm={12} md={4}><img src ={GMTRSS2} alt="Home Page Design"></img></Col>
            <Col sm={12} md={4}><img src ={GMTRSS3} alt="Home Page Design"></img></Col>
        </Row>
        </Container>
        <h3>The Results</h3>
        <p>The final designs for "God Made the Rainbow" successfully captured the rainbow-focused essence of the brand's mission and vision, providing customers with a familiar yet personal online shopping experience. The website showcases the brand's products, promotes its mission and values, and encourages customer engagement through features such as email collection and influencer partnerships. The images are unique and specific to the brand, establishing "God Made the Rainbow" as a trusted source for biblically inspired apparel.</p>
        <a href="https://www.godmadetherainbow.com"><button target="_blank">View the live site</button></a>
      </div>
    </div>
  );
};

export default GMTROverlay;