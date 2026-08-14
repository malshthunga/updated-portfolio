'use client';

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, Play, ArrowRight } from "lucide-react";
import { projects, Project, Category } from "./projectsData";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12,
        color: "#a5b4d4",
        background: "rgba(99,120,180,0.12)",
        border: "1px solid rgba(99,120,180,0.35)",
        borderRadius: 999,
        padding: "3px 10px",
      }}
    >
      <span style={{ width: 5, height: 5, borderRadius: 999, background: "#7c8fd6" }} />
      {children}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: 11,
        fontFamily: "monospace",
        color: "#9c9c9c",
        background: "#1c1c1e",
        border: "1px solid #2c2c2e",
        borderRadius: 6,
        padding: "4px 8px",
      }}
    >
      {children}
    </span>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <div
      style={{
        background: "#111113",
        border: "1px solid #26262a",
        borderRadius: 12,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <div style={{ fontSize: 11, fontFamily: "monospace", color: "#6b6b6f", letterSpacing: 1 }}>
        ● ● ● {project.category.toUpperCase()}
      </div>
      <div>
        <Badge>{project.badge}</Badge>
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 600, color: "#f2f2f2", margin: 0, lineHeight: 1.3 }}>
        {project.title}
      </h3>
      <p style={{ fontSize: 13.5, color: "#a3a3a6", lineHeight: 1.6, margin: 0, flexGrow: 1 }}>
        {project.description}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <button
        onClick={() => onOpen(project)}
        style={{
          background: "none",
          border: "1px solid #33261a",
          borderRadius: 6,
          color: "#e08a3e",
          fontFamily: "monospace",
          fontSize: 13,
          display: "flex",
          alignItems: "center",
          gap: 6,
          cursor: "pointer",
          padding: "8px 12px",
          marginTop: 6,
          alignSelf: "flex-start",
        }}
      >
        view_project() <ArrowRight size={14} />
      </button>
    </div>
  );
}

function Slideshow({ media }: { media?: Project["media"] }) {
  const [index, setIndex] = useState(0);
  const items = media && media.length ? media : [];

  const go = useCallback(
    (dir: number) => {
      if (!items.length) return;
      setIndex((i) => (i + dir + items.length) % items.length);
    },
    [items.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (!items.length) {
    return (
      <div
        style={{
          height: 320,
          borderRadius: 10,
          background: "#1a1a1c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#5a5a5e",
          fontSize: 13,
        }}
      >
        No preview media available
      </div>
    );
  }

  const current = items[index];

  return (
    <div>
      <div
        style={{
          position: "relative",
          minHeight: 380,
          maxHeight: 520,
          borderRadius: 10,
          overflow: "hidden",
          background: "#08080a",
          border: "1px solid #222226",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Full Resolution Overlay Badge */}
        {current.type !== "video" && (
          <a
            href={current.src}
            target="_blank"
            rel="noopener noreferrer"
            title="Open high-resolution image in new tab"
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 10,
              background: "rgba(15, 15, 18, 0.85)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#e08a3e",
              fontSize: 12,
              fontFamily: "monospace",
              padding: "5px 10px",
              borderRadius: 6,
              textDecoration: "none",
              backdropFilter: "blur(4px)",
            }}
          >
            Full Res ↗
          </a>
        )}

        {current.type === "video" ? (
          <video
            key={current.src}
            src={current.src}
            controls
            style={{ width: "100%", maxHeight: 520, objectFit: "contain" }}
          />
        ) : (
          <a
            href={current.src}
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "zoom-in", width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img
              key={current.src}
              src={current.src}
              alt={current.alt || ""}
              style={{
                maxWidth: "100%",
                maxHeight: 500,
                objectFit: "contain",
                padding: 8,
              }}
            />
          </a>
        )}

        {items.length > 1 && (
          <>
            <button onClick={() => go(-1)} aria-label="Previous" style={navBtnStyle("left")}>
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => go(1)} aria-label="Next" style={navBtnStyle("right")}>
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {items.length > 1 && (
        <div style={{ display: "flex", gap: 6, marginTop: 10, justifyContent: "center" }}>
          {items.map((m, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                background: i === index ? "#e08a3e" : "#3a3a3e",
                position: "relative",
              }}
            >
              {m.type === "video" && (
                <Play size={6} style={{ position: "absolute", top: 1, left: 1, color: "#000" }} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
function navBtnStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    [side]: 10,
    transform: "translateY(-50%)",
    width: 34,
    height: 34,
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(0,0,0,0.55)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.82)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        zIndex: 50,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#111113",
          border: "1px solid #26262a",
          borderRadius: 14,
          maxWidth: 640,
          width: "100%",
          maxHeight: "88vh",
          overflowY: "auto",
          padding: 24,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: 11, fontFamily: "monospace", color: "#6b6b6f", letterSpacing: 1 }}>
            {project.category.toUpperCase()}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{ background: "none", border: "none", color: "#9c9c9c", cursor: "pointer", padding: 4 }}
          >
            <X size={18} />
          </button>
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 600, color: "#f2f2f2", margin: "8px 0 16px" }}>
          {project.title}
        </h2>

        <Slideshow media={project.media} />

        <p style={{ fontSize: 14, color: "#c4c4c7", lineHeight: 1.7, marginTop: 18 }}>
          {project.longDescription || project.description}
        </p>

        <div style={{ marginTop: 16, marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontFamily: "monospace", color: "#6b6b6f", marginBottom: 8 }}>
            SKILLS
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            fontFamily: "monospace",
            color: "#e08a3e",
            border: "1px solid #3a2c1e",
            borderRadius: 8,
            padding: "8px 14px",
            textDecoration: "none",
          }}
        >
          <GithubIcon />
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("@analytics");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  useEffect(() => {
      function handleFilterEvent(e: Event) {
        const category = (e as CustomEvent<Category>).detail;
        setActiveCategory(category);
      }
      window.addEventListener("filterProjects", handleFilterEvent as EventListener);
      return () => window.removeEventListener("filterProjects", handleFilterEvent as EventListener);
    }, []);
  const analyticsCount = projects.filter((p) => p.category === "@analytics").length;
  const softwareCount = projects.filter((p) => p.category === "@software").length;
  const itCount = projects.filter((p) => p.category === "@it").length;

  const filteredProjects = projects.filter((p) => p.category === activeCategory);

  const toolSummaries: Record<Category, string> = {
    "@analytics": "Python · SQL · scikit-learn · Power BI · Excel",
    "@software": "Next.js · React · Node.js · TypeScript · PostgreSQL",
    "@it": "Active Directory · PowerShell · Networking · Troubleshooting",
  };

  return (
    <div id="projects" style={{ background: "#0a0a0c", minHeight: "100vh", padding: "40px 24px", color: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        
        {/* Header */}
        <h1 style={{ fontSize: 36, fontWeight: 600, margin: "0 0 8px 0" }}>Projects</h1>
        <p style={{ color: "#8a8a8e", fontSize: 15, margin: "0 0 28px 0" }}>
          Filter by the field you're hiring for — each tab shows only the relevant work.
        </p>

        {/* Category Tabs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
          <button
            onClick={() => setActiveCategory("@analytics")}
            style={{
              padding: "8px 18px",
              borderRadius: 999,
              fontSize: 14,
              fontFamily: "monospace",
              cursor: "pointer",
              background: activeCategory === "@analytics" ? "rgba(224, 138, 62, 0.1)" : "#141416",
              color: activeCategory === "@analytics" ? "#e08a3e" : "#8a8a8e",
              border: activeCategory === "@analytics" ? "1px solid #e08a3e" : "1px solid #242428",
            }}
          >
            Data Analytics ({analyticsCount})
          </button>

          <button
            onClick={() => setActiveCategory("@software")}
            style={{
              padding: "8px 18px",
              borderRadius: 999,
              fontSize: 14,
              fontFamily: "monospace",
              cursor: "pointer",
              background: activeCategory === "@software" ? "rgba(224, 138, 62, 0.1)" : "#141416",
              color: activeCategory === "@software" ? "#e08a3e" : "#8a8a8e",
              border: activeCategory === "@software" ? "1px solid #e08a3e" : "1px solid #242428",
            }}
          >
            Software Engineering ({softwareCount})
          </button>

          <button
            onClick={() => setActiveCategory("@it")}
            style={{
              padding: "8px 18px",
              borderRadius: 999,
              fontSize: 14,
              fontFamily: "monospace",
              cursor: "pointer",
              background: activeCategory === "@it" ? "rgba(224, 138, 62, 0.1)" : "#141416",
              color: activeCategory === "@it" ? "#e08a3e" : "#8a8a8e",
              border: activeCategory === "@it" ? "1px solid #e08a3e" : "1px solid #242428",
            }}
          >
            IT Support ({itCount})
          </button>
        </div>

        {/* Core Tools Subheader */}
        <div style={{ fontSize: 13, color: "#6b6b6f", fontFamily: "monospace", marginBottom: 32 }}>
          Core tools: <span style={{ color: "#a5b4d4" }}>{toolSummaries[activeCategory]}</span>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />
          ))}
        </div>

      </div>

      {/* Slideout Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}