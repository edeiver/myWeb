"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Images,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { GithubIcon } from "./brand-icons";
import { Reveal } from "./reveal";

export type ProjectImage = { src: string; alt: string };

function ProjectDetailModal({
  name,
  tagline,
  description,
  features,
  stack,
  images,
  github,
  demo,
  viewCodeLabel,
  viewDemoLabel,
  featuresLabel,
  stackLabel,
  startIndex,
  onClose,
}: {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  images: ProjectImage[];
  github?: string;
  demo?: string;
  viewCodeLabel: string;
  viewDemoLabel: string;
  featuresLabel: string;
  stackLabel: string;
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const current = images[index];

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:items-center sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative my-4 w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface sm:my-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
        >
          <X size={16} />
        </button>

        {current && (
          <div className="relative flex items-center justify-center bg-surface-raised">
            {images.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setIndex((i) => (i - 1 + images.length) % images.length)
                }
                aria-label="Previous"
                className="absolute left-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              >
                <ChevronLeft size={18} />
              </button>
            )}
            <img
              key={current.src}
              src={current.src}
              alt={current.alt}
              className="max-h-[46vh] w-full object-contain"
            />
            {images.length > 1 && (
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % images.length)}
                aria-label="Next"
                className="absolute right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              >
                <ChevronRight size={18} />
              </button>
            )}
          </div>
        )}

        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto border-b border-border bg-surface-raised px-4 py-3">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-12 w-12 shrink-0 overflow-hidden rounded-lg border-2 transition-opacity ${
                  i === index
                    ? "border-accent opacity-100"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <div className="max-h-[40vh] overflow-y-auto px-6 py-8 sm:px-10 sm:py-10">
          <p className="text-sm font-medium text-accent">{tagline}</p>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {name}
          </h3>
          <p className="mt-4 text-balance leading-relaxed text-muted">
            {description}
          </p>

          {features.length > 0 && (
            <div className="mt-7">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
                {featuresLabel}
              </h4>
              <ul className="mt-3 space-y-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-sm leading-relaxed text-foreground/90"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {stack.length > 0 && (
            <div className="mt-7">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
                {stackLabel}
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface-raised px-3 py-1 text-xs font-medium text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
              >
                <GithubIcon size={16} />
                {viewCodeLabel}
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
              >
                <ExternalLink size={16} />
                {viewDemoLabel}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectCard({
  name,
  tagline,
  description,
  tags,
  features = [],
  stack = [],
  images,
  allImages,
  github,
  demo,
  viewCodeLabel,
  viewDemoLabel,
  comingSoonLabel,
  viewDetailLabel,
  featuresLabel,
  stackLabel,
  reverse = false,
  variant = "phone",
  layout = "split",
}: {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  features?: string[];
  stack?: string[];
  images: ProjectImage[];
  allImages?: ProjectImage[];
  github?: string;
  demo?: string;
  viewCodeLabel: string;
  viewDemoLabel: string;
  comingSoonLabel: string;
  viewDetailLabel?: string;
  featuresLabel?: string;
  stackLabel?: string;
  reverse?: boolean;
  variant?: "phone" | "browser";
  layout?: "split" | "stacked";
}) {
  const [detailIndex, setDetailIndex] = useState<number | null>(null);
  const gallery = allImages && allImages.length > 0 ? allImages : images;

  function openDetailFor(img: ProjectImage) {
    const i = gallery.findIndex((g) => g.src === img.src);
    setDetailIndex(i >= 0 ? i : 0);
  }

  const media =
    images.length === 0 ? (
      <div className="flex h-[340px] w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-sm font-medium text-white/90 sm:h-[420px]">
        {comingSoonLabel}
      </div>
    ) : variant === "browser" ? (
      <div
        className={
          images.length > 1
            ? "grid w-full max-w-2xl grid-cols-1 gap-4 min-[420px]:grid-cols-2"
            : "w-full max-w-xl"
        }
      >
        {images.slice(0, 2).map((img) => (
          <button
            key={img.src}
            type="button"
            onClick={() => openDetailFor(img)}
            className="overflow-hidden rounded-xl border border-foreground/10 bg-surface-raised text-left shadow-2xl transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-1.5 border-b border-foreground/10 bg-foreground/5 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            </div>
            <Image
              src={img.src}
              alt={img.alt}
              width={1440}
              height={1024}
              className="h-auto w-full"
            />
          </button>
        ))}
      </div>
    ) : (
      images.map((img, i) => {
        const spacing = images.length > 3 ? 62 : 90;
        const degree = images.length > 3 ? 4 : 6;
        const offset = i - (images.length - 1) / 2;
        return (
          <button
            key={img.src}
            type="button"
            onClick={() => openDetailFor(img)}
            className="absolute w-[130px] overflow-hidden rounded-[1.6rem] border-4 border-foreground/10 shadow-2xl transition-transform duration-500 hover:z-10 hover:-translate-y-2 sm:w-[170px]"
            style={{
              transform: `translateX(${offset * spacing}px) rotate(${offset * degree}deg)`,
              zIndex: images.length - i,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={390}
              height={844}
              className="h-auto w-full"
            />
          </button>
        );
      })
    );

  const tagList = (
    <div
      className={`flex flex-wrap gap-2 ${layout === "stacked" ? "justify-center" : ""}`}
    >
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-border bg-surface-raised px-3 py-1 text-xs font-medium text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );

  const links = (
    <div
      className={`flex flex-wrap items-center gap-4 ${layout === "stacked" ? "justify-center" : ""}`}
    >
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
        >
          <GithubIcon size={16} />
          {viewCodeLabel}
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
        >
          <ExternalLink size={16} />
          {viewDemoLabel}
        </a>
      )}
      {viewDetailLabel && (
        <button
          type="button"
          onClick={() => setDetailIndex(0)}
          className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
        >
          <Images size={16} />
          {viewDetailLabel}
        </button>
      )}
    </div>
  );

  const cardContent =
    layout === "stacked" ? (
      <div className="overflow-hidden rounded-3xl border border-border bg-surface">
        <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-surface-raised px-6 py-14 sm:min-h-[460px]">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--accent)_0%,transparent_70%)] opacity-20 blur-3xl" />
          </div>
          {media}
        </div>

        <div className="mx-auto max-w-xl px-8 py-10 text-center sm:px-10 sm:py-12">
          <p className="text-sm font-medium text-accent">{tagline}</p>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {name}
          </h3>
          <p className="mx-auto mt-4 text-balance leading-relaxed text-muted">
            {description}
          </p>
          <div className="mt-5 flex justify-center">{tagList}</div>
          <div className="mt-7 flex justify-center">{links}</div>
        </div>
      </div>
    ) : (
      <div
        className={`grid grid-cols-1 items-center gap-10 rounded-3xl border border-border bg-surface p-8 sm:p-10 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div
          className={
            variant === "browser"
              ? "relative flex w-full items-center justify-center"
              : "relative flex h-[340px] items-center justify-center sm:h-[420px]"
          }
        >
          {media}
        </div>

        <div>
          <p className="text-sm font-medium text-accent">{tagline}</p>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {name}
          </h3>
          <p className="mt-4 text-balance leading-relaxed text-muted">
            {description}
          </p>

          <div className="mt-5">{tagList}</div>
          <div className="mt-7">{links}</div>
        </div>
      </div>
    );

  return (
    <Reveal>
      {cardContent}
      <AnimatePresence>
        {detailIndex !== null && (
          <ProjectDetailModal
            name={name}
            tagline={tagline}
            description={description}
            features={features}
            stack={stack}
            images={gallery}
            github={github}
            demo={demo}
            viewCodeLabel={viewCodeLabel}
            viewDemoLabel={viewDemoLabel}
            featuresLabel={featuresLabel ?? ""}
            stackLabel={stackLabel ?? ""}
            startIndex={detailIndex}
            onClose={() => setDetailIndex(null)}
          />
        )}
      </AnimatePresence>
    </Reveal>
  );
}
