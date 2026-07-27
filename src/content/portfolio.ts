import {
  NavSectionId,
  SkillCategory,
  SocialPlatform,
  SystemScale,
  type PortfolioContent,
} from "@/content/types";

export const portfolio: PortfolioContent = {
  profile: {
    name: "Kushal Kumar Rajak",
    role: "Software Engineer · Cloud-native & GenAI",
    location: "Gurugram, India",
    tagline:
      "I build scalable Spring Boot microservices, REST APIs, and cloud-native infrastructure on Docker, Kubernetes, and AWS.",
    bio: "Software engineer with ~5 years shipping backend systems—REST APIs, microservices, and cloud-native deployments. Currently at Ginesys focusing on cloud-native microservices and GenAI-enabled platforms. Previously built high-performance Spring Boot services at Emiza and full-stack backend + security work at DIATOZ.",
    email: "kushalrajak1999@gmail.com",
    phone: "+91-9861693169",
    avatarUrl: "/avatars/avatar.png",
    resumeUrl: "/resume.pdf",
    focusAreas: [
      {
        title: "Backend APIs",
        description:
          "Spring Boot REST services, clean architecture, and maintainable domain layers.",
      },
      {
        title: "Cloud-native infra",
        description:
          "Docker, Kubernetes, and AWS for containerized deploys and orchestration.",
      },
      {
        title: "Distributed systems",
        description:
          "Kafka-driven services, fault-tolerant designs, and large-scale traffic readiness.",
      },
      {
        title: "Security & GenAI",
        description:
          "Secure delivery practices plus exploring GenAI-assisted product capabilities.",
      },
    ],
    socials: [
      {
        platform: SocialPlatform.GitHub,
        label: "GitHub",
        href: "https://github.com/kush987",
      },
      {
        platform: SocialPlatform.LinkedIn,
        label: "LinkedIn",
        href: "https://linkedin.com/in/kushalrajak",
      },
      {
        platform: SocialPlatform.Email,
        label: "Email",
        href: "mailto:kushalrajak1999@gmail.com",
      },
    ],
  },
  nav: [
    { id: NavSectionId.About, label: "About" },
    { id: NavSectionId.Experience, label: "Experience" },
    { id: NavSectionId.Systems, label: "Systems" },
    { id: NavSectionId.Skills, label: "Skills" },
    { id: NavSectionId.Contact, label: "Contact" },
  ],
  experience: [
    {
      id: "exp-ginesys",
      company: "Ginesys",
      role: "Software Engineer",
      location: "Gurugram",
      startDate: "May 2025",
      endDate: "Present",
      summary:
        "Building and deploying cloud-native microservices with a focus on REST APIs, container orchestration, and GenAI-enabled product capabilities.",
      highlights: [
        "Ship cloud-native microservices using Docker and Kubernetes for reliable containerized delivery.",
        "Design and maintain REST APIs that integrate with platform services and GenAI workflows.",
        "Collaborate on infrastructure and backend reliability for production retail/enterprise workloads.",
      ],
      stack: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "Docker",
        "Kubernetes",
        "GenAI",
        "Microservices",
      ],
    },
    {
      id: "exp-emiza",
      company: "Emiza Inc.",
      role: "Software Engineer",
      location: "Gurugram",
      startDate: "Mar 2024",
      endDate: "May 2025",
      summary:
        "Designed, developed, and maintained scalable, high-performance backend systems with Spring Boot on AWS.",
      highlights: [
        "Built fault-tolerant distributed services aimed at large-scale traffic with reliability and security in mind.",
        "Deployed and managed services on AWS using Docker for containerization and Kubernetes for orchestration.",
        "Optimized backend performance while keeping APIs secure and maintainable for production use.",
      ],
      stack: [
        "Java",
        "Spring Boot",
        "AWS",
        "Docker",
        "Kubernetes",
        "Microservices",
        "Distributed systems",
      ],
    },
    {
      id: "exp-diatoz",
      company: "DIATOZ: Digital A to Z Solutions",
      role: "Software Engineer & Cyber Security Analyst",
      location: "Gurugram",
      startDate: "Dec 2021",
      endDate: "Feb 2024",
      summary:
        "Delivered backend systems and security-focused engineering across product work—APIs, data stores, messaging, and secure deployment practices.",
      highlights: [
        "Developed backend services with Spring Boot / Node and data layers on PostgreSQL and MongoDB.",
        "Worked with AWS, Docker, Kafka, and CI/CD for cloud-native delivery and event-driven flows.",
        "Contributed as Cyber Security Analyst on network security, secure development, and risk-aware releases.",
      ],
      stack: [
        "Java",
        "Spring Boot",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "Kafka",
        "AWS",
        "Docker",
        "Cybersecurity",
      ],
    },
  ],
  systems: [
    {
      id: "sys-rcloud",
      name: "RCloud platform",
      scale: SystemScale.Platform,
      description:
        "Cloud platform UI and backend API for provisioning and managing cloud-style workloads.",
      problem:
        "Needed a hands-on full-stack cloud platform to practice product APIs, auth, and service boundaries end to end.",
      outcome:
        "Shipped paired frontend and backend repos (RCloud) with a working API surface for platform operations.",
      stack: ["TypeScript", "JavaScript", "REST APIs", "Node.js"],
      metrics: [
        { label: "Repos", value: "2" },
        { label: "Focus", value: "Full-stack" },
        { label: "Domain", value: "Cloud" },
      ],
      links: [
        {
          platform: SocialPlatform.GitHub,
          label: "Frontend",
          href: "https://github.com/kush987/cloud-platform",
        },
        {
          platform: SocialPlatform.GitHub,
          label: "Backend API",
          href: "https://github.com/kush987/cloud-platform-backend",
        },
      ],
    },
    {
      id: "sys-kafka-location",
      name: "Kafka location pipeline",
      scale: SystemScale.Pipeline,
      description:
        "Producer/consumer microservices that publish and subscribe to location-update topics on Apache Kafka.",
      problem:
        "Synchronous APIs alone don’t scale well for streaming location updates across independent services.",
      outcome:
        "Decoupled producer and consumer services over Kafka topics for asynchronous location event processing.",
      stack: ["Java", "Apache Kafka", "Microservices", "Spring"],
      metrics: [
        { label: "Services", value: "2" },
        { label: "Pattern", value: "Pub/Sub" },
        { label: "Broker", value: "Kafka" },
      ],
      links: [
        {
          platform: SocialPlatform.GitHub,
          label: "Producer",
          href: "https://github.com/kush987/kafka-producer-end",
        },
        {
          platform: SocialPlatform.GitHub,
          label: "Consumer",
          href: "https://github.com/kush987/kafka-end-user",
        },
      ],
    },
    {
      id: "sys-multipass-k8s",
      name: "Local multi-node Kubernetes",
      scale: SystemScale.Infrastructure,
      description:
        "Multipass-based local VMs to simulate Kubernetes clusters and practice application deployment.",
      problem:
        "Cloud K8s labs are costly; developers need a lightweight on-laptop cluster for learning and demos.",
      outcome:
        "Documented Multipass + K8s workflow for local clusters, Docker isolation, and on-prem-like practice.",
      stack: ["Kubernetes", "Multipass", "Docker", "Shell", "Linux"],
      metrics: [
        { label: "Env", value: "Local" },
        { label: "Tooling", value: "Multipass" },
        { label: "Focus", value: "DevOps" },
      ],
      links: [
        {
          platform: SocialPlatform.GitHub,
          label: "Repo",
          href: "https://github.com/kush987/multiples-k8s",
        },
      ],
    },
    {
      id: "sys-springboot-clean",
      name: "Spring Boot clean API",
      scale: SystemScale.Service,
      description:
        "Spring Boot service focused on clean code, solid structure, and good backend practices.",
      problem:
        "Learning projects often skip layering and maintainability, making APIs hard to extend.",
      outcome:
        "A practice codebase emphasizing clean architecture, readable modules, and Spring Boot conventions.",
      stack: ["Java", "Spring Boot", "REST APIs", "Clean architecture"],
      metrics: [
        { label: "Style", value: "Clean" },
        { label: "Runtime", value: "JVM" },
        { label: "Focus", value: "Backend" },
      ],
      links: [
        {
          platform: SocialPlatform.GitHub,
          label: "Repo",
          href: "https://github.com/kush987/springboot-clean",
        },
      ],
    },
  ],
  skills: [
    {
      category: SkillCategory.Languages,
      items: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "Bash"],
    },
    {
      category: SkillCategory.Datastores,
      items: ["PostgreSQL", "MongoDB", "Mongo Atlas", "Redis", "Sequelize"],
    },
    {
      category: SkillCategory.Messaging,
      items: ["Apache Kafka", "AWS SNS", "Event-driven services"],
    },
    {
      category: SkillCategory.Cloud,
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Multipass"],
    },
    {
      category: SkillCategory.Observability,
      items: [
        "Logging",
        "Health checks",
        "Secure deployments",
        "Traffic management",
      ],
    },
    {
      category: SkillCategory.Practices,
      items: [
        "Spring Boot / Spring Framework",
        "Microservices",
        "REST API design",
        "Clean architecture",
        "Cybersecurity fundamentals",
        "GenAI exploration",
      ],
    },
  ],
  contact: {
    heading: "Let's talk systems",
    description:
      "Open to backend, cloud-native, and platform engineering conversations—Spring Boot, Kubernetes, Kafka, and GenAI-enabled products.",
    ctaLabel: "Email me",
  },
};
