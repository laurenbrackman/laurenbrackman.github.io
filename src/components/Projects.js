import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A sampling of my favorite case studies!</p>
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
                      <h3>The Client</h3>
                      <p>Brightvine is a fin-tech startup with high ambitions to 
                        revolutionize the secondary mortgage marketing leveraging
                         blockchain technology. Brightvine serves both individual
                          investors and major financial institutions with their 
                          software solutions.</p>
                      <h3>The Problem</h3>
                      <p>Brightvine aims to offer accessible and user-friendly 
                        digital platforms for managing mortgage investments and 
                        documentation. However, as a new company, they did not yet 
                        have a web presence to establish their identity as a business and 
                        effectively reach new customers.  Without a compelling and efficient 
                        website, Brightvine would lose their ability to build trust with 
                        potential investors, employees, and customers.</p>
                      <h3>My Role</h3>
                      <p>As the sole web developer, I was tasked with translating meticulously
                         crafted designs provided in Figma into a fully functional website 
                         using Webflow. The project required pixel-perfect attention to detail 
                         to ensure alignment with the original designs. Additionally, adherence 
                         to clean component structures and naming was essential to optimize 
                         performance and ensure scalability for years to come.</p>
                      <h3>The Challenge</h3>
                      <p>The designs given to me involved large images, complex animation 
                        features, and CMS elements, all of which increased the loading time 
                        of each page. Throughout the development process, I paid special 
                        attention to loading times to avoid potential frustration from the 
                        end-user. I experimented with animation algorithms to boost efficiency 
                        and utilized Photoshop to optimize image compression. In addition, 
                        I discussed with the marketing team to simplify a few of the animations
                         for a more seamless viewing experience.</p>
                      <h3>The Process</h3>
                      <p><h5>Structural Development</h5>
                      <li>I started by establishing the website's structure, including layout, navigation, and content sections, according to the provided designs. This required creating custom components in Webflow that could be reused throughout the site.</li>
                      <h5>Styling and Animation</h5><li>I then created a comprehensive style guide within Webflow with intelligent naming for typography, color, and icon classes and applied this styling to the site. Alongside this, I integrated animations, including a parallax scrolling effect, to the site, replicating the visual aesthetics of the original design while maintaining responsiveness. With client approval, I implemented subtle on-scroll and on-page-change animations for an enhanced user experience.</li>
                      <h5>Quality Assurance</h5><li>In collaboration with the client, I made many minor adjustments to refine the final website. This involved requesting feedback and hosting screen-sharing sessions to review changes.</li></p>
                      <h3>The Results</h3>
                      <p>Over the past two years, Brightvine has consistently relied on the website I developed, which has grown alongside their business as they introduce new software solutions and expand their market.  Thanks to the component system I implemented, they seamlessly manage updates and expansions, ensuring the website evolves in stride with their growing company.</p>
                      <h3>What I Learned</h3>
                      <p><h5>Webflow University</h5><li>This five-hour course played a pivotal role in my development process by providing comprehensive tutorials and resources for Webflow best practices. This knowledge empowered me to implement complex design elements and interactions with confidence.</li>
                      <h5>Responsive Typography</h5><li>Matching font sizes between Figma and Webflow proved to be a crucial aspect of my development process as I navigated the intricacies of px, pt, em, and vh units. While initially relying on viewport-based font sizing, I discovered its limitations in maintaining consistent design elements. Through experimentation and research, I adopted breakpoint-based font sizes to ensure optimal legibility and design predictability across various devices and screen sizes.</li></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <h3>The Client</h3>
                      <p>North Bridger Bison is a family-owned bison ranch located in the heart of Montana, USA, renowned for its commitment to animal welfare and community-oriented business practices. They offer high-quality bison meat in large quantities to a variety of customers, from health-conscious chefs to large families simply looking to save money on groceries.</p>
                      <h3>The Problem</h3>
                      <p>Despite their extensive media exposure through magazines, a Netflix documentary, and podcasts, North Bridger Bisons’ notable reputation was not translating into sustainable revenue to support and expand their business.  The owner of North Bridger Bison partnered with my Computer Science and Ecommerce class to explore the many avenues in which to increase sales. Through exploring their Google Analytics, I identified a significant factor contributing to this obstacle: the inadequacy of their current website, which, despite generating substantial traffic, struggled to convert visitors into sales.</p>
                      <h3>My Role</h3>
                      <p>I took on the task to redesign North Bridger Bison’s existing website to not only reflect their brand identity and build a faithful following, but also encourage customers to complete their purchases. As a student, I was under a two-week time constraint with zero budget. </p>
                      <h3>The Solution</h3>
                      <p>The solution entailed user interviews, SEO analysis, and a redesign of North Bridger Bison’s website, focusing on improving product visibility and building trust with users. Through navigation reorganization, call-to-action buttons, visual aids, and refined content, the new website designs aim to streamline the purchasing process and reassure visitors that they are making a worthwhile purchase.</p>
                      <h3>The Process</h3>
                      <p><h5>Research and Analysis</h5><li>I conducted interviews with potential customers to understand their preferences and customer journeys regarding bison meat in Montana. Users expressed a strong interest in having a mobile-friendly design, streamlining navigation, and including visual aids for price comparison and storage requirements.</li></p>
                      <p><h5>Client Consultation</h5><li>Our class engaged in discussions with the business owner (via Zoom) to grasp their vision and key objectives for their business, including a website redesign. He had little expectations and was open to any design directions.</li></p>
                      <p><h5>Wireframing</h5><li>I then developed initial wireframes in Adobe XD to outline the website's structure and layout, reorganizing the site map for an improved user journey.</li></p>
                      <p><h5>Prototyping</h5><li>High-fidelity mockups in AdobeXD walk through the basic user flow of all website pages. In this step, I paid special attention to the copy, buttons, tabs, and product listings. These mockups offered a detailed representation of the recommended website improvements.</li></p>
                      <h3>The Results</h3>
                      <p>I presented the redesigned website to North Bridger Bison, who proceeded to implement numerous changes based on my advice. This resulted in a revamped online platform that effectively showcased their products, addressed mobile optimization concerns, and provided a streamlined user experience for customers. North Bridger Bisons’ feedback was overwhelmingly positive and thankful.</p>
                      <h3>What I Learned</h3>
                      <p><h5>User Research</h5><li>Prioritizing user research was crucial in crafting a design that resonated with the target audience. I found that the ideal client was much more diverse than I initially would have design for.</li>
                      <h5>Addressing Pain Points</h5><li>Emphasizing clear FAQs and visual aids helped cultivate trust with customers, mitigating friction points in the customer journey and bolstering confidence in the purchasing in such a large quantity.</li></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <h3>The Client</h3>
                    <p>Young adults need accessible ways to remind themselves of and share the biblical meaning behind the rainbow in everyday life. For this personal case study, I embarked on launching a Christian apparel business called "God Made the Rainbow." This business specializes in providing biblically inspired clothing and accessories that aim to convey counter-cultural biblical truths, particularly surrounding the symbolism of the rainbow.</p>
                    <h3>The Problem</h3>
                    <p>This business needs a brand identity and web presence that supports their strong mission. Their designs should be encouraging, shareable, and bold for God’s meaning behind the rainbow, yet not to be confused with a campaign against LQBTQ+ pride.</p>
                    <h3>My Role</h3>
                    <p>As the designer and entrepreneur behind "God Made the Rainbow," my role was to conceptualize, develop, and execute the brand's vision and mission. This encompassed everything from defining the problem statement to crafting a brand identity, designing the apparel line, and developing an online platform to showcase and sell the products.</p>
                    <h3>The Solution</h3>
                    <p>The solution involved developing a cohesive brand package and product mockups that were gender-neutral, clean, and bold. I then crafted a visually engaging and user-friendly website for God Made the Rainbow that prioritized intuitive navigation, engaging visuals, a mission-first approach. </p>
                    <h3>the Process</h3>
                    <h5>Brand Design Process</h5>
                    <li>The design process began with comprehensive research on competitors in the Christian apparel industry, followed by the development of AI-supported empathy maps and personas to understand the target audience's pain points and preferences. Mood boards were created based on this information. This is my favorite step to gather inspiration for the visual brand elements and ensuring consistency in my final designs. The refined mood baord informed the creation of a distinct verbal and visual brand identity, including the brand name, slogan, values, tone of voice, and brand story.</li>
                    <h5>Web Design Process</h5>
                    <li>Initially, I jumped straight into high-fidelity mockups of a final web design. However, I acknowledged that this leap bypassed essential steps such as wireframing and style strategy. This oversight resulted in a web design that diverged significantly from the bold and clean branding style established earlier, leaning instead towards a more muted and nature-inspired aesthetic that aligns with my personal style preferences. </li>
                    <li>I made the decision to pause and reassess my approach, committing to creating a new design with a clear plan and strategy to guide its development. I returned to the drawing board, prioritizing the creation of wireframes to outline the website's structure and layout systematically. I developed a comprehensive style strategy that drew inspiration from the client's bold and clean branding to create two design directions in which to choose from. This experience served as a valuable lesson in the importance of prioritizing strategic planning over personal preferences.</li>
                    <h3>The Results</h3>
                    <p>The final designs for "God Made the Rainbow" successfully captured the essence of the brand's mission and vision, providing customers with an engaging and personal online shopping experience. The website showcases the brand's products, promotes its mission and values, and encourages customer engagement through features such as email collection and influencer partnerships. The branding elements convey a sense of authenticity and purpose, establishing "God Made the Rainbow" as a trusted source for biblically inspired apparel.</p>
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