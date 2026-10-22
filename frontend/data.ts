import type { PortfolioData, CareerEvent } from "./types";

// Public career copy reconciled with the final resume and user corrections, 22 Oct 2026.
export const portfolioData: PortfolioData = {
  name: "Karan Goel",
  title: "Applied AI & Backend Engineer",
  contact: {
    location: "Pune, India",
    phone: "+91 7988965091",
    email: "karangoel59@zohomail.in",
    linkedin: "https://linkedin.com/in/kg59",
    github: "https://github.com/karangoel59-dev",
  },
  summary:
    "Software engineer building production LLM agents and Python backend systems at Chat360, following two years of full-time DevOps/SRE work at Cleartrip. Combines agent orchestration and retrieval with infrastructure, observability and billing.",
  skills: [
    {
      category: "Backend",
      skills: [
        "Python",
        "Go",
        "JavaScript/TypeScript",
        "SQL",
        "Django/DRF",
        "asyncio",
        "Celery",
        "REST APIs",
      ],
    },
    {
      category: "AI & data",
      skills: [
        "LangGraph",
        "LangChain",
        "OpenAI/Azure OpenAI",
        "RAG",
        "Qdrant",
        "Pinecone",
        "PostgreSQL",
        "Redis",
      ],
    },
    {
      category: "Infrastructure",
      skills: [
        "GCP/GKE",
        "Terraform",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "GitHub Actions",
        "Langfuse",
        "ELK",
        "New Relic",
      ],
    },
  ],
  experience: [
    {
      title: "Agentic AI Engineer",
      company: "Chat360 (Sumanel Technology Ventures)",
      location: "Pune, India",
      startDate: "Mar 2026",
      endDate: "Present",
      highlights: [
        "Enabled parallel tool execution in the agent runtime using thread pools; added token-aware conversation history truncation.",
        "Implemented Pinecone-to-Qdrant migration APIs and batch transfer workflows; updated retrieval and vector-store integrations.",
        "Built Club Mahindra’s Maya RAG pipeline, semantic resort search, live availability checks and resort-ID verification for booking workflows.",
        "Implemented idempotent session-close billing reconciliation and optimized AI Insights data retrieval; added complexity-based routing to lighter models.",
        "Migrated Langfuse tracing and callback handling across webhook and LangGraph supervisor paths.",
        "Fixed DBHub cross-session writes and per-table save state; moved background synchronization to retryable Celery tasks.",
      ],
    },
    {
      title: "Software Engineer (DevOps / SRE)",
      company: "Cleartrip (Flipkart Group)",
      location: "Bangalore, India",
      startDate: "Jun 2021",
      endDate: "Jun 2023",
      highlights: [
        "Managed GCP/GKE infrastructure with Terraform; authored VPC design documentation for PCI/non-PCI networks, firewall rules, disaster recovery and observability.",
        "Supported QA migration to GCP and deployment pipelines; tuned Elasticsearch for high-traffic sales and rolled out hotel-service Kibana logging.",
        "Handled production on-call troubleshooting and cost optimization; integrated Snyk and set up Debezium.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Cleartrip",
      location: "Bangalore, India",
      startDate: "Mar 2020",
      endDate: "May 2021",
      highlights: [
        "Automated deployments with shell scripts, supported QA/staging infrastructure and debugged DNS/HTTP connectivity; converted directly to full-time employment.",
      ],
    },
  ],
  projects: [
    {
      title: "kgmail",
      date: "2026",
      techStack: ["Go", "MCP"],
      link: "https://github.com/karangoel59-dev/kgmail",
      category: "Agent tooling",
      description:
        "A multi-account email manager with a native Go MCP server. Distributed through Homebrew.",
    },
    {
      title: "kgssh",
      date: "2026",
      techStack: ["Go", "CLI"],
      link: "https://github.com/karangoel59-dev/kgssh",
      category: "Developer tools",
      description:
        "An SSH connection launcher for working across remote machines. Distributed through Homebrew.",
    },
    {
      title: "writehere-agents",
      date: "2026",
      techStack: ["Python", "LLMs"],
      link: "https://github.com/karangoel59-dev/writehere-agents",
      category: "Agent tooling",
      description:
        "A recursive DAG-based framework that turns a high-level prompt into structured subtasks and multi-section outputs.",
      status: "Archived",
    },
    {
      title: "Irrational Agents",
      date: "2024–2025",
      techStack: ["Python", "LangChain", "Phaser", "Azure", "GCP"],
      link: "https://github.com/Irrational-Agents/Agents-Sandbox",
      category: "Team capstone",
      description:
        "Led the simulation frontend and contributed the socket API, prompts and agent behavior/personality layer. A team MSc capstone, graded Distinction (80).",
    },
    {
      title: "Signature-forgery detection",
      date: "2023",
      techStack: ["PyTorch", "Transformers", "ViT"],
      link: "https://huggingface.co/kg59/vit-base-patch16-224-finetuned-cedar",
      category: "Applied ML",
      description:
        "Fine-tuned a Vision Transformer to classify genuine and forged signatures, then published the model and training results on Hugging Face.",
    },
    {
      title: "Early work archive",
      date: "2018–2020",
      techStack: ["C++", "TypeScript", "React"],
      link: "https://github.com/karangoel59-dev/early-work-archive",
      category: "Code archive",
      description:
        "Recovered student projects: C++ game engines and BFS pathfinding, web APIs, a Messenger booking bot, and early Docker/Jenkins work.",
      status: "Archived",
    },
  ],
  education: [
    {
      degree: "Master of Computer Science",
      institution: "University of Wollongong, Australia",
      startDate: "Jul 2023",
      endDate: "Jul 2025",
      detail:
        "Major: Machine Learning and Big Data and Software Engineering · WAM 71.7. High Distinctions: Programming & Data Structures (93), Web Development (91).",
    },
    {
      degree: "Bachelor of Engineering — Computer Science & Engineering",
      institution: "Chitkara University, Himachal Pradesh, India",
      startDate: "Aug 2017",
      endDate: "Jun 2021",
      detail:
        "CGPA 9.16/10 · Cleartrip internship credited as final-year co-op training.",
    },
  ],
};

export const careerEvents: CareerEvent[] = [
  {
    year: "2017",
    title: "Programming foundation",
    kind: "education",
    dates: "Aug 2017 – Jun 2021",
    subtitle: "BE · Chitkara University",
    description:
      "Computer Science and Engineering, CGPA 9.16/10. Built C++ games, pathfinding and web projects during the degree.",
  },
  {
    year: "2020",
    title: "First engineering role",
    kind: "work",
    dates: "Mar 2020 – May 2021",
    subtitle: "Software Engineer Intern · Cleartrip",
    description:
      "Supported deployments and QA/staging infrastructure. The internship was credited as final-year co-op training.",
  },
  {
    year: "2021",
    title: "Production infrastructure",
    kind: "work",
    dates: "Jun 2021 – Jun 2023",
    subtitle: "Software Engineer · Cleartrip (Flipkart Group)",
    description:
      "Converted directly from the internship. Worked on GCP/GKE, Terraform, network design, observability and production troubleshooting.",
  },
  {
    year: "2023",
    title: "A deeper CS foundation",
    kind: "education",
    dates: "Jul 2023 – Jul 2025",
    subtitle: "Master of Computer Science · Wollongong",
    description:
      "Major in Machine Learning and Big Data and Software Engineering. High Distinctions in programming/data structures and web development.",
  },
  {
    year: "2024",
    title: "Agents in simulation",
    kind: "project",
    dates: "2024 – 2025",
    subtitle: "Irrational Agents · Team MSc capstone",
    description:
      "Led the simulation frontend and contributed APIs, prompts and agent behavior/personality features. Graded Distinction (80).",
  },
  {
    year: "2026",
    title: "Applied AI in production",
    kind: "work",
    dates: "Mar 2026 – Present",
    subtitle: "Agentic AI Engineer · Chat360",
    description:
      "Builds agent runtime features, retrieval integrations, billing, tracing and reliable backend workflows.",
  },
];
