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
    summary: "Software engineer with 3+ years of production experience across cloud infrastructure, DevOps/SRE, and distributed systems, plus 1+ years building agentic AI platform features. Currently designing orchestration and asynchronous processing (Kafka, RabbitMQ) for a multi-step agent platform at Chat360, and leading the rollout of Hadoop/Spark for terabyte-scale billing data. Track record of owning infrastructure end-to-end — AWS provisioning, Terraform, Kubernetes, CI/CD, and observability — with hands-on LLM application experience (LangChain, OpenAI API). Comfortable carrying projects independently and translating reliability practices from traditional infrastructure into AI-system operations.",
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
            skills: ["Kafka", "RabbitMQ", "Hadoop & Apache Spark (in progress)", "workflow/orchestration systems"]
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
                "Shipped OCR, knowledge base, and orchestrator features end-to-end on an agentic AI platform, owning design, system architecture, and deployment for each.",
                "Designed the orchestrator that sequences multi-step agent workflows, applying distributed-systems patterns to reliability and task coordination.",
                "Used Kafka and RabbitMQ for asynchronous task processing across distributed agent workflows; managed S3 storage for OCR and semantic-analysis pipelines.",
                "Migrated services to Docker, built CI/CD pipelines with GitHub Actions, and implemented Langfuse for centralized LLM logging and observability.",
                "Leading the setup of Hadoop and Apache Spark to support terabyte-scale billing data processing and interactive dashboards."
            ]
        },
        {
            title: "Freelance AI & DevOps Engineer",
            company: "Independent Contractor",
            location: "Remote",
            startDate: "August 2025",
            endDate: "February 2026",
            highlights: [
                "Designed and deployed custom LLM solutions and autonomous multi-agent systems for clients using Python, LangChain, and the OpenAI API.",
                "Provisioned multi-cloud production environments via Terraform and automated CI/CD pipelines for client deployments.",
                "Built logging and real-time observability workflows with Prometheus and Grafana to monitor uptime and catch performance anomalies early."
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
