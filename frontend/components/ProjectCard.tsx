import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <article className="mb-3 rounded-lg border border-ui-line bg-ui-elevated p-4 transition-colors last:mb-0 hover:border-ui-lineStrong">
            <header className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-[16px] font-semibold tracking-tight text-ui-ink">
                    {project.title}
                    {project.link && project.link !== '#' && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 align-middle text-xs font-medium text-ui-accentSoft hover:text-ui-teal"
                        >
                            Visit ↗
                        </a>
                    )}
                </h3>
                <span className="whitespace-nowrap text-[11px] font-medium tabular-nums text-ui-faint">{project.date}</span>
            </header>

            <div className="mb-3 flex flex-wrap gap-1.5">
                {project.techStack.split(',').map((tech, i) => (
                    <span key={i} className="rounded-md border border-ui-line bg-ui-surface px-2 py-0.5 text-[11px] text-ui-muted">
                        {tech.trim()}
                    </span>
                ))}
            </div>

            <ul className="ml-4 list-disc space-y-1.5 text-[15px] text-ui-muted marker:text-ui-lineStrong">
                {project.highlights.map((highlight, index) => (
                    <li key={index} className="pl-1">{highlight}</li>
                ))}
            </ul>
        </article>
    );
};
