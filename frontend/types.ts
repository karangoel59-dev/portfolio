export interface ContactInfo {
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    portfolio?: string;
}

export interface SkillCategory {
    category: string;
    skills: string[];
}

export interface Experience {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    highlights: string[];
}

export interface Project {
    title: string;
    date: string;
    techStack: string;
    link?: string;
    highlights: string[];
}

export interface Education {
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
}

export interface ResumeData {
    name: string;
    title: string;
    contact: ContactInfo;
    summary: string;
    skills: SkillCategory[];
    experience: Experience[];
    projects: Project[];
    education: Education[];
    coreCompetencies: {
        softSkills: string[];
        languages: string[];
    };
}

export interface GithubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string | null;
    language: string;
    updated_at: string;
    stargazers_count: number;
    forks_count: number;
}
