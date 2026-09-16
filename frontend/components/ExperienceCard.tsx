import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
    experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <article className="mb-6 pb-6 border-b-2 border-dashed border-arcade-border last:border-0 last:mb-0 last:pb-0">
            <header className="mb-2">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                    <h3 className="text-[19px] font-bold text-arcade-accent">{experience.title}</h3>
                    <span className="text-[14px] text-arcade-bg bg-arcade-yellow px-1.5 whitespace-nowrap">
                        {experience.startDate} – {experience.endDate}
                    </span>
                </div>
                <div className="text-[15px] text-arcade-border2">
                    {experience.company} · {experience.location}
                </div>
            </header>

            <ul className="pl-5 space-y-1.5 list-none">
                {experience.highlights.map((highlight, index) => (
                    <li key={index} className="before:content-['▸_'] before:text-arcade-border2">{highlight}</li>
                ))}
            </ul>
        </article>
    );
};
