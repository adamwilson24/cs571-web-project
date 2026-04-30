import { useEffect, useRef, useState } from "react";
import { Col, Card } from "react-bootstrap";

function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Col md={4} ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
    }}>
      <Card className="h-100 border-0 rounded-4 skills-card">
        <Card.Body className="p-4">
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{skill.icon}</div>
          <h4 style={{ color: "#fff", fontWeight: 700 }}>{skill.title}</h4>
          <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "0.75rem" }}>{skill.text}</p>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SkillCard;