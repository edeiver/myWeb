import { useTranslations } from "next-intl";
import { Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./brand-icons";
import { Reveal } from "./reveal";

const EMAIL = "edbarranco4@gmail.com";
const GITHUB = "https://github.com/edeiver";
const LINKEDIN = "https://linkedin.com/in/edeiver";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="px-6 py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          {t("kicker")}
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-5 text-balance text-lg text-muted">{t("body")}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            <Mail size={16} />
            {t("cta")}
          </a>
          <a
            href="/cv/Edeiver_Barranco_CV.pdf"
            download
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-raised"
          >
            <Download size={16} />
            {t("resume")}
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-muted">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
