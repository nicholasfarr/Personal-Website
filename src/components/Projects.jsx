import Card from "./ui/Card";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title}>
              <h3 className="text-lg font-semibold">{p.title}</h3>

              {p.blurb && (
                <p className="mt-2 text-sm text-zinc-300/90">
                  {p.blurb}
                </p>
              )}

              {p.tech?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {(p.links?.live || p.links?.repo) && (
                <div className="mt-4 flex gap-4 text-sm">
                  {p.links.live && (
                    <a
                      className="underline hover:opacity-90"
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  )}
                  {p.links.repo && (
                    <a
                      className="underline hover:opacity-90"
                      href={p.links.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}