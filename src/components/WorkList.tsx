"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * A text index with a single preview panel, rather than a thumbnail grid.
 * Reads as an editorial contents page and keeps the whole body of work on
 * one screen. Below md the preview collapses into each row.
 */
export function WorkList({ items }: { items: Project[] }) {
  const [active, setActive] = useState(items[0]?.slug);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-7">
        <ul onMouseLeave={() => setActive(items[0]?.slug)}>
          {items.map((project, i) => (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                onMouseEnter={() => setActive(project.slug)}
                onFocus={() => setActive(project.slug)}
                className="group block border-t border-bone-edge py-7 last:border-b"
              >
                <div className="flex items-baseline gap-5">
                  <span className="label w-8 shrink-0 pt-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <motion.h2
                      className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.02] tracking-[-0.025em] transition-colors duration-500 group-hover:text-clay"
                      initial={false}
                      animate={{ x: active === project.slug ? 14 : 0 }}
                      transition={{ duration: 0.7, ease: EASE }}
                    >
                      {project.title}
                    </motion.h2>

                    <div className="mt-3 flex flex-wrap items-baseline gap-x-5 gap-y-1">
                      <span className="label">{project.typology}</span>
                      <span className="label">{project.location}</span>
                      {project.year ? <span className="label">{project.year}</span> : null}
                      {project.status !== "Completed" ? (
                        <span className="label text-clay">{project.status}</span>
                      ) : null}
                    </div>

                    <div className="relative mt-5 aspect-3/2 overflow-hidden bg-bone-deep md:hidden">
                      <Image
                        src={project.hero.src}
                        alt={project.hero.alt}
                        fill
                        priority={i === 0}
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:col-span-4 md:col-start-9 md:block">
        <div className="sticky top-32">
          <div className="relative aspect-4/5 overflow-hidden bg-bone-deep">
            {items.map((project, i) => (
              <motion.div
                key={project.slug}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: active === project.slug ? 1 : 0,
                  scale: active === project.slug ? 1 : 1.05,
                }}
                transition={{ duration: 0.9, ease: EASE }}
              >
                <Image
                  src={project.hero.src}
                  alt={project.hero.alt}
                  fill
                  priority={i === 0}
                  sizes="33vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {items.map((project) =>
            active === project.slug ? (
              <p key={project.slug} className="label mt-4">
                {[project.area, project.disciplines.join(", ")].filter(Boolean).join(" · ")}
              </p>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
}
