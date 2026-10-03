import { ResumeData } from './types';

export const resumeData: ResumeData = {
    name: "KARAN GOEL",
    title: "Applied AI Engineer — LLM Agents, RAG & Production Backend",
    contact: {
        location: "Pune, India (Open to Global Relocation)",
        phone: "+91 7988965091",
        email: "karangoel59@zohomail.in",
        linkedin: "linkedin.com/in/kg59",
        github: "github.com/karangoel59-dev",
        portfolio: "karangoel59-dev.github.io/portfolio"
    },
    summary: "Applied AI engineer building production LLM agents for enterprise customers. At Chat360 I work across a LangGraph multi-agent runtime and its Django backend, from RAG and tool execution to billing, tracing and PII protection. Before that I spent two years in DevOps/SRE at Flipkart (AWS, Terraform, Kubernetes, observability), so I build agents with production reliability, cost control and monitoring in mind.",
    skills: [
        {
            category: "LLM & Agents",
            skills: ["LangGraph", "LangChain", "OpenAI / Azure OpenAI APIs", "multi-agent orchestration", "tool calling", "RAG", "MCP", "prompt & context engineering", "semantic caching", "PII masking"]
        },
        {
            category: "Retrieval & Data",
            skills: ["Qdrant", "Pinecone", "PostgreSQL", "Redis", "SQLAlchemy", "OCR (Tesseract)", "document chunking & ingestion pipelines"]
        },
        {
            category: "Backend",
            skills: ["Python (asyncio)", "Django / Django REST Framework", "Celery", "REST APIs", "service-to-service auth"]
        },
        {
            category: "LLM Observability",
            skills: ["Langfuse", "OpenTelemetry", "SigNoz", "token & cost metering", "Prometheus", "Grafana", "ELK", "New Relic"]
        },
        {
            category: "Cloud & DevOps",
            skills: ["AWS (EC2, S3, IAM, VPC)", "GCP (GKE, BigQuery)", "Azure", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Jenkins"]
        },
        {
            category: "Languages",
            skills: ["Python", "SQL", "Go", "JavaScript/TypeScript", "Java", "Shell"]
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
                "Delivered 110+ Jira tickets through 350+ merged PRs (87 to production) across the LangGraph agent runtime and Django backend.",
                "Made the agent runtime faster and more reliable: concurrent tool calls (asyncio) cut multi-tool turn latency 55–65%, and token-budget context truncation plus a supervisor fallback ended context-overflow errors and empty replies.",
                "Led the Pinecone → self-hosted Qdrant migration with zero data loss, and built Club Mahindra’s “Maya” booking agent: RAG over member policies, live resort availability and room recommendations.",
                "Owned LLM billing and usage analytics, about a quarter of my commits: token metering that covers dropped sessions, per-request cost breakdown, routing simple queries to a lighter model, and AI Insights queries cut from 14s to under 650ms.",
                "Added Langfuse v4 and OpenTelemetry (SigNoz) tracing, and a PII-masking layer that tokenizes Aadhaar, PAN, phone and card numbers before prompts reach external LLMs."
            ]
        },
        {
            title: "AI Engineer — Independent Projects",
            company: "Independent Client Work & Open Source",
            location: "Remote",
            startDate: "August 2025",
            endDate: "February 2026",
            highlights: [
                "Designed and deployed a custom multi-agent LLM system for a client (Python, LangChain, OpenAI API), with infrastructure provisioned in Terraform and CI/CD.",
                "Set up Prometheus and Grafana monitoring for uptime and performance anomalies, and contributed features and fixes to open-source LangChain-based projects."
            ]
        },
        {
            title: "AI Researcher (Part-time)",
            company: "University of Wollongong",
            location: "Wollongong, Australia",
            startDate: "2024",
            endDate: "2025",
            highlights: [
                "Built and ran 20+ AI agents that analyze behavioral patterns, improving anomaly-detection accuracy by 15%.",
                "Maintained GitHub Actions CI/CD for model and simulation deployments, cutting deployment time by 20%."
            ]
        },
        {
            title: "DevOps / SRE Engineer",
            company: "Flipkart",
            location: "Bangalore, India",
            startDate: "June 2021",
            endDate: "June 2023",
            highlights: [
                "Provisioned and managed AWS infrastructure (EC2, VPC, IAM) with Terraform, reducing deployment failures by 25%.",
                "Ran Kubernetes clusters and CI/CD (Jenkins, Bitbucket Pipelines), and built isolated multi-VPC development environments that made development cycles 30% faster.",
                "Built cloud cost dashboards from Kubernetes workload data exported to BigQuery, cutting cloud spend by 15%.",
                "Ran observability on ELK, Grafana and New Relic, led incident root-cause analysis, and drove a security and infrastructure initiative that reduced incidents by 20%."
            ]
        },
        {
            title: "Software Engineer Intern",
            company: "Cleartrip",
            location: "Bangalore, India",
            startDate: "March 2020",
            endDate: "May 2021",
            highlights: [
                "Migrated workloads from bare-metal servers to GKE, and provisioned AWS infrastructure and QA/staging environments for several teams.",
                "Automated deployments with shell scripts and debugged microservice connectivity issues (DNS, HTTP)."
            ]
        }
    ],
    projects: [
        {
            title: "kgmail",
            date: "2026",
            techStack: "Go, MCP",
            link: "https://github.com/karangoel59-dev/kgmail",
            highlights: [
                "Multi-account email manager and native MCP server in Go that gives AI coding agents read-only inbox access and SMTP sending, released as a single binary through a Homebrew tap."
            ]
        },
        {
            title: "kgssh",
            date: "2026",
            techStack: "Go, MCP",
            link: "https://github.com/karangoel59-dev/kgssh",
            highlights: [
                "SSH alias manager and MCP server in Go that lets AI agents run commands, transfer files over SFTP and check health on remote servers."
            ]
        },
        {
            title: "activity-dashboard",
            date: "2026",
            techStack: "TypeScript, SvelteKit, Azure OpenAI",
            link: "https://github.com/karangoel59-dev/activity-dashboard",
            highlights: [
                "An engineering-metrics dashboard built from git history across repositories, with an LLM classifying each commit by domain and work type."
            ]
        },
        {
            title: "writehere-agents",
            date: "2026",
            techStack: "Python, LLMs",
            link: "https://github.com/karangoel59-dev/writehere-agents",
            highlights: [
                "A recursive DAG-based agent framework: an LLM breaks a high-level prompt into structured sub-tasks and executes them, for example turning one prompt into a multi-section report."
            ]
        },
        {
            title: "Cognitive Agent Framework",
            date: "2024 – 2025",
            techStack: "Python, LangChain, OpenAI API, Streamlit, GCP",
            link: "https://bit.ly/4xjg0kr",
            highlights: [
                "An agent architecture based on dual-process theory, with personality, memory and emotion models, deployed on GCP as a real-time streaming interface for experiments."
            ]
        }
    ],
    education: [
        {
            degree: "Master of Computer Science",
            institution: "University of Wollongong",
            location: "Wollongong, Australia",
            startDate: "2023",
            endDate: "2025"
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
        languages: ["English", "Hindi", "Japanese (Beginner)"]
    }
};
