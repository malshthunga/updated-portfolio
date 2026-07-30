import Image from "next/image";
import TileCanvas from "./TileCanvas";

const skills = ["Python", "SQL", "Power BI", "Excel", "Scikit-learn", "Machine Learning"];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <TileCanvas color="255,138,61" />
      <div className="max-w-wrap mx-auto px-8 grid md:grid-cols-[320px_1fr] gap-16 relative z-[1]">
        <div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-surface">

            <Image src="/assets/profile.JPG" alt="Nethmi Malsha" fill className="object-cover" />
          </div>
          <div className="mt-3.5 font-mono text-xs text-textFaint tracking-wide uppercase">
            Adelaide, South Australia
          </div>
        </div>
        <div>
          <div className="eyebrow">About</div>
          <h2 className="text-4xl font-bold mb-4.5">About Me</h2>
          <p className="text-textDim text-base leading-relaxed mb-6.5">
            I'm an IT graduate from Adelaide University, majoring in Artificial Intelligence and Machine Learning, and most days you'll find me somewhere between a dataset, a broken system, and a cup of coffee, trying to make sense of all three. My work stretches across data analytics, IT support, and software engineering, and I like it that way. Data analytics gives me the puzzle, IT support gives me the fix, and software engineering gives me something to build once I've figured both out.

            I keep my problem solving sharp on LeetCode, work in Python, SQL, Power BI, and Java, and spent time as a research assistant at university, which taught me just as much about asking the right question as finding the answer.
            
           <br>Outside of the technical work, I'm an active member of the ACS and served as COO of Women in Leadership Management, where I got to spend time on something I care about just as much as code: making sure more people feel like they belong in tech and in leadership.
          </br>
            If you're into data, tech, or good coffee, let's talk.
          </p>
          <div className="flex flex-wrap gap-2 mb-7">
            {skills.map((s) => (
              <span key={s} className="pill uppercase">
                {s}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 p-4.5 border border-border rounded-2xl bg-surface max-w-[520px]">
            <div className="w-16 h-10.5 rounded-lg bg-transparent flex items-center justify-center flex-shrink-0 overflow-hidden px-2">
              <Image src="/assets/university-logo.jpg" alt="Adelaide University" width={64} height={40} className="object-contain w-full h-full" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[14.5px]">
                Bachelor of Information Technology
              </div>
              <div className="text-textDim text-[13px] mt-0.5">
                Artificial Intelligence & Machine Learning · Adelaide University
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
