import React from 'react';
import { GithubRepo } from '../types';

interface GithubProjectsProps {
    repos: GithubRepo[];
    loading: boolean;
    error: string | null;
}

export const GithubProjects: React.FC<GithubProjectsProps> = ({ repos, loading, error }) => {
    if (loading) {
        return <div className="text-arcade-border2 animate-pulse">{'>'} LOADING REPOSITORIES FROM GITHUB...</div>;
    }

    if (error) {
        return <div className="text-arcade-linkHover">{'>'} ERROR: {error}</div>;
    }

    if (repos.length === 0) {
        return <div className="text-arcade-muted">{'>'} No public repositories found.</div>;
    }

    return (
        <div>
            {repos.map(repo => (
                <article key={repo.id} className="mb-6 pb-6 border-b-2 border-dashed border-arcade-border last:border-0 last:mb-0 last:pb-0">
                    <header className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                        <h3 className="text-[19px] font-bold text-arcade-accent">
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-arcade-linkHover hover:underline">
                                {repo.name}
                            </a>
                        </h3>
                        <span className="text-[14px] text-arcade-bg bg-arcade-yellow px-1.5 whitespace-nowrap">
                            updated {new Date(repo.updated_at).toISOString().split('T')[0]}
                        </span>
                    </header>

                    <div className="mb-2 flex flex-wrap items-center gap-1.5">
                        {repo.language && (
                            <span className="bg-arcade-tag border border-arcade-tagBorder px-2 py-0.5 text-[12px] text-arcade-border2">
                                {repo.language}
                            </span>
                        )}
                        <span className="text-[13px] text-arcade-muted">★ {repo.stargazers_count} · ⑂ {repo.forks_count}</span>
                        {repo.homepage && (
                            <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-[13px] text-arcade-link hover:text-arcade-linkHover hover:underline">
                                [Live Demo]
                            </a>
                        )}
                    </div>

                    <p>{repo.description || 'No description provided.'}</p>
                </article>
            ))}
        </div>
    );
};
