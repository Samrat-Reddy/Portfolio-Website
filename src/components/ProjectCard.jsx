const badgeStyles = {
  pending: "border border-white/10 bg-white/5 text-[#9a9388]",
  progress: "border border-[rgba(240,165,0,0.24)] bg-[rgba(240,165,0,0.12)] text-[#f0a500]",
  complete: "border border-[rgba(52,211,153,0.22)] bg-[rgba(52,211,153,0.1)] text-[#34d399]",
};

export default function ProjectCard({ project }) {
  return (
    <article
      className={`group relative overflow-hidden border border-[#1f1f1f] bg-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-[#2f2f2f] hover:bg-[#141414] ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden border-b border-[#1f1f1f] ${
          project.featured ? "min-h-[260px] sm:min-h-[320px]" : "min-h-[210px]"
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: project.thumbnail,
            }}
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.12),rgba(10,10,10,0.82))]" />
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
    </article>
  );
}
