export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] px-10 py-8 max-w-[1100px] mx-auto flex justify-between items-center flex-wrap gap-4">
      <div className="font-mono text-[11px] text-[#6b6760] tracking-[0.08em]">
        © 2025 Samrat Reddy — CraftYourSystems
      </div>
      <div className="flex gap-6 font-mono text-[11px] text-[#6b6760] tracking-[0.08em]">
        <a href="#projects" className="no-underline text-[#6b6760] hover:text-[#e8e4dc] transition-colors">Work</a>
        <a href="#team" className="no-underline text-[#6b6760] hover:text-[#e8e4dc] transition-colors">Team</a>
        <a href="https://github.com" className="no-underline text-[#6b6760] hover:text-[#e8e4dc] transition-colors">GitHub</a>
      </div>
    </footer>
  );
}
