import { ResumeData } from './types';

export const resumeData: ResumeData = {
    name: "KARAN GOEL",
    title: "Software Engineer",
    contact: {
        location: "Pune, Maharashtra, India",
        phone: "+91 7988965091",
        email: "karangoel59@zohomail.in",
        linkedin: "linkedin.com/in/kg59",
        github: "github.com/karangoel59-dev",
        portfolio: "Portfolio Website"
    },
    summary: "Results-driven Software Engineer with 3+ years of experience specializing in DevOps, Site Reliability Engineering (SRE), and cloud infrastructure, complemented by 1+ years of specialized experience in Machine Learning and Agentic AI. Proven track record of architecting scalable systems, optimizing cloud infrastructure, and deploying LLM-powered applications. Passionate about bridging the gap between reliable infrastructure engineering and cutting-edge artificial intelligence.",
    skills: [
        {
            category: "Languages",
            skills: ["Python", "Java", "JavaScript"]
        },
        {
            category: "Cloud & Infrastructure",
            skills: ["GCP", "Azure", "AWS", "Linux", "Terraform"]
        },
        {
            category: "DevOps & CI/CD",
            skills: ["Kubernetes", "Docker", "CI/CD", "GitHub Actions", "Jenkins", "Bitbucket Pipelines"]
        },
        {
            category: "Observability & Monitoring",
            skills: ["Prometheus", "Grafana", "Elastic Stack (ELK)", "New Relic"]
        },
        {
            category: "AI & Machine Learning",
            skills: ["Machine Learning", "LLMs", "LangChain", "OpenAI API", "Streamlit"]
        }
    ],
    experience: [
        {
            title: "Agentic AI Engineer",
            company: "Chat360",
            location: "Pune, India",
            startDate: "March 2026",
            endDate: "Present",
            highlights: [
                "Built an agentic AI platform and shipped key features such as OCR and semantic analysis, enhancing user experience and driving business growth.",
                "Architected and implemented scalable system designs to streamline the product life cycle and development workflows.",
                "Collaborated with cross-functional teams to Dockerize key components, streamlining development and deployment processes while improving deployment reliability."
            ]
        },
        {
            title: "Freelance AI & DevOps Engineer",
            company: "Independent Contractor",
            location: "Remote",
            startDate: "August 2025",
            endDate: "February 2026",
            highlights: [
                "Consulted for clients to design and deploy custom LLM solutions and autonomous multi-agent systems using Python, LangChain, and OpenAI API.",
                "Streamlined client production environments by provisioning multi-cloud architectures via Terraform and automating scalable CI/CD pipelines.",
                "Built comprehensive logging and real-time observability workflows using Prometheus and Grafana to optimize application uptime and detect system performance anomalies early."
            ]
        },
        {
            title: "AI Researcher",
            company: "University of Wollongong",
            location: "Wollongong, Australia",
            startDate: "July 2024",
            endDate: "July 2025",
            highlights: [
                "Developed and managed 20+ AI agents to monitor and analyze behavioral patterns, improving anomaly detection accuracy by 15%.",
                "Maintained robust CI/CD pipelines using GitHub Actions for seamless deployment of models and the simulation environment, reducing deployment time by 20%.",
                "Upgraded the simulation environment by integrating advanced features, significantly improving user experience and system responsiveness.",
                "Coordinated with academic stakeholders to align technical deliverables with research objectives."
            ]
        },
        {
            title: "DevOps/SRE Engineer",
            company: "Flipkart",
            location: "Bangalore, India",
            startDate: "May 2021",
            endDate: "June 2023",
            highlights: [
                "Designed, implemented, and managed Kubernetes clusters, automated CI/CD workflows with Bitbucket Pipelines and Jenkins, and provisioned scalable infrastructure using Infrastructure as Code (Terraform), reducing deployment failures by 25%.",
                "Led an initiative to deploy isolated development environments by provisioning multiple VPCs across teams, ensuring security, scalability, and streamlined collaboration, resulting in a 30% faster development cycle.",
                "Developed analytics dashboards for usage tracking and cost optimization, increasing cloud efficiency by 20% and reducing cloud spending by 15%.",
                "Maintained logging platforms like ELK, Grafana, and New Relic for observability, improving system uptime by 10%.",
                "Led a security and infrastructure optimization initiative that reduced incidents by 20% company-wide and improved service reliability."
            ]
        },
        {
            title: "Software Engineer Intern",
            company: "Cleartrip",
            location: "Bangalore, India",
            startDate: "March 2020",
            endDate: "June 2021",
            highlights: [
                "Analyzed and documented system architectures to support infrastructure and development teams, improving cross-team communication by 20%.",
                "Tested and deployed microservice systems, with responsibilities across patching, deployment, and monitoring, reducing system downtime by 15%.",
                "Managed multi-cloud infrastructure (AWS, GCP, Azure) with a focus on cost efficiency and uptime, achieving a 10% reduction in cloud costs.",
                "Improved CI/CD pipelines, reducing deployment time and operational overhead by establishing streamlined code testing processes."
            ]
        }
    ],
    projects: [],
    education: [
        {
            degree: "Masters in Computer Science",
            institution: "University of Wollongong",
            location: "Wollongong, Australia",
            startDate: "July 2024",
            endDate: "June 2025"
        },
        {
            degree: "B.Tech in Computer Science",
            institution: "Chitkara University",
            location: "Baddi, India",
            startDate: "August 2017",
            endDate: "June 2021"
        }
    ],
    coreCompetencies: {
        softSkills: ["Process-oriented", "Collaboration", "Workflow optimization", "Leadership", "Strategic thinking", "Mentorship"],
        languages: ["English", "Hindi"]
    }
};
