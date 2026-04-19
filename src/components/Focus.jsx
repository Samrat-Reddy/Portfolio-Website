import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { fadeInRight, staggerContainer } from "./motion";

const timelineItems = [
  {
    step: "01",
    title: "Foundation",
    desc: "Built a strong base in Java, data structures, and problem solving through regular practice and smaller programming exercises.",
    tags: ["Java", "DSA", "Problem Solving"],
    state: "done",
  },
  {
    step: "02",
    title: "System Building",
    desc: "Moved from practice into building projects like CyberVault and ALRMS, with more attention to frontend structure, layout, and clear interfaces.",
    tags: ["CyberVault", "ALRMS", "Structured UI"],
    state: "done",
  },
  {
    step: "03",
    title: "Client Work",
    desc: "Worked on ReturnSpark and RS Calligraphy Studio with real client feedback, revisions, and usability decisions that had to hold up in actual use.",
    tags: ["ReturnSpark", "RS Calligraphy"],
    state: "done",
  },
  {
    step: "04",
    title: "Current Focus",
    desc: "Currently building an early-stage trading system focused on data analysis and basic strategy testing, with an emphasis on learning through structured iteration.",
    tags: ["Trading System", "Data Analysis", "Basic Strategy Testing"],
    state: "current",
  },
];

const timelineItemVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.8,
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
  const isDone = item.state === "done";
  const isCurrent = item.state === "current";
  const isFuture = item.state === "future";
  const isLeft = index % 2 === 0;
  const connectorBright = isDone || isCurrent;

  const cardClassName = [
    "group relative overflow-hidden rounded-xl border px-5 py-5 text-left shadow-lg transition-[transform,border-color,box-shadow,background-color,opacity] duration-300 sm:px-6 sm:py-6",
    "backdrop-blur-md",
    isCurrent
      ? "border-[#f0a500]/65 bg-[#1b1507]/92 shadow-xl shadow-[#f0a500]/20 ring-1 ring-[#f0a500]/30"
      : isDone
        ? "border-[#22c55e]/30 bg-[#07140d]/90 shadow-lg shadow-[#22c55e]/10"
        : "border-white/8 bg-[#16161a]/92 shadow-lg shadow-black/30",
    isFuture ? "opacity-80" : "opacity-100",
    "hover:shadow-xl",
  ].join(" ");

  const cardOverlayClassName = [
    "pointer-events-none absolute inset-0 opacity-80",
    isCurrent
      ? "bg-[radial-gradient(circle_at_top_left,rgba(240,165,0,0.22),transparent_42%)]"
      : isDone
        ? "bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_42%)]"
        : "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_42%)]",
  ].join(" ");

  const cardHoverMotion = {
    y: -8,
    scale: isCurrent ? 1.04 : 1.025,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <motion.div
      variants={timelineItemVariant}
      className="relative grid w-full grid-cols-[56px_minmax(0,1fr)] gap-4 sm:gap-5 md:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)] md:gap-0"
    >
      <div className={["relative", isLeft ? "hidden md:block" : "hidden md:block md:col-start-3"].join(" ")}>
        <div className="relative h-full">
          <div
            className={[
              "absolute top-[42px] h-[3px] w-[calc(100%+44px)] rounded-full bg-[#27272a]",
              isLeft ? "right-[-44px]" : "left-[-44px]",
            ].join(" ")}
          />
          <motion.div
            initial={{ scaleX: 0, opacity: 0.55 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1], delay: 0.18 * (index + 1) }}
            className={[
              "absolute top-[42px] h-[3px] w-[calc(100%+44px)] rounded-full",
              isLeft
                ? connectorBright
                  ? "right-[-44px] origin-right bg-gradient-to-l from-[#22c55e] via-[#86efac] to-[#f0a500]/55"
                  : "right-[-44px] origin-right bg-gradient-to-l from-[#3f3f46] via-[#27272a] to-[#18181b]"
                : connectorBright
                  ? "left-[-44px] origin-left bg-gradient-to-r from-[#22c55e] via-[#86efac] to-[#f0a500]/55"
                  : "left-[-44px] origin-left bg-gradient-to-r from-[#3f3f46] via-[#27272a] to-[#18181b]",
            ].join(" ")}
          />
          <motion.div
            initial={{ x: isLeft ? "20%" : "-20%", opacity: 0 }}
            whileInView={{ x: isLeft ? "-110%" : "110%", opacity: [0, 0.9, 0] }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.62, ease: "easeInOut", delay: 0.26 + 0.18 * index }}
            className={[
              "absolute top-[37px] h-4 w-16 bg-gradient-to-r from-transparent to-transparent blur-md",
              connectorBright ? "via-[#dcfce7]" : "via-[#3f3f46]/60",
              isLeft ? "right-[-44px]" : "left-[-44px]",
            ].join(" ")}
          />
          <div className={isLeft ? "pr-10" : "pl-10"}>
            <motion.div className={cardClassName} whileHover={cardHoverMotion}>
              <div className={cardOverlayClassName} />
              {isCurrent ? (
                <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_0_0_1px_rgba(240,165,0,0.22),0_0_40px_rgba(240,165,0,0.14)]" />
              ) : null}
              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={[
                      "font-mono text-[10px] uppercase tracking-[0.22em]",
                      isDone ? "text-[#86efac]" : isCurrent ? "text-[#ffd277]" : "text-[#7f7f86]",
                    ].join(" ")}
                  >
                    Step {item.step}
                  </span>
                  {isCurrent ? (
                    <span className="rounded-full border border-[#f0a500]/30 bg-[#f0a500]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#ffd277]">
                      Current
                    </span>
                  ) : isDone ? (
                    <span className="rounded-full border border-[#22c55e]/25 bg-[#22c55e]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#86efac]">
                      Done
                    </span>
                  ) : (
                    <span className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#7f7f86]">
                      Next
                    </span>
                  )}
                </div>
                <div className="space-y-3">
                  <h3
                    className={[
                      "text-lg font-semibold leading-tight tracking-[-0.03em] sm:text-[1.28rem]",
                      isCurrent ? "text-[#fff7e6]" : isDone ? "text-[#f3fff7]" : "text-[#f2f2f4]",
                    ].join(" ")}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={[
                      "text-sm leading-[1.8] sm:text-[0.96rem]",
                      isCurrent ? "text-[#d8c7a1]" : isDone ? "text-[#a7cdb3]" : "text-[#9797a1]",
                    ].join(" ")}
                  >
                    {item.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={[
                        "rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]",
                        isCurrent
                          ? "border-[#f0a500]/35 bg-[#f0a500]/10 text-[#ffd277]"
                          : isDone
                            ? "border-[#22c55e]/25 bg-[#22c55e]/10 text-[#86efac]"
                            : "border-white/8 bg-white/[0.03] text-[#7f7f86]",
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

      <div className="relative col-start-1 row-start-1 min-h-[132px] md:col-start-2">
        <div
          className={[
            "absolute left-[27px] top-0 bottom-0 w-[4px] rounded-full md:left-1/2 md:w-[5px] md:-translate-x-1/2",
            connectorBright
              ? "bg-gradient-to-b from-[#22c55e]/80 via-[#86efac]/75 to-[#f0a500]/60"
              : "bg-gradient-to-b from-[#3f3f46] via-[#27272a] to-[#18181b]",
          ].join(" ")}
        />
        <div
          className={[
            "absolute left-[27px] top-0 bottom-0 w-10 -translate-x-1/2 blur-xl md:left-1/2",
            connectorBright
              ? "bg-[radial-gradient(circle,rgba(134,239,172,0.2),transparent_65%)]"
              : "bg-[radial-gradient(circle,rgba(63,63,70,0.22),transparent_65%)]",
          ].join(" ")}
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0, x: "-50%", y: "-50%" }}
          whileInView={{ scale: isCurrent ? 1.08 : 1, opacity: 1, x: "-50%", y: "-50%" }}
          viewport={{ once: true, amount: 0.7 }}
          animate={
            isCurrent
              ? {
                  scale: [1.02, 1.08, 1.02],
                  x: "-50%",
                  y: "-50%",
                }
              : undefined
          }
          transition={
            isCurrent
              ? { duration: 2.1, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
          }
          className={[
            "absolute left-[27px] top-[42px] flex items-center justify-center md:left-1/2",
            "h-12 w-12 md:h-14 md:w-14",
          ].join(" ")}
        >
          <div
            className={[
              "absolute inset-0 rounded-full blur-lg",
              isCurrent
                ? "bg-[radial-gradient(circle,rgba(240,165,0,0.3),transparent_68%)]"
                : isDone
                  ? "bg-[radial-gradient(circle,rgba(34,197,94,0.26),transparent_68%)]"
                  : "bg-[radial-gradient(circle,rgba(63,63,70,0.16),transparent_68%)]",
            ].join(" ")}
          />
          <div
            className={[
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border",
              "h-8 w-8 md:h-10 md:w-10",
              isCurrent
                ? "border-[#f0a500]/55 bg-[#f0a500]/12 shadow-[0_0_28px_rgba(240,165,0,0.24)]"
                : isDone
                  ? "border-[#22c55e]/45 bg-[#22c55e]/14 shadow-[0_0_22px_rgba(34,197,94,0.2)]"
                  : "border-[#3f3f46] bg-[#18181b]",
            ].join(" ")}
          />
          <div
            className={[
              "relative z-10 flex items-center justify-center rounded-full border-2",
              "h-3.5 w-3.5 md:h-5 md:w-5",
              isCurrent
                ? "border-[#f0a500] bg-[#f0a500] shadow-[0_0_0_6px_rgba(240,165,0,0.12)]"
                : isDone
                  ? "border-[#22c55e] bg-[#22c55e] shadow-[0_0_0_6px_rgba(34,197,94,0.12)]"
                  : "border-[#52525b] bg-[#18181b]",
            ].join(" ")}
          >
            {isDone ? (
              <motion.svg
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.32, delay: 0.12 }}
                viewBox="0 0 16 16"
                className="h-2.5 w-2.5 text-white md:h-3 md:w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.5 8.5 6.5 11.5 12.5 5.5" />
              </motion.svg>
            ) : null}
          </div>
        </motion.div>
      </div>

      <div className="relative col-start-2 row-start-1 md:hidden">
        <div className="absolute left-[-26px] top-[42px] h-[3px] w-8 rounded-full bg-[#27272a]" />
        <motion.div
          initial={{ scaleX: 0, opacity: 0.55 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1], delay: 0.18 * (index + 1) }}
          className={[
            "absolute left-[-26px] top-[42px] h-[3px] w-8 origin-left rounded-full",
            connectorBright
              ? "bg-gradient-to-r from-[#22c55e] via-[#86efac] to-[#f0a500]/55"
              : "bg-gradient-to-r from-[#3f3f46] via-[#27272a] to-[#18181b]",
          ].join(" ")}
        />
        <motion.div
          initial={{ x: "-20%", opacity: 0 }}
          whileInView={{ x: "110%", opacity: [0, 0.9, 0] }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.62, ease: "easeInOut", delay: 0.26 + 0.18 * index }}
          className={[
            "absolute left-[-26px] top-[37px] h-4 w-14 bg-gradient-to-r from-transparent to-transparent blur-md",
            connectorBright ? "via-[#dcfce7]" : "via-[#3f3f46]/60",
          ].join(" ")}
        />
        <motion.div className={cardClassName} whileHover={cardHoverMotion}>
          <div className={cardOverlayClassName} />
          {isCurrent ? (
            <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_0_0_1px_rgba(240,165,0,0.22),0_0_40px_rgba(240,165,0,0.14)]" />
          ) : null}
          <div className="relative z-10 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <span
                className={[
                  "font-mono text-[10px] uppercase tracking-[0.22em]",
                  isDone ? "text-[#86efac]" : isCurrent ? "text-[#ffd277]" : "text-[#7f7f86]",
                ].join(" ")}
              >
                Step {item.step}
              </span>
              {isCurrent ? (
                <span className="rounded-full border border-[#f0a500]/30 bg-[#f0a500]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#ffd277]">
                  Current
                </span>
              ) : isDone ? (
                <span className="rounded-full border border-[#22c55e]/25 bg-[#22c55e]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#86efac]">
                  Done
                </span>
              ) : (
                <span className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#7f7f86]">
                  Next
                </span>
              )}
            </div>
            <div className="space-y-3">
              <h3
                className={[
                  "text-lg font-semibold leading-tight tracking-[-0.03em] sm:text-[1.28rem]",
                  isCurrent ? "text-[#fff7e6]" : isDone ? "text-[#f3fff7]" : "text-[#f2f2f4]",
                ].join(" ")}
              >
                {item.title}
              </h3>
              <p
                className={[
                  "text-sm leading-[1.8] sm:text-[0.96rem]",
                  isCurrent ? "text-[#d8c7a1]" : isDone ? "text-[#a7cdb3]" : "text-[#9797a1]",
                ].join(" ")}
              >
                {item.desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className={[
                    "rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]",
                    isCurrent
                      ? "border-[#f0a500]/35 bg-[#f0a500]/10 text-[#ffd277]"
                      : isDone
                        ? "border-[#22c55e]/25 bg-[#22c55e]/10 text-[#86efac]"
                        : "border-white/8 bg-white/[0.03] text-[#7f7f86]",
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
          <p className="text-[clamp(1.65rem,3.2vw,2.5rem)] font-semibold leading-[1.28] tracking-[-0.04em] text-[#f5f1e8]">
            The path is simple and visible, from programming fundamentals to projects, client work, and{" "}
            <span className="text-[#ffd277]">an early-stage trading system now in progress</span>.
          </p>
          <p className="mx-auto max-w-[680px] text-sm leading-[1.85] text-[#a5a09a] sm:text-[0.98rem]">
            It is meant to read honestly at a glance: what is done, what is active now, and where the work is heading next.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative space-y-6 sm:space-y-8"
        >
          <div className="pointer-events-none absolute left-[27px] top-0 bottom-0 w-[4px] rounded-full bg-gradient-to-b from-[#22c55e]/75 via-[#86efac]/65 to-[#27272a] md:left-1/2 md:w-[5px] md:-translate-x-1/2" />
          <div className="pointer-events-none absolute left-[27px] top-6 bottom-6 w-14 -translate-x-1/2 bg-[radial-gradient(circle,rgba(134,239,172,0.14),transparent_70%)] blur-2xl md:left-1/2 md:w-24" />
          {timelineItems.map((item, index) => (
            <TimelineItem key={item.step} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
