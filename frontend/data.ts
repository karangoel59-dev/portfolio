import { ResumeData } from './types';

export const resumeData: ResumeData = {
    name: "KARAN GOEL",
    title: "Software Engineer — Cloud Infrastructure & Agentic AI Systems",
    contact: {
        location: "Pune, Maharashtra, India (Open to Global Relocation)",
        phone: "+91 7988965091",
        email: "karangoel59@zohomail.in",
        linkedin: "linkedin.com/in/kg59",
        github: "github.com/karangoel59-dev",
        portfolio: "karangoel59-dev.github.io/portfolio"
    },
    summary: "Software engineer with 3+ years of production experience across cloud infrastructure, DevOps/SRE, and distributed systems, plus 1+ years building agentic AI platform features. Currently designing orchestration and asynchronous processing (Kafka, RabbitMQ) for a multi-step agent platform at Chat360. Track record of owning infrastructure end-to-end — AWS provisioning, Terraform, Kubernetes, CI/CD, and observability — with hands-on LLM application experience (LangChain, OpenAI API). Comfortable carrying projects independently and translating reliability practices from traditional infrastructure into AI-system operations.",
    skills: [
        {
            category: "Cloud & Infrastructure",
            skills: ["AWS (EC2, S3, IAM, VPC, multi-account)", "GCP (GKE)", "Azure", "Terraform/IaC", "Linux/Unix"]
        },
        {
            category: "Containers & CI/CD",
            skills: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Bitbucket Pipelines"]
        },
        {
            category: "Messaging & Data Processing",
            skills: ["Kafka", "RabbitMQ", "workflow/orchestration systems"]
        },
        {
            category: "Observability",
            skills: ["Prometheus", "Grafana", "Elastic Stack (ELK)", "New Relic", "Langfuse"]
        },
        {
            category: "AI & LLM Engineering",
            skills: ["LLMs", "LangChain", "OpenAI API", "Streamlit", "agentic workflow design"]
        },
        {
            category: "Languages",
            skills: ["Python", "Go (growing — CLI projects)", "Java", "JavaScript/TypeScript", "Shell"]
        },
        {
            category: "Networking & Data",
            skills: ["DNS", "HTTP", "OSI fundamentals", "relational data modeling (PostgreSQL)"]
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
                "Built OCR and knowledge base features that eliminated the need for manual KB training on unstructured, messy data, processing 1,000+ documents/month.",
                "Designed the orchestrator sequencing multi-step agent workflows, achieving 6-second end-to-end execution with a 90% workflow completion rate.",
                "Used Kafka and RabbitMQ for asynchronous task processing across distributed agent workflows; managed S3 storage for OCR and semantic-analysis pipelines.",
                "Migrated services to Docker and implemented Langfuse for centralized observability, cutting deployment time and issue-detection time both from hours to minutes, with 80-90% trace coverage across the orchestrator pipeline.",
                "Built backend APIs for semantic OCR search, using PostgreSQL for relational data modeling and storage."
            ]
        },
        {
            title: "AI & DevOps Engineer — Independent Projects",
            company: "Open-Source Contributions & Independent Client Work",
            location: "Remote",
            startDate: "August 2025",
            endDate: "February 2026",
            highlights: [
                "Designed and deployed a custom LLM solution and autonomous multi-agent system for a client project, using Python, LangChain, and the OpenAI API.",
                "Provisioned a multi-cloud production environment via Terraform and automated CI/CD pipelines for the deployment.",
                "Built logging and real-time observability workflows with Prometheus and Grafana to monitor uptime and catch performance anomalies early.",
                "Contributed to open-source AI/LLM projects, building features and fixes for community-maintained repositories using Python and LangChain."
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
                "Maintained CI/CD pipelines with GitHub Actions for model and simulation deployments, cutting deployment time by 20%.",
                "Upgraded the simulation environment, improving responsiveness and user experience; coordinated with academic stakeholders to align deliverables with research objectives."
            ]
        },
        {
            title: "DevOps/SRE Engineer",
            company: "Flipkart",
            location: "Bangalore, India",
            startDate: "May 2021",
            endDate: "June 2023",
            highlights: [
                "Provisioned and managed AWS infrastructure (EC2, VPC, IAM) with Terraform, reducing deployment failures by 25%.",
                "Designed and managed Kubernetes clusters; automated CI/CD workflows with Bitbucket Pipelines and Jenkins.",
                "Led deployment of isolated development environments across multiple VPCs, applying networking fundamentals for secure connectivity — 30% faster development cycle.",
                "Built analytics dashboards for usage tracking and cost optimization, improving cloud efficiency by 20% and cutting cloud spend by 15%.",
                "Maintained ELK, Grafana, and New Relic for observability, improving system uptime by 10%; led a security and infrastructure initiative that reduced incidents by 20% company-wide."
            ]
        },
        {
            title: "Software Engineer Intern",
            company: "Cleartrip",
            location: "Bangalore, India",
            startDate: "March 2020",
            endDate: "June 2021",
            highlights: [
                "Provisioned EC2/AWS infrastructure for microservice deployments and set up QA/staging environments for multiple teams.",
                "Migrated workloads from bare-metal servers to cloud (GKE), improving scalability and reducing infrastructure overhead.",
                "Used Shell scripting for deployment automation and applied networking fundamentals (DNS, HTTP) to troubleshoot microservice connectivity.",
                "Managed multi-cloud infrastructure (AWS, GCP, Azure) with a focus on cost efficiency and uptime, achieving a 10% reduction in cloud costs."
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
