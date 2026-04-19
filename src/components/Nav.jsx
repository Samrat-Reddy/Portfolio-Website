import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  const isResume = pathname === "/resume";

  const links = isResume
    ? [
        ["Home", "/"],
        ["Resume", "/resume"],
        ["Contact", "/#contact"],
      ]
    : [
        ["Work", "#projects"],
        ["Focus", "#focus"],
        ["Team", "#team"],
        ["Resume", "/resume"],
        ["Contact", "#contact"],
      ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-[#1f1f1f] bg-[rgba(10,10,10,0.92)] px-6 py-5 backdrop-blur-md sm:px-10">
      <Link to="/" className="font-mono text-[13px] tracking-wider text-[#f0a500] no-underline">
        SR /
      </Link>
      <ul className="flex list-none flex-wrap gap-4 sm:gap-8">
        {links.map(([label, href]) => (
          <li key={label}>
            {href.startsWith("/") ? (
              <Link
                to={href}
                className={
                  label === "Resume"
                    ? "rounded-full border border-[rgba(240,165,0,0.35)] bg-[rgba(240,165,0,0.12)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-[#f0a500] no-underline transition-all hover:-translate-y-px hover:border-[#f0a500] hover:bg-[rgba(240,165,0,0.18)] sm:text-[12px]"
                    : "font-mono text-[11px] uppercase tracking-widest text-[#6b6760] no-underline transition-colors hover:text-[#e8e4dc] sm:text-[12px]"
                }
              >
                {label}
              </Link>
            ) : (
              <a
                href={href}
                className="font-mono text-[11px] uppercase tracking-widest text-[#6b6760] no-underline transition-colors hover:text-[#e8e4dc] sm:text-[12px]"
              >
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
