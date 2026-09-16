import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <article className="mb-6 pb-6 border-b-2 border-dashed border-arcade-border last:border-0 last:mb-0 last:pb-0">
            <header className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                <h3 className="text-[19px] font-bold text-arcade-accent">
                    {project.title}
                    {project.link && project.link !== '#' && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-[13px] font-normal text-arcade-link hover:text-arcade-linkHover hover:underline align-middle">
                            [Link]
                        </a>
                    )}
                </h3>
                <span className="text-[14px] text-arcade-bg bg-arcade-yellow px-1.5 whitespace-nowrap">{project.date}</span>
            </header>

            <div className="mb-2 flex flex-wrap gap-1.5">
                {project.techStack.split(',').map((tech, i) => (
                    <span key={i} className="bg-arcade-tag border border-arcade-tagBorder text-arcade-border2 px-2 py-0.5 text-[12px]">
                        {tech.trim()}
                    </span>
                ))}
            </div>

            <ul className="pl-5 space-y-1.5 list-none">
                {project.highlights.map((highlight, index) => (
                    <li key={index} className="before:content-['▸_'] before:text-arcade-border2">{highlight}</li>
                ))}
            </ul>
        </article>
    );
};
