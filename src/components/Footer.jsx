export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-4 border-t border-[#1f1f1f] px-6 py-8 sm:px-10">
      <div className="font-mono text-[11px] tracking-[0.08em] text-[#6b6760]">
        Copyright 2026 Samrat Reddy / CraftYourSystems
      </div>
      <div className="flex gap-6 font-mono text-[11px] tracking-[0.08em] text-[#6b6760]">
        <a href="#projects" className="no-underline text-[#6b6760] transition-colors hover:text-[#e8e4dc]">
          Work
        </a>
        <a href="#focus" className="no-underline text-[#6b6760] transition-colors hover:text-[#e8e4dc]">
          Focus
        </a>
        <a
          href="https://github.com/Samrat-Reddy"
          target="_blank"
          rel="noreferrer"
          className="no-underline text-[#6b6760] transition-colors hover:text-[#e8e4dc]"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
