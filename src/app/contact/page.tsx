import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { MaskLines, Rise, Rule } from "@/components/Reveal";
import { studio } from "@/data/studio";

export const metadata: Metadata = {
  title: "Contact",
  description: `Enquiries for ${studio.name} - architecture, interiors and landscape in Delhi and Noida.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="px-gutter pb-20 pt-40 md:pb-28 md:pt-56">
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
                Share a little about your site, programme and timeline. The more you can tell us,
                the more useful our first reply will be.
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
              <a
                href={`tel:${studio.phone.replace(/\s/g, "")}`}
                className="link-wipe mt-2 block text-body"
              >
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

      <section className="px-gutter pb-32 md:pb-48">
        <div className="mb-6 flex items-baseline justify-between gap-6">
          <h2 className="label">Visit</h2>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(studio.mapQuery)}`}
            target="_blank"
            rel="noreferrer"
            className="label link-wipe text-ink"
          >
            Open in Maps
          </a>
        </div>
        <div className="aspect-[21/9] overflow-hidden bg-bone-deep">
          <iframe
            title={`Map of ${studio.name}`}
            src={studio.mapEmbedUrl}
            className="h-full w-full border-0 grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
