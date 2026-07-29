export type Project = {
  category: "@analytics" | "@software" | "@it";
  badge: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  placeholder?: boolean;
};

export const tabs = [
  { key: "data", label: "Data Analytics", tools: "Python · SQL · scikit-learn · Power BI · Excel" },
  { key: "software", label: "Software Engineering", tools: "Java · Spring Boot · REST APIs · Git" },
  { key: "it", label: "IT Support", tools: "Documentation · System Admin · LMS · Troubleshooting" },
] as const;

export type TabKey = (typeof tabs)[number]["key"];

export const projects: Record<TabKey, Project[]> = {
  data: [
    {
      category: "@analytics",
      badge: "81% accuracy",
      title: "Closed-Loop EEG Brain Stimulation Controller",
      description:
        "Trained a model to predict neural state changes from EEG data, achieving 81% accuracy.",
      tags: ["Python", "Signal Processing", "Machine Learning"],
      href: "#",
    },
    {
      category: "@analytics",
      badge: "Retention strategy",
      title: "Customer Segmentation & Recommendations",
      description:
        "Data-driven Power BI dashboard highlighting key customer personas and retention strategies.",
      tags: ["Python", "scikit-learn", "Power BI"],
      href: "#",
    },
    {
      category: "@analytics",
      badge: "27% churn reduction",
      title: "Customer Churn Segmentation",
      description:
        "Built a Random Forest model to predict at-risk customers and inform retention strategy.",
      tags: ["Python", "scikit-learn", "Power BI"],
      href: "#",
    },
    {
      category: "@analytics",
      badge: "Dashboard",
      title: "Sales Insights Dashboard",
      description:
        "Interactive Excel dashboard summarising sales performance, product trends, and regional insights.",
      tags: ["Excel", "PivotTables", "XLOOKUP"],
      href: "#",
    },
  ],
  software: [
    {
      category: "@software",
      badge: "[Update: result]",
      title: "[Update: LMS Platform — Software Engineering Internship]",
      description: "[Update: short description of the internship project and your role.]",
      tags: ["Java", "Spring Boot"],
      href: "#",
      placeholder: true,
    },
    {
      category: "@software",
      badge: "[Update: result]",
      title: "[Update: Spring Boot REST API]",
      description: "[Update: short description of what the API does and its purpose.]",
      tags: ["Java", "Spring Boot", "REST"],
      href: "#",
      placeholder: true,
    },
    {
      category: "@software",
      badge: "[Update: result]",
      title: "[Update: Java Project Title]",
      description: "[Update: short description of the Java project.]",
      tags: ["Java"],
      href: "#",
      placeholder: true,
    },
  ],
  it: [
    {
      category: "@it",
      badge: "Internship",
      title: "LearnWorlds LMS Support",
      description: "Created technical documentation and supported onboarding of new users.",
      tags: ["Documentation", "LMS", "Support"],
      href: "#",
    },
  ],
};
