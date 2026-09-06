import { useTranslations } from "next-intl";
import { Reveal } from "./reveal";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export function Experience() {
  const t = useTranslations("experience");
  const items = t.raw("items") as ExperienceItem[];

  return (
    <section
      id="experience"
      className="border-t border-border bg-surface/40 px-6 py-28"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {t("kicker")}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
        </Reveal>

        <div className="mt-14 space-y-10">
          {items.map((item, i) => (
            <Reveal key={item.company} delay={i * 0.06}>
              <div className="grid grid-cols-1 gap-2 border-l-2 border-border pl-6 sm:grid-cols-[220px_1fr] sm:gap-8">
                <div>
                  <p className="text-sm font-medium text-muted">
                    {item.period}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.company}
                  </h3>
                  <p className="mt-0.5 text-sm text-accent">{item.role}</p>
                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="text-balance text-sm leading-relaxed text-muted"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
