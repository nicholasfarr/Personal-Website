import Card from "./ui/Card";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>

        <div className="mt-6 space-y-4">
          {experience.map((e) => (
            <Card key={e.org + e.role}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold">
                  {e.role} — {e.org}
                </h3>
                {e.date && (
                  <span className="text-xs text-zinc-400">{e.date}</span>
                )}
              </div>

              {e.points?.length > 0 && (
                <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-zinc-300/90">
                  {e.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              )}

              {e.tech?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {e.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}