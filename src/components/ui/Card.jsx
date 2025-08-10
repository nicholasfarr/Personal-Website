// components/ui/Card.jsx
export default function Card({ children, className = "" }) {
    return (
      <article
        className={[
          "rounded-2xl border border-white/10 bg-white/70 dark:bg-zinc-900/60",
          "backdrop-blur shadow-sm hover:shadow-lg transition-shadow",
          "p-5", className,
        ].join(" ")}
      >
        {children}
      </article>
    );
  }
  