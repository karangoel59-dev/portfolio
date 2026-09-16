import React, { useState, useEffect } from 'react';
import { resumeData as initialResumeData } from './data';
import { Section } from './components/Section';
import { ExperienceCard } from './components/ExperienceCard';
import { GithubProjects } from './components/GithubProjects';
import { ClassicResume } from './components/ClassicResume';
import { EditModal } from './components/EditModal';
import { GithubRepo, ResumeData } from './types';

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
        setResumeState(newData);
        setSelectedRepoIds(newSelectedRepoIds);
        setIsEditModalOpen(false);
        // Small delay to allow React to re-render the DOM with new data before invoking print dialog
        setTimeout(() => {
            setShouldPrint(true);
        }, 150);
    };

    return (
        <>
            {/* ARCADE LAYOUT - Visible on screen, hidden on print */}
            <div className="max-w-5xl mx-auto print:hidden">
                {/* Site Banner */}
                <div className="bg-arcade-header text-arcade-headerText border-b-4 border-arcade-border -mx-2 sm:-mx-4 md:-mx-8 px-2 sm:px-4 md:px-8 py-3 mb-8 flex flex-wrap items-center justify-between gap-3">
                    <a href="#top" className="font-pixel neon-text text-[11px] sm:text-[13px] tracking-[0.15em] uppercase border-2 border-arcade-headerText px-3 py-2">
                        KG_ARCADE
                    </a>
                    <nav className="flex flex-wrap gap-x-4 gap-y-1 text-[16px] text-arcade-border2 uppercase tracking-wider">
                        <a href="#summary" className="hover:text-arcade-accent hover:underline">Summary</a>
                        <a href="#skills" className="hover:text-arcade-accent hover:underline">Skills</a>
                        <a href="#experience" className="hover:text-arcade-accent hover:underline">Experience</a>
                        <a href="#projects" className="hover:text-arcade-accent hover:underline">Projects</a>
                        <a href="#education" className="hover:text-arcade-accent hover:underline">Education</a>
                    </nav>
                </div>

                {/* Header / Hero Section */}
                <div id="top" className="mb-8 scroll-mt-20">
                    <div className="flex flex-wrap justify-between items-end gap-4 mb-3">
                        <div>
                            <h1 className="font-pixel neon-text text-[22px] sm:text-[32px] text-arcade-accent leading-relaxed">
                                {resumeState.name}
                            </h1>
                            <p className="text-[18px] sm:text-[20px] text-arcade-border2 before:content-['>_'] before:text-arcade-yellow before:mr-1">{resumeState.title}</p>
                        </div>

                        <button
                            onClick={() => setIsEditModalOpen(true)}
                            className="cursor-pointer bg-arcade-panel border-2 border-arcade-border2 text-arcade-border2 hover:bg-arcade-border2 hover:text-arcade-bg transition-all px-4 py-2 text-[13px] font-pixel uppercase tracking-wider shadow-[4px_4px_0_0_#ff2bd6] hover:shadow-[2px_2px_0_0_#ff2bd6] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                            title="Edit and Print/Save as PDF"
                        >
                            ▶ Print Resume
                        </button>
                    </div>
                    <div className="border-t-2 border-dashed border-arcade-border mt-3 pt-3">
                        <table className="w-full sm:w-auto border-collapse text-[18px]">
                            <tbody>
                                <tr>
                                    <td className="pr-4 py-1 text-arcade-yellow text-[13px] uppercase tracking-wider text-right whitespace-nowrap align-top">Location</td>
                                    <td className="py-1">{resumeState.contact.location}</td>
                                </tr>
                                <tr>
                                    <td className="pr-4 py-1 text-arcade-yellow text-[13px] uppercase tracking-wider text-right whitespace-nowrap align-top">Contact</td>
                                    <td className="py-1">
                                        <a href={`mailto:${resumeState.contact.email}`} className="text-arcade-link hover:text-arcade-linkHover hover:underline">{resumeState.contact.email}</a>
                                        <span className="mx-2 text-arcade-border">|</span>
                                        <a href={`tel:${resumeState.contact.phone.replace(/\s/g, '')}`} className="text-arcade-link hover:text-arcade-linkHover hover:underline">{resumeState.contact.phone}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pr-4 py-1 text-arcade-yellow text-[13px] uppercase tracking-wider text-right whitespace-nowrap align-top">Links</td>
                                    <td className="py-1">
                                        <a href={`https://${resumeState.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-arcade-link hover:text-arcade-linkHover hover:underline">LinkedIn</a>
                                        <span className="mx-2 text-arcade-border">|</span>
                                        <a href={`https://${resumeState.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-arcade-link hover:text-arcade-linkHover hover:underline">GitHub</a>
                                        {resumeState.contact.portfolio && (
                                            <>
                                                <span className="mx-2 text-arcade-border">|</span>
                                                <a href="#top" className="text-arcade-link hover:text-arcade-linkHover hover:underline">Portfolio</a>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <main>
                    {/* Professional Summary */}
                    <Section id="summary" title="Professional Summary">
                        <p className="whitespace-pre-wrap">
                            {resumeState.summary}
                        </p>
                    </Section>

                    {/* Technical Skills */}
                    <Section id="skills" title="Technical Skills">
                        <div className="space-y-3">
                            {resumeState.skills.map((skillGroup, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-x-3 gap-y-1.5">
                                    <div className="font-bold text-arcade-yellow text-[13px] uppercase tracking-wider sm:w-48 shrink-0">
                                        {skillGroup.category}
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {skillGroup.skills.map((skill, sIndex) => (
                                            <span key={sIndex} className="bg-arcade-tag border border-arcade-tagBorder text-arcade-border2 px-2 py-0.5 text-[13px]">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Section id="education" title="Education">
                            {resumeState.education.map((edu, index) => (
                                <div key={index} className="mb-4 last:mb-0">
                                    <div className="font-bold text-arcade-accent">{edu.degree}</div>
                                    <div className="text-arcade-border2 text-[14px]">{edu.institution}</div>
                                    <div className="text-[13px] text-arcade-muted">
                                        {edu.startDate} – {edu.endDate} · {edu.location}
                                    </div>
                                </div>
                            ))}
                        </Section>

                        <Section title="Core Competencies">
                            <div className="mb-4">
                                <div className="font-bold text-arcade-yellow mb-1.5 text-[13px] uppercase tracking-wider">Soft Skills</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {resumeState.coreCompetencies.softSkills.map((skill, i) => (
                                        <span key={i} className="bg-arcade-tag border border-arcade-tagBorder text-arcade-border2 px-2 py-0.5 text-[13px]">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="font-bold text-arcade-yellow mb-1.5 text-[13px] uppercase tracking-wider">Languages</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {resumeState.coreCompetencies.languages.map((lang, i) => (
                                        <span key={i} className="bg-arcade-tag border border-arcade-tagBorder text-arcade-border2 px-2 py-0.5 text-[13px]">{lang}</span>
                                    ))}
                                </div>
                            </div>
                        </Section>
                    </div>
                </main>

                <footer className="mt-10 pt-4 border-t-2 border-dashed border-arcade-border text-center text-arcade-muted text-[14px]">
                    <p>© {new Date().getFullYear()} {resumeState.name} · INSERT COIN TO CONTINUE</p>
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
