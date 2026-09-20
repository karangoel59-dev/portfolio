import React from 'react';
import { GithubRepo } from '../types';

interface GithubProjectsProps {
    repos: GithubRepo[];
    loading: boolean;
    error: string | null;
}

export const GithubProjects: React.FC<GithubProjectsProps> = ({ repos, loading, error }) => {
    if (loading) {
        return (
            <div className="space-y-3" aria-busy="true" aria-label="Loading repositories">
                {[0, 1, 2].map(i => (
                    <div key={i} className="animate-pulse rounded-lg border border-ui-line bg-ui-elevated p-4">
                        <div className="mb-3 h-4 w-2/5 rounded bg-ui-lineStrong/60" />
                        <div className="mb-2 h-3 w-full rounded bg-ui-line" />
                        <div className="h-3 w-3/5 rounded bg-ui-line" />
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="rounded-lg border border-ui-amber/30 bg-ui-amber/5 px-4 py-3 text-sm text-ui-amber">
                Could not load repositories — {error}
            </div>
        );
    }

    if (repos.length === 0) {
        return <div className="text-sm text-ui-faint">No public repositories found.</div>;
    }

    return (
        <div className="space-y-3">
            {repos.map(repo => (
                <article
                    key={repo.id}
                    className="group rounded-lg border border-ui-line bg-ui-elevated p-4 transition-colors hover:border-ui-lineStrong hover:bg-ui-hover"
                >
                    <header className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                        <h3 className="text-[16px] font-semibold tracking-tight">
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-ui-ink transition-colors group-hover:text-ui-accentSoft"
                            >
                                {repo.name}
                                <span className="ml-1.5 text-xs text-ui-faint transition-colors group-hover:text-ui-accentSoft">↗</span>
                            </a>
                        </h3>
                        <span className="whitespace-nowrap text-[11px] tabular-nums text-ui-faint">
                            Updated {new Date(repo.updated_at).toISOString().split('T')[0]}
                        </span>
                    </header>

                    <p className="mb-3 text-[15px] text-ui-muted">{repo.description || 'No description provided.'}</p>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] text-ui-faint">
                        {repo.language && (
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-ui-line bg-ui-surface px-2 py-0.5 text-ui-muted">
                                <span className="h-1.5 w-1.5 rounded-full bg-ui-teal" aria-hidden="true" />
                                {repo.language}
                            </span>
                        )}
                        <span className="tabular-nums">★ {repo.stargazers_count}</span>
                        <span className="tabular-nums">⑂ {repo.forks_count}</span>
                        {repo.homepage && (
                            <a
                                href={repo.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-ui-accentSoft hover:text-ui-teal"
                            >
                                Live demo ↗
                            </a>
                        )}
                    </div>
                </article>
            ))}
        </div>
    );
};
