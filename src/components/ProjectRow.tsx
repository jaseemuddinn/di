import Link from "next/link";
import { MediaFrame } from "./MediaFrame";
import { Rise } from "./Reveal";
import type { Project } from "@/data/projects";

/**
 * Rows alternate side and drop out of alignment on every other entry. A
 * perfectly regular grid reads as a catalogue; the offset reads as curation.
 */
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <article className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-x-8">
      <Link
        href={`/work/${project.slug}`}
        className={`group block ${
          flipped ? "md:col-span-6 md:col-start-7" : "md:col-span-7 md:col-start-1"
        }`}
      >
        <MediaFrame
          src={project.hero.src}
          alt={project.hero.alt}
          ratio={flipped ? "4:5" : "3:2"}
          sizes="(min-width: 768px) 55vw, 100vw"
          className="transition-opacity duration-700 group-hover:opacity-90"
        />
      </Link>

      <Rise
        className={`flex flex-col justify-end ${
          flipped
            ? "md:col-span-4 md:col-start-2 md:row-start-1 md:pb-24"
            : "md:col-span-3 md:col-start-9 md:pb-6"
        }`}
        delay={0.1}
      >
        <p className="label">
          {[project.typology, project.year].filter(Boolean).join(" · ")}
        </p>
        <h3 className="mt-3 font-display text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05] tracking-[-0.02em]">
          <Link href={`/work/${project.slug}`} className="link-wipe">
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 text-caption leading-[1.7] text-graphite">{project.summary}</p>
        <p className="label mt-6">{project.location}</p>
      </Rise>
    </article>
  );
}
