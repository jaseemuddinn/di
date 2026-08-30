import Link from "next/link";
import heroImage from "@/assets/hero.webp";
import { Hero } from "@/components/Hero";
import { ProjectRow } from "@/components/ProjectRow";
import { MaskLines, Rise, Rule } from "@/components/Reveal";
import { featuredProjects } from "@/data/projects";
import { press, services, studio } from "@/data/studio";

export default function HomePage() {
  return (
    <>
      <Hero
        src={heroImage}
        alt="Private residence at dusk, with planted balconies and warm interior light"
        lines={["Architecture", "for the long term"]}
        meta="Private Residence - Recent work"
      />

      <section className="px-gutter py-32 md:py-48">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <p className="label md:col-span-2">Practice</p>
          <div className="md:col-span-8 md:col-start-4">
            <MaskLines
              as="h2"
              className="font-display text-title"
              lines={["We design a small number", "of buildings each year,", "and we build many of them."]}
            />
            <Rise delay={0.3}>
              <p className="measure mt-10 text-body text-ink-soft">{studio.statement}</p>
              <Link href="/studio" className="label link-wipe mt-8 inline-block text-ink">
                About the studio
              </Link>
            </Rise>
          </div>
        </div>
      </section>

      <section className="px-gutter pb-32 md:pb-48">
        <Rule />
        <div className="flex items-baseline justify-between pt-6">
          <h2 className="label">Selected Work</h2>
          <Link href="/work" className="label link-wipe text-ink">
            All projects
          </Link>
        </div>

        <div className="mt-20 space-y-32 md:mt-32 md:space-y-48">
          {featuredProjects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <section data-tone="dark" className="bg-void px-gutter py-32 text-bone md:py-48">
        <Rise>
          <p className="label text-stone">Disciplines</p>
        </Rise>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Rise key={service.title} delay={i * 0.08}>
              <div className="h-px w-full bg-bone/15" />
              <h3 className="mt-6 font-display text-[clamp(1.75rem,2.6vw,2.4rem)] leading-tight">
                {service.title}
              </h3>
              <p className="mt-4 text-caption leading-[1.75] text-stone">{service.body}</p>
            </Rise>
          ))}
        </div>
      </section>

      <section className="px-gutter py-32 md:py-48">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <h2 className="label md:col-span-2">Press</h2>
          <ul className="md:col-span-8 md:col-start-4">
            {press.map((item) => (
              <li
                key={item.title}
                className="flex flex-col gap-1 border-t border-bone-edge py-6 last:border-b sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="label w-16 shrink-0">{item.year}</span>
                <span className="flex-1 text-body leading-snug">{item.title}</span>
                <span className="label sm:text-right">{item.source}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
