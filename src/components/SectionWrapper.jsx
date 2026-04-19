import { motion } from "framer-motion";
import { fadeInLeft } from "./motion";

export default function SectionWrapper({
  id,
  title,
  index,
  children,
  className = "",
  contentClassName = "",
  reveal = false,
  revealVariant = fadeInLeft,
}) {
  const Component = reveal ? motion.section : "section";
  const motionProps = reveal
    ? {
        variants: revealVariant,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.22 },
      }
    : {};

  return (
    <Component
      id={id}
      className={`mx-auto max-w-[1100px] px-6 py-24 sm:px-10 ${className}`}
      {...motionProps}
    >
      {(title || index) && (
        <div className="mb-12 flex items-baseline justify-between gap-6 border-b border-[#1f1f1f] pb-5">
          {title ? (
            <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold tracking-[-0.02em]">
              {title}
            </h2>
          ) : (
            <span />
          )}
          {index ? (
            <span className="font-mono text-[11px] tracking-[0.1em] text-[#6b6760]">
              {index}
            </span>
          ) : null}
        </div>
      )}
      <div className={contentClassName}>{children}</div>
    </Component>
  );
}
