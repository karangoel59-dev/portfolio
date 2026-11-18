import type { PortfolioData, CareerEvent } from "./types";

// Public career copy mirrored from builder/resume_content.json, 18 Nov 2026.
// The site lists a few items the one-page PDF has no room for (Vault/Secret Manager,
// forward-flow, caddy-mcp-gateway, extra tools); all are user-confirmed.
export const portfolioData: PortfolioData = {
  name: "Karan Goel",
  title: "AI Platform & Backend Systems Engineer",
  contact: {
    location: "Pune, India",
    phone: "+91 7988965091",
    email: "karangoel59@zohomail.in",
    linkedin: "https://linkedin.com/in/kg59",
    github: "https://github.com/karangoel59-dev",
  },
  summary:
    "Systems and AI engineer with 3+ years of production experience across cloud infrastructure at Cleartrip (Flipkart Group) and agentic runtimes at Chat360: multi-agent supervisor orchestration, concurrent tool execution, production vector search and multi-cluster Kubernetes, combining systems reliability (Go, Kubernetes, Terraform) with LLM runtime engineering.",
  skills: [
    {
      category: "Backend & systems",
      skills: [
        "Python",
        "Go",
        "JavaScript/TypeScript",
        "Bash",
        "SQL",
        "Django/DRF",
        "Celery",
        "asyncio",
        "REST APIs",
        "ASGI (Gunicorn/Uvicorn)",
        "Rust",
      ],
    },
    {
      category: "AI & LLM",
      skills: [
        "LangGraph",
        "LangChain",
        "Model Context Protocol (MCP)",
        "OpenAI & Gemini APIs",
        "RAG",
        "Prompt caching",
        "LLM-as-judge evaluation",
        "Model fine-tuning",
        "Langfuse",
        "Claude Code",
      ],
    },
    {
      category: "Data & retrieval",
      skills: [
        "Qdrant",
        "Pinecone",
        "Vector indexing",
        "PostgreSQL",
        "Redis",
        "Elasticsearch",
        "Kafka",
        "Debezium CDC",
      ],
    },
    {
      category: "Infrastructure",
      skills: [
        "GCP/GKE",
        "Terraform",
        "Docker",
        "Kubernetes",
        "ELK/Kibana",
        "New Relic",
        "Jenkins",
        "GoCD",
        "GitHub Actions",
        "Snyk",
        "uv",
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
      lead: "Agent runtime, retrieval, billing and tracing for production LLM agents.",
      stack: ["Python", "LangGraph", "Qdrant", "Langfuse", "Django", "GoCD"],
      highlights: [
        "Engineered concurrent multi-tool execution with thread pools in a LangGraph supervisor runtime that routes work between sub-agents; implemented dynamic token-budget context sliding windows to prevent context-window overflow.",
        "Built the multi-turn RAG runtime for Club Mahindra’s Maya assistant: semantic resort retrieval, real-time availability checks, a hallucination guard on model-produced resort identifiers, and prompt caching; presented its design on-site.",
        "Instrumented Langfuse v4 tracing across async webhooks and LangGraph supervisor graphs (trace propagation, environment tagging, token-cost telemetry), adopted by other engineers; scored output with LLM-as-judge and manual QA.",
        "Migrated the production vector database from Pinecone to Qdrant, making many of its technical decisions: pooled client connections, scroll-based batch deletion, payload indexing, schema-mapped retrieval.",
        "Designed idempotent session-close billing reconciliation to prevent credit leakage.",
        "Implemented model routing that sends simpler turns to low-latency models; optimized analytical query paths.",
        "Introduced uv and GoCD into infrastructure tooling; review teammates’ code, mentor engineers and design new features.",
      ],
    },
    {
      title: "Software Engineer (DevOps / SRE)",
      company: "Cleartrip (Flipkart Group)",
      location: "Bangalore, India",
      startDate: "Jun 2021",
      endDate: "Jun 2023",
      lead: "Multi-cluster GCP/GKE platforms, network design and production operations.",
      stack: ["GCP/GKE", "Terraform", "Kubernetes", "Elasticsearch", "Kafka", "Snyk"],
      highlights: [
        "Provisioned and maintained multi-cluster GCP/GKE platforms via modular Terraform; authored the production VPC design enforcing PCI-DSS segregation, egress firewall rules, cross-region DR and centralized monitoring.",
        "Migrated multi-service QA environments to GCP; tuned Elasticsearch sharding, heap allocation and query caching for Flipkart Big Billion Days and airline Tatkal traffic peaks.",
        "Shared production on-call and set up Kibana logging across hotel microservices; deployed Debezium change-data-capture (CDC) pipelines for real-time Kafka streaming; embedded Snyk vulnerability scanning into CI/CD.",
        "Worked on a HashiCorp Vault proof of concept before the team moved secrets to Google Secret Manager.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Cleartrip",
      location: "Bangalore, India",
      startDate: "Mar 2020",
      endDate: "May 2021",
      stack: ["Bash", "Kubernetes"],
      highlights: [
        "Automated staging deployments with Bash scripts, resolved Kubernetes ingress DNS/HTTP routing failures and maintained staging environments; converted directly to full-time.",
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
      featured: true,
      badge: "Adopted by other users",
      description:
        "A multi-account email manager with a native Go MCP server so coding agents can use it. Distributed through Homebrew and adopted by other users.",
    },
    {
      title: "kgssh",
      date: "2026",
      techStack: ["Go", "CLI"],
      link: "https://github.com/karangoel59-dev/kgssh",
      category: "Developer tools",
      badge: "Adopted by other users",
      description:
        "An SSH connection launcher for working across remote machines. Distributed through Homebrew and adopted by other users.",
    },
    {
      title: "caddy-mcp-gateway",
      date: "2026",
      techStack: ["Caddy", "Python", "MCP"],
      link: "https://github.com/karangoel59-dev/caddy-mcp-gateway",
      category: "Agent tooling",
      description:
        "Serves several MCP servers behind one HTTPS hostname, with Caddy config and a small Python helper.",
    },
    {
      title: "forward-flow",
      date: "2026",
      techStack: ["Rust", "TypeScript"],
      link: "https://github.com/karangoel59-dev/forward-flow",
      category: "Writing tools",
      description:
        "An append-only writing app: an editor that only moves forward, plus a viewer for sorting, tagging and linking notes.",
    },
    {
      title: "writehere-agents",
      date: "2026",
      techStack: ["Python", "Flask", "LLMs"],
      link: "https://github.com/karangoel59-dev/writehere-agents",
      category: "Agent tooling",
      description:
        "An async Flask REST API with an LLM planner and executor around the open-source WriteHERE recursive-DAG engine (principia-ai), turning a high-level prompt into dependent subtasks and multi-section outputs.",
      status: "Archived",
    },
    {
      title: "Irrational Agents",
      date: "2024–2025",
      techStack: ["JavaScript", "Phaser", "Python", "LangChain", "Azure", "GCP"],
      link: "https://github.com/Irrational-Agents/Agents-Sandbox",
      category: "Team capstone",
      featured: true,
      badge: "Distinction (80)",
      description:
        "Owned the simulation frontend (Phaser/JavaScript) and the socket command API bridging it to the Python/LangChain agent backend; built the agent behaviour, personality and prompt layers. A team MSc capstone, graded Distinction (80).",
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
      techStack: ["C++", "TypeScript", "Node.js", "React"],
      link: "https://github.com/karangoel59-dev/early-work-archive",
      category: "Code archive",
      description:
        "Recovered student projects: C++ game engines and BFS pathfinding, Node.js/Express and GraphQL APIs, React apps, a Messenger booking bot, and early Docker/Jenkins work.",
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
        "Majors: Machine Learning & Big Data, Software Engineering · High Distinctions: Programming & Data Structures (93), Web Development (91).",
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
      "Owned the simulation frontend and the socket command API to the agent backend; built the agent behaviour, personality and prompt layers. Graded Distinction (80).",
  },
  {
    year: "2026",
    title: "Applied AI in production",
    kind: "work",
    dates: "Mar 2026 – Present",
    subtitle: "Agentic AI Engineer · Chat360",
    description:
      "Builds multi-agent runtime features, retrieval, billing and tracing that other engineers adopt; reviews code and mentors engineers.",
  },
];
