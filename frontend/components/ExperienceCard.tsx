import type { Experience } from "../types";

export function ExperienceCard({
  experience: exp,
}: {
  experience: Experience;
}) {
  return (
    <article className="experience-card">
      <div className="experience-meta">
        <p className="eyebrow">
          {exp.startDate} – {exp.endDate}
        </p>
        <p className="experience-company">{exp.company}</p>
        <p className="experience-location">{exp.location}</p>
      </div>
      <div className="experience-content">
        <h3>{exp.title}</h3>
        <ul>
          {exp.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
