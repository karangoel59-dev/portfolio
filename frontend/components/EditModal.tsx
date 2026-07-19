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

    return (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 print:hidden">
            <div className="bg-retro-bg border-2 border-retro-border w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl">
                {/* Modal Header */}
                <div className="bg-retro-header border-b border-retro-border px-4 py-2 font-bold flex justify-between items-center text-[14px]">
                    <span>[Edit Resume for Application]</span>
                    <button onClick={onClose} className="text-retro-text hover:text-retro-linkHover font-bold px-2">✕</button>
                </div>

                {/* Modal Body */}
                <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 text-retro-text text-[14px]">
                    <div className="bg-yellow-50 border border-yellow-400 p-3 text-yellow-800 text-[12px] mb-4">
                        Note: Changes made here are temporary and will only affect the printed/downloaded PDF. Refreshing the page will restore the original data.
                    </div>

                    {/* Basic Info */}
                    <section>
                        <h3 className="font-bold text-retro-accent border-b border-retro-border mb-3 pb-1">Basic Information</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-retro-muted mb-1">Name</label>
                                <input 
                                    type="text" 
                                    value={formData.name} 
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full border border-retro-border p-1.5 font-mono text-[13px]"
                                />
                            </div>
                            <div>
                                <label className="block text-retro-muted mb-1">Target Job Title</label>
                                <input 
                                    type="text" 
                                    value={formData.title} 
                                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                                    className="w-full border border-retro-border p-1.5 font-mono text-[13px]"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-retro-muted mb-1">Professional Summary</label>
                            <textarea 
                                value={formData.summary} 
                                onChange={(e) => setFormData({...formData, summary: e.target.value})}
                                className="w-full border border-retro-border p-1.5 font-mono text-[13px] h-32"
                            />
                        </div>
                    </section>

                    {/* Skills */}
                    <section>
                        <h3 className="font-bold text-retro-accent border-b border-retro-border mb-3 pb-1">Technical Skills (Comma separated)</h3>
                        <div className="space-y-3">
                            {formData.skills.map((skillGroup, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <label className="sm:w-48 font-bold text-[12px]">{skillGroup.category}</label>
                                    <input 
                                        type="text" 
                                        value={skillGroup.skills.join(', ')} 
                                        onChange={(e) => handleSkillChange(index, e.target.value)}
                                        className="flex-1 border border-retro-border p-1.5 font-mono text-[13px]"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section>
                        <h3 className="font-bold text-retro-accent border-b border-retro-border mb-3 pb-1">Professional Experience</h3>
                        <div className="space-y-6">
                            {formData.experience.map((exp, index) => (
                                <div key={index} className="bg-white border border-retro-border p-3">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                                        <div>
                                            <label className="block text-retro-muted text-[12px] mb-1">Job Title</label>
                                            <input 
                                                type="text" 
                                                value={exp.title} 
                                                onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                                                className="w-full border border-retro-border p-1 font-mono text-[13px]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-retro-muted text-[12px] mb-1">Company</label>
                                            <input 
                                                type="text" 
                                                value={exp.company} 
                                                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                                                className="w-full border border-retro-border p-1 font-mono text-[13px]"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-retro-muted text-[12px] mb-1">Highlights (One per line)</label>
                                        <textarea 
                                            value={exp.highlights.join('\n')} 
                                            onChange={(e) => handleExperienceHighlightsChange(index, e.target.value)}
                                            className="w-full border border-retro-border p-1.5 font-mono text-[13px] h-32 whitespace-pre"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects Selection */}
                    <section>
                        <h3 className="font-bold text-retro-accent border-b border-retro-border mb-3 pb-1">Projects to Include</h3>
                        <div className="space-y-2 max-h-48 overflow-y-auto border border-retro-border p-2 bg-white">
                            {repos.map(repo => (
                                <label key={repo.id} className="flex items-start gap-2 cursor-pointer hover:bg-slate-50 p-1">
                                    <input 
                                        type="checkbox" 
                                        checked={localSelectedRepoIds.includes(repo.id)}
                                        onChange={() => handleRepoToggle(repo.id)}
                                        className="mt-1"
                                    />
                                    <div>
                                        <div className="font-bold text-[13px]">{repo.name}</div>
                                        <div className="text-[11px] text-retro-muted">{repo.description || 'No description'}</div>
                                    </div>
                                </label>
                            ))}
                            {repos.length === 0 && <div className="text-retro-muted text-[12px] p-2">No projects available.</div>}
                        </div>
                    </section>
                </div>

                {/* Modal Footer */}
                <div className="border-t border-retro-border p-4 bg-retro-panel flex justify-end gap-3">
                    <button 
                        onClick={onClose} 
                        className="px-4 py-1.5 border border-retro-border hover:bg-gray-100 text-[14px]"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={() => onSaveAndPrint(formData, localSelectedRepoIds)} 
                        className="px-6 py-1.5 bg-retro-accent text-white font-bold hover:bg-red-700 text-[14px]"
                    >
                        Save & Print PDF
                    </button>
                </div>
            </div>
        </div>
    );
};
