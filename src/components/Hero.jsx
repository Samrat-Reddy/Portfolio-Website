export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-36 pb-16 px-10 max-w-[1100px] mx-auto">
      {/* Grid background */}
      <div
        className="absolute top-0 right-[-10%] bottom-0 w-1/2 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#1f1f1f 1px, transparent 1px), linear-gradient(90deg, #1f1f1f 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to left, rgba(0,0,0,0.35), transparent)",
        }}
      />

      {/* Eyebrow */}
      <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[#f0a500] mb-6">
        <span className="block w-8 h-px bg-[#f0a500]" />
        Builder &amp; Systems Developer
      </div>

      {/* Name */}
      <h1 className="text-[clamp(3.5rem,9vw,7.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] mb-6">
        Samrat<br />
        <span className="text-[#f0a500]">Reddy.</span>
      </h1>

      {/* Statement */}
      <p className="text-[clamp(1rem,2.2vw,1.35rem)] text-[#6b6760] max-w-[520px] leading-[1.55] mb-12">
        I <strong className="text-[#e8e4dc] font-medium">design and ship real systems</strong> — from client-facing web products to security tools and data-driven interfaces. Currently deepening in{" "}
        <strong className="text-[#e8e4dc] font-medium">algorithmic thinking and system architecture</strong>.
      </p>

      {/* CTAs */}
      <div className="flex gap-4 flex-wrap">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-[#f0a500] text-[#0a0a0a] font-mono text-[12px] tracking-[0.1em] uppercase px-7 py-3.5 font-medium no-underline hover:opacity-90 hover:-translate-y-px transition-all"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-[#1f1f1f] text-[#e8e4dc] font-mono text-[12px] tracking-[0.1em] uppercase px-7 py-3.5 no-underline hover:border-[#e8e4dc] hover:-translate-y-px transition-all"
        >
          Get in Touch
        </a>
      </div>

      {/* Counters */}
      <div className="flex gap-12 mt-16">
        {[["2", "Client Projects"], ["4", "Active Builds"], ["1", "Startup"]].map(([num, label]) => (
          <div key={label}>
            <span className="block text-[2rem] font-extrabold leading-none">{num}</span>
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#6b6760]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
