import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { MediaFrame } from "@/components/MediaFrame";
import { MaskLines, Rise } from "@/components/Reveal";
import { adjacentProject, getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [
        { url: typeof project.hero.src === "string" ? project.hero.src : project.hero.src.src },
      ],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = adjacentProject(slug);

  /* Reads as a drawing title block rather than a marketing spec list. */
  const specs = [
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
    { label: "Status", value: project.status },
    { label: "Area", value: project.area },
    { label: "Typology", value: project.typology },
    { label: "Disciplines", value: project.disciplines.join(", ") },
    { label: "Client", value: project.client },
    { label: "Photography", value: project.photographer },
  ].filter((spec) => spec.value);

  return (
    <div data-tone="dark" className="bg-void text-bone">
      <Hero
        src={project.hero.src}
        alt={project.hero.alt}
        lines={[project.title]}
        meta={[project.typology, project.location, project.year].filter(Boolean).join(" — ")}
      />

      <section className="px-gutter py-28 md:py-40">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <p className="label md:col-span-2">Overview</p>
          <div className="md:col-span-9 md:col-start-4">
            <MaskLines
              as="p"
              className="font-display text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.15] tracking-[-0.02em]"
              lines={[project.summary]}
            />
            <Rise delay={0.2}>
              <div className="measure mt-12 space-y-6 text-body text-stone">
                {project.narrative.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Rise>
          </div>
        </div>
      </section>

      <section className="px-gutter pb-28 md:pb-40">
        <div className="grid grid-cols-2 border-t border-bone/15 md:grid-cols-4">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="border-b border-bone/15 px-1 py-6 md:border-r md:last:border-r-0"
            >
              <p className="label text-stone">{spec.label}</p>
              <p className="mt-2 text-caption leading-snug text-bone">{spec.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-gutter pb-28 md:pb-40">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-20">
          {project.gallery.map((image, i) => (
            <MediaFrame
              key={image.alt}
              src={image.src}
              alt={image.alt}
              ratio={image.ratio}
              caption={image.caption}
              tone="dark"
              sizes={image.ratio === "3:2" ? "100vw" : "(min-width: 768px) 46vw, 100vw"}
              className={image.ratio === "3:2" ? "md:col-span-2" : ""}
              parallax={i % 2 === 0}
            />
          ))}
        </div>
      </section>

      <Link href={`/work/${next.slug}`} className="group block border-t border-bone/15">
        <div className="flex items-baseline justify-between px-gutter py-10">
          <div>
            <p className="label text-stone">Next project</p>
            <p className="mt-3 font-display text-title leading-none transition-colors duration-500 group-hover:text-clay">
              {next.title}
            </p>
          </div>
          <p className="label hidden text-stone sm:block">
            {[next.typology, next.year].filter(Boolean).join(" · ")}
          </p>
        </div>
      </Link>
    </div>
  );
}
