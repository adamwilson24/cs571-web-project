import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeroCanvas from "./HeroCanvas";

const PHRASES = [
  "I build web apps.",
  "I design experiences.",
  "I solve real problems.",
  "I ship real things.",
];

const TYPE_SPEED = 60;
const DELETE_SPEED = 35;
const PAUSE = 1800;

function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIndex];

    if (pausing) {
      const t = setTimeout(() => {
        setPausing(false);
        setTyping(false);
      }, PAUSE);
      return () => clearTimeout(t);
    }

    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, TYPE_SPEED);
        return () => clearTimeout(t);
      } else {
        setPausing(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, DELETE_SPEED);
        return () => clearTimeout(t);
      } else {
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, pausing, phraseIndex]);

  return (
    <div className="hero-section">
      <HeroCanvas />
      <div className="hero-content">
        <h1>Hi, I'm Adam 👋</h1>

        <p style={{ 
          minHeight: "2rem",
          fontWeight: 700,
          fontSize: "1.4rem",
          textShadow: "0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.9)",
        }}>
          {displayed}
          <span style={{
            display: "inline-block",
            width: "2px",
            height: "1.1em",
            background: "#a855f7",
            marginLeft: "3px",
            verticalAlign: "middle",
            animation: "blink 0.8s step-end infinite",
          }} />
        </p>

        <div className="d-flex justify-content-center gap-3">
          <Button
            as={Link}
            to="/projects"
            style={{ background: "#7c3aed", border: "none", fontWeight: 600 }}
          >
            View Projects
          </Button>
          <Button variant="outline-light" as={Link} to="/about">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;