import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] flex-col justify-center px-gutter py-40">
      <p className="label">404</p>
      <h1 className="mt-6 font-display text-title">This page has been demolished.</h1>
      <Link href="/work" className="label link-wipe mt-10 inline-block self-start text-ink">
        Back to the work
      </Link>
    </section>
  );
}
