"use client";

import { useMemo, useState } from "react";
import { WorkList } from "@/components/WorkList";
import type { Project } from "@/data/projects";
import { workCategories, type WorkCategory } from "@/data/studio";

export function WorkIndex({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<WorkCategory>("residential");

  const filtered = useMemo(
    () => projects.filter((project) => project.category === category),
    [projects, category],
  );

  return (
    <>
      <nav aria-label="Project categories" className="mt-12 flex flex-wrap gap-x-8 gap-y-3 md:mt-16">
        {workCategories.map((item) => {
          const active = item.id === category;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
              className={`label transition-colors duration-500 ${
                active ? "text-ink" : "text-stone hover:text-ink"
              }`}
              aria-pressed={active}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-16 md:mt-24">
        {filtered.length > 0 ? (
          <WorkList key={category} items={filtered} />
        ) : (
          <p className="border-t border-bone-edge py-10 text-caption text-graphite">
            No {category} projects published yet.
          </p>
        )}
      </div>
    </>
  );
}
