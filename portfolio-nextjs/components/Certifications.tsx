import TileCanvas from "./TileCanvas";

const certs = [
  { title: "Google IT Support Professional Certificate", meta: "Google / Coursera · May 2026", placeholder: false },
  { title: "[Update: course title]", meta: "[Update: issuer · date]", placeholder: true },
];

export default function Certifications() {
  return (
    <section id="certs" className="relative py-28 overflow-hidden">
      <TileCanvas color="108,142,239" />
      <div className="max-w-wrap mx-auto px-8 relative z-[1]">
        <div className="mb-12">
          <div className="eyebrow">Credentials</div>
          <h2 className="text-[clamp(30px,4vw,44px)] font-bold">Certifications</h2>
          <p className="text-textDim mt-2.5 text-[15px] max-w-[520px]">
            Verified credentials and clearances.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {certs.map((c) => (
            <div
              key={c.title}
              className={`flex items-start gap-3.5 p-5 rounded-xl border bg-bg ${
                c.placeholder ? "border-dashed border-border" : "border-border"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                  c.placeholder ? "bg-textFaint" : "bg-accent shadow-[0_0_8px_#FF8A3D]"
                }`}
              />
              <div>
                <h5 className={`text-[15px] font-semibold mb-1 ${c.placeholder ? "text-textFaint" : ""}`}>
                  {c.title}
                </h5>
                <div className="font-mono text-[12.5px] text-textFaint">{c.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
