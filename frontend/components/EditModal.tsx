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

    const inputClass = "w-full bg-arcade-bg border-2 border-arcade-border2 text-arcade-text p-1.5 font-mono text-[13px] focus:outline-none focus:border-arcade-accent";

    return (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 print:hidden">
            <div className="bg-arcade-panel border-2 border-arcade-border w-full max-w-4xl max-h-[90vh] flex flex-col shadow-[0_0_24px_#ff2bd6]">
                {/* Modal Header */}
                <div className="bg-arcade-header text-arcade-headerText border-b-2 border-arcade-border px-4 py-2 font-pixel flex justify-between items-center text-[12px] uppercase tracking-wider">
                    <span className="neon-text">Edit Resume for Application</span>
                    <button onClick={onClose} className="text-arcade-linkHover hover:text-arcade-yellow font-bold px-2 normal-case tracking-normal text-[16px]">✕</button>
                </div>

                {/* Modal Body */}
                <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 text-arcade-text text-[14px]">
                    <div className="bg-arcade-bg border-2 border-arcade-yellow p-3 text-arcade-yellow text-[13px] mb-4">
                        {'>'} Note: Changes made here are temporary and will only affect the printed/downloaded PDF. Refreshing the page will restore the original data.
                    </div>

                    {/* Basic Info */}
                    <section>
                        <h3 className="font-pixel text-[12px] text-arcade-accent border-b-2 border-arcade-border mb-3 pb-2">Basic Information</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-arcade-border2 mb-1">Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <label className="block text-arcade-border2 mb-1">Target Job Title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                                    className={inputClass}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-arcade-border2 mb-1">Professional Summary</label>
                            <textarea
                                value={formData.summary}
                                onChange={(e) => setFormData({...formData, summary: e.target.value})}
                                className={`${inputClass} h-32`}
                            />
                        </div>
                    </section>

                    {/* Skills */}
                    <section>
                        <h3 className="font-pixel text-[12px] text-arcade-accent border-b-2 border-arcade-border mb-3 pb-2">Technical Skills (Comma separated)</h3>
                        <div className="space-y-3">
                            {formData.skills.map((skillGroup, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <label className="sm:w-48 font-bold text-[12px] text-arcade-yellow">{skillGroup.category}</label>
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
                        <h3 className="font-pixel text-[12px] text-arcade-accent border-b-2 border-arcade-border mb-3 pb-2">Professional Experience</h3>
                        <div className="space-y-6">
                            {formData.experience.map((exp, index) => (
                                <div key={index} className="bg-arcade-bg border-2 border-arcade-border p-3">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                                        <div>
                                            <label className="block text-arcade-border2 text-[12px] mb-1">Job Title</label>
                                            <input
                                                type="text"
                                                value={exp.title}
                                                onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-arcade-border2 text-[12px] mb-1">Company</label>
                                            <input
                                                type="text"
                                                value={exp.company}
                                                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-arcade-border2 text-[12px] mb-1">Highlights (One per line)</label>
                                        <textarea
                                            value={exp.highlights.join('\n')}
                                            onChange={(e) => handleExperienceHighlightsChange(index, e.target.value)}
                                            className={`${inputClass} h-32 whitespace-pre`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects Selection */}
                    <section>
                        <h3 className="font-pixel text-[12px] text-arcade-accent border-b-2 border-arcade-border mb-3 pb-2">Projects to Include</h3>
                        <div className="space-y-2 max-h-48 overflow-y-auto border-2 border-arcade-border p-2 bg-arcade-bg">
                            {repos.map(repo => (
                                <label key={repo.id} className="flex items-start gap-2 cursor-pointer hover:bg-arcade-tag p-1">
                                    <input
                                        type="checkbox"
                                        checked={localSelectedRepoIds.includes(repo.id)}
                                        onChange={() => handleRepoToggle(repo.id)}
                                        className="mt-1 accent-arcade-accent"
                                    />
                                    <div>
                                        <div className="font-bold text-[13px] text-arcade-text">{repo.name}</div>
                                        <div className="text-[11px] text-arcade-muted">{repo.description || 'No description'}</div>
                                    </div>
                                </label>
                            ))}
                            {repos.length === 0 && <div className="text-arcade-muted text-[12px] p-2">No projects available.</div>}
                        </div>
                    </section>
                </div>

                {/* Modal Footer */}
                <div className="border-t-2 border-arcade-border p-4 bg-arcade-header flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-1.5 border-2 border-arcade-border2 text-arcade-border2 hover:bg-arcade-border2 hover:text-arcade-bg transition-all text-[13px] font-pixel uppercase"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onSaveAndPrint(formData, localSelectedRepoIds)}
                        className="px-6 py-1.5 bg-arcade-accent text-arcade-bg font-bold hover:bg-arcade-yellow transition-colors text-[13px] font-pixel uppercase shadow-[3px_3px_0_0_#00fff9]"
                    >
                        Save & Print
                    </button>
                </div>
            </div>
        </div>
    );
};
