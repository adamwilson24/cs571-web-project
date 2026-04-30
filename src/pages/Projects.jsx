import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import pixio1 from "../assets/pixio1.png";
import pixio2 from "../assets/Project Pixio Logo.png";
import pixio3 from "../assets/pixioweb.png";
import mathware1 from "../assets/CoverPhoto2022.png";
import mathware2 from "../assets/mathware3.png";
import guidance1 from "../assets/GuidanceGuru.png";
import atmz1 from "../assets/atmz.png";
import depop1 from "../assets/depop.png";
import depop2 from "../assets/depop2.png";

const projects = [
  {
    id: 1,
    title: "Project Pixio",
    tagline: "NFT Collection & Brand",
    bannerSrc: pixio1,
    bannerAlt: "Project Pixio NFT collection artwork",
    tags: ["NFT", "Web3", "Branding", "Design"],
    shortDesc: "A fully realized NFT project built from the ground up — art, smart contracts, community, and brand.",
    longDesc: `Pixio was an end-to-end NFT project I conceived, designed, and launched independently. The project involved creating generative artwork, writing and deploying smart contracts, building a minting website, and growing a community around the brand.\n\nFrom logo design to tokenomics, every decision was mine. Pixio taught me what it takes to ship something real into the world — not just code, but marketing, community management, and product thinking.`,
    details: [
      { label: "Role", value: "Solo Creator" },
      { label: "Stack", value: "Solidity, React, Ethers.js" },
      { label: "Year", value: "2023" },
      { label: "Status", value: "Launched" },
    ],
    images: [
      { src: pixio3, alt: "Project Pixio minting website screenshot", label: "Website Preview" },
      { src: pixio2, alt: "Project Pixio brand logo", label: "Brand Logo" },
    ],
    link: "https://adamwilson24.github.io/projectpixio.github.io/",
  },
  {
    id: 2,
    title: "Mathware",
    tagline: "Math Learning Platform",
    bannerSrc: mathware1,
    bannerAlt: "Mathware math learning platform cover image",
    tags: ["React", "Education", "Web App"],
    shortDesc: "An interactive math learning tool built for students who learn better by doing.",
    longDesc: `Mathware is a web-based platform designed to make math practice more engaging. Instead of static problem sets, students work through adaptive exercises with instant visual feedback.\n\nI built the frontend in React, focusing heavily on UX — clean layouts, encouraging feedback states, and a progression system that keeps students motivated. The project sharpened my skills in state management and component architecture.`,
    details: [
      { label: "Role", value: "Full-Stack Developer" },
      { label: "Stack", value: "React, JavaScript, CSS" },
      { label: "Year", value: "2024" },
      { label: "Status", value: "In Progress" },
    ],
    images: [
      { src: mathware2, alt: "Mathware example math problem interface", label: "Example Problem" },
    ],
    link: "https://adamwilson24.github.io/congressional-app-challenge-2022/index.html",
  },
  {
    id: 3,
    title: "Guidance Guru",
    tagline: "AI Academic Advisor",
    bannerSrc: guidance1,
    bannerAlt: "Guidance Guru AI academic advisor interface",
    tags: ["AI", "React", "UX Design"],
    shortDesc: "An AI-powered academic advising tool that helps students navigate course selection and degree planning.",
    longDesc: `Guidance Guru was born out of frustration with clunky academic advising systems. The idea: what if you could just ask a smart assistant what classes to take next?\n\nI designed and built the interface in React, integrating an AI backend that understands degree requirements and student history. The focus was on making the experience feel conversational and human — not like filling out a form.`,
    details: [
      { label: "Role", value: "Designer & Developer" },
      { label: "Stack", value: "React, OpenAI API, Node.js" },
      { label: "Year", value: "2024" },
      { label: "Status", value: "Prototype" },
    ],
    images: [
      { src: guidance1, alt: "Guidance Guru chat interface screenshot", label: "Interface Preview" },
    ],
    link: "https://nimblevalley.github.io/congressional-app-challenge-2023/index.html",
  },
  {
    id: 4,
    title: "Depop Store",
    tagline: "Resale & E-Commerce Brand",
    bannerSrc: depop1,
    bannerAlt: "Depop resale store product photography",
    tags: ["E-Commerce", "Branding", "Photography"],
    shortDesc: "A curated online resale store — sourcing, photographing, pricing, and selling clothing.",
    longDesc: `Running a Depop store taught me things no class could. I handled everything: sourcing inventory, product photography, writing listings, pricing strategy, customer service, and shipping logistics.\n\nAt its peak the store had hundreds of sales. The experience gave me a deep appreciation for branding, visual presentation, and what it takes to build trust with customers online.`,
    details: [
      { label: "Role", value: "Founder & Operator" },
      { label: "Platform", value: "Depop" },
      { label: "Year", value: "2022–Present" },
      { label: "Status", value: "Active" },
    ],
    images: [
      { src: depop2, alt: "Depop store front with clothing listings", label: "Store Front" },
    ],
  },
  {
    id: 5,
    title: "Graphic Design Work",
    tagline: "Logos, Brands & Visuals",
    bannerSrc: atmz1,
    bannerAlt: "ATMZ graphic design logo work",
    tags: ["Design", "Branding", "Illustration"],
    shortDesc: "A collection of logos, brand identities, and visual assets created for personal and client projects.",
    longDesc: `Design has always run alongside my development work. Over the years I've created logos, brand kits, social media assets, and marketing materials for a range of projects — including Pixio, personal brands, and small client work.\n\nI work primarily in Figma and Illustrator, with a focus on clean, memorable marks that hold up at any size. Each piece starts with understanding what the brand needs to communicate before touching a single tool.`,
    details: [
      { label: "Role", value: "Designer" },
      { label: "Tools", value: "Figma, Illustrator" },
      { label: "Year", value: "2022–Present" },
      { label: "Status", value: "Ongoing" },
    ],
    images: [
      { src: atmz1, alt: "ATMZ brand logo design", label: "Logo Work" },
    ],
  },
];

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        animation: "fadeIn 0.25s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0f0f1f",
          border: "1px solid rgba(124,58,237,0.25)",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "900px",
          maxHeight: "90vh",
          overflowY: "auto",
          animation: "slideUp 0.3s ease",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(124,58,237,0.3) transparent",
        }}
      >
        {/* Hero banner */}
        <div style={{
          height: "260px",
          backgroundImage: `url(${project.bannerSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px 20px 0 0",
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          padding: "1.5rem 2rem",
        }}
          role="img"
          aria-label={project.bannerAlt}
        >
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(15,15,31,0.92) 0%, rgba(15,15,31,0.4) 60%, transparent 100%)",
            borderRadius: "20px 20px 0 0",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.6rem" }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  padding: "2px 10px",
                  borderRadius: "999px",
                }}>{tag}</span>
              ))}
            </div>
            <h2 style={{ color: "#fff", fontWeight: 800, margin: 0, fontSize: "1.8rem", textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
              {project.title}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", margin: 0, fontSize: "0.95rem" }}>
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project details"
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              fontSize: "1.2rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >×</button>
        </div>

        {/* Body */}
        <div style={{ padding: "2rem" }}>

          {/* Detail pills */}
          <dl style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
            {project.details.map((d) => (
              <div key={d.label} style={{
                background: "#1a1a2e",
                border: "1px solid rgba(124,58,237,0.2)",
                borderRadius: "10px",
                padding: "0.5rem 1rem",
              }}>
                <dt style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
                  {d.label}
                </dt>
                <dd style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem", margin: 0 }}>
                  {d.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Live link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live site — opens in new tab`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.9rem",
                padding: "0.6rem 1.4rem",
                borderRadius: "10px",
                textDecoration: "none",
                marginBottom: "1.75rem",
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = "0.85";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Visit Live Site
            </a>
          )}

          {/* Description */}
          <div style={{ marginBottom: "2rem" }}>
            {project.longDesc.split("\n\n").map((para, i) => (
              <p key={i} style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.8", marginBottom: "1rem" }}>
                {para}
              </p>
            ))}
          </div>

          {/* Image grid */}
          {project.images.length > 0 && (
            <>
              <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "1rem", fontSize: "1.1rem" }}>Preview</h3>
              <div style={{
                display: "grid",
                gridTemplateColumns: project.images.length === 1 ? "1fr" : "repeat(2, 1fr)",
                gap: "1rem",
              }}>
                {project.images.map((img, i) => (
                  <div key={i} style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    <div style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "0.6rem 0.9rem",
                      background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                    }}>
                      <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.8rem", fontWeight: 600 }}>
                        {img.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <main style={{ background: "#0a0a1a", padding: "80px 0" }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>

      <Container>
        <h1 className="text-center fw-bold mb-2" style={{ color: "#fff" }}>My Projects</h1>
        <p className="text-center mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
          Click any project to explore it in detail
        </p>

        <Row className="g-4">
          {projects.map((project) => (
            <Col md={4} key={project.id}>
              <ProjectCard project={project} onClick={() => setSelected(project)} />
            </Col>
          ))}
        </Row>
      </Container>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}

export default Projects;