import { useTranslations } from "next-intl";
import { Reveal } from "./reveal";

export function About() {
  const t = useTranslations("about");
  const stats = t.raw("stats") as { value: string; label: string }[];

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          {t("kicker")}
        </p>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted">
          {t("body")}
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="rounded-2xl border border-border bg-surface px-6 py-8">
              <div className="text-4xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
