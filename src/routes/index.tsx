import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahana Dasgupta — Data Analyst · Data Engineer · Software Developer" },
      { name: "description", content: "Portfolio of Ahana Dasgupta — data analysis, cloud data engineering, and software development with Python, PySpark, SQL, and modern web stacks." },
      { property: "og:title", content: "Ahana Dasgupta — Data Analyst · Data Engineer · Software Developer" },
      { property: "og:description", content: "Data analysis, cloud pipelines on Azure & AWS, and full-stack software development. Python, PySpark, SQL, React, and more." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const SKILLS: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "SQL", "C", "C++", "JavaScript", "TypeScript"] },
  { group: "Data & Analytics", items: ["PySpark", "ETL Pipelines", "Data Modeling", "Pandas", "NumPy", "Power BI", "Tableau", "Excel"] },
  { group: "Cloud & Big Data", items: ["Azure Data Factory", "Azure Data Lake", "Azure Databricks", "Azure Synapse", "AWS S3", "AWS Glue", "AWS Lambda", "AWS Athena"] },
  { group: "Databases", items: ["Oracle SQL", "MySQL", "SQLite", "Neo4j"] },
  { group: "Tools & Frameworks", items: ["Git", "GitHub", "Flask", "Streamlit", "Chainlit", "React.js", "Next.js", "n8n", "Postman"] },
];

const EXPERIENCE = [
  {
    role: "Undergraduate Student Researcher",
    org: "Aethersaga AI",
    period: "Oct 2025 — Present",
    points: [
      "Developing AI-driven analytics solutions in Python — data processing, feature engineering, and model performance optimization.",
      "Building data transformation workflows that surface actionable insights for data-driven product decisions.",
    ],
  },
  {
    role: "AWS DevOps Trainee",
    org: "Employability.life",
    period: "Nov 2025 — Jan 2026",
    points: [
      "Hands-on with AWS EC2, S3, and IAM through guided cloud infrastructure and deployment assignments.",
      "Worked on automation workflows and DevOps fundamentals, reinforcing cloud-first development practices.",
    ],
  },
  {
    role: "Developer",
    org: "LNC COMMUNITY",
    period: "Oct 2024 — Present",
    points: [
      "Contributed as a core member of the LNC Community development team.",
      "Developed responsive UI components using Next.js, TypeScript, and Tailwind CSS.",
      "Worked closely with designers and team leads to implement intuitive and accessible user interfaces.",
      "Improved performance and responsiveness of the official community website.",
    ],
  },
];

const PROJECTS = [
  {
    name: "Instacart Data Engineering",
    tag: "AWS Data Engineering Pipeline",
    period: "Jun 2026",
    stack: ["AWS S3", "AWS Lambda", "AWS Glue", "AWS Athena", "Python", "PySpark", "SQL"],
    desc: "End-to-end data engineering pipeline for Instacart market-basket data on AWS. Ingestion, transformation, and structured storage for downstream analytics.",
    github: "https://github.com/ahanadasgupta26/Instacart-data-engineering-aws",
  },
  {
    name: "Tokyo Olympics 2021",
    tag: "Azure Data Engineering Pipeline",
    period: "May 2026",
    stack: ["Azure Data Factory", "ADLS", "Databricks", "Synapse", "PySpark", "SQL"],
    desc: "End-to-end pipeline ingesting, transforming, and analyzing the Tokyo Olympics 2021 dataset across the full Azure data stack. PySpark + SQL cleansing into Synapse for analytical querying.",
    github: "https://github.com/ahanadasgupta26/Olympics-data-engineering-azure",
  },
  {
    name: "AttributionX",
    tag: "Multi-Touch Attribution Platform",
    period: "Nov 2025 — Apr 2026",
    stack: ["Python", "Flask", "React.js", "Tailwind CSS"],
    desc: "Full-stack attribution platform using a hybrid Markov–Shapley model to allocate marketing channel credit. Dashboards, attribution insights, and Monte Carlo ROI simulations.",
    github: "https://github.com/ahanadasgupta26",
  },
  {
    name: "InventOPredict",
    tag: "AI-Powered Demand Forecasting",
    period: "Feb 2025 – March 2025",
    stack: ["Python", "Flask", "React.js", "Tailwind CSS", "SQLite", "Gemini API"],
    desc: "Developed an AI-powered demand forecasting and inventory optimization system using machine learning techniques. Built interactive dashboards and predictive analytics features to help businesses analyze sales trends and improve inventory planning.",
    github: "https://github.com/ahanadasgupta26/InventOPredict_Binary",
  },
];

const ACHIEVEMENTS = [
  {
    title: "3rd Place — BRICS Skills Competition 2025",
    detail: "Data Analysis & Visualization track. Outperformed 237+ international participants with end-to-end analysis in Excel, Tableau, and Python.",
  },
  {
    title: "Top 12 / 1,500+ teams — GES'25 Business Game",
    detail: "IIT Kharagpur. Recognized for strategic problem-solving and decision-making under competition conditions.",
  },
  {
    title: "Recognition for Excellent Innovation 2024",
    detail: "Issued by Institution's Innovation Council, Udyog (Centre for Development, IPR, Innovation and Incubation), SNU IQAC · Feb 2024",
  },
];

const CERTS = [
  "Postman API Fundamentals Student Expert",
  "Foundations of Data Structures and Algorithms Specialization",
  "Design Thinking",
  "Intro to Operating System 2: Memory Management",
  "Hardware and Operating System Foundations III",
  "Introduction to Operating System 1: Virtualization",
  "Logic for Economists",
  "Machine Learning and NLP Basics",
  "Think Again I: How to Understand Arguments",
  "Introduction to Artificial Intelligence (AI)",
  "Introduction to Generative AI",
  "Generative AI: Introduction and Applications",
];

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Certs />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
        }`}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          ahana<span className="text-primary">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="hover:text-foreground transition-colors">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:ahanadasgupta26@gmail.com"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-mono font-medium text-primary-foreground hover:opacity-90 transition"
        >
          get in touch →
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl float-slow" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-accent/10 blur-3xl float-slow" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-6xl px-6 py-32 w-full">
        <p className="font-mono text-xs text-primary mb-6 tracking-widest uppercase">
          <span className="cursor-blink">Kolkata, IN — Available for opportunities</span>
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
          Ahana
          <br />
          <span className="text-gradient">Dasgupta.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          Computer Science undergraduate — <span className="text-foreground">Data Analyst, Data Engineer, Software Developer, and Researcher.</span>
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition glow-ring"
          >
            View projects →
          </a>
          <a
            href="https://github.com/ahanadasgupta26"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ahana-dasgupta-332270284"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary transition"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          {[
            {
              k: "BRICS Skills Competition",
              sub: "Data Analysis & Visualization",
              v: "3rd Place",
            },
            {
              k: "Global Entrepreneurship Summit '25",
              sub: "IIT Kharagpur",
              v: "Top 12 Finalist",
            },
          ].map((s) => (
            <div
              key={s.k}
              className="flex items-start justify-between gap-4 rounded-lg border border-border bg-card/40 px-5 py-4"
            >
              <div className="min-w-0">
                <p className="font-display text-sm font-semibold text-foreground leading-snug">{s.k}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
              </div>
              <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-primary border border-primary/30 bg-primary/10 rounded px-2.5 py-1 mt-0.5">
                {s.v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Section({ id, label, title, children }: { id: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">{label}</span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 max-w-3xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

const EDUCATION = [
  {
    institution: "Sister Nivedita University",
    period: "2023 — 2027",
    detail: "B.Tech Computer Science & Engineering · CGPA 9.01 / 10",
  },
  {
    institution: "Taki House Govt. Sponsored Girls' High School",
    period: "2021 — 2023",
    detail: "Higher Secondary (Class XI – XII) · Science Stream",
  },
  {
    institution: "Holy Child Girls' High School",
    period: "2009 — 2021",
    detail: "Secondary (Till Class X)",
  },
];

function About() {
  return (
    <Section id="about" label="01 / about" title="A little about me.">
      {/* Intro card */}
      <div className="rounded-2xl border border-border bg-card/40 p-8 mb-10">
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Computer Science undergraduate passionate about data engineering, AI, and software development. Experienced in building{" "}
          <span className="text-foreground font-medium">cloud-based data pipelines</span> with Azure and AWS, and working with{" "}
          <span className="text-foreground font-medium">Python, SQL, PySpark, and ETL workflows.</span>{" "}
          Through academic and personal projects, I enjoy transforming complex data into{" "}
          <span className="text-foreground font-medium">actionable insights</span> and developing scalable,{" "}
          <span className="text-foreground font-medium">user-focused solutions</span> that solve real-world problems.
        </p>
      </div>

      {/* Education Timeline */}
      <div>
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-8">Education</p>
        <div className="relative">
          {/* Vertical stem */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

          <div className="space-y-6">
            {EDUCATION.map((e, i) => (
              <div key={i} className="relative flex gap-6 group">
                {/* Circle */}
                <div className="shrink-0 w-10 h-10 rounded-full border-2 border-primary bg-background flex items-center justify-center z-10 group-hover:bg-primary/10 transition-colors">
                  <span className="font-mono text-[10px] text-primary font-bold">{String(EDUCATION.length - i).padStart(2, "0")}</span>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-xl border border-border bg-card/30 px-6 py-4 hover-lift group-hover:border-primary/40 transition-colors">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <p className="font-display text-base font-semibold text-foreground leading-snug">{e.institution}</p>
                      <p className="text-sm text-muted-foreground mt-1">{e.detail}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-primary border border-primary/30 bg-primary/10 rounded-full px-3 py-1 whitespace-nowrap">
                      {e.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" label="02 / stack" title="My technical toolkit.">
      <div className="grid md:grid-cols-2 gap-4">
        {SKILLS.map((s) => (
          <div key={s.group} className="rounded-2xl border border-border bg-card/40 p-6 hover-lift">
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">{s.group}</p>
            <div className="flex flex-wrap gap-2">
              {s.items.map((it) => (
                <span key={it} className="rounded-full bg-surface-2 px-3 py-1 text-sm border border-border/50">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" label="03 / experience" title="Where I've contributed.">
      <div className="space-y-6">
        {EXPERIENCE.map((e) => (
          <div key={e.role} className="grid md:grid-cols-[1fr_2fr] gap-6 rounded-2xl border border-border bg-card/40 p-8 hover-lift">
            <div>
              <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
              <h3 className="font-display text-2xl font-semibold mt-2">{e.role}</h3>
              <p className="text-primary mt-1">{e.org}</p>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              {e.points.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1.5 shrink-0">▸</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" label="04 / projects" title="Projects I've shipped.">
      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((p) => (
          <article
            key={p.name}
            className="rounded-2xl border border-border bg-card/40 p-8 hover-lift flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="font-mono text-xs text-primary uppercase tracking-widest">{p.tag}</p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mt-2">{p.name}</h3>
              </div>
              <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">{p.period}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
            <div className="mt-auto flex flex-wrap items-center gap-3">
              {p.stack.map((s) => (
                <span key={s} className="font-mono text-xs rounded-md bg-surface-2 px-2.5 py-1 border border-border/50">
                  {s}
                </span>
              ))}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto font-mono text-xs text-primary hover:underline"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  return (
    <Section id="achievements" label="05 / wins" title="Milestones that matter.">
      <div className="grid md:grid-cols-2 gap-5">
        {ACHIEVEMENTS.map((a) => (
          <div key={a.title} className="rounded-2xl border border-border bg-gradient-to-br from-card/60 to-card/20 p-8 hover-lift">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                <span className="text-primary text-lg">★</span>
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold leading-tight">{a.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{a.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Certs() {
  return (
    <Section id="certs" label="06 / certifications" title="Always learning, always growing.">
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTS.map((c) => (
          <li key={c} className="h-full min-h-[5rem] rounded-xl border border-border bg-card/30 p-4 text-sm flex items-center gap-3">
            <span className="text-accent font-mono shrink-0">✓</span>
            <span className="leading-snug">{c}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <span className="font-mono text-xs text-primary tracking-widest uppercase">07 / contact</span>
        <h2 className="font-display text-5xl md:text-7xl font-bold mt-6 leading-[1.05]">
          Let's build something <span className="text-gradient">great together.</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
          Open to data analysis, data engineering, software development, and research opportunities.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="mailto:ahanadasgupta26@gmail.com" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition glow-ring">
            ahanadasgupta26@gmail.com
          </a>
          <a href="tel:+916290102365" className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary transition">
            +91 62901 02365
          </a>
        </div>
        <div className="mt-8 flex justify-center gap-6 text-sm font-mono text-muted-foreground">
          <a href="https://www.linkedin.com/in/ahana-dasgupta-332270284" target="_blank" rel="noreferrer" className="hover:text-primary transition">↗ LinkedIn</a>
          <a href="https://github.com/ahanadasgupta26" target="_blank" rel="noreferrer" className="hover:text-primary transition">↗ GitHub</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono text-muted-foreground">
        <p>© {new Date().getFullYear()} Ahana Dasgupta</p>
      </div>
    </footer>
  );
}
