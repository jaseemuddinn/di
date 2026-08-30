import type { Metadata } from "next";
import { MediaFrame } from "@/components/MediaFrame";
import { MaskLines, Rise, Rule } from "@/components/Reveal";
import { projects } from "@/data/projects";
import { Process } from "@/components/Process";
import { principles, services, studio, timeline } from "@/data/studio";

export const metadata: Metadata = {
  title: "Studio",
  description: studio.statement,
};

export default function StudioPage() {
  /* Standing in for a photograph of the studio itself, which we don't have. */
  const portrait = projects[0].gallery[0];

  return (
    <>
      <section className="px-gutter pb-24 pt-40 md:pt-56">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <p className="label md:col-span-2">Studio</p>
          <div className="md:col-span-9 md:col-start-4">
            <MaskLines
              as="h1"
              className="font-display text-title"
              lines={["We only build", "what we design."]}
            />
            <Rise delay={0.3}>
              <p className="measure mt-10 text-body text-ink-soft">{studio.statement}</p>
            </Rise>
          </div>
        </div>
      </section>

      <section className="px-gutter pb-32 md:pb-48">
        <MediaFrame
          src={portrait.src}
          alt={portrait.alt}
          ratio="3:2"
          sizes="100vw"
          priority
        />
      </section>

      <section className="px-gutter pb-32 md:pb-48">
        <Rule />
        <h2 className="label pt-6">How we work</h2>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
          {principles.map((principle, i) => (
            <Rise key={principle.n} delay={i * 0.08}>
              <p className="label text-clay">{principle.n}</p>
              <h3 className="mt-4 font-display text-[clamp(1.6rem,2.4vw,2.25rem)] leading-tight">
                {principle.title}
              </h3>
              <p className="mt-4 text-caption leading-[1.75] text-graphite">{principle.body}</p>
            </Rise>
          ))}
        </div>
      </section>

      <section data-tone="dark" className="bg-void px-gutter py-32 text-bone md:py-48">
        <h2 className="label text-stone">Services</h2>
        <div className="mt-16 space-y-16">
          {services.map((service) => (
            <Rise key={service.title}>
              <div className="grid grid-cols-1 gap-8 border-t border-bone/15 pt-8 md:grid-cols-12">
                <h3 className="font-display text-[clamp(1.8rem,3vw,2.75rem)] leading-tight md:col-span-4">
                  {service.title}
                </h3>
                <p className="text-caption leading-[1.8] text-stone md:col-span-4">
                  {service.body}
                </p>
                <ul className="space-y-2 md:col-span-3 md:col-start-10">
                  {service.scope.map((item) => (
                    <li key={item} className="label text-stone">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Rise>
          ))}
        </div>
      </section>

      <Process />

      <section className="px-gutter pb-32 md:pb-48">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <h2 className="label md:col-span-2">Timeline</h2>
          <ul className="md:col-span-8 md:col-start-4">
            {timeline.map((entry) => (
              <li
                key={entry.year}
                className="flex items-baseline gap-8 border-t border-bone-edge py-6 last:border-b"
              >
                <span className="label w-16 shrink-0">{entry.year}</span>
                <span className="text-body leading-snug">{entry.event}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
