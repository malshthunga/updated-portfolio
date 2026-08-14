"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#stack", label: "Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#certs", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  const projectCategories = [
    { key: "@software", label: "Software Engineering" },
    { key: "@it", label: "IT Support" },
    { key: "@analytics", label: "Data Analytics" },
  ];

  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function goToProjects(category: string) {
    window.dispatchEvent(new CustomEvent("filterProjects", { detail: category }));
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-bg/95 backdrop-blur-lg border-b border-borderSoft shadow-lg shadow-black/30">
      <div className="max-w-wrap mx-auto px-8 py-4.5 flex items-center justify-between">
        <div className="font-display font-semibold text-[17px] tracking-tight">
          NM<span className="text-accent">.</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm">
          {links.map((l) =>
            l.href === "#projects" ? (
              <div key={l.href} className="relative group">
                <a
                  href={l.href}
                  className={`relative pb-1 transition-colors ${
                    active === l.href ? "text-text" : "text-textDim hover:text-text"
                  }`}
                >
                  {l.label}
                  {active === l.href && (
                    <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-accent rounded-full" />
                  )}
                </a>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-150">
                  <div className="bg-surface border border-border rounded-xl p-1.5 flex flex-col gap-0.5 min-w-[190px] shadow-lg shadow-black/40">
                    {projectCategories.map((c) => (
                      <button
                        key={c.key}
                        onClick={() => goToProjects(c.key)}
                        className="text-left text-[13px] text-textDim hover:text-text hover:bg-bg/60 rounded-lg px-3 py-2 transition-colors"
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className={`relative pb-1 transition-colors ${
                  active === l.href ? "text-text" : "text-textDim hover:text-text"
                }`}
              >
          
                {l.label}
                {active === l.href && (
                  <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-accent rounded-full" />
                )}
              </a>
            )
          )}
        </div>

        <a 
          href="#contact"
          className="text-[13px] px-4.5 py-2 rounded-full bg-accent text-bg font-semibold hover:opacity-85 transition-opacity"
        >
          Let&apos;s Talk
        </a>
      </div>
    </nav>
  );
}