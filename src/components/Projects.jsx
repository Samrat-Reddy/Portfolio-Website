import ProjectCard from "./ProjectCard";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "ReturnSpark",
    category: "E-commerce Platform",
    status: "Awaiting Deployment",
    statusType: "pending",
    desc: "A client e-commerce build for a gifting business, structured to make browsing, product discovery, and purchase flow feel straightforward on both mobile and desktop.",
    tags: ["React", "Tailwind", "Client Work", "E-commerce", "Responsive UI"],
    meta: "Client platform / product presentation and conversion flow",
    link: null,
    featured: true,
    thumbnail:
      "radial-gradient(circle at top left, rgba(240,165,0,0.32), transparent 32%), linear-gradient(135deg, #151515 0%, #1c1c1c 42%, #0d0d0d 100%)",
  },
  {
    title: "RS Calligraphy Studio",
    category: "Workshop Platform",
    status: "Near Completion",
    statusType: "progress",
    desc: "A workshop and registration platform designed to help an instructor present sessions clearly, guide visitors through offerings, and turn interest into sign-ups without friction.",
    tags: ["React", "Client Work", "Workshops", "UX Flow", "Responsive Design"],
    meta: "Client site / workshop discovery and registration experience",
    link: null,
    featured: false,
    thumbnail:
      "radial-gradient(circle at top right, rgba(240,165,0,0.24), transparent 28%), linear-gradient(135deg, #101010 0%, #181414 55%, #0d0d0d 100%)",
  },
  {
    title: "ALRMS",
    category: "Frontend System UI",
    status: "In Progress",
    statusType: "progress",
    desc: "A frontend interface for a resource management system, built around dense operational data, strong hierarchy, and interaction patterns that stay usable under heavier workflows.",
    tags: ["React", "Systems UI", "State Management", "Operational Data"],
    meta: "Systems interface / clarity under data-heavy usage",
    link: "https://github.com/Samrat-Reddy/ALRMS",
    featured: false,
    thumbnail:
      "radial-gradient(circle at bottom left, rgba(56,189,248,0.18), transparent 30%), linear-gradient(135deg, #0f1217 0%, #13171d 52%, #0b0e12 100%)",
  },
  {
    title: "CyberVault",
    category: "Password Manager",
    status: "Shipped",
    statusType: "complete",
    desc: "A Java desktop password manager focused on local-first security, encrypted storage, and a simple trust model with no cloud dependency and no unnecessary complexity.",
    tags: ["Java", "Security", "Encryption", "Desktop App"],
    meta: "Security tool / local encrypted credential storage",
    link: "https://github.com/Samrat-Reddy/CyberVault",
    featured: false,
    thumbnail:
      "radial-gradient(circle at center, rgba(52,211,153,0.16), transparent 32%), linear-gradient(135deg, #0d1210 0%, #141817 56%, #0a0d0c 100%)",
  },
];

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Selected Work"
      index="01 / 04"
      contentClassName="space-y-8"
    >
      <div className="max-w-[720px]">
        <p className="text-sm leading-[1.8] text-[#8b857b] sm:text-[0.98rem]">
          Real work across client delivery, systems UI, and product builds. The emphasis is practical: clear interfaces, reliable flows, and software that is useful beyond a demo.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
