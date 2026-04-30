import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const GLITCH_NAMES = ["h4x0r", "???", "👾 ???", "A̷d̸a̷m̸", "[ REDACTED ]", "error404"];

function NavigationBar() {
  const [clickCount, setClickCount] = useState(0);
  const [glitching, setGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState("Adam Wilson");
  const glitchInterval = useRef(null);
  const resetTimeout = useRef(null);
  const location = useLocation();

  function handleBrandClick() {
    if (glitching) return;
    const next = clickCount + 1;
    setClickCount(next);
    if (next >= 5) {
      triggerGlitch();
      setClickCount(0);
    }
  }

  function triggerGlitch() {
    setGlitching(true);
    let i = 0;
    glitchInterval.current = setInterval(() => {
      setGlitchText(GLITCH_NAMES[i % GLITCH_NAMES.length]);
      i++;
    }, 120);

    resetTimeout.current = setTimeout(() => {
      clearInterval(glitchInterval.current);
      setGlitchText("Adam Wilson");
      setGlitching(false);
    }, 2800);
  }

  useEffect(() => {
    return () => {
      clearInterval(glitchInterval.current);
      clearTimeout(resetTimeout.current);
    };
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
  ];

  return (
    <>
      <style>{`
        @keyframes glitchShake {
          0%   { transform: translate(0, 0) skew(0deg); }
          20%  { transform: translate(-2px, 1px) skew(1deg); }
          40%  { transform: translate(2px, -1px) skew(-1deg); }
          60%  { transform: translate(-1px, 2px) skew(0.5deg); }
          80%  { transform: translate(1px, -2px) skew(-0.5deg); }
          100% { transform: translate(0, 0) skew(0deg); }
        }
        .glitch-text {
          animation: glitchShake 0.1s infinite;
          color: #a855f7 !important;
          text-shadow: 2px 0 #ec4899, -2px 0 #06b6d4;
          letter-spacing: 1px;
        }
        .brand-click {
          cursor: pointer;
          user-select: none;
        }
        .nav-link-item {
          position: relative;
          color: rgba(255,255,255,0.75) !important;
          font-weight: 700 !important;
          transition: color 0.2s ease !important;
        }
        .nav-link-item:hover {
          color: #fff !important;
        }
        .nav-link-item.active-link {
          color: #a855f7 !important;
        }
      `}</style>

      <Navbar
        expand="lg"
        as="header"
        style={{
          background: "rgba(10,10,26,0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(124,58,237,0.2)",
        }}
      >
        <Container>
          <Navbar.Brand
            as="span"
            onClick={handleBrandClick}
            className={`brand-click ${glitching ? "glitch-text" : ""}`}
            style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}
            title="Try clicking me..."
            aria-label="Adam Wilson — home"
          >
            {glitchText}
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="main-nav"
            aria-label="Toggle navigation menu"
            style={{ borderColor: "rgba(124,58,237,0.4)" }}
          />

          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto" style={{ gap: "0.5rem" }} as="nav" aria-label="Main navigation">
              {navLinks.map(({ to, label }) => (
                <Nav.Link
                  key={to}
                  as={Link}
                  to={to}
                  className={`nav-link-item ${location.pathname === to ? "active-link" : ""}`}
                  aria-current={location.pathname === to ? "page" : undefined}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;