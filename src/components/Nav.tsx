"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { navigation, studio } from "@/data/studio";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Nav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);

  /**
   * Sections declare their own tone via `data-tone`; the bar samples whatever
   * currently sits beneath it. More reliable than blend modes, and it keeps
   * working when sections get reordered.
   */
  const sampleTone = useCallback(() => {
    const stack = document.elementsFromPoint(window.innerWidth / 2, 30);
    const behind = stack.find((el) => !headerRef.current?.contains(el));
    setOnDark(behind?.closest("[data-tone='dark']") != null);
  }, []);

  useEffect(() => {
    sampleTone();
  }, [pathname, sampleTone]);

  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(y > previous && y > 220 && !open);
    sampleTone();
  });

  const light = onDark || open;

  return (
    <>
      <motion.header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <nav
          className={`flex items-center justify-between px-gutter py-7 transition-colors duration-500 ${
            light ? "text-bone" : "text-ink"
          }`}
        >
          <Link
            href="/"
            className="font-display text-[1.5rem] leading-none tracking-[-0.02em]"
            onClick={() => setOpen(false)}
          >
            {studio.name}
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`label link-wipe ${light ? "text-bone" : "text-ink"}`}
                  aria-current={pathname.startsWith(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`label md:hidden ${light ? "text-bone" : "text-ink"}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            data-tone="dark"
            className="fixed inset-0 z-40 flex flex-col justify-end bg-ink px-gutter pb-24 md:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <ul className="space-y-2">
              {navigation.map((item, i) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.07 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block font-display text-title text-bone"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
