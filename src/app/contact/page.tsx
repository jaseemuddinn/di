import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { MaskLines, Rise, Rule } from "@/components/Reveal";
import { studio } from "@/data/studio";

export const metadata: Metadata = {
  title: "Contact",
  description: `Enquiries for ${studio.name} — architecture, interiors and design-build.`,
};

export default function ContactPage() {
  return (
    <section className="px-gutter pb-32 pt-40 md:pb-48 md:pt-56">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <p className="label md:col-span-2">Contact</p>
        <div className="md:col-span-9 md:col-start-4">
          <MaskLines
            as="h1"
            className="font-display text-title"
            lines={["Tell us about", "the site."]}
          />
          <Rise delay={0.3}>
            <p className="measure mt-10 text-body text-ink-soft">
              We take on a limited number of commissions each year. The more you can tell us
              about the site, the programme and your timeline, the more useful our first reply
              will be.
            </p>
          </Rise>
        </div>
      </div>

      <div className="mt-24 md:mt-32">
        <Rule />
        <div className="grid grid-cols-1 gap-16 pt-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="label">Direct</p>
            <a href={`mailto:${studio.email}`} className="link-wipe mt-4 block text-body">
              {studio.email}
            </a>
            <a href={`tel:${studio.phone.replace(/\s/g, "")}`} className="link-wipe mt-2 block text-body">
              {studio.phone}
            </a>

            <p className="label mt-12">Studio</p>
            <address className="mt-4 not-italic text-caption leading-[1.8] text-graphite">
              {studio.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
