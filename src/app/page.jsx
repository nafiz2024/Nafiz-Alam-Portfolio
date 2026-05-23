import Image from "next/image";
import ContactForm from "@/components/contact-form";
import HeroDesignation from "@/components/hero-designation";
import Navbar from "@/components/navbar";
import { OrbitingCircles } from "@/components/orbiting-circles";
import PortfolioStats from "@/components/portfolio-stats";
import ProjectGrid from "@/components/project-grid";
import RevealSection from "@/components/reveal-section";
import SiteFooter from "@/components/site-footer";
import {
  contact,
  education,
  experience,
  portfolioStats,
  profile,
  projects,
  services,
  skillsStackGroups,
  socialLinks,
  techStackShowcase,
} from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm font-mono uppercase tracking-[0.3em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-22 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 pb-16 pt-6 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-18">
          <div className="space-y-8">
            <div className="hero-chip inline-flex max-w-full items-center gap-2 rounded-full border border-white/70 bg-white/75 px-3 py-2 text-[0.68rem] text-slate-700 shadow-sm shadow-orange-100/80 backdrop-blur min-[420px]:gap-3 min-[420px]:px-4 min-[420px]:text-xs sm:text-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
              {profile.heroBadge}
            </div>

            <div className="space-y-5">
              <p className="font-mono text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">
                <HeroDesignation
                  items={profile.rotatingDesignations}
                  fallback={profile.designation}
                />
              </p>
              <h1 className="hero-title max-w-none text-[2.2rem] font-semibold leading-[0.98] tracking-tight text-slate-950 min-[420px]:text-[2.65rem] sm:text-5xl lg:text-6xl">
                {profile.headlineLines.map((line) => (
                  <span key={line} className="block sm:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="hero-copy max-w-2xl text-[0.98rem] leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:text-xl">
                {profile.intro}
              </p>
            </div>

            <div className="hero-actions flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                className="button-hover-primary hero-primary-button inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold sm:w-auto"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className="button-hover-secondary inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-900 sm:w-auto"
                href="#contact"
              >
                Contact Me
              </a>
              <a
                className="button-hover-soft inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-900 sm:w-auto"
                href={profile.resumeUrl}
                target={profile.resumeUrl.startsWith("http") ? "_blank" : undefined}
                rel={
                  profile.resumeUrl.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                Download Resume
              </a>
            </div>

            <div className="hero-social flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-hover-soft inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm"
                >
                  <span className="font-medium">{link.label}</span>
                  <span aria-hidden="true" className="text-[var(--color-accent)]">
                    {"->"}
                  </span>
                </a>
              ))}
            </div>

            <div className="hero-stats">
              <PortfolioStats stats={portfolioStats} />
            </div>
          </div>

          <div className="hero-visual relative mx-auto w-full max-w-sm sm:max-w-md">
            <div className="orb-float-a absolute -left-6 top-8 h-32 w-32 rounded-full bg-[var(--color-accent-soft)] blur-3xl" />
            <div className="orb-float-b absolute -right-4 bottom-0 h-40 w-40 rounded-full bg-[var(--color-sky-soft)] blur-3xl" />
            <div className="hero-card relative overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(160deg,rgba(255,255,255,0.88),rgba(255,247,237,0.9))] p-4 shadow-[0_30px_80px_rgba(148,163,184,0.28)] backdrop-blur sm:p-5">
              <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-2 shadow-sm shadow-slate-200/60">
                <Image
                  src={profile.photo}
                  alt={`${profile.name} portrait`}
                  width={720}
                  height={860}
                  priority
                  className="h-auto w-full rounded-[1.25rem] object-cover"
                />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/90 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
                    Focus
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {profile.heroFocus}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/90 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
                    Currently Learning
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {profile.heroLearning}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutIcon({ type }) {
  if (type === "react") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="12" cy="12" r="1.7" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="currentColor" strokeWidth="1.6" />
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="3.2"
          stroke="currentColor"
          strokeWidth="1.6"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="3.2"
          stroke="currentColor"
          strokeWidth="1.6"
          transform="rotate(120 12 12)"
        />
      </svg>
    );
  }

  if (type === "next") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M8.4 15.8V8.2L15.7 15.8V8.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "javascript") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="4.5" y="4.5" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10.2 9.2V15.2C10.2 16.15 9.58 16.7 8.75 16.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M13.7 15.35C14.08 16.12 14.7 16.7 15.7 16.7C16.64 16.7 17.25 16.22 17.25 15.47C17.25 14.75 16.76 14.43 15.93 14.07L15.48 13.88C14.17 13.32 13.43 12.62 13.43 11.33C13.43 10.14 14.34 9.2 15.78 9.2C16.81 9.2 17.55 9.56 18.08 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "tailwind") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M7 9.5C8.1 7.6 9.45 6.75 11.05 6.95C13.43 7.25 13.73 9.62 15.35 10.1C16.45 10.42 17.72 9.98 19.15 8.8C18.05 10.7 16.7 11.55 15.1 11.35C12.72 11.05 12.42 8.68 10.8 8.2C9.7 7.88 8.43 8.32 7 9.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.85 14.25C5.95 12.35 7.3 11.5 8.9 11.7C11.28 12 11.58 14.37 13.2 14.85C14.3 15.17 15.57 14.73 17 13.55C15.9 15.45 14.55 16.3 12.95 16.1C10.57 15.8 10.27 13.43 8.65 12.95C7.55 12.63 6.28 13.07 4.85 14.25Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "node") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 3.8L18.6 7.6V15.25L12 19.05L5.4 15.25V7.6L12 3.8Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M10 9.35V14.65M10 9.35L14 14.65V9.35"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "mongodb") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 4.2C14.53 7.08 15.8 9.72 15.8 12.1C15.8 15.28 14.09 17.52 12 19.8C9.91 17.52 8.2 15.28 8.2 12.1C8.2 9.72 9.47 7.08 12 4.2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M12 6.1V20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "express") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M4.6 9.2H10.2"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
        <path
          d="M4.6 12H9.45"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
        <path
          d="M4.6 14.8H10.2"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
        <path
          d="M13.15 8.65L19.2 15.35"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
        <path
          d="M19.2 8.65L13.15 15.35"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 4.6C8.24 4.6 5.2 7.64 5.2 11.4C5.2 14.4 7.14 16.95 9.83 17.85C10.18 17.91 10.31 17.72 10.31 17.55V16.38C8.38 16.79 7.98 15.58 7.98 15.58C7.67 14.8 7.23 14.59 7.23 14.59C6.62 14.18 7.28 14.19 7.28 14.19C7.95 14.24 8.3 14.88 8.3 14.88C8.9 15.91 9.87 15.61 10.28 15.44C10.34 15.01 10.51 14.72 10.7 14.56C9.17 14.39 7.56 13.81 7.56 11.19C7.56 10.44 7.82 9.82 8.27 9.35C8.2 9.18 7.98 8.48 8.34 7.54C8.34 7.54 8.91 7.37 10.27 8.25C10.81 8.1 11.39 8.03 12 8.03C12.61 8.03 13.19 8.1 13.73 8.25C15.09 7.37 15.66 7.54 15.66 7.54C16.02 8.48 15.8 9.18 15.73 9.35C16.18 9.82 16.44 10.44 16.44 11.19C16.44 13.82 14.82 14.39 13.29 14.56C13.53 14.77 13.74 15.18 13.74 15.8V17.55C13.74 17.72 13.87 17.91 14.22 17.85C16.91 16.95 18.85 14.4 18.85 11.4C18.85 7.64 15.81 4.6 12 4.6Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "mysql") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="6" y="4.8" width="12" height="14.4" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 8.2H15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 12H15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 15.8H13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "codex") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M9.15 6.2H14.85L17.8 9.15V14.85L14.85 17.8H9.15L6.2 14.85V9.15L9.15 6.2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9.55 9.45L11.25 12L9.55 14.55"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14.45 9.45L12.75 12L14.45 14.55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.55 15.7L12.45 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "database") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <ellipse
          cx="12"
          cy="6.5"
          rx="6.5"
          ry="2.75"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M5.5 6.5V12C5.5 13.52 8.41 14.75 12 14.75C15.59 14.75 18.5 13.52 18.5 12V6.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M5.5 12V17.5C5.5 19.02 8.41 20.25 12 20.25C15.59 20.25 18.5 19.02 18.5 17.5V12"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  if (type === "script") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M8.25 9.25C8.25 8.28 9.03 7.5 10 7.5H11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M15.75 14.75C15.75 15.72 14.97 16.5 14 16.5H13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M11 7.5L9.8 16.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M14.2 7.5L13 16.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "spark") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M12 3.75L13.94 8.06L18.25 10L13.94 11.94L12 16.25L10.06 11.94L5.75 10L10.06 8.06L12 3.75Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M9 8.5L5.5 12L9 15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8.5L18.5 12L15 15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 6L10.5 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TechStackSection() {
  return (
    <section className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={100}>
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Tech <span className="text-[var(--color-accent)]">Stack</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Tools &amp; technologies I use
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techStackShowcase.map((item) => (
            <article
              key={item.name}
              className="stack-card stack-card-tile flex min-h-32 items-center justify-center rounded-[1.5rem] border p-6 text-center"
            >
              <div className="space-y-3">
                <span className="stack-card-icon mx-auto">
                  <AboutIcon type={item.icon} />
                </span>
                <p className="stack-card-label text-sm font-semibold sm:text-base">
                  {item.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}

function SkillsStackSection() {
  return (
    <section id="skills" className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={120}>
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Skills &amp; <span className="text-[var(--color-accent)]">Stack</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Technologies I use for building web applications
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillsStackGroups.map((group) => (
            <article
              key={group.title}
              className={`stack-card rounded-[1.8rem] border p-7 sm:p-8 ${
                group.title === "Tools & Others" ? "lg:col-span-2" : ""
              }`}
            >
              <div className="space-y-8">
                <p className="stack-card-heading text-center font-mono text-xs uppercase tracking-[0.28em]">
                  {group.title}
                </p>

                <div
                  className={`grid grid-cols-2 gap-8 ${
                    group.title === "Tools & Others"
                      ? "sm:grid-cols-3 lg:grid-cols-4"
                      : ""
                  }`}
                >
                  {group.items.map((item) => (
                    <div key={item.name} className="space-y-3 text-center">
                      <span className="stack-card-icon mx-auto">
                        <AboutIcon type={item.icon} />
                      </span>
                      <p className="stack-card-label text-sm font-semibold sm:text-base">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}

function AboutSection() {
  const orbitIcons = [
    [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "JavaScript", icon: "javascript" },
    ],
    [
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Node.js", icon: "node" },
      { name: "MongoDB", icon: "mongodb" },
    ],
    [
      { name: "Express", icon: "express" },
      { name: "GitHub", icon: "github" },
      { name: "MySQL", icon: "mysql" },
      { name: "Firebase", icon: "spark" },
    ],
  ];

  return (
    <section id="about" className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <RevealSection
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]"
        delay={80}
      >
        <div className="space-y-8">
          <SectionHeading
            eyebrow="About Me"
            title="Frontend React Developer focused on modern, responsive web experiences."
            description="A quick introduction to my development journey, technical focus, and the kind of user experiences I enjoy building."
          />
          <div className="atom-showcase">
            <div className="atom-showcase-grid" aria-hidden="true" />
            <div className="atom-showcase-glow atom-showcase-glow-one" aria-hidden="true" />
            <div className="atom-showcase-glow atom-showcase-glow-two" aria-hidden="true" />

            <div className="atom-stage">
              <div className="atom-nucleus" aria-hidden="true">
                <AboutIcon type="code" />
              </div>

              <OrbitingCircles iconSize={42} radius={92} speed={1.35}>
                {orbitIcons[0].map((item) => (
                  <AboutIcon key={item.name} type={item.icon} />
                ))}
              </OrbitingCircles>

              <OrbitingCircles iconSize={44} radius={150} reverse speed={1.7}>
                {orbitIcons[1].map((item) => (
                  <AboutIcon key={item.name} type={item.icon} />
                ))}
              </OrbitingCircles>

              <OrbitingCircles iconSize={46} radius={208} speed={1.1}>
                {orbitIcons[2].map((item) => (
                  <AboutIcon key={item.name} type={item.icon} />
                ))}
              </OrbitingCircles>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {profile.about.map((paragraph) => (
            <p
              key={paragraph}
              className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 text-base leading-8 text-slate-700 shadow-sm shadow-slate-200/70 backdrop-blur"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={120}>
        <SectionHeading
          eyebrow="Education"
          title="My academic background in computer science and engineering."
          description="Diploma and undergraduate studies that shaped my technical foundation and long-term growth in software development."
        />

        <div className="grid gap-6">
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.degree}`}
              className="rounded-[2rem] border border-slate-200 bg-[rgba(255,255,255,0.82)] p-7 shadow-sm shadow-slate-200/80"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {item.timeframe}
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-950">
                    {item.degree}
                  </h3>
                  <p className="text-base text-slate-700">{item.institution}</p>
                </div>
                <ul className="grid max-w-2xl gap-3 text-sm leading-7 text-slate-600">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}

function ExperienceSection() {
  if (!experience.length) {
    return null;
  }

  return (
    <section id="experience" className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={140}>
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience that strengthened my technical and communication skills."
          description="Hands-on roles where I worked with software implementation, client support, troubleshooting, and service communication."
        />

        <div className="grid gap-6">
          {experience.map((item) => (
            <article
              key={`${item.title}-${item.organization}`}
              className="rounded-[2rem] border border-slate-200 bg-[rgba(255,255,255,0.82)] p-7 shadow-sm shadow-slate-200/80"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {item.timeframe}
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="text-slate-600">
                    {item.organization} | {item.type}
                  </p>
                  <p className="max-w-2xl text-sm leading-7 text-slate-600">
                    {item.summary}
                  </p>
                </div>
                <ul className="grid max-w-2xl gap-3 text-sm leading-7 text-slate-600">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={150}>
        <SectionHeading
          eyebrow="Services"
          title="Frontend development services I can contribute with."
          description="Core areas where I build clean interfaces, responsive layouts, and practical web experiences with modern frontend tools."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service}
              className="group rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 shadow-sm shadow-slate-200/70 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/80"
            >
              <div className="space-y-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[var(--color-accent)]">
                  <AboutIcon type="spark" />
                </span>
                <p className="text-base font-semibold leading-7 text-slate-900">
                  {service}
                </p>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={160}>
        <SectionHeading
          eyebrow="Projects"
          title="Selected projects built with React and modern web technologies."
          description="A collection of responsive applications focused on usability, clean structure, reusable components, and practical problem solving."
        />

        <ProjectGrid projects={projects} />
      </RevealSection>
    </section>
  );
}

function ContactSection() {
  const findMeLinks = socialLinks.filter(Boolean);

  return (
    <section id="contact" className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl" delay={180}>
        <div className="contact-shell relative overflow-hidden rounded-[2.75rem] border border-slate-200 shadow-[0_30px_100px_rgba(15,23,42,0.14)]">
          <div className="contact-orb contact-orb-one pointer-events-none absolute -left-10 top-10 h-48 w-48 rounded-full" />
          <div className="contact-orb contact-orb-two pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full" />
          <div className="relative grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-12 lg:py-14">
            <div className="contact-story space-y-6">
              <div className="space-y-2">
                <p className="contact-eyebrow font-mono text-sm uppercase tracking-[0.3em]">
                  Contact
                </p>
              </div>

              <div className="space-y-5 pt-1">
                <div className="space-y-2">
                  <h3 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    {profile.name}
                  </h3>
                  <p className="text-lg text-[var(--color-accent)] sm:text-xl">
                    {profile.designation}
                  </p>
                </div>

                <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                  I build modern, responsive, and user-friendly web applications
                  using React.js, Next.js, JavaScript, and Tailwind CSS with a
                  strong focus on clean UI and smooth user experience.
                </p>

                <div className="space-y-4 text-base text-slate-700 sm:text-lg">
                  <p className="flex items-center gap-3">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[var(--color-accent)] shadow-sm shadow-slate-200/60"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path
                          d="M12 20C16.14 20 19.5 16.64 19.5 12.5C19.5 8.36 16.14 5 12 5C7.86 5 4.5 8.36 4.5 12.5C4.5 16.64 7.86 20 12 20Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                        <path
                          d="M12 12.5C13.66 12.5 15 11.16 15 9.5C15 7.84 13.66 6.5 12 6.5C10.34 6.5 9 7.84 9 9.5C9 11.16 10.34 12.5 12 12.5Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                        <path
                          d="M7.6 18.45C8.27 16.27 10 14.75 12 14.75C14 14.75 15.73 16.27 16.4 18.45"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <span>{contact.location}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[var(--color-accent)] shadow-sm shadow-slate-200/60"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path
                          d="M8.5 5.5H6.8C5.86 5.5 5.1 6.26 5.1 7.2C5.1 13.5 10.2 18.6 16.5 18.6C17.44 18.6 18.2 17.84 18.2 16.9V15.2L14.7 14.1L12.9 15.9C10.89 14.88 8.82 12.81 7.8 10.8L9.6 9L8.5 5.5Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <a href={`tel:${contact.phoneLink}`} className="hover:text-[var(--color-accent)]">
                      {contact.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[var(--color-accent)] shadow-sm shadow-slate-200/60"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path
                          d="M12 4.75C8 4.75 4.75 7.88 4.75 11.75C4.75 13.22 5.22 14.58 6.03 15.7L5.25 19.25L8.92 18.43C9.92 19 10.94 19.25 12 19.25C16 19.25 19.25 16.12 19.25 12.25C19.25 8.38 16 5.25 12 5.25V4.75Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.35 8.95C9.49 8.63 9.62 8.58 9.85 8.58H10.43C10.6 8.58 10.8 8.53 10.97 8.74C11.14 8.94 11.69 9.58 11.69 9.8C11.69 10.02 11.55 10.15 11.41 10.32C11.28 10.49 11.13 10.66 11.28 10.92C11.44 11.19 11.96 12.05 12.77 12.78C13.82 13.72 14.68 14.01 15 14.15C15.25 14.25 15.44 14.23 15.59 14.06C15.79 13.84 16.05 13.49 16.27 13.16C16.42 12.92 16.61 12.89 16.84 12.98L18.18 13.56C18.41 13.66 18.57 13.72 18.62 13.81C18.68 13.91 18.68 14.35 18.52 14.67C18.35 15 17.65 15.55 17.16 15.61C16.67 15.67 16.05 15.69 14.23 14.9C12.27 14.03 10.89 11.86 10.78 11.71C10.68 11.56 9.99 10.69 9.67 9.85C9.36 9 9.12 9.49 9.35 8.95Z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <a
                      href={contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--color-accent)]"
                    >
                      {contact.whatsapp}
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[var(--color-accent)] shadow-sm shadow-slate-200/60"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path
                          d="M4 7.5L12 13.25L20 7.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="3.5"
                          y="5.5"
                          width="17"
                          height="13"
                          rx="3"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="break-all hover:text-[var(--color-accent)] sm:break-normal"
                    >
                      {contact.email}
                    </a>
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <p className="font-mono text-sm uppercase tracking-[0.3em] text-slate-500">
                    Find Me In
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {findMeLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="button-hover-panel find-me-icon inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 shadow-sm shadow-slate-200/60"
                        aria-label={link.label}
                      >
                        {link.label === "GitHub" ? (
                          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                            <path
                              d="M12 4.5C7.86 4.5 4.5 7.86 4.5 12C4.5 15.31 6.64 18.12 9.61 19.11C9.99 19.17 10.13 18.95 10.13 18.76V17.45C8 17.9 7.56 16.56 7.56 16.56C7.22 15.68 6.72 15.45 6.72 15.45C6.04 15 6.77 15.01 6.77 15.01C7.52 15.06 7.91 15.79 7.91 15.79C8.58 16.91 9.67 16.58 10.1 16.39C10.17 15.92 10.37 15.6 10.59 15.41C8.89 15.23 7.1 14.58 7.1 11.68C7.1 10.85 7.4 10.17 7.9 9.64C7.82 9.45 7.57 8.67 7.97 7.62C7.97 7.62 8.6 7.43 10.12 8.42C10.72 8.26 11.37 8.18 12 8.18C12.63 8.18 13.28 8.26 13.88 8.42C15.4 7.43 16.03 7.62 16.03 7.62C16.43 8.67 16.18 9.45 16.1 9.64C16.6 10.17 16.9 10.85 16.9 11.68C16.9 14.59 15.1 15.22 13.39 15.4C13.68 15.65 13.94 16.13 13.94 16.86V18.76C13.94 18.95 14.08 19.17 14.47 19.11C17.43 18.12 19.57 15.31 19.57 12C19.57 7.86 16.21 4.5 12 4.5Z"
                              fill="currentColor"
                            />
                          </svg>
                        ) : null}
                        {link.label === "LinkedIn" ? (
                          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                            <path
                              d="M6.6 8.2C7.68 8.2 8.55 7.33 8.55 6.25C8.55 5.17 7.68 4.3 6.6 4.3C5.52 4.3 4.65 5.17 4.65 6.25C4.65 7.33 5.52 8.2 6.6 8.2Z"
                              fill="currentColor"
                            />
                            <path d="M5 9.6H8.15V19.6H5V9.6Z" fill="currentColor" />
                            <path
                              d="M10.2 9.6H13.22V10.97H13.26C13.68 10.17 14.71 9.33 16.25 9.33C19.45 9.33 20.05 11.3 20.05 13.87V19.6H16.9V14.52C16.9 13.31 16.88 11.75 15.19 11.75C13.48 11.75 13.22 13.04 13.22 14.43V19.6H10.2V9.6Z"
                              fill="currentColor"
                            />
                          </svg>
                        ) : null}
                        {link.label === "Facebook" ? (
                          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                            <path
                              d="M13.2 20V12.7H15.7L16.1 9.9H13.2V8.1C13.2 7.29 13.44 6.74 14.6 6.74H16.2V4.24C15.92 4.2 14.96 4.12 13.84 4.12C11.5 4.12 9.9 5.48 9.9 8V9.9H7.5V12.7H9.9V20H13.2Z"
                              fill="currentColor"
                            />
                          </svg>
                        ) : null}
                        {link.label === "Email" ? (
                          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                            <path
                              d="M4 7.5L12 13.25L20 7.5"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <rect
                              x="3.5"
                              y="5.5"
                              width="17"
                              height="13"
                              rx="3"
                              stroke="currentColor"
                              strokeWidth="1.8"
                            />
                          </svg>
                        ) : null}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-shell flex h-full flex-col rounded-[2.2rem] border p-4 sm:p-6">
              <div className="mb-5">
                <p className="contact-label font-mono text-xs uppercase tracking-[0.3em]">
                  Send A Message
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative flex-1 overflow-x-hidden">
      <div className="background-base pointer-events-none absolute inset-0 -z-30" />
      <div className="background-grid pointer-events-none absolute inset-0 -z-20 opacity-50" />
      <div className="ambient-orb ambient-orb-one pointer-events-none absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full" />
      <div className="ambient-orb ambient-orb-two pointer-events-none absolute right-[-6rem] top-[28rem] -z-10 h-80 w-80 rounded-full" />
      <div className="ambient-orb ambient-orb-three pointer-events-none absolute left-1/3 top-[70rem] -z-10 h-64 w-64 rounded-full" />
      <Navbar items={navItems} />
      <Hero />
      <AboutSection />
      <TechStackSection />
      <SkillsStackSection />
      <EducationSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
