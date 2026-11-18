import type { Project } from "../types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card${project.featured ? " featured" : ""}`}>
      <div className="project-meta">
        <span>{project.category}</span>
        <span>{project.date}</span>
      </div>
      <h3>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.title}
          <span aria-hidden="true">↗</span>
        </a>
      </h3>
      {project.badge && <p className="project-badge">{project.badge}</p>}
      <p className="project-description">{project.description}</p>
      <div className="chips">
        {project.techStack.map((tech) => (
          <span className="chip" key={tech}>
            {tech}
          </span>
        ))}
        {project.status && (
          <span className="archive-label">{project.status}</span>
        )}
      </div>
    </article>
  );
}
