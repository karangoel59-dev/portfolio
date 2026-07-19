import React from 'react';
import { ResumeData, GithubRepo } from '../types';

interface ClassicResumeProps {
    data: ResumeData;
    repos: GithubRepo[];
}

export const ClassicResume: React.FC<ClassicResumeProps> = ({ data, repos }) => {
    return (
        <div className="font-resume text-resume-primary bg-white w-full max-w-[8.5in] mx-auto text-[11pt] leading-snug">
            {/* Header */}
            <header className="text-center mb-6">
                <h1 className="text-3xl font-bold tracking-wide mb-1">{data.name}</h1>
                <h2 className="text-lg font-semibold text-resume-accent mb-2">{data.title}</h2>
                <div className="text-[10pt] text-resume-secondary flex flex-wrap justify-center items-center gap-x-2">
                    <span>{data.contact.location}</span>
                    <span>•</span>
                    <span>{data.contact.phone}</span>
                    <span>•</span>
                    <span>{data.contact.email}</span>
                </div>
                <div className="text-[10pt] text-resume-secondary flex flex-wrap justify-center items-center gap-x-2 mt-0.5">
                    <span>{data.contact.linkedin}</span>
                    <span>•</span>
                    <span>{data.contact.github}</span>
                    {data.contact.portfolio && (
                        <>
                            <span>•</span>
                            <span>{data.contact.portfolio}</span>
                        </>
                    )}
                </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-5 print-break-inside-avoid">
                <h3 className="text-[12pt] font-bold text-resume-primary uppercase tracking-wider border-l-[3px] border-resume-accent pl-2 mb-2">
                    Professional Summary
                </h3>
                <p className="text-justify">
                    {data.summary}
                </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-5 print-break-inside-avoid">
                <h3 className="text-[12pt] font-bold text-resume-primary uppercase tracking-wider border-l-[3px] border-resume-accent pl-2 mb-2">
                    Technical Skills
                </h3>
                <div className="grid grid-cols-[180px_1fr] gap-y-1.5">
                    {data.skills.map((skillGroup, index) => (
                        <React.Fragment key={index}>
                            <div className="font-bold">{skillGroup.category}:</div>
                            <div>{skillGroup.skills.join(', ')}</div>
                        </React.Fragment>
                    ))}
                </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-5">
                <h3 className="text-[12pt] font-bold text-resume-primary uppercase tracking-wider border-l-[3px] border-resume-accent pl-2 mb-3">
                    Professional Experience
                </h3>
                <div className="space-y-4">
                    {data.experience.map((exp, index) => (
                        <div key={index} className="print-break-inside-avoid">
                            <div className="flex justify-between items-baseline">
                                <h4 className="font-bold text-[11.5pt]">{exp.title}</h4>
                                <span className="font-bold text-[10.5pt]">{exp.startDate} – {exp.endDate}</span>
                            </div>
                            <div className="flex justify-between items-baseline mb-1.5 text-resume-secondary italic text-[10.5pt]">
                                <span>{exp.company}</span>
                                <span>{exp.location}</span>
                            </div>
                            <ul className="list-disc list-outside ml-4 space-y-1">
                                {exp.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex} className="pl-1">{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects (Using GitHub Repos) */}
            <section className="mb-5">
                <h3 className="text-[12pt] font-bold text-resume-primary uppercase tracking-wider border-l-[3px] border-resume-accent pl-2 mb-3">
                    Projects
                </h3>
                <div className="space-y-4">
                    {repos.map((repo, index) => (
                        <div key={index} className="print-break-inside-avoid">
                            <div className="flex justify-between items-baseline">
                                <h4 className="font-bold text-[11.5pt]">{repo.name}</h4>
                                <span className="font-bold text-[10.5pt]">{new Date(repo.updated_at).getFullYear()}</span>
                            </div>
                            <div className="mb-1.5 text-resume-secondary italic text-[10.5pt]">
                                Tech Stack: {repo.language || 'Various'} | <a href={repo.html_url} className="text-resume-accent no-underline">Project Link</a>
                            </div>
                            <ul className="list-disc list-outside ml-4 space-y-1">
                                <li className="pl-1">{repo.description || 'Open source repository hosted on GitHub.'}</li>
                                <li className="pl-1">Maintained codebase with {repo.stargazers_count} stars and {repo.forks_count} forks.</li>
                            </ul>
                        </div>
                    ))}
                    {repos.length === 0 && (
                        <div className="text-resume-secondary italic">No projects selected.</div>
                    )}
                </div>
            </section>

            {/* Education */}
            <section className="mb-5 print-break-inside-avoid">
                <h3 className="text-[12pt] font-bold text-resume-primary uppercase tracking-wider border-l-[3px] border-resume-accent pl-2 mb-3">
                    Education
                </h3>
                <div className="space-y-3">
                    {data.education.map((edu, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-baseline">
                                <h4 className="font-bold text-[11.5pt]">{edu.degree}</h4>
                                <span className="font-bold text-[10.5pt]">{edu.startDate} – {edu.endDate}</span>
                            </div>
                            <div className="flex justify-between items-baseline text-resume-secondary italic text-[10.5pt]">
                                <span>{edu.institution}</span>
                                <span>{edu.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Competencies */}
            <section className="print-break-inside-avoid">
                <h3 className="text-[12pt] font-bold text-resume-primary uppercase tracking-wider border-l-[3px] border-resume-accent pl-2 mb-2">
                    Core Competencies
                </h3>
                <div className="space-y-1">
                    <div><span className="font-bold">Soft Skills:</span> {data.coreCompetencies.softSkills.join(', ')}</div>
                    <div><span className="font-bold">Languages:</span> {data.coreCompetencies.languages.join(', ')}</div>
                </div>
            </section>
        </div>
    );
};
