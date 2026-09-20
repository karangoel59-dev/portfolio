import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = '', id }) => {
    return (
        <section id={id} className={`mb-10 scroll-mt-24 ${className}`}>
            <h2 className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ui-faint">
                <span className="h-px w-6 shrink-0 bg-ui-lineStrong" aria-hidden="true" />
                {title}
            </h2>
            <div className="rounded-xl border border-ui-line bg-ui-surface p-5 shadow-card sm:p-6">
                {children}
            </div>
        </section>
    );
};
