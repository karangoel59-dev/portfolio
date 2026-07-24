import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
    experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <article className="mb-6 pb-6 border-b border-dotted border-retro-border last:border-0 last:mb-0 last:pb-0">
            <header className="mb-2">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                    <h3 className="text-[17px] font-bold text-retro-accent">{experience.title}</h3>
                    <span className="text-[12px] text-retro-muted whitespace-nowrap">
                        {experience.startDate} – {experience.endDate}
                    </span>
                </div>
                <div className="text-[13px] italic text-retro-muted">
                    {experience.company} · {experience.location}
                </div>
            </header>

            <ul className="pl-5 space-y-1.5 list-disc marker:text-retro-muted">
                {experience.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                ))}
            </ul>
        </article>
    );
};
