import TileCanvas from "./TileCanvas";

const links = [
  { label: "Email", icon: "✉", href: "mailto:you@example.com" },
  { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/nethmi-ranathunga/" },
  { label: "GitHub", icon: "gh", href: "https://github.com/malshthunga" },
  { label: "Resume", icon: "📄", href: "/resume.pdf" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden text-center">
      <TileCanvas color="255,138,61" />
      <div
        className="absolute w-[520px] h-[520px] rounded-full blur-[120px] opacity-[0.14] pointer-events-none -top-24 left-1/2 -translate-x-1/2"
        style={{ background: "#FF8A3D" }}
      />
      <div className="max-w-wrap mx-auto px-8 relative z-[1]">
        <div className="mb-10 mx-auto text-center">
          <div className="eyebrow justify-center">Let&apos;s Connect</div>
          <h2 className="text-[clamp(30px,4vw,44px)] font-bold">Find me online</h2>
          <p className="text-textDim mt-2.5 text-[15px] max-w-[520px] mx-auto">
            Open to IT support, data, and AI/ML roles — reach out any time.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="flex items-center gap-2.5 px-5.5 py-3 rounded-full border border-border bg-surface text-sm font-medium transition-all hover:border-accent hover:bg-accent/10 hover:text-accent hover:-translate-y-0.5"
            >
              <span className="text-[15px]">{l.icon}</span> {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
