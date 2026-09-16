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
            <h2 className="bg-arcade-header text-arcade-accent neon-text border-2 border-b-0 border-arcade-border px-3 py-2 font-pixel text-[12px] uppercase tracking-[0.15em]">
                ▌{title}
            </h2>
            <div className="bg-arcade-panel border-2 border-t-0 border-arcade-border p-4 sm:p-5 text-[18px] leading-relaxed">
                {children}
            </div>
        </section>
    );
};
