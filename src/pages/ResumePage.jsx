import { motion } from "framer-motion";
import ResumeSection from "../components/ResumeSection";
import { fadeInUp, staggerContainer } from "../components/motion";

const experienceItems = [
  {
    title: "CraftYourSystems",
    period: "Current",
    body: "Building client-facing web products and system interfaces with a focus on clear requirements, practical execution, and delivery that holds up in real use.",
  },
  {
    title: "Client Delivery",
    period: "Recent Work",
    body: "Shipped product flows for a gifting business and a workshop platform, shaping structure, content flow, and interactions around actual customer actions rather than presentation-only design.",
  },
];

const projectItems = [
  {
    title: "ReturnSpark",
    body: "E-commerce platform for a return-gifts business, built to help users browse products, compare options, and move cleanly into purchase flow.",
  },
  {
    title: "RS Calligraphy Studio",
    body: "Workshop platform focused on clearer discovery, stronger information flow, and easier registration for upcoming sessions.",
  },
  {
    title: "CyberVault",
    body: "Local-first password manager built in Java for secure credential storage without depending on a cloud backend.",
  },
];

export default function ResumePage() {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-[980px] px-6 pb-20 pt-32 sm:px-10"
    >
      <motion.header
        variants={fadeInUp}
        className="mb-12 border-b border-[#1f1f1f] pb-10"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[620px]">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#f0a500]">
              Resume
            </p>
            <h1 className="text-[clamp(2.6rem,5vw,4.8rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
              Samrat Reddy
            </h1>
            <p className="mt-5 text-[1rem] leading-[1.75] text-[#8b857b] sm:text-[1.05rem]">
              Frontend engineer building client platforms, system interfaces, and data-oriented products that are designed to be used, not just presented.
            </p>
          </div>
          <motion.a
            href="/Samrat-Reddy-Resume.pdf"
            download
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-2 self-start bg-[#f0a500] px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.1em] text-[#0a0a0a] no-underline"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.header>

      <motion.div variants={staggerContainer}>
        <ResumeSection title="Experience">
          <div className="space-y-8">
            {experienceItems.map((item) => (
              <div key={item.title} className="space-y-2">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h2 className="text-[1.2rem] font-semibold tracking-[-0.02em] text-[#e8e4dc]">
                    {item.title}
                  </h2>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6b6760]">
                    {item.period}
                  </span>
                </div>
                <p className="max-w-[62ch] text-[0.98rem] leading-[1.8] text-[#8b857b]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Projects">
          <div className="space-y-7">
            {projectItems.map((item) => (
              <div key={item.title} className="space-y-2">
                <h2 className="text-[1.1rem] font-semibold tracking-[-0.02em] text-[#e8e4dc]">
                  {item.title}
                </h2>
                <p className="max-w-[62ch] text-[0.98rem] leading-[1.8] text-[#8b857b]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Skills">
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Tailwind CSS",
              "Framer Motion",
              "JavaScript",
              "System UI Design",
              "Product Frontend",
              "Java",
              "Data-Oriented Interfaces",
            ].map((skill) => (
              <span
                key={skill}
                className="border border-[#2a2a2a] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#9a9388]"
              >
                {skill}
              </span>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education">
          <div className="space-y-2">
            <h2 className="text-[1.1rem] font-semibold tracking-[-0.02em] text-[#e8e4dc]">
              B.Tech in Computer Science
            </h2>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6b6760]">
              Ongoing
            </p>
          </div>
        </ResumeSection>
      </motion.div>
    </motion.main>
  );
}
