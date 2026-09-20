import React, { useState, useEffect } from 'react';
import { ResumeData, GithubRepo } from '../types';

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: ResumeData;
    repos: GithubRepo[];
    initialSelectedRepoIds: number[];
    onSaveAndPrint: (newData: ResumeData, selectedRepoIds: number[]) => void;
}

export const EditModal: React.FC<EditModalProps> = ({ 
    isOpen, 
    onClose, 
    data, 
    repos,
    initialSelectedRepoIds,
    onSaveAndPrint 
}) => {
    const [formData, setFormData] = useState<ResumeData>(data);
    const [localSelectedRepoIds, setLocalSelectedRepoIds] = useState<number[]>(initialSelectedRepoIds);

    // Reset form data when modal opens with new data
    useEffect(() => {
        if (isOpen) {
            setFormData(data);
            setLocalSelectedRepoIds(initialSelectedRepoIds);
        }
    }, [data, initialSelectedRepoIds, isOpen]);

    // Close on Escape
    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleExperienceChange = (index: number, field: string, value: string) => {
        const newExp = [...formData.experience];
        newExp[index] = { ...newExp[index], [field]: value };
        setFormData({ ...formData, experience: newExp });
    };

    const handleExperienceHighlightsChange = (index: number, value: string) => {
        const newExp = [...formData.experience];
        newExp[index] = { ...newExp[index], highlights: value.split('\n') };
        setFormData({ ...formData, experience: newExp });
    };

    const handleSkillChange = (index: number, value: string) => {
        const newSkills = [...formData.skills];
        newSkills[index] = { ...newSkills[index], skills: value.split(',').map(s => s.trim()) };
        setFormData({ ...formData, skills: newSkills });
    };

    const handleRepoToggle = (id: number) => {
        setLocalSelectedRepoIds(prev => 
            prev.includes(id) ? prev.filter(repoId => repoId !== id) : [...prev, id]
        );
    };

    const inputClass =
        'w-full rounded-lg border border-ui-line bg-ui-bg px-3 py-2 text-[14px] text-ui-ink placeholder:text-ui-faint transition-colors focus:border-ui-accent focus:outline-none focus:ring-2 focus:ring-ui-accent/25';
    const labelClass = 'mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ui-faint';
    const legendClass = 'mb-4 border-b border-ui-line pb-2 text-[13px] font-semibold tracking-tight text-ui-ink';

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm print:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Edit resume"
            onClick={onClose}
        >
            <div
                className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-ui-lineStrong bg-ui-surface shadow-pop"
                onClick={e => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="flex items-center justify-between gap-4 border-b border-ui-line px-5 py-4">
                    <div>
                        <h2 className="text-[15px] font-semibold tracking-tight text-ui-ink">Tailor resume for this application</h2>
                        <p className="mt-0.5 text-[13px] text-ui-faint">Adjust the content, then export to PDF.</p>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="rounded-lg border border-ui-line px-2.5 py-1 text-ui-muted transition-colors hover:border-ui-lineStrong hover:text-ui-ink"
                    >
                        ✕
                    </button>
                </div>

                {/* Modal Body */}
                <div className="flex-1 space-y-8 overflow-y-auto p-5 text-[14px] sm:p-6">
                    <div className="rounded-lg border border-ui-amber/25 bg-ui-amber/5 px-4 py-3 text-[13px] text-ui-amber">
                        Changes here are temporary — they only affect the printed PDF. Refreshing restores the original data.
                    </div>

                    {/* Basic Info */}
                    <section>
                        <h3 className={legendClass}>Basic information</h3>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className={labelClass}>Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <label className={labelClass}>Target job title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                                    className={inputClass}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className={labelClass}>Professional summary</label>
                            <textarea
                                value={formData.summary}
                                onChange={(e) => setFormData({...formData, summary: e.target.value})}
                                className={`${inputClass} h-32 resize-y leading-relaxed`}
                            />
                        </div>
                    </section>

                    {/* Skills */}
                    <section>
                        <h3 className={legendClass}>Technical skills <span className="font-normal text-ui-faint">(comma separated)</span></h3>
                        <div className="space-y-3">
                            {formData.skills.map((skillGroup, index) => (
                                <div key={index} className="flex flex-col gap-2 sm:flex-row sm:items-center">
                                    <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ui-faint sm:w-44 sm:shrink-0">
                                        {skillGroup.category}
                                    </label>
                                    <input
                                        type="text"
                                        value={skillGroup.skills.join(', ')}
                                        onChange={(e) => handleSkillChange(index, e.target.value)}
                                        className={`flex-1 ${inputClass}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section>
                        <h3 className={legendClass}>Professional experience</h3>
                        <div className="space-y-4">
                            {formData.experience.map((exp, index) => (
                                <div key={index} className="rounded-xl border border-ui-line bg-ui-elevated p-4">
                                    <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        <div>
                                            <label className={labelClass}>Job title</label>
                                            <input
                                                type="text"
                                                value={exp.title}
                                                onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Company</label>
                                            <input
                                                type="text"
                                                value={exp.company}
                                                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className={labelClass}>Highlights <span className="normal-case tracking-normal text-ui-faint">(one per line)</span></label>
                                        <textarea
                                            value={exp.highlights.join('\n')}
                                            onChange={(e) => handleExperienceHighlightsChange(index, e.target.value)}
                                            className={`${inputClass} h-32 resize-y whitespace-pre leading-relaxed`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects Selection */}
                    <section>
                        <h3 className={legendClass}>Projects to include</h3>
                        <div className="max-h-56 space-y-1 overflow-y-auto rounded-xl border border-ui-line bg-ui-elevated p-2">
                            {repos.map(repo => (
                                <label
                                    key={repo.id}
                                    className="flex cursor-pointer items-start gap-3 rounded-lg p-2 transition-colors hover:bg-ui-hover"
                                >
                                    <input
                                        type="checkbox"
                                        checked={localSelectedRepoIds.includes(repo.id)}
                                        onChange={() => handleRepoToggle(repo.id)}
                                        className="mt-1 h-4 w-4 shrink-0 accent-ui-accent"
                                    />
                                    <div>
                                        <div className="text-[14px] font-medium text-ui-ink">{repo.name}</div>
                                        <div className="text-[12px] text-ui-faint">{repo.description || 'No description'}</div>
                                    </div>
                                </label>
                            ))}
                            {repos.length === 0 && <div className="p-2 text-[13px] text-ui-faint">No projects available.</div>}
                        </div>
                    </section>
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end gap-3 border-t border-ui-line bg-ui-bg/40 px-5 py-4">
                    <button
                        onClick={onClose}
                        className="rounded-lg border border-ui-line px-4 py-2 text-sm font-medium text-ui-muted transition-colors hover:border-ui-lineStrong hover:text-ui-ink"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onSaveAndPrint(formData, localSelectedRepoIds)}
                        className="rounded-lg bg-ui-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-ui-accentSoft"
                    >
                        Save & print
                    </button>
                </div>
            </div>
        </div>
    );
};
