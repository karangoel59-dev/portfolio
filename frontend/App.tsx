import React, { useState, useEffect } from 'react';
import { resumeData as initialResumeData } from './data';
import { Section } from './components/Section';
import { ExperienceCard } from './components/ExperienceCard';
import { GithubProjects } from './components/GithubProjects';
import { ClassicResume } from './components/ClassicResume';
import { EditModal } from './components/EditModal';
import { GithubRepo, ResumeData } from './types';

const NAV_LINKS = [
    { href: '#summary', label: 'Summary' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
];

const chipClass =
    'rounded-md border border-ui-line bg-ui-elevated px-2.5 py-1 text-[12px] text-ui-muted transition-colors hover:border-ui-lineStrong hover:text-ui-ink';

/**
 * The edit modal keeps raw textarea/comma input so blank lines stay typeable while editing.
 * Strip them here, on save, so empty bullets and empty skill chips never reach the PDF as
 * blank lines that still consume list spacing.
 */
const normalizeResumeData = (data: ResumeData): ResumeData => ({
    ...data,
    summary: data.summary.trim(),
    skills: data.skills.map(group => ({
        ...group,
        skills: group.skills.map(skill => skill.trim()).filter(Boolean),
    })),
    experience: data.experience.map(exp => ({
        ...exp,
        highlights: exp.highlights.map(highlight => highlight.trim()).filter(Boolean),
    })),
});

const App: React.FC = () => {
    const [resumeState, setResumeState] = useState<ResumeData>(initialResumeData);
    const [repos, setRepos] = useState<GithubRepo[]>([]);
    const [selectedRepoIds, setSelectedRepoIds] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    // Modal and Print state
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [shouldPrint, setShouldPrint] = useState(false);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const urlParts = resumeState.contact.github.split('/');
                const username = urlParts[urlParts.length - 1] || urlParts[urlParts.length - 2];
                
                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
                
                if (!response.ok) {
                    throw new Error(`GitHub API responded with status: ${response.status}`);
                }
                
                const data = await response.json();
                setRepos(data);
                // By default, select the first 3 repos for the printed resume
                setSelectedRepoIds(data.slice(0, 3).map((r: GithubRepo) => r.id));
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [resumeState.contact.github]);

    // Handle the actual print action after state has updated and modal has closed
    useEffect(() => {
        if (shouldPrint) {
            window.print();
            setShouldPrint(false);
        }
    }, [shouldPrint]);

    const handleSaveAndPrint = (newData: ResumeData, newSelectedRepoIds: number[]) => {
        setResumeState(normalizeResumeData(newData));
        setSelectedRepoIds(newSelectedRepoIds);
        setIsEditModalOpen(false);
        // Small delay to allow React to re-render the DOM with new data before invoking print dialog
        setTimeout(() => {
            setShouldPrint(true);
        }, 150);
    };

    const initials = resumeState.name
        .split(' ')
        .map((part: string) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <>
            {/* PORTFOLIO LAYOUT - Visible on screen, hidden on print */}
            <div className="mx-auto max-w-4xl print:hidden">
                {/* Site Navigation */}
                <header className="sticky top-0 z-30 -mx-4 mb-10 border-b border-ui-line bg-ui-bg/80 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6 md:-mx-8 md:px-8">
                    <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3">
                        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight text-ui-ink">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ui-accent text-[13px] font-bold text-white">
                                {initials}
                            </span>
                            <span className="text-sm">{resumeState.name}</span>
                        </a>
                        <nav className="flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-ui-muted">
                            {NAV_LINKS.map(link => (
                                <a key={link.href} href={link.href} className="transition-colors hover:text-ui-accentSoft">
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </header>

                {/* Hero */}
                <div id="top" className="mb-12 scroll-mt-24 animate-fade-up">
                    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-ui-ink sm:text-4xl">
                                {resumeState.name}
                            </h1>
                            <p className="mt-1.5 text-base text-ui-accentSoft sm:text-lg">{resumeState.title}</p>
                        </div>

                        <button
                            onClick={() => setIsEditModalOpen(true)}
                            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-ui-accent px-4 py-2.5 text-sm font-medium text-white shadow-card transition-colors hover:bg-ui-accentSoft"
                            title="Edit and Print/Save as PDF"
                        >
                            <span aria-hidden="true">↓</span> Print Resume
                        </button>
                    </div>

                    <dl className="flex flex-col gap-3 border-t border-ui-line pt-5 text-[15px] sm:flex-row sm:flex-wrap sm:gap-x-8">
                        <div className="flex items-baseline gap-2">
                            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ui-faint">Location</dt>
                            <dd className="text-ui-muted">{resumeState.contact.location}</dd>
                        </div>
                        <div className="flex flex-wrap items-baseline gap-2">
                            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ui-faint">Contact</dt>
                            <dd className="flex flex-wrap items-center gap-x-2 text-ui-muted">
                                <a href={`mailto:${resumeState.contact.email}`} className="text-ui-accentSoft hover:text-ui-teal">
                                    {resumeState.contact.email}
                                </a>
                                <span className="text-ui-lineStrong">/</span>
                                <a href={`tel:${resumeState.contact.phone.replace(/\s/g, '')}`} className="text-ui-accentSoft hover:text-ui-teal">
                                    {resumeState.contact.phone}
                                </a>
                            </dd>
                        </div>
                        <div className="flex flex-wrap items-baseline gap-2">
                            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ui-faint">Links</dt>
                            <dd className="flex flex-wrap items-center gap-x-2 text-ui-muted">
                                <a href={`https://${resumeState.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-ui-accentSoft hover:text-ui-teal">
                                    LinkedIn
                                </a>
                                <span className="text-ui-lineStrong">/</span>
                                <a href={`https://${resumeState.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-ui-accentSoft hover:text-ui-teal">
                                    GitHub
                                </a>
                                {resumeState.contact.portfolio && (
                                    <>
                                        <span className="text-ui-lineStrong">/</span>
                                        <a href="#top" className="text-ui-accentSoft hover:text-ui-teal">Portfolio</a>
                                    </>
                                )}
                            </dd>
                        </div>
                    </dl>
                </div>

                <main>
                    {/* Professional Summary */}
                    <Section id="summary" title="Professional Summary">
                        <p className="whitespace-pre-wrap text-ui-muted">
                            {resumeState.summary}
                        </p>
                    </Section>

                    {/* Technical Skills */}
                    <Section id="skills" title="Technical Skills">
                        <div className="space-y-5">
                            {resumeState.skills.map((skillGroup, index) => (
                                <div key={index} className="flex flex-col gap-x-4 gap-y-2 sm:flex-row sm:items-start">
                                    <div className="shrink-0 pt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ui-faint sm:w-44">
                                        {skillGroup.category}
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {skillGroup.skills.map((skill, sIndex) => (
                                            <span key={sIndex} className={chipClass}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* Professional Experience */}
                    <Section id="experience" title="Professional Experience">
                        {resumeState.experience.map((exp, index) => (
                            <ExperienceCard key={index} experience={exp} />
                        ))}
                    </Section>

                    {/* Projects (Dynamic from GitHub) */}
                    <Section id="projects" title="GitHub Projects">
                        <GithubProjects repos={repos} loading={loading} error={error} />
                    </Section>

                    {/* Education & Competencies */}
                    <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
                        <Section id="education" title="Education">
                            {resumeState.education.map((edu, index) => (
                                <div key={index} className="mb-5 last:mb-0">
                                    <div className="font-semibold tracking-tight text-ui-ink">{edu.degree}</div>
                                    <div className="mt-0.5 text-sm text-ui-accentSoft">{edu.institution}</div>
                                    <div className="mt-0.5 text-[13px] tabular-nums text-ui-faint">
                                        {edu.startDate} – {edu.endDate} · {edu.location}
                                    </div>
                                </div>
                            ))}
                        </Section>

                        <Section title="Core Competencies">
                            <div className="mb-5">
                                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ui-faint">Soft Skills</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {resumeState.coreCompetencies.softSkills.map((skill, i) => (
                                        <span key={i} className={chipClass}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ui-faint">Languages</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {resumeState.coreCompetencies.languages.map((lang, i) => (
                                        <span key={i} className={chipClass}>{lang}</span>
                                    ))}
                                </div>
                            </div>
                        </Section>
                    </div>
                </main>

                <footer className="mt-4 border-t border-ui-line pt-6 text-center text-[13px] text-ui-faint">
                    <p>© {new Date().getFullYear()} {resumeState.name} · Built with React and Tailwind CSS</p>
                </footer>
            </div>

            {/* CLASSIC RESUME LAYOUT - Hidden on screen, visible on print */}
            <div className="hidden print:block">
                <ClassicResume 
                    data={resumeState} 
                    repos={repos.filter(r => selectedRepoIds.includes(r.id))} 
                />
            </div>

            {/* Edit Modal */}
            <EditModal 
                isOpen={isEditModalOpen} 
                onClose={() => setIsEditModalOpen(false)} 
                data={resumeState}
                repos={repos}
                initialSelectedRepoIds={selectedRepoIds}
                onSaveAndPrint={handleSaveAndPrint}
            />
        </>
    );
};

export default App;
