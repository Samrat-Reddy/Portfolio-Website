export default function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-[#1f1f1f] bg-[rgba(10,10,10,0.92)] px-6 py-5 backdrop-blur-md sm:px-10">
      <a href="#hero" className="font-mono text-[13px] tracking-wider text-[#f0a500] no-underline">
        SR /
      </a>
      <ul className="flex list-none flex-wrap gap-4 sm:gap-8">
        {[["Work", "#projects"], ["Focus", "#focus"], ["Team", "#team"], ["Contact", "#contact"]].map(
          ([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className="font-mono text-[11px] uppercase tracking-widest text-[#6b6760] no-underline transition-colors hover:text-[#e8e4dc] sm:text-[12px]"
              >
                {label}
              </a>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
