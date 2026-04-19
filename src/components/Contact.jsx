import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { fadeInRight } from "./motion";

export default function Contact() {
  const email = "samratreddy23.p@gmail.com";
  const subject = encodeURIComponent("Project Inquiry");
  const body = encodeURIComponent(
    "Hi Samrat,\n\nI came across your portfolio and would like to discuss a project.\n\n",
  );
  const mailtoHref = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <SectionWrapper id="contact" title="Contact" index="04 / 04" reveal revealVariant={fadeInRight}>
      <div className="flex flex-col items-start gap-10">
        <h3 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
          Let's
          <span className="block text-[#f0a500]">Build.</span>
        </h3>
        <p className="max-w-[560px] text-[0.98rem] leading-[1.75] text-[#8b857b]">
          If you need a frontend engineer who can think in systems, shape product direction, and ship real work, let's talk.
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.a
            href={mailtoHref}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-[#f0a500] px-7 py-3.5 font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-[#0a0a0a] no-underline transition-colors hover:bg-[#ffb72c]"
          >
            Start a Conversation
          </motion.a>
          <motion.a
            href="https://github.com/Samrat-Reddy"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="inline-flex items-center gap-2 border border-[#1f1f1f] px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.1em] text-[#e8e4dc] no-underline transition-colors hover:border-[#e8e4dc]"
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/samrat-reddy-190320382/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="inline-flex items-center gap-2 border border-[#1f1f1f] px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.1em] text-[#e8e4dc] no-underline transition-colors hover:border-[#e8e4dc]"
          >
            LinkedIn
          </motion.a>
        </div>
        <p className="mt-2 font-mono text-[13px] tracking-[0.04em] text-[#6b6760]">{email}</p>
      </div>
    </SectionWrapper>
  );
}
