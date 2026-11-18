import { useId, useState } from "react";
import type { Experience } from "../types";

const VISIBLE = 4;

export function ExperienceCard({
  experience: exp,
}: {
  experience: Experience;
}) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const hidden = exp.highlights.length - VISIBLE;
  const shown = expanded || hidden <= 0 ? exp.highlights : exp.highlights.slice(0, VISIBLE);
  return (
    <article className="experience-card">
      <div className="experience-meta">
        <p className="eyebrow">
          {exp.startDate} – {exp.endDate}
          {exp.endDate === "Present" && <span className="now-pill">Now</span>}
        </p>
        <p className="experience-company">{exp.company}</p>
        <p className="experience-location">{exp.location}</p>
      </div>
      <div className="experience-content">
        <h3>{exp.title}</h3>
        {exp.lead && <p className="experience-lead">{exp.lead}</p>}
        {exp.stack && (
          <div className="chips experience-stack" aria-label="Main tools">
            {exp.stack.map((tool) => (
              <span className="chip" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        )}
        <ul id={listId}>
          {shown.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {hidden > 0 && (
          <button
            type="button"
            className="show-more"
            aria-expanded={expanded}
            aria-controls={listId}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Show less" : `Show ${hidden} more`}
            <span aria-hidden="true">{expanded ? "↑" : "↓"}</span>
          </button>
        )}
      </div>
    </article>
  );
}
