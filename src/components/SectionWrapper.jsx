import { useEffect, useRef } from "react";

export default function SectionWrapper({
  id,
  title,
  index,
  children,
  className = "",
  contentClassName = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.12 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`mx-auto max-w-[1100px] px-6 py-24 opacity-0 translate-y-5 transition-all duration-500 sm:px-10 ${className}`}
    >
      {(title || index) && (
        <div className="mb-12 flex items-baseline justify-between gap-6 border-b border-[#1f1f1f] pb-5">
          {title ? (
            <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold tracking-[-0.02em]">
              {title}
            </h2>
          ) : (
            <span />
          )}
          {index ? (
            <span className="font-mono text-[11px] tracking-[0.1em] text-[#6b6760]">
              {index}
            </span>
          ) : null}
        </div>
      )}
      <div className={contentClassName}>{children}</div>
    </section>
  );
}
