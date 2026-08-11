import TileCanvas from "./TileCanvas";

const columns = [
  { title: "Languages", items: ["Python", "SQL", "Java", "JavaScript"] },
  { title: "Data & ML", items: ["scikit-learn", "Pandas", "Power BI", "Excel / PivotTables"] },
  { title: "Engineering", items: ["Spring Boot", "REST APIs", "Git / GitHub", "SQL databases"] },
  {
    title: "IT & Support",
    items: [
      "Windows Server & Active Directory",
      "Microsoft 365",
      "Networking (TCP/IP, DNS, VPN)",
      "System Admin",
      "Troubleshooting",
      "Documentation",
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="relative py-28 overflow-hidden">
      <TileCanvas color="108,142,239" />
      <div
        className="absolute w-[520px] h-[520px] rounded-full blur-[120px] opacity-[0.14] pointer-events-none -bottom-36 -right-28"
        style={{ background: "#6C8EEF" }}
      />
      <div className="max-w-wrap mx-auto px-8 relative z-[1]">
        <div className="mb-12">
          <div className="eyebrow">Tech Stack</div>
          <h2 className="text-[clamp(30px,4vw,44px)] font-bold">What I work with</h2>
          <p className="text-textDim mt-2.5 text-[15px] max-w-[520px]">
            A quick overview — each project below shows the specific tools used for
            that piece of work.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {columns.map((col) => (
            <div key={col.title} className="bg-surface p-7">
              <h3 className="font-mono text-[13px] uppercase tracking-wide text-accent mb-4">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={item} className="text-[14.5px] text-textDim flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-textFaint flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
