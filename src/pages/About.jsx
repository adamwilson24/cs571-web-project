import { Container, Row, Col } from "react-bootstrap";
import headshotImg from "../assets/headshot2.png";

const CONTACT_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/adamwilson24",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.56 3.285-1.23 3.285-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/adam-wilson24",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:wilsoada124@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
  label: "Resume",
  href: "https://drive.google.com/file/d/1clt78ZAX_wfFFwaTEmafAHDiN1YTbcS-/view?usp=sharing", 
  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <line x1="10" y1="9" x2="8" y2="9"/>
    </svg>
  ),
}
];

function About() {
  return (
    <div style={{ background: "#0a0a1a", minHeight: "100vh", padding: "80px 0" }}>
      <Container>
        <Row className="align-items-start g-5" style={{ maxWidth: "900px", margin: "0 auto" }}>

          {/* Left — photo + contact */}
          <Col md={4} className="text-center">
            {/* Headshot */}
            <div style={{ position: "relative", display: "inline-block", marginBottom: "1.5rem" }}>
              {/* Glow ring behind image */}
              <div style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed, #ec4899, #06b6d4)",
                zIndex: 0,
              }} />
              <img
                src={headshotImg}
                alt="Adam Wilson"
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 1,
                  border: "3px solid #0a0a1a",
                }}
              />
            </div>

            <h2 style={{ color: "#fff", fontWeight: 800, marginBottom: "0.25rem" }}>Adam Wilson</h2>
            <p style={{ color: "#a855f7", fontWeight: 600, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              Information Science @ UW-Madison
            </p>

            {/* Contact links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    background: "#1a1a2e",
                    border: "1px solid rgba(124,58,237,0.2)",
                    borderRadius: "10px",
                    padding: "0.6rem 1rem",
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    transition: "border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(168,85,247,0.6)";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(124,58,237,0.2)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </Col>

          {/* Right — bio + education */}
          <Col md={8}>

            {/* Bio */}
            <div style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "1rem" }}>
                Hey, I'm Adam 👋
              </h3>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.9", marginBottom: "1rem" }}>
                I'm a Information Science student at UW–Madison with a passion for building 
                things that actually work — clean interfaces, useful tools, and experiences 
                people enjoy using.
                </p>
                <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.9", marginBottom: "1rem" }}>
                I've been working as an app developer intern at Kapco Metal Stamping since 2023, 
                where I build and manage custom internal applications that improve day-to-day 
                warehouse operations.
                </p>
                <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.9" }}>
                I'm always looking 
                for opportunities to work on interesting problems with people. Feel free to reach out.
                </p>
            </div>

            {/* Education */}
            <div>
              <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: "1.25rem" }}>Education</h4>

              <div style={{
                background: "#1a1a2e",
                border: "1px solid rgba(124,58,237,0.2)",
                borderRadius: "14px",
                padding: "1.5rem",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
              }}>
                {/* Logo placeholder */}
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #c5050c, #9b0000)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontWeight: 800,
                  color: "#fff",
                  fontSize: "1.1rem",
                  letterSpacing: "-1px",
                }}>
                  UW
                </div>

                <div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: "0.2rem" }}>
                    University of Wisconsin–Madison
                  </div>
                  <div style={{ color: "#a855f7", fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                    B.S. Information Science
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>
                    2024 – Expected 2027
                  </div>
                </div>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;