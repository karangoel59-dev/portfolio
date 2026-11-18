export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  /** One-line summary shown above the highlights. */
  lead?: string;
  /** Main tools for the role, shown as chips. */
  stack?: string[];
  highlights: string[];
}
export interface Project {
  title: string;
  date: string;
  techStack: string[];
  link: string;
  category: string;
  description: string;
  status?: string;
  /** Shown in the larger top row of the projects section. */
  featured?: boolean;
  /** Short evidence-backed callout, e.g. "Adopted by other users". */
  badge?: string;
}
export interface PortfolioData {
  name: string;
  title: string;
  contact: {
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  skills: { category: string; skills: string[] }[];
  experience: Experience[];
  projects: Project[];
  education: {
    degree: string;
    institution: string;
    startDate: string;
    endDate: string;
    detail: string;
  }[];
}
export interface CareerEvent {
  year: string;
  title: string;
  kind: "work" | "education" | "project";
  dates: string;
  subtitle: string;
  description: string;
}
