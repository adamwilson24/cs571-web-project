import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
          Adam Wilson
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ fontWeight: "bold" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" style={{ fontWeight: "bold" }}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ fontWeight: "bold" }}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;