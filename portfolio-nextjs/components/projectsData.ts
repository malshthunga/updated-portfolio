export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

export type Category = "@analytics" | "@software" | "@it";

export type Project = {
  category: Category;
  badge: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  href: string;
  media?: MediaItem[];
  placeholder?: boolean;
};

export const projects: Project[] = [
  // --- DATA ANALYTICS ---
  {
    category: "@analytics",
    badge: "81% accuracy",
    title: "Closed-Loop EEG Brain Stimulation Controller",
    description: "Trained a model to predict neural state changes from EEG data, achieving 81% accuracy.",
    longDescription: "Built a closed-loop system that reads live EEG signal, classifies neural state in real time, and triggers stimulation adjustments automatically. The pipeline covers signal cleaning, feature extraction, and a trained classifier that hit 81% accuracy on held-out sessions.",
    tags: ["Python", "Signal Processing", "Machine Learning"],
    href: "https://github.com/malshthunga/Closed-loop-Brain-Stimulation-Controller-Using-Machine-Learning-Sprint-2",
    media: [
      { type: "image", src: "/assets/closed-loop-eeg.png", alt: "EEG signal traces" }
    ]
  },
  {
    category: "@analytics",
    badge: "Retention strategy",
    title: "Customer Segmentation & Recommendations",
    description: "Data-driven Power BI dashboard highlighting key customer personas and retention strategies.",
    longDescription: "Segmented the customer base into distinct personas using RFM analysis and k-means clustering, then built a Power BI dashboard so the retention team could see which segments were at risk and what offers historically worked for each.",
    tags: ["Python", "scikit-learn", "Power BI"],
    href: "https://github.com/malshthunga/Customer-Segmentation-Analysis",
    media: [
      { type: "image", src: "/assets/customer-segmentation-dashboard.png", alt: "Segmentation Overview" },
      { type: "image", src: "/assets/business-overview-dashboard.png", alt: "Churn Reason Breakdown" }
    ]
  },
  {
    category: "@analytics",
    badge: "27% churn reduction",
    title: "Churn Analysis",
    description: "Built a Random Forest model to predict at-risk customers and inform retention strategy.",
    longDescription: "Analyzed churn drivers across thousands of customer records, deployed predictive ML models, and visualized key risk factors to enable targeted retention campaigns.",
    tags: ["Python", "scikit-learn", "Power BI"],
    href: "https://github.com/malshthunga/Customer-Churn-Segmentation",
    media: [
      { type: "image", src: "/assets/churn-analysis-dashboard.png", alt: "Churn Analysis" },
      { type: "image", src: "/assets/churn-reason-dashboard.png", alt: "Churn Reason Breakdown" }
    ]
  },
  {
    category: "@analytics",
    badge: "Dashboard",
    title: "Sales Insights Dashboard",
    description: "Interactive Excel dashboard summarising sales performance, product trends, and regional hits.",
    tags: ["Excel", "Power Pivot", "Data Analysis"],
    href: "https://github.com/malshthunga/Sales-Insights-Dashboard",
    media: [
      { type: "image", src: "/assets/sales-insight-dashboard.jpg", alt: "Sales Insights" }
    ]
  },


// --- SOFTWARE ENGINEERING ---
 // --- SOFTWARE ENGINEERING ---
  {
    category: "@software",
    badge: "Interactive Frontend",
    title: "Interactive Live Game Web Experience",
    description: "Built responsive Next.js and React interfaces to power real-time interactive game states.",
    longDescription: "Engineered high-performance web components and real-time state synchronization using Next.js and React. Developed user-facing game interfaces connected to a backend infrastructure designed for dynamic user interaction.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    href: "https://github.com/malshthunga/magical-interactive-experience",
    media: [
      { type: "video", src: "/assets/walkthrough-recording.mp4" },
      { type: "image", src: "/assets/webpage-0.png", alt: "mirrorxr home" },
      { type: "image", src: "/assets/webpage-01.png", alt: "mirrorxr avatar" },
      { type: "image", src: "/assets/webpage-001.png", alt: "mirrorxr waiting" },
      { type: "image", src: "/assets/webpage-1.png", alt: "mirrorxr avatar" }
    ]
  },
  {
    category: "@software",
    badge: "System Design",
    title: "Platform Data Models & System Architecture",
    description: "Designed comprehensive data schemas, AV routing workflows, and Miro system architecture flows.",
    longDescription: "Architected the backend data models and audio-visual pipeline diagrams for multi-platform integration. Created clear technical visual specifications using Miro to define data flow boundaries, database relationships, and real-time media transport across systems.",
    tags: ["System Architecture", "PostgreSQL", "Data Modeling", "Miro", "AV Design"],
    href: "https://github.com/yourname/system-architecture-docs",
    media: [
      { type: "image", src: "/assets/av-data-model-diagram.png", alt: "AV and Data Model System Flow" },
      { type: "image", src: "/assets/miro-architecture-flow.png", alt: "Miro Platform Flow Architecture" }
    ]
  },

  // --- IT SUPPORT ---
  {
    category: "@it",
    badge: "LMS Admin & Technical Docs",
    title: "Learning Management System",
    description: "Configured LearnWorlds platform, produced user support documentation, and recorded feature guides.",
    longDescription: "Managed backend configuration for the LearnWorlds LMS platform. Authored end-user technical support documentation and produced video walkthrough guides to streamline user onboarding, platform troubleshooting, and operational workflows.",
    tags: ["LearnWorlds", "Technical Writing", "LMS Admin", "Video Documentation", "User Support"],
    href: "https://github.com/yourname/lms-support-docs",
    media: [
      { type: "video", src: "/assets/learnworlds-walkthrough.mp4" },
      { type: "image", src: "/assets/lms-support-guide-preview.png", alt: "Technical Support Documentation" }
    ]
  }
];