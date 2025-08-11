export default function Card({ children, className = "" }) {
    return (
      <article
        className={[
          // base glass panel
          "rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm",
          // elevation
          "shadow-sm transition-all",
          // hover polish
          "motion-safe:hover:-translate-y-0.5 hover:shadow-lg",
          "p-5",
          className,
        ].join(" ")}
      >
        {children}
      </article>
    );
  }