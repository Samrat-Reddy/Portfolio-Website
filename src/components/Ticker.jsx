const items = ["React", "Java", "System Design", "UI Engineering", "Password Security", "Trading Systems", "Frontend Architecture", "CraftYourSystems"];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="border-t border-b border-[#1f1f1f] overflow-hidden py-2.5 whitespace-nowrap font-mono text-[10.5px] tracking-[0.18em] uppercase bg-[#0a0a0a]">
      <div className="inline-block animate-[ticker_28s_linear_infinite]">
        {doubled.map((item, i) => (
          <span key={i}>
            {item}
            <span className="text-[#f0a500] mx-5">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
