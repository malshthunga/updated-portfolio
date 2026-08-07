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
  {
    category: "@software",
    badge: "Full-Stack",
    title: "Interactive Learning & Progress Platform",
    description: "Architected and built full-stack web application with modular components and real-time state sync.",
    longDescription: "Designed an interactive learning portal featuring progress tracking, responsive dashboards, and seamless frontend-backend integration.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    href: "https://github.com/yourname/learning-platform",
    media: [
      { type: "image", src: "/assets/business-overview-dashboard.png", alt: "Platform View" }
    ]
  },

  // --- IT SUPPORT ---
  {
    category: "@it",
    badge: "Systems & Network",
    title: "IT Support & System Operations Automation",
    description: "Configured local environment workflows, domain management scripts, and troubleshooting protocols.",
    longDescription: "Streamlined routine systems administration tasks using automated scripts, user permissions management, and diagnostic logging tools.",
    tags: ["Active Directory", "PowerShell", "Networking"],
    href: "https://github.com/yourname/it-automation",
    media: [
      { type: "image", src: "/assets/university-logo.jpg", alt: "System Architecture" }
    ]
  }
];