"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({
  src,
  alt,
  lines,
  meta,
}: {
  src: string | StaticImageData;
  alt: string;
  lines: string[];
  meta: string;
}) {
  const reduced = useReducedMotion();

  return (
    <section data-tone="dark" className="relative h-[100svh] w-full overflow-hidden bg-void">
      <motion.div
        className="absolute inset-0"
        initial={reduced ? undefined : { scale: 1.12 }}
        animate={reduced ? undefined : { scale: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          /* Static imports carry their own blur data; remote strings do not. */
          placeholder={typeof src === "string" ? "empty" : "blur"}
          className="object-cover"
        />
      </motion.div>

      {/* Scrim carries the headline against unpredictable photography. */}
      <div className="absolute inset-0 bg-linear-to-t from-void/75 via-void/10 to-void/25" />

      <div className="absolute inset-x-0 bottom-0 px-gutter pb-14">
        <h1 className="font-display text-display text-bone">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                initial={reduced ? undefined : { y: "110%" }}
                animate={reduced ? undefined : { y: "0%" }}
                transition={{ duration: 1.3, ease: EASE, delay: 0.25 + i * 0.11 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-10 flex items-end justify-between gap-8 border-t border-bone/20 pt-5"
          initial={reduced ? undefined : { opacity: 0 }}
          animate={reduced ? undefined : { opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.9 }}
        >
          <p className="label text-bone/70">{meta}</p>
          <p className="label hidden text-bone/70 sm:block">Scroll</p>
        </motion.div>
      </div>
    </section>
  );
}
