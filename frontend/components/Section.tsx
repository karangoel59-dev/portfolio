import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => {
    return (
        <section className={`mb-6 ${className}`}>
            <div className="bg-retro-header border border-retro-border border-b-0 px-2 py-1 font-bold text-retro-accent text-[14px]">
                ▼ {title}
            </div>
            <div className="bg-retro-panel border border-retro-border p-3 sm:p-4 text-[14px]">
                {children}
            </div>
        </section>
    );
};
