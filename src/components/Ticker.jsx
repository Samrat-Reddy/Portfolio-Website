const items = [
  "React",
  "Java",
  "System Design",
  "UI Engineering",
  "Password Security",
  "Trading Systems",
  "Frontend Architecture",
  "CraftYourSystems",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-[#1f1f1f] bg-[#0a0a0a] py-2.5 font-mono text-[10.5px] uppercase tracking-[0.18em] whitespace-nowrap">
      <div className="inline-block animate-[ticker_28s_linear_infinite]">
        {doubled.map((item, i) => (
          <span key={i}>
            {item}
            <span className="mx-5 text-[#f0a500]">+</span>
          </span>
        ))}
      </div>
    </div>
  );
}
