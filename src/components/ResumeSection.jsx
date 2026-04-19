import { motion } from "framer-motion";
import { fadeInUp } from "./motion";

export default function ResumeSection({ title, children }) {
  return (
    <motion.section
      variants={fadeInUp}
      className="border-t border-[#1f1f1f] py-10 first:border-t-0 first:pt-0"
    >
      <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6b6760]">
          {title}
        </div>
        <div>{children}</div>
      </div>
    </motion.section>
  );
}
