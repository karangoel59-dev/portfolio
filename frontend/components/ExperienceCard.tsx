import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
    experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <article className="relative mb-7 border-l border-ui-line pb-7 pl-6 last:mb-0 last:border-transparent last:pb-0">
            {/* Timeline marker */}
            <span
                className="absolute -left-[4px] top-[7px] h-[7px] w-[7px] rounded-full bg-ui-accent ring-4 ring-ui-surface"
                aria-hidden="true"
            />

            <header className="mb-3">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-[17px] font-semibold tracking-tight text-ui-ink">{experience.title}</h3>
                    <span className="whitespace-nowrap rounded-full border border-ui-line bg-ui-elevated px-2.5 py-0.5 text-[11px] font-medium tabular-nums text-ui-muted">
                        {experience.startDate} – {experience.endDate}
                    </span>
                </div>
                <div className="mt-0.5 text-sm text-ui-muted">
                    <span className="font-medium text-ui-accentSoft">{experience.company}</span>
                    <span className="mx-1.5 text-ui-faint">·</span>
                    <span>{experience.location}</span>
                </div>
            </header>

            <ul className="ml-4 list-disc space-y-1.5 text-[15px] text-ui-muted marker:text-ui-lineStrong">
                {experience.highlights.map((highlight, index) => (
                    <li key={index} className="pl-1">{highlight}</li>
                ))}
            </ul>
        </article>
    );
};
