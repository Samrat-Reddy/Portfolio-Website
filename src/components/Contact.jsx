import { useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("opacity-100", "translate-y-0"); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="px-10 py-28 max-w-[1100px] mx-auto opacity-0 translate-y-5 transition-all duration-500">
      <div className="flex items-baseline justify-between border-b border-[#1f1f1f] pb-5 mb-14">
        <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold tracking-[-0.02em]">Contact</h2>
        <span className="font-mono text-[11px] text-[#6b6760] tracking-[0.1em]">04 / 04</span>
      </div>
      <div className="flex flex-col items-start gap-10">
        <h3 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
          Let's<span className="block text-[#f0a500]">Build.</span>
        </h3>
        <p className="text-[0.95rem] text-[#6b6760] max-w-[480px] leading-[1.7]">
          Open to project collaborations, client work, and conversations about systems, data, and engineering. If you have something real to build — reach out.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="mailto:samrat@example.com"
            className="inline-flex items-center gap-2 bg-[#f0a500] text-[#0a0a0a] font-mono text-[12px] tracking-[0.1em] uppercase px-7 py-3.5 font-medium no-underline hover:opacity-90 hover:-translate-y-px transition-all"
          >
            Send Email ↗
          </a>
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 border border-[#1f1f1f] text-[#e8e4dc] font-mono text-[12px] tracking-[0.1em] uppercase px-7 py-3.5 no-underline hover:border-[#e8e4dc] hover:-translate-y-px transition-all"
          >
            GitHub
          </a>
        </div>
        <p className="font-mono text-[13px] text-[#6b6760] tracking-[0.04em] mt-2">samrat@example.com</p>
      </div>
    </section>
  );
}
