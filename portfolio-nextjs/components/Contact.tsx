import { Mail, FileText } from "lucide-react";
import TileCanvas from "./TileCanvas";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.42.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"/>
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z"/>
  </svg>
);

const links = [
  { label: "Email", icon: Mail, href: "mailto:you@example.com" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/in/nethmi-ranathunga/" },
  { label: "GitHub", icon: GithubIcon, href: "https://github.com/malshthunga" },
  { label: "Resume", icon: FileText, href: "/resume.pdf" },
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
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2.5 px-5.5 py-3 rounded-full border border-border bg-surface text-sm font-medium transition-all hover:border-accent hover:bg-accent/10 hover:text-accent hover:-translate-y-0.5"
              >
                <Icon size={16} />
                {l.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}