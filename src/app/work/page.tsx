import type { Metadata } from "next";
import { WorkList } from "@/components/WorkList";
import { MaskLines } from "@/components/Reveal";
import { orderedProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Houses, apartments and show flats designed and built by D Innovations.",
};

export default function WorkPage() {
  return (
    <section className="px-gutter pb-32 pt-40 md:pb-48 md:pt-56">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <p className="label md:col-span-2">Index</p>
        <div className="md:col-span-8 md:col-start-4">
          <MaskLines as="h1" className="font-display text-title" lines={["Work"]} />
          <p className="measure mt-2 text-body text-ink-soft">
            {orderedProjects.length} projects, each designed and constructed by the studio.
          </p>
        </div>
      </div>

      <div className="mt-20 md:mt-32">
        <WorkList items={orderedProjects} />
      </div>
    </section>
  );
}
