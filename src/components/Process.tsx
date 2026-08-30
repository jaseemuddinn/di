import Link from "next/link";
import { process } from "@/data/studio";

export function Process({ href }: { href?: string }) {
  return (
    <section className="px-gutter py-32 md:py-48">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-2">
          <h2 className="label">A commission</h2>
          {href ? (
            <Link href={href} className="label link-wipe mt-4 inline-block text-ink">
              Start an enquiry
            </Link>
          ) : null}
        </div>

        <ol className="md:col-span-8 md:col-start-4">
          {process.map((step) => (
            <li
              key={step.n}
              className="grid grid-cols-1 gap-2 border-t border-bone-edge py-7 last:border-b sm:grid-cols-[2.5rem_11rem_1fr] sm:items-baseline sm:gap-8"
            >
              <span className="label">{step.n}</span>
              <span className="font-display text-[clamp(1.4rem,2.2vw,1.85rem)] leading-tight">
                {step.title}
              </span>
              <p className="text-caption leading-[1.75] text-graphite">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
