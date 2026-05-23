"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

function ProjectCard({ project }) {
  return (
    <article className="project-card group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-lg shadow-slate-200/70">
      <div className="project-image-shell relative overflow-hidden rounded-t-[2rem]">
        <Image
          src={project.image}
          alt={project.name}
          width={900}
          height={600}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] min-[420px]:h-56 sm:h-60"
        />
        <div className="project-image-softener pointer-events-none absolute inset-0" />
      </div>
      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(249,115,22,0.5),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-950 sm:text-2xl">{project.name}</h3>
          <p className="text-sm leading-7 text-slate-600">{project.summary}</p>
        </div>

        <div className="mt-auto space-y-5 pt-6">
          <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700"
            >
              {item}
            </span>
          ))}
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="button-hover-secondary inline-flex items-center gap-2 rounded-full border border-slate-300 px-3.5 py-2 text-sm font-semibold text-slate-900 sm:px-4"
            >
              View Details
              <span aria-hidden="true">{"->"}</span>
            </Link>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-hover-soft inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-3.5 py-2 text-sm font-semibold text-slate-900 sm:px-4"
            >
              Live
              <span aria-hidden="true">{"->"}</span>
            </a>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-hover-soft inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-3.5 py-2 text-sm font-semibold text-slate-900 sm:px-4"
            >
              GitHub
              <span aria-hidden="true">{"->"}</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectGrid({ projects }) {
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    [projects]
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`button-hover-filter rounded-full px-4 py-2 text-sm font-semibold ${
                isActive
                  ? "filter-button-active"
                  : "border border-slate-300 bg-white/80 text-slate-700 hover:border-slate-950"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
    </div>
  );
}
