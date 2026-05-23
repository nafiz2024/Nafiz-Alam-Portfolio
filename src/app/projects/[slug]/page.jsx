import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, profile, projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | ${profile.name}`,
    description: project.summary,
  };
}

function DetailSection({ title, children }) {
  return (
    <section
      className="rounded-[2rem] border p-6"
      style={{
        borderColor: "color-mix(in srgb, var(--foreground) 10%, transparent)",
        background: "var(--surface-glass)",
        boxShadow: "0 24px 60px rgba(148, 163, 184, 0.12)",
      }}
    >
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main
      className="min-h-screen px-4 py-5 sm:px-6 sm:py-6 lg:px-8"
      style={{
        background:
          "radial-gradient(circle at top left, var(--color-accent-soft), transparent 22%), linear-gradient(180deg, color-mix(in srgb, var(--background) 92%, white) 0%, var(--background-end) 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div
          className="rounded-[1.75rem] border px-4 py-4 backdrop-blur sm:rounded-full sm:px-5 sm:py-3"
          style={{
            borderColor: "color-mix(in srgb, var(--foreground) 10%, transparent)",
            background: "var(--surface-glass)",
            boxShadow: "0 18px 48px rgba(15, 23, 42, 0.12)",
          }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/#projects"
              className="font-mono text-sm uppercase tracking-[0.32em] text-foreground"
            >
              {"<- Back to Projects"}
            </Link>
            <div className="flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
                style={{ background: "color-mix(in srgb, var(--foreground) 88%, black)" }}
              >
                Live Project
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold text-foreground"
                style={{
                  borderColor: "color-mix(in srgb, var(--foreground) 14%, transparent)",
                  background: "color-mix(in srgb, var(--surface-glass) 92%, transparent)",
                }}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {project.category}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {project.name}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {project.description}
              </p>
            </div>

            <div
              className="overflow-hidden rounded-[2rem] border p-3"
              style={{
                borderColor: "color-mix(in srgb, var(--foreground) 10%, transparent)",
                background: "var(--surface-glass)",
                boxShadow: "0 24px 60px rgba(148, 163, 184, 0.12)",
              }}
            >
              <Image
                src={project.image}
                alt={project.name}
                width={1200}
                height={720}
                priority
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <DetailSection title="Main Technology Stack">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full px-3 py-1.5 text-sm font-medium"
                    style={{
                      background: "color-mix(in srgb, var(--color-accent) 14%, var(--surface-glass))",
                      color: "var(--color-accent)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </DetailSection>

            <DetailSection title="Brief Description">
              <p className="text-base leading-8 text-slate-600">
                {project.summary}
              </p>
            </DetailSection>

            <DetailSection title="Key Features">
              <ul className="grid gap-3 text-sm leading-7 text-slate-600">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-2xl px-4 py-3"
                    style={{
                      background: "color-mix(in srgb, var(--foreground) 4%, var(--surface-glass))",
                    }}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </DetailSection>

            <DetailSection title="Potential Improvements and Future Plans">
              <ul className="grid gap-3 text-sm leading-7 text-slate-600">
                {project.futurePlans.map((plan) => (
                  <li
                    key={plan}
                    className="rounded-2xl px-4 py-3"
                    style={{
                      background: "color-mix(in srgb, var(--foreground) 4%, var(--surface-glass))",
                    }}
                  >
                    {plan}
                  </li>
                ))}
              </ul>
            </DetailSection>
          </div>
        </div>
      </div>
    </main>
  );
}
