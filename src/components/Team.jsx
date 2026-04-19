import { useEffect, useRef } from "react";

export default function Team() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("opacity-100", "translate-y-0"); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="team" ref={ref} className="px-10 py-28 max-w-[1100px] mx-auto opacity-0 translate-y-5 transition-all duration-500">
      <div className="flex items-baseline justify-between border-b border-[#1f1f1f] pb-5 mb-14">
        <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold tracking-[-0.02em]">Team</h2>
        <span className="font-mono text-[11px] text-[#6b6760] tracking-[0.1em]">02 / 04</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h3 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1] tracking-[-0.03em] mb-5">
            Craft<span className="text-[#f0a500]">Your</span><br />Systems.
          </h3>
        </div>
        <div>
          <div className="text-sm text-[#6b6760] leading-[1.75] space-y-4">
            <p>
              CraftYourSystems is a small team building{" "}
              <strong className="text-[#e8e4dc] font-medium">web products and system interfaces for real clients</strong>.
              The focus is execution — scoping problems, designing solutions, and shipping things that work.
            </p>
            <p>
              We take on projects where both the design thinking and the implementation matter. Not a freelance hustle — a deliberate approach to{" "}
              <strong className="text-[#e8e4dc] font-medium">building things worth building</strong>.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="https://craftyoursystems.in/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono tracking-[0.08em] text-[#f0a500] transition-colors hover:text-[#ffd277]"
            >
              Visit CraftYourSystems
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="mt-8">
            {[
              ["Founder & Lead Developer", "Samrat Reddy"],
              ["Client Projects Delivered", "2 (ongoing)"],
              ["Focus Areas", "Web · Systems · UI Engineering"],
            ].map(([title, meta]) => (
              <div key={title} className="flex justify-between items-center py-3.5 border-b border-[#1f1f1f] first:border-t first:border-[#1f1f1f] text-sm">
                <span className="font-medium">{title}</span>
                <span className="font-mono text-[11px] text-[#6b6760] tracking-[0.05em]">{meta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
