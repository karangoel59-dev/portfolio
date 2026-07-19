import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
    experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    // Generate a fake "ID" based on the company name for that classic 2ch feel
    const fakeId = btoa(experience.company).substring(0, 8);

    return (
        <div className="mb-5 pb-5 border-b border-dashed border-retro-border last:border-0 last:mb-0 last:pb-0">
            <div className="mb-2 flex flex-wrap items-baseline gap-x-2 text-[14px]">
                <span className="font-bold text-retro-link">{experience.title}</span>
                <span className="text-retro-border">@</span>
                <span className="font-bold">{experience.company}</span>
                
                <span className="text-retro-muted text-[12px] ml-auto sm:ml-2">
                    [{experience.startDate} - {experience.endDate}]
                </span>
                <span className="text-retro-muted text-[12px]">
                    ID:{fakeId}
                </span>
                <span className="text-retro-muted text-[12px]">
                    Loc:{experience.location.split(',')[0]}
                </span>
            </div>

            <div className="pl-2 sm:pl-4 space-y-1">
                {experience.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                        <span className="mr-1 text-retro-muted">・</span>
                        <span>{highlight}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
