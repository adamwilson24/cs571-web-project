import { useState } from "react";

function ProjectCard({ project, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#1a1a2e",
        border: `1px solid ${hovered ? "rgba(168,85,247,0.5)" : "rgba(124,58,237,0.2)"}`,
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 40px rgba(124,58,237,0.25)"
          : "0 4px 16px rgba(0,0,0,0.3)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Banner image */}
      <div style={{
        height: "160px",
        background: project.bannerColor,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Overlay on hover */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}>
          <div style={{
            background: "rgba(124,58,237,0.85)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.85rem",
            padding: "0.5rem 1.25rem",
            borderRadius: "999px",
            letterSpacing: "0.5px",
          }}>
            View Project →
          </div>
        </div>

        {/* Tags */}
        <div style={{
          position: "absolute",
          bottom: "0.75rem",
          left: "0.75rem",
          display: "flex",
          gap: "0.4rem",
          flexWrap: "wrap",
        }}>
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} style={{
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(4px)",
              color: "rgba(255,255,255,0.9)",
              fontSize: "0.7rem",
              fontWeight: 600,
              padding: "2px 8px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.15)",
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "1.25rem" }}>
        <h5 style={{
          color: "#fff",
          fontWeight: 700,
          margin: 0,
          marginBottom: "0.3rem",
          fontSize: "1.05rem",
        }}>
          {project.title}
        </h5>
        <p style={{
          color: "#a855f7",
          fontSize: "0.8rem",
          fontWeight: 600,
          margin: 0,
          marginBottom: "0.6rem",
          letterSpacing: "0.5px",
        }}>
          {project.tagline}
        </p>
        <p style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: "0.875rem",
          margin: 0,
          lineHeight: "1.6",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {project.shortDesc}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;