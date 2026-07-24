import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <article className="mb-6 pb-6 border-b border-dotted border-retro-border last:border-0 last:mb-0 last:pb-0">
            <header className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                <h3 className="text-[17px] font-bold text-retro-accent">
                    {project.title}
                    {project.link && project.link !== '#' && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-[12px] font-normal not-italic text-retro-link hover:text-retro-linkHover hover:underline align-middle">
                            [Link]
                        </a>
                    )}
                </h3>
                <span className="text-[12px] text-retro-muted whitespace-nowrap">{project.date}</span>
            </header>

            <div className="mb-2 flex flex-wrap gap-1.5">
                {project.techStack.split(',').map((tech, i) => (
                    <span key={i} className="bg-retro-tag border border-retro-tagBorder px-2 py-0.5 text-[11px] text-retro-muted">
                        {tech.trim()}
                    </span>
                ))}
            </div>

            <ul className="pl-5 space-y-1.5 list-disc marker:text-retro-muted">
                {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                ))}
            </ul>
        </article>
    );
};
