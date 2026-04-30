import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";

const timelineData = [
  {
    year: "2023",
    title: "Started First Internship",
    desc: "At Kapco Metal Stamping, building internal applications with ASP.NET to enhance warehouse operations.",
  },
  {
    year: "2024",
    title: "Enrolled at UW-Madison",
    desc: "Majoring in Information Science, gaining strong technical foundations through coursework and projects.",
  },
  {
    year: "2025",
    title: "Returned to Internship",
    desc: "Managing all of the custom applications for Kapco, improving efficiency and reducing errors.",
  },
  {
    year: "2026",
    title: "Now",
    desc: "Building polished web apps, deepening UI/UX skills, seeking new opportunities.",
  },
];

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        gap: "1.5rem",
        alignItems: "flex-start",
        marginBottom: "2.5rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-30px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* Dot + line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "20px" }}>
        <div style={{
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #7c3aed, #ec4899)",
          boxShadow: visible
            ? "0 0 12px rgba(168,85,247,0.8), 0 0 24px rgba(168,85,247,0.4)"
            : "none",
          transition: `box-shadow 0.6s ease ${index * 0.15 + 0.3}s`,
          flexShrink: 0,
          marginTop: "4px",
        }} />
        <div style={{
          width: "2px",
          flex: 1,
          minHeight: "60px",
          background: "linear-gradient(to bottom, rgba(124,58,237,0.5), rgba(124,58,237,0.05))",
          marginTop: "6px",
        }} />
      </div>

      {/* Card */}
      <div
        style={{
          flex: 1,
          background: "#1a1a2e",
          border: "1px solid rgba(124,58,237,0.2)",
          borderRadius: "12px",
          padding: "1.25rem 1.5rem",
          marginBottom: "0.5rem",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(168,85,247,0.5)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(124,58,237,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div style={{
          display: "inline-block",
          background: "rgba(124,58,237,0.15)",
          border: "1px solid rgba(124,58,237,0.3)",
          borderRadius: "6px",
          padding: "2px 10px",
          color: "#a855f7",
          fontWeight: 700,
          fontSize: "0.8rem",
          letterSpacing: "1px",
          marginBottom: "0.6rem",
        }}>
          {item.year}
        </div>
        <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.4rem" }}>
          {item.title}
        </div>
        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: "1.6" }}>
          {item.desc}
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div style={{ background: "#0d0d20", padding: "80px 0" }}>
      <Container>
        <h2 className="text-center fw-bold mb-2" style={{ color: "#fff" }}>
          My Journey
        </h2>
        <p className="text-center mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
          How I got here
        </p>
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          {timelineData.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Timeline;