import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="
                group relative overflow-hidden flex
                rounded-2xl border border-white/15
                bg-white/10 backdrop-blur-lg
                shadow-sm transition-all
                motion-safe:hover:-translate-y-0.5 hover:shadow-lg
              "
            >
              {/* hover sheen */}
              <span
                aria-hidden
                className="
                  pointer-events-none absolute inset-0 -translate-x-full
                  bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)]
                  transition-transform duration-500
                  group-hover:translate-x-full
                "
              />

              {/* Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-32 h-32 object-cover border-2 border-[var(--orange)] m-4 rounded-lg"
              />

              {/* Content */}
              <div className="flex flex-col justify-between flex-1 p-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-white/90 mt-2">{p.blurb}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-sm rounded-full bg-[var(--orange)]/20 text-[var(--orange)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-4 inline-block
                    border-2 border-[var(--orange)] text-[var(--orange)]
                    px-4 py-2 rounded-lg
                    transition-all
                    hover:bg-[var(--orange)] hover:text-black
                    motion-safe:hover:shadow
                  "
                >
                  View Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}