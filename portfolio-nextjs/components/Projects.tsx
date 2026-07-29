"use client";

import { useState } from "react";
import TileCanvas from "./TileCanvas";
import { tabs, projects, TabKey } from "./projectsData";

export default function Projects() {
  const [active, setActive] = useState<TabKey>("data");
  const activeTab = tabs.find((t) => t.key === active)!;

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <TileCanvas color="255,138,61" />
      <div className="max-w-wrap mx-auto px-8 relative z-[1]">
        <div className="mb-12">
          <div className="eyebrow">Portfolio</div>
          <h2 className="text-[clamp(30px,4vw,44px)] font-bold">Projects</h2>
          <p className="text-textDim mt-2.5 text-[15px] max-w-[520px]">
            Filter by the field you&apos;re hiring for — each tab shows only the
            relevant work.
          </p>
        </div>

        <div className="flex gap-2.5 flex-wrap mb-3.5">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`tab ${active === t.key ? "active" : ""}`}
            >
              {t.label}{" "}
              <span className="text-[11px] text-textFaint">
                ({projects[t.key].length})
              </span>
            </button>
          ))}
        </div>
        <div className="font-mono text-[12.5px] text-textFaint mb-8">
          Core tools: <span className="text-accent2">{activeTab.tools}</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects[active].map((p) => (
            <div key={p.title} className="card">
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-border" />
                  ))}
                </div>
                <div className="font-mono text-[11px] text-textFaint uppercase tracking-wide">
                  {p.category}
                </div>
              </div>
              <span className={`badge ${p.placeholder ? "badge-placeholder" : ""}`}>
                {p.badge}
              </span>
              <h4 className="text-[19px] font-semibold mb-2.5 leading-snug">{p.title}</h4>
              <p className={`text-sm leading-relaxed flex-1 ${p.placeholder ? "text-textFaint italic" : "text-textDim"}`}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 my-4.5">
                {p.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={p.href}
                className={`font-mono text-[13px] inline-flex items-center gap-1.5 ${
                  p.placeholder ? "text-textFaint pointer-events-none" : "text-accent"
                }`}
              >
                view_project() →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
