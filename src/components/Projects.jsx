import { useEffect, useRef } from "react";

const projects = [
  {
    title: "ReturnSpark — E-commerce Website",
    status: "Awaiting Deployment",
    statusType: "pending",
    desc: "Designed and developed a full e-commerce platform for a return gifts business. Focused on product presentation, smooth navigation, and a responsive shopping experience. Built to support real customer browsing and purchase flow, aligning with the brand’s gifting use case.",
    tags: ["React", "Tailwind", "E-commerce", "UI/UX", "Client Work"],
    link: null,
  },
  {
    title: "RS Calligraphy Studio — Workshop Platform",
    status: "Near Completion",
    statusType: "progress",
    desc: "Developed a website for a calligraphy instructor to promote workshops and manage course registrations. Focused on clear information flow, user engagement, and seamless sign-up experience for potential students.",
    tags: ["React", "Responsive Design", "UI/UX", "Client Work"],
    link: null,
  },
  {
    title: "ALRMS — System Control UI",
    status: "In Progress",
    statusType: "progress",
    desc: "Frontend interface for a resource management system. Designed for operational clarity — dense data, clean hierarchy, real-time state management. Built with a focus on usability under load.",
    tags: ["React", "State Management", "Data UI", "Systems"],
    link: "https://github.com/Samrat-Reddy/ALRMS",
  },
  {
    title: "CyberVault — Password Manager",
    status: "Shipped",
    statusType: "complete",
    desc: "A desktop password manager built in Java with local encrypted storage. Focused on security fundamentals — hashing, symmetric encryption, and zero-trust local design. No cloud dependency.",
    tags: ["Java", "Encryption", "Security", "Desktop App"],
    link: "https://github.com/Samrat-Reddy/CyberVault",
  },
];

const badgeStyles = {
  pending: "bg-white/5 text-[#6b6760] border border-[#1f1f1f]",
  progress: "bg-[rgba(240,165,0,0.12)] text-[#f0a500] border border-[rgba(240,165,0,0.25)]",
  complete: "bg-[rgba(52,211,153,0.1)] text-[#34d399] border border-[rgba(52,211,153,0.2)]",
};

function ProjectCard({ project }) {
  return (
    <div className="bg-[#0a0a0a] hover:bg-[#111111] transition-colors p-8 flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-[1.2rem] font-bold tracking-[-0.01em] leading-tight">{project.title}</h3>
        <span className={`font-mono text-[9.5px] tracking-[0.12em] uppercase px-2.5 py-1 whitespace-nowrap ml-4 mt-1 flex-shrink-0 ${badgeStyles[project.statusType]}`}>
          {project.status}
        </span>
      </div>
      <p className="text-sm text-[#6b6760] leading-[1.65] mb-6 flex-grow">{project.desc}</p>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex gap-2 flex-wrap">
          {project.tags.map(tag => (
            <span key={tag} className="font-mono text-[10px] tracking-[0.06em] text-[#6b6760] border border-[#1f1f1f] px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <a href={project.link} className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#f0a500] no-underline border-b border-transparent hover:border-[#f0a500] transition-colors">
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("opacity-100", "translate-y-0"); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="px-10 py-28 max-w-[1100px] mx-auto opacity-0 translate-y-5 transition-all duration-500">
      <div className="flex items-baseline justify-between border-b border-[#1f1f1f] pb-5 mb-14">
        <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold tracking-[-0.02em]">Work &amp; Projects</h2>
        <span className="font-mono text-[11px] text-[#6b6760] tracking-[0.1em]">01 / 04</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.5px] bg-[#1f1f1f]">
        {projects.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  );
}
