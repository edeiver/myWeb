"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border bg-surface/60 p-0.5 text-xs font-medium">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          aria-current={locale === loc}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${
            locale === loc
              ? "bg-foreground text-background"
              : "text-muted hover:text-foreground"
          }`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
