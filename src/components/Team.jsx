import SectionWrapper from "./SectionWrapper";

export default function Team() {
  return (
    <SectionWrapper
      id="team"
      title="CraftYourSystems"
      index="03 / 04"
      contentClassName="grid grid-cols-1 items-start gap-16 lg:grid-cols-2"
    >
      <div>
        <h3 className="mb-5 text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1] tracking-[-0.03em]">
          Craft<span className="text-[#f0a500]">Your</span>
          <br />
          Systems.
        </h3>
      </div>
      <div>
        <div className="space-y-4 text-sm leading-[1.75] text-[#8b857b]">
          <p>
            CraftYourSystems is a small team building{" "}
            <strong className="font-medium text-[#e8e4dc]">
              web products and system interfaces for real clients
            </strong>
            . The focus is execution: scoping problems well, designing clearly, and shipping work that holds up in use.
          </p>
          <p>
            The work sits between product thinking and implementation, with an emphasis on useful systems rather than presentation-only builds.
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
            <span aria-hidden="true">/</span>
          </a>
        </div>
        <div className="mt-8">
          {[
            ["Founder & Lead Developer", "Samrat Reddy"],
            ["Client Projects Delivered", "2 (ongoing)"],
            ["Focus Areas", "Web / Systems / UI Engineering"],
          ].map(([title, meta]) => (
            <div
              key={title}
              className="flex items-center justify-between border-b border-[#1f1f1f] py-3.5 text-sm first:border-t first:border-[#1f1f1f]"
            >
              <span className="font-medium">{title}</span>
              <span className="font-mono text-[11px] tracking-[0.05em] text-[#6b6760]">{meta}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
