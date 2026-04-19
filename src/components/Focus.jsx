import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { fadeInRight, staggerContainer } from "./motion";

const timelineItems = [
  {
    step: "01",
    title: "Market Structure",
    desc: "Cleaning raw market feeds, shaping them into readable inputs, and building a base layer that stays reliable under iteration.",
    tags: ["Data Pipelines", "Signal Prep"],
    state: "past",
  },
  {
    step: "02",
    title: "Strategy Testing",
    desc: "Comparing ideas against historical data with clear assumptions, measured execution rules, and tighter validation loops.",
    tags: ["Backtesting", "Execution Logic"],
    state: "past",
  },
  {
    step: "03",
    title: "Current Focus",
    desc: "Building a trading system focused on data analysis, strategy testing, and performance evaluation with interfaces that make decisions easier to audit.",
    tags: ["Performance Review", "Trading UI"],
    state: "active",
  },
];

const timelineItemVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.64,
      type: "spring",
      stiffness: 150,
      damping: 20,
    },
  },
};

function TimelineItem({ item, index }) {
  const isActive = item.state === "active";
  const isPast = item.state === "past";
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={timelineItemVariant}
      whileHover={{
        y: -10,
        scale: isActive ? 1.04 : 1.03,
        transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
      }}
      className="relative grid w-full grid-cols-[56px_minmax(0,1fr)] gap-4 sm:gap-5 md:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)] md:gap-0"
    >
      <div className={["relative", isLeft ? "hidden md:block" : "hidden md:block md:col-start-3"].join(" ")}>
        <div className="relative h-full">
          <div
            className={[
              "absolute top-[42px] h-[2px] w-[calc(100%+12px)] rounded-full bg-[#1f1f1f]/10",
              isLeft ? "right-0" : "left-0",
            ].join(" ")}
          />
          <motion.div
            initial={{ scaleX: 0, opacity: 0.55 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1], delay: 0.18 * (index + 1) }}
            className={[
              "absolute top-[42px] h-[2px] w-[calc(100%+12px)] rounded-full",
              isLeft
                ? "right-0 origin-right bg-gradient-to-l from-[#f0a500]/90 via-[#ffd277]/75 to-[#f7efe0]/20"
                : "left-0 origin-left bg-gradient-to-r from-[#f0a500]/90 via-[#ffd277]/75 to-[#f7efe0]/20",
            ].join(" ")}
          />
          <motion.div
            initial={{ x: isLeft ? "20%" : "-20%", opacity: 0 }}
            whileInView={{ x: isLeft ? "-110%" : "110%", opacity: [0, 0.9, 0] }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.62, ease: "easeInOut", delay: 0.26 + 0.18 * index }}
            className={[
              "absolute top-[37px] h-3 w-16 bg-gradient-to-r from-transparent via-[#fff3cf] to-transparent blur-md",
              isLeft ? "right-0" : "left-0",
            ].join(" ")}
          />
          <div className={isLeft ? "pr-10" : "pl-10"}>
            <motion.div
              className={[
                "group relative overflow-hidden rounded-xl border px-5 py-5 text-left shadow-lg transition-[border-color,box-shadow,background-color,opacity] duration-300 sm:px-6 sm:py-6",
                "bg-white/72 backdrop-blur-md",
                isActive
                  ? "border-[#f0a500]/70 bg-[#fff7e6] shadow-xl shadow-[#f0a500]/20 ring-1 ring-[#f0a500]/35"
                  : "border-[#1f1f1f]/10 shadow-black/5 hover:border-[#f0a500]/25 hover:shadow-xl hover:shadow-black/10",
                isPast ? "opacity-75" : "opacity-100",
              ].join(" ")}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,165,0,0.16),transparent_42%)] opacity-80" />
              {isActive ? (
                <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_0_0_1px_rgba(240,165,0,0.2),0_0_40px_rgba(240,165,0,0.16)]" />
              ) : null}
              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#8b857b]">
                    Step {item.step}
                  </span>
                  {isActive ? (
                    <span className="rounded-full border border-[#f0a500]/30 bg-[#f0a500]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#a36d00]">
                      Live
                    </span>
                  ) : null}
                </div>
                <div className="space-y-3">
                  <h3
                    className={[
                      "text-lg font-semibold leading-tight tracking-[-0.03em] sm:text-[1.28rem]",
                      isActive ? "text-[#111111]" : "text-[#2a2824]",
                    ].join(" ")}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-[1.8] text-[#6f695f] sm:text-[0.96rem]">{item.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={[
                        "rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]",
                        isActive
                          ? "border-[#f0a500]/35 bg-[#ffffff]/70 text-[#9a6a00]"
                          : "border-[#1f1f1f]/10 bg-[#ffffff]/60 text-[#8b857b]",
                      ].join(" ")}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative col-start-1 row-start-1 flex min-h-[120px] items-start justify-center md:col-start-2">
        <div className="absolute left-[27px] top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[#f0a500]/15 via-[#f0a500]/30 to-[#1f1f1f]/10 md:left-1/2 md:w-[4px] md:-translate-x-1/2" />
        <div className="absolute left-[27px] top-0 bottom-0 w-8 -translate-x-1/2 bg-[radial-gradient(circle,rgba(240,165,0,0.14),transparent_65%)] blur-xl md:left-1/2" />
        <div className="absolute left-[27px] top-[42px] h-10 w-10 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,165,0,0.26),transparent_68%)] blur-lg md:left-1/2" />
        <motion.div
          animate={
            isActive
              ? {
                  scale: [1, 1.08, 1],
                  opacity: [0.35, 0.7, 0.35],
                }
              : undefined
          }
          transition={isActive ? { duration: 2.1, repeat: Infinity, ease: "easeInOut" } : undefined}
          className={[
            "absolute left-[27px] top-[30px] h-7 w-7 -translate-x-1/2 rounded-full border",
            isActive ? "border-[#f0a500]/45 bg-[#f0a500]/12" : "border-[#1f1f1f]/15 bg-white/50",
            "md:left-1/2 md:h-8 md:w-8",
          ].join(" ")}
        />
        <div
          className={[
            "relative mt-[34px] h-3.5 w-3.5 rounded-full border-2 shadow-[0_0_0_6px_rgba(255,255,255,0.8)]",
            isActive
              ? "border-[#f0a500] bg-[#f0a500] shadow-[0_0_0_6px_rgba(255,247,230,0.9)]"
              : "border-[#1f1f1f]/20 bg-[#f7f3eb]",
            "md:mt-[39px] md:h-4 md:w-4",
          ].join(" ")}
        />
      </div>

      <div className="relative col-start-2 row-start-1 md:hidden">
        <div className="absolute left-[-26px] top-[42px] h-[2px] w-8 rounded-full bg-[#1f1f1f]/10" />
        <motion.div
          initial={{ scaleX: 0, opacity: 0.55 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1], delay: 0.18 * (index + 1) }}
          className="absolute left-[-26px] top-[42px] h-[2px] w-8 origin-left rounded-full bg-gradient-to-r from-[#f0a500]/90 via-[#ffd277]/75 to-[#f7efe0]/20"
        />
        <motion.div
          initial={{ x: "-20%", opacity: 0 }}
          whileInView={{ x: "110%", opacity: [0, 0.9, 0] }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.62, ease: "easeInOut", delay: 0.26 + 0.18 * index }}
          className="absolute left-[-26px] top-[37px] h-3 w-14 bg-gradient-to-r from-transparent via-[#fff3cf] to-transparent blur-md"
        />
        <motion.div
          className={[
            "group relative overflow-hidden rounded-xl border px-5 py-5 text-left shadow-lg transition-[border-color,box-shadow,background-color,opacity] duration-300 sm:px-6 sm:py-6",
            "bg-white/72 backdrop-blur-md",
            isActive
              ? "border-[#f0a500]/70 bg-[#fff7e6] shadow-xl shadow-[#f0a500]/20 ring-1 ring-[#f0a500]/35"
              : "border-[#1f1f1f]/10 shadow-black/5 hover:border-[#f0a500]/25 hover:shadow-xl hover:shadow-black/10",
            isPast ? "opacity-75" : "opacity-100",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,165,0,0.16),transparent_42%)] opacity-80" />
          {isActive ? (
            <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_0_0_1px_rgba(240,165,0,0.2),0_0_40px_rgba(240,165,0,0.16)]" />
          ) : null}
          <div className="relative z-10 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#8b857b]">
                Step {item.step}
              </span>
              {isActive ? (
                <span className="rounded-full border border-[#f0a500]/30 bg-[#f0a500]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#a36d00]">
                  Live
                </span>
              ) : null}
            </div>
            <div className="space-y-3">
              <h3
                className={[
                  "text-lg font-semibold leading-tight tracking-[-0.03em] sm:text-[1.28rem]",
                  isActive ? "text-[#111111]" : "text-[#2a2824]",
                ].join(" ")}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-[1.8] text-[#6f695f] sm:text-[0.96rem]">{item.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className={[
                    "rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]",
                    isActive
                      ? "border-[#f0a500]/35 bg-[#ffffff]/70 text-[#9a6a00]"
                      : "border-[#1f1f1f]/10 bg-[#ffffff]/60 text-[#8b857b]",
                  ].join(" ")}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Focus() {
  return (
    <SectionWrapper
      id="focus"
      title="Current Focus"
      index="02 / 04"
      contentClassName="flex flex-col items-center text-center"
      reveal
      revealVariant={fadeInRight}
    >
      <div className="w-full max-w-[1040px] space-y-10">
        <div className="mx-auto max-w-[760px] space-y-4 text-center">
          <p className="text-[clamp(1.65rem,3.2vw,2.5rem)] font-semibold leading-[1.28] tracking-[-0.04em] text-[#161513]">
            Current work is structured as a focused build path, from raw market inputs to{" "}
            <span className="text-[#d99000]">testable strategy decisions and readable performance systems</span>.
          </p>
          <p className="mx-auto max-w-[680px] text-sm leading-[1.85] text-[#7b7469] sm:text-[0.98rem]">
            The goal is disciplined iteration: cleaner data, stronger testing loops, and interface patterns that make performance easier to inspect without noise.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative space-y-6 sm:space-y-8"
        >
          <div className="pointer-events-none absolute left-[27px] top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[#1f1f1f]/5 via-[#f0a500]/25 to-[#1f1f1f]/5 md:left-1/2 md:w-[4px] md:-translate-x-1/2" />
          <div className="pointer-events-none absolute left-[27px] top-6 bottom-6 w-12 -translate-x-1/2 bg-[radial-gradient(circle,rgba(240,165,0,0.08),transparent_70%)] blur-2xl md:left-1/2 md:w-20" />
          {timelineItems.map((item, index) => (
            <TimelineItem key={item.step} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
