import type { Metadata } from "next";
import { MediaFrame } from "@/components/MediaFrame";
import { MaskLines, Rise } from "@/components/Reveal";
import { Process } from "@/components/Process";
import { projects } from "@/data/projects";
import { about, services, studio } from "@/data/studio";

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
              lines={["About"]}
            />
            <Rise delay={0.3}>
              <div className="measure mt-10 space-y-6 text-body text-ink-soft">
                {about.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
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

      <Process href="/contact" />
    </>
  );
}
