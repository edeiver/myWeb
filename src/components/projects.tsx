import { useTranslations } from "next-intl";
import { Reveal } from "./reveal";
import { ProjectCard, type ProjectImage } from "./project-card";

const pasameImages: ProjectImage[] = [
  { src: "/projects/pasame-app/home-light.png", alt: "Pásame home screen, light mode" },
  { src: "/projects/pasame-app/deposit-methods-light.png", alt: "Pásame deposit methods" },
  { src: "/projects/pasame-app/assets-light.png", alt: "Pásame assets, light mode" },
  { src: "/projects/pasame-app/send-dark.png", alt: "Pásame send money, dark mode" },
];

const pasameAllImages: ProjectImage[] = [
  { src: "/projects/pasame-app/home-light.png", alt: "Pásame home screen, light mode" },
  { src: "/projects/pasame-app/home-dark.png", alt: "Pásame home screen, dark mode" },
  { src: "/projects/pasame-app/assets-light.png", alt: "Pásame assets, light mode" },
  { src: "/projects/pasame-app/assets-dark.png", alt: "Pásame assets, dark mode" },
  { src: "/projects/pasame-app/deposit-light.png", alt: "Pásame deposit, light mode" },
  { src: "/projects/pasame-app/deposit-dark.png", alt: "Pásame deposit, dark mode" },
  { src: "/projects/pasame-app/deposit-methods-light.png", alt: "Pásame deposit methods" },
  { src: "/projects/pasame-app/send-light.png", alt: "Pásame send money, light mode" },
  { src: "/projects/pasame-app/send-dark.png", alt: "Pásame send money, dark mode" },
];

const walletImages: ProjectImage[] = [
  { src: "/projects/wallet/home.png", alt: "Wallet home screen" },
  { src: "/projects/wallet/send.png", alt: "Wallet send money screen" },
  { src: "/projects/wallet/receive.png", alt: "Wallet receive money screen" },
];

const kuiperImages: ProjectImage[] = [
  { src: "/projects/kuiper/dashboard.png", alt: "Kuiper dashboard" },
  { src: "/projects/kuiper/workouts.png", alt: "Kuiper workouts week plan" },
];

export function Projects() {
  const t = useTranslations("projects");
  const viewCodeLabel = t("viewCode");
  const viewDemoLabel = t("viewDemo");
  const comingSoonLabel = t("comingSoon");
  const viewDetailLabel = t("viewDetail");
  const featuresLabel = t("featuresLabel");
  const stackLabel = t("stackLabel");

  return (
    <section id="work" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {t("kicker")}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-10">
          <ProjectCard
            name={t("items.pasameApp.name")}
            tagline={t("items.pasameApp.tagline")}
            description={t("items.pasameApp.description")}
            tags={t.raw("items.pasameApp.tags") as string[]}
            features={t.raw("items.pasameApp.features") as string[]}
            stack={t.raw("items.pasameApp.stack") as string[]}
            images={pasameImages}
            allImages={pasameAllImages}
            github="https://github.com/edeiver/pasame_app"
            viewCodeLabel={viewCodeLabel}
            viewDemoLabel={viewDemoLabel}
            comingSoonLabel={comingSoonLabel}
            viewDetailLabel={viewDetailLabel}
            featuresLabel={featuresLabel}
            stackLabel={stackLabel}
          />

          <ProjectCard
            name={t("items.wallet.name")}
            tagline={t("items.wallet.tagline")}
            description={t("items.wallet.description")}
            tags={t.raw("items.wallet.tags") as string[]}
            features={t.raw("items.wallet.features") as string[]}
            stack={t.raw("items.wallet.stack") as string[]}
            images={walletImages}
            github="https://github.com/edeiver/wallet"
            viewCodeLabel={viewCodeLabel}
            viewDemoLabel={viewDemoLabel}
            comingSoonLabel={comingSoonLabel}
            viewDetailLabel={viewDetailLabel}
            featuresLabel={featuresLabel}
            stackLabel={stackLabel}
            reverse
          />

          <ProjectCard
            name={t("items.kuiper.name")}
            tagline={t("items.kuiper.tagline")}
            description={t("items.kuiper.description")}
            tags={t.raw("items.kuiper.tags") as string[]}
            features={t.raw("items.kuiper.features") as string[]}
            stack={t.raw("items.kuiper.stack") as string[]}
            images={kuiperImages}
            variant="browser"
            github="https://github.com/edeiver/KUIPER"
            demo="https://kuiper-wine.vercel.app"
            viewCodeLabel={viewCodeLabel}
            viewDemoLabel={viewDemoLabel}
            comingSoonLabel={comingSoonLabel}
            viewDetailLabel={viewDetailLabel}
            featuresLabel={featuresLabel}
            stackLabel={stackLabel}
          />
        </div>
      </div>
    </section>
  );
}
