import React from 'react';
import { GithubRepo } from '../types';

interface GithubProjectsProps {
    repos: GithubRepo[];
    loading: boolean;
    error: string | null;
}

export const GithubProjects: React.FC<GithubProjectsProps> = ({ repos, loading, error }) => {
    if (loading) {
        return <div className="text-retro-muted animate-pulse">Loading repositories from GitHub...</div>;
    }

    if (error) {
        return <div className="text-retro-accent">Error loading projects: {error}</div>;
    }

    if (repos.length === 0) {
        return <div className="text-retro-muted">No public repositories found.</div>;
    }

    return (
        <div>
            {repos.map(repo => (
                <div key={repo.id} className="mb-5 pb-5 border-b border-dashed border-retro-border last:border-0 last:mb-0 last:pb-0">
                    <div className="mb-2 flex flex-wrap items-baseline gap-x-2 text-[14px]">
                        <span className="font-bold text-retro-accent">⇒ {repo.name}</span>
                        <span className="text-retro-muted text-[12px]">
                            [{new Date(repo.updated_at).toISOString().split('T')[0]}]
                        </span>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-retro-link hover:text-retro-linkHover text-[12px]">
                            [Repo]
                        </a>
                        {repo.homepage && (
                            <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-retro-link hover:text-retro-linkHover text-[12px]">
                                [Demo]
                            </a>
                        )}
                    </div>

                    <div className="pl-2 sm:pl-4 mb-3">
                        {repo.language && (
                            <div className="inline-block bg-[#f8f8f8] border border-[#cccccc] px-2 py-0.5 text-[12px] font-mono mb-2">
                                Lang: {repo.language}
                            </div>
                        )}
                        
                        <div className="space-y-1">
                            <div className="flex items-start">
                                <span className="mr-1 text-retro-muted">・</span>
                                <span>{repo.description || 'No description provided.'}</span>
                            </div>
                            <div className="flex items-start text-[12px] text-retro-muted">
                                <span className="mr-1">・</span>
                                <span>★ {repo.stargazers_count} | ⑂ {repo.forks_count}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
