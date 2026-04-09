import { Container, Row, Col, Card } from "react-bootstrap";

function Skills() {
  return (
    <Container className="mt-5 text-center">
      {/* Section Title */}
      <h2 className="mb-5 fw-bold">What I Do</h2>

      <Row className="g-4">
        
        {/* Development */}
        <Col md={4}>
          <Card className="h-100 shadow border-0 rounded-4">
            <Card.Body>
              <h4>💻 Development</h4>
              <p className="mt-3">
                Building full-stack applications using React, ASP.NET, and modern JavaScript tools.
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Design */}
        <Col md={4}>
          <Card className="h-100 shadow border-0 rounded-4">
            <Card.Body>
              <h4>🎨 Design</h4>
              <p className="mt-3">
                Creating clean, user-friendly interfaces with a focus on UI/UX and visual design.
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Projects */}
        <Col md={4}>
          <Card className="h-100 shadow border-0 rounded-4">
            <Card.Body>
              <h4>🚀 Projects</h4>
              <p className="mt-3">
                Developing real-world projects that solve problems and showcase technical skills.
              </p>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default Skills;