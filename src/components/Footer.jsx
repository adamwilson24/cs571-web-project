import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer style={{
      background: "#070710",
      borderTop: "1px solid rgba(124,58,237,0.2)",
      color: "rgba(255,255,255,0.4)",
      textAlign: "center",
      padding: "1.5rem 0",
      fontSize: "0.9rem",
    }}>
      <Container>
        © 2025 Adam Wilson — Built with React & Bootstrap
      </Container>
    </footer>
  );
}

export default Footer;