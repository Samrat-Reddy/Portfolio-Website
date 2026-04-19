import { motion } from "framer-motion";

const badgeStyles = {
  pending: "border border-white/10 bg-white/5 text-[#9a9388]",
  progress: "border border-[rgba(240,165,0,0.24)] bg-[rgba(240,165,0,0.12)] text-[#f0a500]",
  complete: "border border-[rgba(52,211,153,0.22)] bg-[rgba(52,211,153,0.1)] text-[#34d399]",
};

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={
        project.featured
          ? {
              y: -12,
              scale: 1.03,
              boxShadow: "0 28px 70px rgba(0,0,0,0.4)",
            }
          : {
              y: -12,
              scale: 1.02,
              boxShadow: "0 18px 46px rgba(0,0,0,0.3)",
            }
      }
      transition={
        project.featured
          ? { type: "spring", stiffness: 280, damping: 22, mass: 0.9 }
          : { duration: 0.26, ease: [0.22, 1, 0.36, 1] }
      }
      className={`group relative overflow-hidden border border-[#1f1f1f] bg-[#111111] ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      {project.featured ? (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,165,0,0.14),transparent_38%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      ) : null}
      <div
        className={`relative overflow-hidden border-b border-[#1f1f1f] ${
          project.featured ? "min-h-[260px] sm:min-h-[320px]" : "min-h-[210px]"
        }`}
      >
        {project.image ? (
          <motion.img
            src={project.image}
            alt={`${project.title} preview`}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            whileHover={{ scale: project.featured ? 1.05 : 1.04 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: project.thumbnail,
            }}
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08),rgba(10,10,10,0.84))]" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-5">
          {project.featured ? (
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#0a0a0a]">
              <span className="rounded-full bg-[#f0a500] px-3 py-1">Featured Build</span>
            </span>
          ) : (
            <span />
          )}
          <span
            className={`font-mono text-[9.5px] uppercase tracking-[0.14em] px-2.5 py-1 ${
              badgeStyles[project.statusType]
            }`}
          >
            {project.status}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f5d38a]">
            {project.category}
          </div>
          <h3
            className={`max-w-[32rem] tracking-[-0.03em] text-white ${
              project.featured
                ? "text-[clamp(1.8rem,4.2vw,3rem)] font-extrabold leading-[0.95]"
                : "text-[1.5rem] font-bold leading-[1.05]"
            }`}
          >
            {project.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-6 p-5 sm:p-7">
        <p className="max-w-[60ch] text-sm leading-[1.75] text-[#8b857b] sm:text-[0.96rem]">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#2a2a2a] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#9a9388]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 border-t border-[#1f1f1f] pt-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6b6760]">
            {project.meta}
          </span>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#f0a500] transition-colors hover:text-[#ffd277]"
            >
              View Code
              <span aria-hidden="true">/</span>
            </a>
          ) : (
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#f0a500]">
              Private Client Build
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
