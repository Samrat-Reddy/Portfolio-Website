export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen max-w-[1100px] flex-col justify-center px-6 pb-16 pt-36 sm:px-10"
    >
      <div
        className="pointer-events-none absolute bottom-0 right-[-10%] top-0 w-1/2"
        style={{
          backgroundImage:
            "linear-gradient(#1f1f1f 1px, transparent 1px), linear-gradient(90deg, #1f1f1f 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to left, rgba(0,0,0,0.35), transparent)",
        }}
      />

      <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#f0a500]">
        <span className="block h-px w-8 bg-[#f0a500]" />
        Frontend Engineer and System Builder
      </div>

      <h1 className="mb-6 text-[clamp(3.4rem,9vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em]">
        Samrat
        <br />
        <span className="text-[#f0a500]">Reddy.</span>
      </h1>

      <p className="mb-12 max-w-[640px] text-[clamp(1.05rem,2.2vw,1.35rem)] leading-[1.6] text-[#8b857b]">
        I build systems that solve real problems, from client platforms and operational interfaces to security tools and data-driven products.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-[#f0a500] px-7 py-3.5 font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-[#0a0a0a] no-underline transition-all hover:-translate-y-px hover:bg-[#ffb72c]"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-[#1f1f1f] px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.1em] text-[#e8e4dc] no-underline transition-all hover:-translate-y-px hover:border-[#e8e4dc]"
        >
          Contact
        </a>
      </div>

      <div className="mt-16 grid max-w-[720px] grid-cols-1 gap-6 border-t border-[#1f1f1f] pt-8 sm:grid-cols-3">
        {[
          ["Client Work", "Building and shipping live products for real use cases."],
          ["Systems UI", "Designing interfaces that handle dense workflows clearly."],
          ["Current Direction", "Trading infrastructure, analysis, and product execution."],
        ].map(([title, text]) => (
          <div key={title}>
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#f0a500]">
              {title}
            </span>
            <p className="text-sm leading-[1.7] text-[#8b857b]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
