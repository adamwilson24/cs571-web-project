import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal website built with React and Bootstrap.",
      tech: "React, Bootstrap"
    },
    {
      title: "Label App",
      description: "Barcode scanning system using ASP.NET.",
      tech: "ASP.NET, SQL"
    },
    {
      title: "Resale Store",
      description: "Online clothing resale business.",
      tech: "E-commerce, Branding"
    },
    {
      title: "Future Project",
      description: "More projects coming soon...",
      tech: "TBD"
    }
  ];

  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">My Projects</h1>

      <Row className="g-4">
        {projects.map((project, index) => (
          <Col md={6} lg={4} key={index}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;