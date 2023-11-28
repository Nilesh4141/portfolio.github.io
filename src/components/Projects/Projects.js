import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Popmak"
              description="E-commerce web app using React with dynamic user interfaces.
              Axios for backend communication via HTTP requests.
              MDBootstrap for visually appealing product displays, comprehensive cart management, and email
              communication for order updates and promotions.
              "
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Unidesign"
              description="Create a Next.js project with TypeScript (.tsx) for Unidesign.
              Integrate Tailwind CSS for modern, responsive UI.
              Develop a multipage website showcasing Unidesign's products and services, prioritizing user
              experience."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="HTFS"
              description="Create a multi-page website for HTFS using Next.js, a powerful React framework for server-rendered
              applications.
              Utilize TypeScript for type safety, improving code quality, and catching errors early in development.
              Structure the website with HTML for semantic markup, enhancing accessibility and SEO.
              Employ CSS with Tailwind CSS for efficient and responsive styling, ensuring a modern and visually
              appealing design."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Mailit"
              description="Tech Stack: React and TypeScript
              Features: Dynamic and interactive web app with Axios for API calls, Bootstrap for responsive design, and
              data visualization with Pie Charts and Bar Graphs.
              Data Management: Utilizes Bootstrap Data Table for efficient organization and display of tabular data,
              enhancing data exploration and analysis.
              API Integration: Axios is used for making API calls, ensuring seamless data retrieval and updates.
              Responsive Design: Bootstrap is employed for creating a responsive user interface, enhancing the app's
              accessibility across various devices and screen sizes."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
