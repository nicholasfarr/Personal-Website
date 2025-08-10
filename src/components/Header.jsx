import { useEffect, useState } from "react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-colors",
        "backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-900/60",
        scrolled ? "border-b border-zinc-200 dark:border-zinc-800" : "border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a href="#hero" className="font-semibold tracking-tight">Nick Farr</a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative hover:opacity-90 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* mobile menu placeholder (we’ll wire later) */}
        <button className="md:hidden rounded-lg px-3 py-1 border border-zinc-300 dark:border-zinc-700 text-sm">
          Menu
        </button>
      </div>
    </header>
  );
}