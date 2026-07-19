import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="mb-5 pb-5 border-b border-dashed border-retro-border last:border-0 last:mb-0 last:pb-0">
            <div className="mb-2 flex flex-wrap items-baseline gap-x-2 text-[14px]">
                <span className="font-bold text-retro-accent">⇒ {project.title}</span>
                <span className="text-retro-muted text-[12px]">
                    [{project.date}]
                </span>
                {project.link && project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-retro-link hover:text-retro-linkHover text-[12px]">
                        [Link]
                    </a>
                )}
            </div>

            <div className="pl-2 sm:pl-4 mb-3">
                <div className="inline-block bg-[#f8f8f8] border border-[#cccccc] px-2 py-0.5 text-[12px] font-mono mb-2">
                    Tech: {project.techStack}
                </div>
                
                <div className="space-y-1">
                    {project.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start">
                            <span className="mr-1 text-retro-muted">・</span>
                            <span>{highlight}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
