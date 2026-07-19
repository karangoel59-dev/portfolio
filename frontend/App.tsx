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
            {/* RETRO LAYOUT - Visible on screen, hidden on print */}
            <div className="max-w-5xl mx-auto print:hidden">
                {/* Header / Hero Section */}
                <div className="mb-6">
                    <div className="flex justify-between items-end mb-2">
                        <h1 className="text-[20px] sm:text-[24px] font-bold text-retro-accent border-b-2 border-retro-accent pb-1 inline-block">
                            ■ {resumeState.name} - {resumeState.title}
                        </h1>
                        
                        <button 
                            onClick={() => setIsEditModalOpen(true)} 
                            className="text-retro-link hover:text-retro-linkHover cursor-pointer bg-transparent border-none p-0 underline text-[14px] font-retro"
                            title="Edit and Print/Save as PDF"
                        >
                            [Download / Print Resume]
                        </button>
                    </div>
                    
                    <div className="bg-retro-panel border border-retro-border p-3 text-[14px] mt-2">
                        <table className="w-full sm:w-auto border-collapse">
                            <tbody>
                                <tr>
                                    <td className="pr-4 py-1 text-retro-muted text-right whitespace-nowrap">Location:</td>
                                    <td className="py-1">{resumeState.contact.location}</td>
                                </tr>
                                <tr>
                                    <td className="pr-4 py-1 text-retro-muted text-right whitespace-nowrap">Contact:</td>
                                    <td className="py-1">
                                        <a href={`mailto:${resumeState.contact.email}`} className="text-retro-link hover:text-retro-linkHover">[{resumeState.contact.email}]</a>
                                        <span className="mx-2 text-retro-border">|</span>
                                        <a href={`tel:${resumeState.contact.phone.replace(/\s/g, '')}`} className="text-retro-link hover:text-retro-linkHover">[{resumeState.contact.phone}]</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pr-4 py-1 text-retro-muted text-right whitespace-nowrap">Links:</td>
                                    <td className="py-1">
                                        <a href={`https://${resumeState.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-retro-link hover:text-retro-linkHover">[LinkedIn]</a>
                                        <span className="mx-2 text-retro-border">|</span>
                                        <a href={`https://${resumeState.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-retro-link hover:text-retro-linkHover">[GitHub]</a>
                                        {resumeState.contact.portfolio && (
                                            <>
                                                <span className="mx-2 text-retro-border">|</span>
                                                <a href="#" className="text-retro-link hover:text-retro-linkHover">[Portfolio]</a>
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
                    <Section title="Professional Summary">
                        <p className="whitespace-pre-wrap">
                            {resumeState.summary}
                        </p>
                    </Section>

                    {/* Technical Skills */}
                    <Section title="Technical Skills">
                        <table className="w-full border-collapse">
                            <tbody>
                                {resumeState.skills.map((skillGroup, index) => (
                                    <tr key={index} className="border-b border-dashed border-retro-border last:border-0">
                                        <td className="py-2 pr-4 font-bold text-retro-muted whitespace-nowrap align-top w-[1%]">
                                            [{skillGroup.category}]
                                        </td>
                                        <td className="py-2 align-top">
                                            {skillGroup.skills.join(' / ')}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Section>

                    {/* Professional Experience */}
                    <Section title="Professional Experience">
                        {resumeState.experience.map((exp, index) => (
                            <ExperienceCard key={index} experience={exp} />
                        ))}
                    </Section>

                    {/* Projects (Dynamic from GitHub) */}
                    <Section title="GitHub Projects">
                        <GithubProjects repos={repos} loading={loading} error={error} />
                    </Section>

                    {/* Education & Competencies */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Section title="Education">
                            {resumeState.education.map((edu, index) => (
                                <div key={index} className="mb-4 last:mb-0">
                                    <div className="font-bold text-retro-link">{edu.degree}</div>
                                    <div>{edu.institution}</div>
                                    <div className="text-[12px] text-retro-muted">
                                        [{edu.startDate} - {edu.endDate}] Loc:{edu.location.split(',')[0]}
                                    </div>
                                </div>
                            ))}
                        </Section>

                        <Section title="Core Competencies">
                            <div className="mb-4">
                                <div className="font-bold text-retro-muted mb-1">[Soft Skills]</div>
                                <div>{resumeState.coreCompetencies.softSkills.join(' / ')}</div>
                            </div>
                            <div>
                                <div className="font-bold text-retro-muted mb-1">[Languages]</div>
                                <div>{resumeState.coreCompetencies.languages.join(' / ')}</div>
                            </div>
                        </Section>
                    </div>
                </main>
                
                <footer className="mt-8 pt-4 border-t border-retro-border text-center text-retro-muted text-[12px]">
                    <p>Copyright © {new Date().getFullYear()} {resumeState.name}. All rights reserved.</p>
                    <p className="mt-1">Generated dynamically. Best viewed in Netscape Navigator 4.0 or IE 5.5.</p>
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
