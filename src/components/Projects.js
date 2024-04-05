import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import Brightvineimg1 from "../assets/bv1.png"
import Brightvineimg2 from "../assets/bv2.png"
import Brightvineimg3 from "../assets/bv3.png"
import NBBimg1 from "../assets/nbb1.png"
import NBBimg2 from "../assets/nbb2.png"
import NBBimg3 from "../assets/nbb3.png"
import GMTRimg1 from "../assets/GMTR-F2.png"
import GMTRimg2 from "../assets/GMTR-F1.png"
import GMTRimg3 from "../assets/GMTR-F3.png"
import Moodboard from "../assets/gmtrmood.png";
import Brand from "../assets/gmtr_brand.png";
import OldGMTR1 from "../assets/gmtr_home1.png";
import OldGMTR2 from  "../assets/gmtr_footer1.png";
import GMTRSS1 from "../assets/Home Page 1.jpg"
import GMTRSS2 from "../assets/Home Page 2.jpg"
import GMTRSS3 from "../assets/Home Page 5.jpg"

export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p class="sampling">A sampling of my favorite case studies!</p>
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
                  <Container>
                    <Row>
                        <Col sm={12} md={4}>
                        <img src={Brightvineimg1} alt="Website Designs for fin-tech company"/>
                        </Col><Col sm={12} md={4}>
                        <img src={Brightvineimg2} alt="Website Designs for fin-tech company"/>
                        </Col><Col sm={12} md={4}>
                        <img src={Brightvineimg3} alt="Website Designs for fin-tech company"/>
                        </Col>
                      </Row>
                    </Container>
                      <div class="casestudy">
                        <h3>The Client</h3>
                        <p>Brightvine is a fin-tech startup with high ambitions to revolutionize the secondary mortgage marketing leveraging blockchain technology. Brightvine serves both individual investors and major financial institutions with their software solutions.</p>
                        <h3>The Problem</h3>
                        <p>Brightvine aims to offer accessible and user-friendly digital platforms for managing mortgage investments and documentation. However, as a new company, they did not yet have a web presence to establish their identity as a business and effectively reach new customers. Without a compelling and efficient website, Brightvine would lose their ability to build trust with potential investors, employees, and customers.</p>
                        <h3>My Role</h3>
                        <p>As the sole web developer, I was tasked with translating meticulously crafted designs provided in Figma into a fully functional website using Webflow. The project required pixel-perfect attention to detail to ensure alignment with the original designs. Additionally, adherence to clean component structures and naming was essential to optimize performance and ensure scalability for years to come.</p>
                        <h3>The Challenge</h3>
                        <p>The designs given to me involved large images, complex animation features, and CMS elements, all of which increased the loading time of each page. Throughout the development process, I paid special attention to loading times to avoid potential frustration from the end-user. I experimented with animation algorithms to boost efficiency and utilized Photoshop to optimize image compression. In addition, I discussed with the marketing team to simplify a few of the animations for a more seamless viewing experience.</p>
                        <h3>The Process</h3>
                        <p><h5>Structural Development</h5></p>
                        <li>I started by establishing the website's structure, including layout, navigation, and content sections, according to the provided designs. This required creating custom components in Webflow that could be reused throughout the site.</li>
                        <p><h5>Styling and Animation</h5></p>
                        <li>I then created a comprehensive style guide within Webflow with intelligent naming for typography, color, and icon classes and applied this styling to the site. Alongside this, I integrated animations, including a parallax scrolling effect, to the site, replicating the visual aesthetics of the original design while maintaining responsiveness. With client approval, I implemented subtle on-scroll and on-page-change animations for an enhanced user experience.</li>
                        <p><h5>Quality Assurance</h5></p>
                        <li>In collaboration with the client, I made many minor adjustments to refine the final website. This involved requesting feedback and hosting screen-sharing sessions to review changes.</li>
                        <h3>The Results</h3>
                        <p>Over the past two years, Brightvine has consistently relied on the website I developed, which has grown alongside their business as they introduce new software solutions and expand their market. Thanks to the component system I implemented, they seamlessly manage updates and expansions, ensuring the website evolves in stride with their growing company.</p>
                        <a href="https://www.brightvine.com/"><button target="_blank">View the live site</button></a>
                        <h3>What I Learned</h3>
                        <p><h5>Webflow University</h5></p>
                        <li>This five-hour course played a pivotal role in my development process by providing comprehensive tutorials and resources for Webflow best practices. This knowledge empowered me to implement complex design elements and interactions with confidence.</li>
                        <p><h5>Responsive Typography</h5></p>
                        <li>Matching font sizes between Figma and Webflow proved to be a crucial aspect of my development process as I navigated the intricacies of px, pt, em, and vh units. While initially relying on viewport-based font sizing, I discovered its limitations in maintaining consistent design elements. Through experimentation and research, I adopted breakpoint-based font sizes to ensure optimal legibility and design predictability across various devices and screen sizes.</li>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Container>
                    <Row>
                        <Col sm={12} md={4}>
                        <img src={NBBimg1} alt="Website Designs for Montana bison company"/>
                        </Col><Col sm={12} md={4}>
                        <img src={NBBimg3} alt="Website Designs for Montana bison company"/>
                        </Col><Col sm={12} md={4}>
                        <img src={NBBimg2} alt="Website Designs for Montana bison company"/>
                        </Col>
                      </Row>
                    </Container>
                      <div class="casestudy">
                        <h3>The Client</h3>
                        <p>North Bridger Bison is a family-owned bison ranch located in the heart of Montana, USA, renowned for its commitment to animal welfare and community-oriented business practices. They offer high-quality bison meat in large quantities to a variety of customers, from health-conscious chefs to large families simply looking to save money on groceries.</p>
                        <h3>The Problem</h3>
                        <p>Despite their extensive media exposure through magazines, a Netflix documentary, and podcasts, North Bridger Bisons’ notable reputation was not translating into sustainable revenue to support and expand their business. The owner of North Bridger Bison partnered with my Computer Science and Ecommerce class to explore the many avenues in which to increase sales. Through exploring their Google Analytics, I identified a significant factor contributing to this obstacle: the inadequacy of their current website, which, despite generating substantial traffic, struggled to convert visitors into sales.</p>
                        <h3>My Role</h3>
                        <p>I took on the task to redesign North Bridger Bison’s existing website to not only reflect their brand identity and build a faithful following, but also encourage customers to complete their purchases. As a student, I was under a two-week time constraint with zero budget.</p>
                        <h3>The Solution</h3>
                        <p>The solution entailed user interviews, SEO analysis, and a redesign of North Bridger Bison’s website, focusing on improving product visibility and building trust with users. Through navigation reorganization, call-to-action buttons, visual aids, and refined content, the new website designs aim to streamline the purchasing process and reassure visitors that they are making a worthwhile purchase.</p>
                        <h3>The Process</h3>
                        <p><h5>Research and Analysis</h5></p>
                        <li>I conducted interviews with potential customers to understand their preferences and customer journeys regarding bison meat in Montana. Users expressed a strong interest in having a mobile-friendly design, streamlining navigation, and including visual aids for price comparison and storage requirements.</li>
                        <p><h5>Client Consultation</h5></p>
                        <li>Our class engaged in discussions with the business owner (via Zoom) to grasp their vision and key objectives for their business, including a website redesign. He had little expectations and was open to any design directions.</li>
                        <p><h5>Wireframing</h5></p>
                        <li>I then developed initial wireframes in Adobe XD to outline the website's structure and layout, reorganizing the site map for an improved user journey.</li>
                        <p><h5>Prototyping</h5></p>
                        <li>High-fidelity mockups in AdobeXD walk through the basic user flow of all website pages. In this step, I paid special attention to the copy, buttons, tabs, and product listings. These mockups offered a detailed representation of the recommended website improvements.</li>
                        <h3>The Results</h3>
                        <p>I presented the redesigned website to North Bridger Bison, who proceeded to implement numerous changes based on my advice. This resulted in a revamped online platform that effectively showcased their products, addressed mobile optimization concerns, and provided a streamlined user experience for customers. North Bridger Bisons’ feedback was overwhelmingly positive and thankful.</p>
                        <a href="https://xd.adobe.com/view/d129eebd-b90f-4685-9acf-85c3a1e74cb5-847a/"><button target="_blank">View the AdobeXD files</button></a>
                        <a href="https://www.northbridgerbison.com/"><button target="_blank">View the live site</button></a>
                        <h3>What I Learned</h3>
                        <p><h5>User Research</h5><li>Prioritizing user research was crucial in crafting a design that resonated with the target audience. I found that the ideal client was much more diverse than I initially would have design for.</li>
                        <h5>Addressing Pain Points</h5><li>Emphasizing clear FAQs and visual aids helped cultivate trust with customers, mitigating friction points in the customer journey and bolstering confidence in the purchasing in such a large quantity.</li></p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Container>
                    <Row>
                        <Col sm={12} md={4}>
                        <img src={GMTRimg1} alt="Website Designs for Christian Clothing Brand"/>
                        </Col><Col sm={12} md={4}>
                        <img src={GMTRimg2} alt="Website Designs for Christian Clothing Brand"/>
                        </Col><Col sm={12} md={4}>
                        <img src={GMTRimg3} alt="Website Designs for Christian Clothing Brand"/>
                        </Col>
                      </Row>
                    </Container>
                    <div class="casestudy">
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
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}