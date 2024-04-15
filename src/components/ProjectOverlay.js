import React from "react";

const ProjectOverlay = ({ onClose }) => {

    return (
    <section className="overlay">
        <div className="casestudy">
            <h3>The Client</h3>
            <p>Brightvine is a fin-tech startup with high ambitions to revolutionize the secondary mortgage marketing leveraging blockchain technology. Brightvine serves both individual investors and major financial institutions with their software solutions.</p>
            <h3>The Problem</h3>
                <p>Brightvine aims to offer accessible and user-friendly digital platforms for managing mortgage investments and documentation. However, as a new company, they did not yet have a web presence to establish their identity as a business and effectively reach new customers. Without a compelling and efficient website, Brightvine would lose their ability to build trust with potential investors, employees, and customers.</p>
                <h3>My Role</h3>
                <p>As the sole web developer, I was tasked with translating meticulously crafted designs provided in Figma into a fully functional website using Webflow. The project required pixel-perfect attention to detail to ensure alignment with the original designs. Additionally, adherence to clean component structures and naming was essential to optimize performance and ensure scalability for years to come.</p>
                <h3>The Challenge</h3>
                <p>The designs given to me involved large images, complex animation features, and CMS elements, all of which increased the loading time of each page. Throughout the development process, I paid special attention to loading times to avoid potential frustration from the end-user. I experimented with animation algorithms to boost efficiency and utilized Photoshop to optimize image compression. In addition, I discussed with the marketing team to simplify a few of the animations for a more seamless viewing experience.</p>
                <h3>The Process</h3>
                <h5>Structural Development</h5>
                <li>I started by establishing the website's structure, including layout, navigation, and content sections, according to the provided designs. This required creating custom components in Webflow that could be reused throughout the site.</li>
                <h5>Styling and Animation</h5>
                <li>I then created a comprehensive style guide within Webflow with intelligent naming for typography, color, and icon classes and applied this styling to the site. Alongside this, I integrated animations, including a parallax scrolling effect, to the site, replicating the visual aesthetics of the original design while maintaining responsiveness. With client approval, I implemented subtle on-scroll and on-page-change animations for an enhanced user experience.</li>
                <h5>Quality Assurance</h5>
                <li>In collaboration with the client, I made many minor adjustments to refine the final website. This involved requesting feedback and hosting screen-sharing sessions to review changes.</li>
                <h3>The Results</h3>
                <p>Over the past two years, Brightvine has consistently relied on the website I developed, which has grown alongside their business as they introduce new software solutions and expand their market. Thanks to the component system I implemented, they seamlessly manage updates and expansions, ensuring the website evolves in stride with their growing company.</p>
                <a href="https://www.brightvine.com/"><button target="_blank">View the live site</button></a>
                <h3>What I Learned</h3>
                <h5>Webflow University</h5>
                <li>This five-hour course played a pivotal role in my development process by providing comprehensive tutorials and resources for Webflow best practices. This knowledge empowered me to implement complex design elements and interactions with confidence.</li>
                <h5>Responsive Typography</h5>
                <li>Matching font sizes between Figma and Webflow proved to be a crucial aspect of my development process as I navigated the intricacies of px, pt, em, and vh units. While initially relying on viewport-based font sizing, I discovered its limitations in maintaining consistent design elements. Through experimentation and research, I adopted breakpoint-based font sizes to ensure optimal legibility and design predictability across various devices and screen sizes.</li>
        </div>
    </section> 
    )
}

export default ProjectOverlay;