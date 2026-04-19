import SectionWrapper from "./SectionWrapper";

export default function Focus() {
  return (
    <SectionWrapper
      id="focus"
      title="Current Focus"
      index="02 / 04"
      contentClassName="flex flex-col items-center text-center"
    >
      <div className="max-w-[760px] space-y-6">
        <p className="text-[clamp(1.5rem,3.2vw,2.35rem)] font-semibold leading-[1.35] tracking-[-0.03em]">
          Currently building a trading system focused on{" "}
          <span className="text-[#f0a500]">data analysis, strategy testing, and performance evaluation</span>.
        </p>
        <p className="mx-auto max-w-[640px] text-sm leading-[1.8] text-[#8b857b] sm:text-[0.98rem]">
          The work is centered on turning raw market data into usable insight, testing ideas with discipline, and building interfaces that make performance easier to read and reason about.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {["Market Data", "Backtesting", "Strategy Logic", "Performance Review"].map((item) => (
            <span
              key={item}
              className="border border-[#1f1f1f] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#9a9388]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
