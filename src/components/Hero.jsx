import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-section d-flex align-items-center">
      <Container className="text-center">
        
        {/* Main Heading */}
        <h1 className="display-3 fw-bold mb-3">
          Hi, I'm Adam 👋
        </h1>

        {/* Subtext */}
        <p className="lead mb-4">
          I build apps, design experiences, and bring ideas to life.
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3">
          <Button as={Link} to="/projects" variant="dark">
            View Projects
          </Button>

          <Button variant="outline-dark">
            Contact Me
          </Button>
        </div>

      </Container>
    </div>
  );
}

export default Hero;