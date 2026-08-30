"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ratioClass, type Ratio } from "@/data/projects";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Images are uncovered by an animated clip-path and drift at ~0.85x scroll
 * speed. The inner scale-up exists only to cover the gap the drift would
 * otherwise expose at the frame edges.
 */
export function MediaFrame({
  src,
  alt,
  ratio,
  caption,
  priority = false,
  parallax = true,
  sizes = "100vw",
  tone = "light",
  className = "",
}: {
  src: string | StaticImageData;
  alt: string;
  ratio: Ratio;
  caption?: string;
  priority?: boolean;
  parallax?: boolean;
  sizes?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  const active = parallax && !reduced;

  return (
    <figure className={className}>
      {/*
        The trigger stays on this outer frame, which is never clipped. Chrome
        subtracts an element's own clip-path from its intersection rect, so an
        element that animates its clip-path cannot also be the thing observed —
        it hides itself below the threshold and the reveal never fires.
      */}
      <motion.div
        ref={ref}
        className={`relative overflow-hidden ${
          tone === "dark" ? "bg-void-soft" : "bg-bone-deep"
        } ${ratioClass[ratio]}`}
        initial={reduced ? undefined : "hidden"}
        whileInView={reduced ? undefined : "visible"}
        viewport={{ once: true, margin: "-8%" }}
      >
        <motion.div
          className="absolute inset-0"
          variants={{
            hidden: { clipPath: "inset(0% 0% 100% 0%)" },
            visible: { clipPath: "inset(0% 0% 0% 0%)" },
          }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0"
            style={active ? { y, scale: 1.14 } : undefined}
          >
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes={sizes}
              placeholder={typeof src === "string" ? "empty" : "blur"}
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {caption ? (
        <figcaption
          className={`label mt-4 text-[0.75rem] normal-case tracking-[0.02em] ${
            tone === "dark" ? "text-stone" : ""
          }`}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
