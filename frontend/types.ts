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
  techStack: string[];
  link: string;
  category: string;
  description: string;
  status?: string;
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
