import { Card } from "react-bootstrap";

function ProjectCard({ project }) {
  return (
    <Card className="h-100 shadow border-0 rounded-4 project-card">
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text className="mt-2">
          {project.description}
        </Card.Text>

        <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>
          {project.tech}
        </p>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;