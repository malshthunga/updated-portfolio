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

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-bg/95 backdrop-blur-lg border-b border-borderSoft shadow-lg shadow-black/30">
      <div className="max-w-wrap mx-auto px-8 py-4.5 flex items-center justify-between">
        <div className="font-display font-semibold text-[17px] tracking-tight">
          NM<span className="text-accent">.</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm">
          {links.map((l) => (
            
              <a key={l.href}
              href={l.href}
              className={`relative pb-1 transition-colors ${
                active === l.href
                  ? "text-text"
                  : "text-textDim hover:text-text"
              }`}
            >
              {l.label}
              {active === l.href && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-accent rounded-full" />
              )}
            </a>
          ))}
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