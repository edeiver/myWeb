import { useTranslations } from "next-intl";
import { Reveal } from "./reveal";

type SkillGroup = { label: string; items: string[] };

export function Skills() {
  const t = useTranslations("skills");
  const groups = t.raw("groups") as SkillGroup[];

  return (
    <section
      id="skills"
      className="border-t border-border bg-surface/40 px-6 py-28"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {t("kicker")}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-surface-raised px-3 py-1.5 text-sm text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
