const defaultResumeData = {
  profile: {
    name: "Alex Morgan",
    title: "Senior AI & Full-Stack Solutions Architect",
    tagline: "Building scalable AI-driven applications & cloud platform engineering",
    email: "alex.morgan@example.com",
    phone: "+1 (555) 019-2834",
    location: "San Francisco, CA (Open to Remote)",
    website: "https://alexmorgan.dev",
    github: "https://github.com/alexmorgan",
    linkedin: "https://linkedin.com/in/alexmorgan-dev",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    summary: "Senior Architect with 8+ years of experience leading cross-functional engineering teams in building high-throughput web applications, LLM agents, and distributed cloud services. Passionate about crisp user interfaces, automated developer tooling, and clean architecture."
  },
  highlights: [
    { label: "Years Experience", value: "8+" },
    { label: "Production Deploys", value: "120+" },
    { label: "Cloud Cost Saved", value: "35%" },
    { label: "Team Size Led", value: "14" }
  ],
  experience: [
    {
      company: "NovaSmart Technologies",
      role: "Principal AI Platform Architect",
      period: "2023 — Present",
      location: "San Francisco, CA",
      description: "Spearheaded the enterprise AI Platform initiative, building multi-agent governance frameworks and automated developer pipelines.",
      bulletPoints: [
        "Architected enterprise multi-agent workflows serving 500k+ daily queries with sub-second latency.",
        "Engineered RAG retrieval system using Vertex AI & Vector Search, boosting retrieval precision by 42%.",
        "Established CI/CD deployment pipelines on GCP Cloud Run & Kubernetes, reducing deployment cycle times from days to minutes."
      ],
      skills: ["Python", "TypeScript", "Google Cloud", "Vertex AI", "Docker", "Kubernetes"]
    },
    {
      company: "Apex Cloud Labs",
      role: "Lead Full-Stack Engineer",
      period: "2020 — 2023",
      location: "San Jose, CA",
      description: "Led team of 8 engineers delivering real-time analytics dashboards and developer platform APIs.",
      bulletPoints: [
        "Migrated monolithic frontend infrastructure to modern micro-frontends with Vite & React, improving page load speeds by 65%.",
        "Designed GraphQL and REST API gateways processing 10M+ daily events with 99.99% uptime.",
        "Mentored junior and mid-level engineers, running internal architecture workshops and code reviews."
      ],
      skills: ["React", "Node.js", "GraphQL", "PostgreSQL", "Redis", "TailwindCSS"]
    },
    {
      company: "DevPulse Systems",
      role: "Senior Software Engineer",
      period: "2017 — 2020",
      location: "Austin, TX",
      description: "Developed cloud-native developer tooling and microservices for automated code compliance.",
      bulletPoints: [
        "Built automated static analysis engine integrating with GitHub Webhooks for real-time security scanning.",
        "Optimized database query performance across multi-tenant PostgreSQL clusters, decreasing latency by 50%."
      ],
      skills: ["Go", "TypeScript", "AWS", "PostgreSQL", "Docker", "REST APIs"]
    }
  ],
  projects: [
    {
      title: "Agentic UI Studio",
      subtitle: "Open-Source AI Agent Interface Kit",
      description: "A lightweight, high-performance UI toolkit for rendering agentic workflows, A2UI cards, and streaming LLM responses in real-time.",
      link: "https://github.com/alexmorgan/agentic-ui-studio",
      tags: ["TypeScript", "Web Components", "A2UI", "CSS Glassmorphism"],
      featured: true
    },
    {
      title: "CloudMatrix Engine",
      subtitle: "Serverless Resource Optimizer",
      description: "CLI tool and dashboard that analyzes cloud infrastructure usage patterns to auto-scale and prune idle cloud instances.",
      link: "https://github.com/alexmorgan/cloud-matrix",
      tags: ["Python", "GCP", "AWS", "Terraform"],
      featured: true
    },
    {
      title: "FastVector DB",
      subtitle: "In-Memory Embeddings Index",
      description: "Minimalist vector indexing engine optimized for edge browsers and lightweight Node.js runtimes.",
      link: "https://github.com/alexmorgan/fast-vector-db",
      tags: ["C++", "WebAssembly", "JavaScript"],
      featured: false
    }
  ],
  skillCategories: [
    {
      category: "Frontend & UI Design",
      items: [
        { name: "JavaScript / TypeScript", level: 95 },
        { name: "HTML5 / Vanilla CSS Design Systems", level: 98 },
        { name: "React / Next.js / Vite", level: 90 },
        { name: "Responsive & Print Typography", level: 92 }
      ]
    },
    {
      category: "Backend & Systems",
      items: [
        { name: "Python / FastAPI / Flask", level: 92 },
        { name: "Node.js / Express / GraphQL", level: 88 },
        { name: "Go (Golang)", level: 82 },
        { name: "PostgreSQL / Redis / Vector DBs", level: 88 }
      ]
    },
    {
      category: "AI, ML & Cloud Platform",
      items: [
        { name: "Google Cloud Platform (GCP)", level: 90 },
        { name: "LLM Agents & Prompt Engineering", level: 94 },
        { name: "Docker / Kubernetes / CI/CD", level: 86 },
        { name: "Terraform / Infrastructure as Code", level: 80 }
      ]
    }
  ],
  education: [
    {
      degree: "B.S. in Computer Science & Artificial Intelligence",
      institution: "University of California, Berkeley",
      period: "2013 — 2017",
      details: "Graduated with Honors. Focus on Distributed Systems, Algorithms, and Machine Learning."
    }
  ],
  certifications: [
    {
      title: "Google Cloud Certified — Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2023"
    },
    {
      title: "AWS Certified Solutions Architect — Associate",
      issuer: "Amazon Web Services",
      year: "2021"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = defaultResumeData;
}
