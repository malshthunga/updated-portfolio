export default function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#stack", label: "Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#certs", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-bg/70 backdrop-blur-lg border-b border-borderSoft">
      <div className="max-w-wrap mx-auto px-8 py-4.5 flex items-center justify-between">
        <div className="font-display font-semibold text-[17px] tracking-tight">
          NM<span className="text-accent">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm text-textDim">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-text transition-colors">
              {l.label}
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
