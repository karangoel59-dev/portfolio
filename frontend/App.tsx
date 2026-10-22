import { useState } from "react";
import { portfolioData as data, careerEvents } from "./data";
import { Section } from "./components/Section";
import { ExperienceCard } from "./components/ExperienceCard";
import { ProjectCard } from "./components/ProjectCard";
import "./site.css";

const nav = [
  ["work", "Work"],
  ["projects", "Projects"],
  ["journey", "Journey"],
  ["education", "Education"],
] as const;

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(careerEvents.length - 1);
  const event = careerEvents[selectedEvent];
  const resumeUrl = `${import.meta.env.BASE_URL}Karan_Goel_Resume.pdf`;
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Karan Goel, home">
          kg<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href={`mailto:${data.contact.email}`}>
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </header>
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              {data.title}
            </p>
            <h1 id="hero-title">
              Karan <span>Goel.</span>
            </h1>
            <p className="hero-line">AI agents. Reliable backends.</p>
            <p className="hero-description">
              I build production agents and the systems around them: retrieval,
              tool execution, billing and observability. Previously, I worked on
              cloud infrastructure at Cleartrip.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
              <a className="button secondary" href={resumeUrl} download>
                Download resume <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="hero-location">
              Pune, India <span>·</span> Open to global relocation
            </p>
          </div>
          <div className="system-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <svg viewBox="0 0 430 390" className="system-lines">
              <path d="M75 100 L210 165 L355 95 M210 165 L95 295 M210 165 L340 295 M95 295 L340 295" />
              <circle cx="210" cy="165" r="9" />
              <circle cx="75" cy="100" r="5" />
              <circle cx="355" cy="95" r="5" />
              <circle cx="95" cy="295" r="5" />
              <circle cx="340" cy="295" r="5" />
            </svg>
            <span className="visual-node node-main">AGENT RUNTIME</span>
            <span className="visual-node node-tools">TOOLS</span>
            <span className="visual-node node-data">RETRIEVAL</span>
            <span className="visual-node node-backend">BACKEND</span>
            <span className="visual-node node-tracing">TRACING</span>
            <span className="visual-caption">THE SYSTEM AROUND THE MODEL</span>
          </div>
        </section>
        <div className="focus-strip" aria-label="Areas of work">
          <span>Agent orchestration</span>
          <span>Retrieval & data</span>
          <span>Backend reliability</span>
          <span>Cloud infrastructure</span>
        </div>
        <Section
          id="work"
          number="01"
          title="Work"
          description="Production AI today. Infrastructure experience behind it."
        >
          <div className="experience-list">
            {data.experience.map((exp) => (
              <ExperienceCard
                key={`${exp.company}-${exp.startDate}`}
                experience={exp}
              />
            ))}
          </div>
        </Section>
        <Section
          id="projects"
          number="02"
          title="Selected projects"
          description="Tools, experiments and earlier work you can explore."
        >
          <div className="projects-grid">
            {data.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <a
            className="text-link projects-more"
            href={data.contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore more on GitHub <span aria-hidden="true">↗</span>
          </a>
        </Section>
        <Section
          id="journey"
          number="03"
          title="The journey"
          description="From student projects to infrastructure and applied AI."
        >
          <div className="journey-panel">
            <div className="journey-track" aria-label="Career milestones">
              {careerEvents.map((item, index) => (
                <button
                  key={item.year}
                  type="button"
                  className={`milestone ${selectedEvent === index ? "selected" : ""}`}
                  aria-pressed={selectedEvent === index}
                  aria-controls="milestone-detail"
                  onClick={() => setSelectedEvent(index)}
                >
                  <span className="milestone-year">{item.year}</span>
                  <span
                    className={`milestone-dot ${item.kind}`}
                    aria-hidden="true"
                  />
                  <span className="milestone-title">{item.title}</span>
                </button>
              ))}
            </div>
            <div
              id="milestone-detail"
              className="milestone-detail"
              aria-live="polite"
              aria-atomic="true"
            >
              <p className="eyebrow">
                {event.kind} <span>·</span> {event.dates}
              </p>
              <h3>{event.subtitle}</h3>
              <p>{event.description}</p>
            </div>
          </div>
          <p className="journey-note">
            The early-work archive preserves student code from 2018–2020. The
            master’s and capstone are education and project work.
          </p>
        </Section>
        <Section
          id="skills"
          number="04"
          title="What I work with"
          description="The tools I use across agents, backend systems and infrastructure."
        >
          <div className="skills-grid">
            {data.skills.map((group) => (
              <div className="skill-group" key={group.category}>
                <h3>{group.category}</h3>
                <div className="chips">
                  {group.skills.map((skill) => (
                    <span className="chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section
          id="education"
          number="05"
          title="Education"
          description="Computer science foundations, with a focus on building."
        >
          <div className="education-grid">
            {data.education.map((edu) => (
              <article className="education-card" key={edu.degree}>
                <p className="eyebrow">
                  {edu.startDate} – {edu.endDate}
                </p>
                <h3>{edu.degree}</h3>
                <p className="school">{edu.institution}</p>
                <p>{edu.detail}</p>
              </article>
            ))}
          </div>
        </Section>
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">NEXT CHAPTER</p>
          <h2 id="contact-title">Have a system to build?</h2>
          <p>
            I’m open to applied AI, backend and platform engineering
            opportunities.
          </p>
          <a className="contact-email" href={`mailto:${data.contact.email}`}>
            {data.contact.email} <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-links">
            <a
              href={data.contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href={resumeUrl} download>
              Resume ↓
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <span>
          © {new Date().getFullYear()} {data.name}
        </span>
        <span>Applied AI · Backend · Infrastructure</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
