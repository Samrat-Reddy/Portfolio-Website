export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 border-b border-[#1f1f1f] bg-[rgba(10,10,10,0.92)] backdrop-blur-md">
      <a href="#hero" className="font-mono text-[13px] tracking-wider text-[#f0a500] no-underline">
        SR /
      </a>
      <ul className="flex gap-8 list-none">
        {[["Work", "#projects"], ["Team", "#team"], ["Focus", "#focus"], ["Contact", "#contact"]].map(([label, href]) => (
          <li key={label}>
            <a href={href} className="font-mono text-[12px] tracking-widest uppercase text-[#6b6760] no-underline hover:text-[#e8e4dc] transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
