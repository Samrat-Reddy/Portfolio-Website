import { useEffect, useRef } from "react";

export default function Focus() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("opacity-100", "translate-y-0"); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="focus" ref={ref} className="px-10 py-28 max-w-[1100px] mx-auto opacity-0 translate-y-5 transition-all duration-500">
      <div className="flex items-baseline justify-between border-b border-[#1f1f1f] pb-5 mb-14">
        <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold tracking-[-0.02em]">Current Focus</h2>
        <span className="font-mono text-[11px] text-[#6b6760] tracking-[0.1em]">03 / 04</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-start">
        <div>
          <p className="text-[clamp(1.4rem,3vw,2rem)] font-semibold leading-[1.35] tracking-[-0.02em] mb-8">
            Building a <span className="text-[#f0a500]">data-driven trading system</span> — from market data ingestion to signal logic and execution interface.
          </p>
          <div className="text-sm text-[#6b6760] leading-[1.75] space-y-4">
            <p>
              The trading system is the most technically demanding project on the board right now. It requires thinking across layers: data pipelines, algorithmic decision logic, and a fast UI that surfaces the right information at the right time.
            </p>
            <p>
              Beyond trading, the direction is toward systems that process real data and produce actionable outputs. The common thread isn't a tech stack — it's a bias toward{" "}
              <strong className="text-[#e8e4dc] font-medium">measurable outcomes over surface polish</strong>.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[1.5px] bg-[#1f1f1f]">
          {[
            ["Systems", "Primary Domain"],
            ["Data", "Core Interest"],
            ["Trading", "Active Build"],
            ["2025", "Target MVP"],
          ].map(([num, label]) => (
            <div key={label} className="bg-[#111111] px-6 py-5">
              <div className="text-[1.75rem] font-extrabold leading-none text-[#e8e4dc]">{num}</div>
              <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#6b6760] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
