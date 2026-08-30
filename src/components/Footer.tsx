import Link from "next/link";
import { navigation, studio } from "@/data/studio";
import { Rule } from "./Reveal";

export function Footer() {
  return (
    <footer className="bg-bone px-gutter pb-12 pt-32">
      <Rule />

      <div className="grid grid-cols-1 gap-12 pt-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-title leading-[0.95] tracking-[-0.025em]">
            Start a<br />
            conversation
          </p>
          <a
            href={`mailto:${studio.email}`}
            className="link-wipe mt-8 inline-block text-body text-ink-soft"
          >
            {studio.email}
          </a>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="label">Studio</p>
          <address className="mt-4 not-italic text-caption leading-[1.7] text-graphite">
            {studio.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="mt-3 block">{studio.phone}</span>
          </address>
        </div>

        <div className="md:col-span-2 md:col-start-11">
          <p className="label">Index</p>
          <ul className="mt-4 space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-wipe text-caption text-graphite">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-24 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="label">
          &copy; {studio.founded}&ndash;{new Date().getFullYear()} {studio.name}
        </p>
        <p className="label">Photography credited per project</p>
      </div>
    </footer>
  );
}
