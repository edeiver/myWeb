"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollCue() {
  const t = useTranslations("scrollCue");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    // Hide once the footer is reachable, so the cue never implies there's
    // more to see when the user has already scrolled to the end of the page.
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(!entry.isIntersecting)
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  function handleClick() {
    window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label={t("label")}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 z-40 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-surface/70 text-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-surface-raised sm:bottom-8"
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
