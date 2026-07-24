import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = '', id }) => {
    return (
        <section id={id} className={`mb-8 scroll-mt-20 ${className}`}>
            <h2 className="bg-retro-header text-retro-headerText px-3 py-2 font-bold text-[13px] uppercase tracking-[0.15em]">
                {title}
            </h2>
            <div className="bg-retro-panel border border-t-0 border-retro-border p-4 sm:p-5 text-[15px] leading-relaxed">
                {children}
            </div>
        </section>
    );
};
