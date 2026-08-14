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

  {
  category: "@analytics",
  badge: "36% RMSE improvement",
  title: "Bike Rental Demand Forecast",
  description: "Forecasted hourly bike rental demand in Seoul using regression models, cutting prediction error well below a mean-baseline model.",
  longDescription: "Cleaned and engineered a real-world dataset of 8,760 hourly bike rental records — handling out-of-range sensor values, missing data, and converting categorical features (Season, Holiday, Weekday) into numerical form via a scikit-learn preprocessing pipeline. Compared Linear Regression, Kernel Ridge, and Support Vector Regression models using 10-fold cross-validation and grid search for hyperparameter tuning. The best model (Linear Regression) reduced RMSE to ~440 versus a ~646 baseline (predicting the mean), with temperature, season, and hour of day emerging as the strongest predictors of demand.",
  tags: ["Python", "scikit-learn", "Regression", "Feature Engineering"],
  href: "https://github.com/malshthunga/Machine-Learning-Projects/tree/main/Bike%20Rental%20Demand%20Forecast",
  media: [
    { type: "image", src: "/assets/forecast11.png", alt: "Bike rental demand — predicted vs actual scatter plot" },
    { type: "image", src: "/assets/forecast1.png", alt: "Bike rental demand — predicted vs actual scatter plot" },
    { type: "image", src: "/assets/forecast2.png", alt: "Bike rental demand — predicted vs actual scatter plot" },
    { type: "image", src: "/assets/forecast3.png", alt: "Bike rental demand — predicted vs actual scatter plot" },
  ]
},
{
  category: "@analytics",
  badge: "Data Structures & Algorithms",
  title: "KD-Tree Nearest Neighbor Classifier",
  description: "Built a 1-Nearest-Neighbor classifier from scratch using a k-d tree, optimizing nearest-neighbor search over brute-force comparison.",
  longDescription: "Implemented a k-d tree (k-dimensional tree) from scratch in Python to speed up 1-Nearest-Neighbor classification — recursively partitioning the training data by splitting dimension, then using tree pruning to search for the nearest neighbor far more efficiently than a brute-force linear scan. Handled deterministic tie-breaking by label value and built the classifier to run from the command line on arbitrary whitespace-delimited training/test datasets.",
  tags: ["Python", "Data Structures", "Algorithms", "k-NN"],
  href: "https://github.com/malshthunga/Machine-Learning-Projects/tree/main/ND%20Tree%20Using%20Random%20Forest",
  media: [
    { type: "image", src: "/assets/kdtree1.png", alt: "KD-tree classifier output" },
  ]
},

{
  category: "@analytics",
  badge: "96.6% F1 · 99.3% AUC",
  title: "Breast Cancer Diagnosis Classifier",
  description: "Built a classifier to detect malignant tumours from histological cell measurements, benchmarked against clinical baselines.",
  longDescription: "Framed as a real client scenario for a pathology lab, this project compares four classification models — KNN, Decision Tree, SVC, and SGD — using grid search and cross-validation to tune hyperparameters. Selected the evaluation metric (F1) based on the clinical cost of false negatives in cancer diagnosis, then benchmarked every model against simple baselines to prove genuine predictive value. The final K-Nearest Neighbours model, retrained on the full training set, achieved 96.6% recall, 96.6% precision, 96.6% F1, and 99.3% AUC on held-out test data — correctly balancing the need to catch malignant cases without over-flagging benign ones.",
  tags: ["Python", "scikit-learn", "Classification", "Model Selection"],
  href: "https://github.com/malshthunga/Machine-Learning-Projects/tree/main/Breast%20Cancer%20Detection%20ML",
  media: [
    { type: "image", src: "/assets/breastcancer1.png", alt: "Confusion matrix and model comparison" },
  ]
},



 // --- SOFTWARE ENGINEERING ---
   {
    category: "@software",
    badge: "Learning Management System",
    title: "Learnworld Learning Management System",
    description: "Built LMS for St Peter's Girls School Adelaide, giving students and parents access to courses built around digital wellbeing.",
    longDescription: "Designed and built the course architecture end-to-end — chaptered lessons, quizzes, workshop resources, and completion certificates — across separate student and parent tracks. Live at raisewisely.learnworlds.com.Please scroll through the images in the slides to deep dive into the course structure.",
    tags: ["LearnWorlds", "Course Design", "LMS Architecture", "Digital Wellbeing"],
    href: "https://raisewisely.learnworlds.com/home",
    media: [

      { type: "image", src: "/assets/LW1`.png", alt: "LMS1" },
      { type: "image", src: "/assets/LW2.png", alt: "LMS2" },
      { type: "image", src: "/assets/LW3.jpg", alt: "LMS3" },
      { type: "video", src: "LWrecording1.mp4", alt: "LMSrecording1" },
      { type: "video", src: "LWrecording2.mp4", alt: "LMSrecording2" },
    ]
  },

  {
  category: "@software",
  badge: "QA & Course Architecture",
  title: "LMS Testing & Course Structure Design",
  description: "Planned course architecture and ran structured feature validation testing across the LMS build.",
  longDescription: "Designed the chapter-by-chapter course architecture for both the student and parent tracks — mapping out lesson sequencing, quiz placement, and activity types before build. Ran operational testing against a feature validation log to confirm activities, quizzes, and completion flows worked as intended before launch.",
  tags: ["QA Testing", "Course Design", "LearnWorlds", "Documentation"],
  href: "https://raisewisely.learnworlds.com/home",
  media: [
    { type: "image", src: "/assets/structure1.png", alt: "Course structure and chapter architecture" },
    { type: "image", src: "/assets/structure2.png", alt: "Course structure and chapter architecture" },
    // { type: "image", src: "/assets/structure3.png", alt: "Course structure and chapter architecture" },
    { type: "image", src: "/assets/structure33.png", alt: "Course structure and chapter architecture" },
    { type: "image", src: "/assets/structure34.png", alt: "Course structure and chapter architecture" },
    { type: "image", src: "/assets/structure35.png", alt: "Course structure and chapter architecture" },
    { type: "image", src: "/assets/structure36.png", alt: "Course structure and chapter architecture" },
    { type: "image", src: "/assets/structure4.png", alt: "Course structure and chapter architecture" },
    { type: "image", src: "/assets/structure5.png", alt: "Course structure and chapter architecture" },
    { type: "image", src: "/assets/structure6.png", alt: "Course structure and chapter architecture" },
    { type: "image", src: "/assets/structure7.png", alt: "Course structure and chapter architecture" },
    { type: "image", src: "/assets/structure8.png", alt: "Course structure and chapter architecture" },
    { type: "image", src: "/assets/structure9.png", alt: "Course structure and chapter architecture" },
  ]
},
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
      { type: "image", src: "/assets/av-diagram.png", alt: "AV and Data Model System Flow" },
      { type: "image", src: "/assets/system-architecture-diagram.png", alt: "Miro Platform Flow Architecture" },
      { type: "image", src: "/assets/system-architecture-diagram2.png", alt: "Miro Platform Flow Architecture 2" },
      { type: "image", src: "/assets/system-architecture-diagram3.png", alt: "Miro Platform Flow Architecture 3" },  
      { type: "image", src: "/assets/tools-technologies.png", alt: "Technologies & Tools" }
  
    ]
  },

  {
  category: "@software",
  badge: "Distributed Systems",
  title: "Paxos Council — Distributed Consensus Simulation",
  description: "Simulated the Paxos consensus protocol across 9 peer nodes communicating over TCP, reaching agreement despite delays, latency, and node failures.",
  longDescription: "Built a peer-to-peer simulation of Paxos, one of the foundational algorithms in fault-tolerant distributed systems. Nine council-member nodes (M1–M9) each take on Proposer, Acceptor, and Learner roles, exchanging PREPARE/PROMISE/ACCEPT_REQUEST/ACCEPTED messages over TCP sockets to reach majority agreement (quorum) on a single value — while preserving Paxos's core safety guarantee (no two nodes decide differently) and liveness guarantee (a decision is still reached despite delays or crashes). Simulated real-world network conditions — latency, packet loss, node failure — using configurable node profiles, then validated the system with an integration test suite covering ideal-network, concurrent-proposal, and fault-tolerant scenarios. Built in Java with Maven, using Gson for JSON message serialization and JUnit 5 for unit testing.",
  tags: ["Java", "Distributed Systems", "TCP/IP", "Concurrency", "Maven", "JUnit"],
  href: "https://github.com/malshthunga/Paxos-Consensus-",
  media: [
    { type: "image", src: "/assets/paxos1.png", alt: "Integration testing table — scenarios, expected vs actual output" },
    { type: "image", src: "/assets/paxos2.png", alt:"paxos-council2"}
  ]
},

  // --- IT SUPPORT ---

  {
  category: "@it",
  badge: "Windows Server 2019",
  title: "Active Directory Home Lab",
  description: "Built a self-hosted Active Directory domain controller lab using Windows Server 2019 and Oracle VirtualBox, provisioning 1,000+ test user accounts via PowerShell.",
  longDescription: "Deployed a Windows Server 2019 Domain Controller in Oracle VirtualBox with a dual-NIC configuration — one NIC bridged to the internet via DHCP, the other set to a static internal IP (172.16.0.1/24) for the domain network. Configured core AD roles including DNS and DHCP, then used PowerShell scripting to bulk-provision over 1,000 test user accounts for realistic scale testing. Practiced Group Policy management, organizational unit structuring, and user/computer object administration within a simulated enterprise domain environment.",
  tags: ["Active Directory", "Windows Server", "PowerShell", "VirtualBox", "DNS/DHCP", "Group Policy"],
  href: "#",
  media: [
    { type: "image", src: "/assets/ad-homelab-diagram.png", alt: "Active Directory home lab network diagram" }
  ]
},
  {
  category: "@it",
  badge: "Network Infrastructure",
  title: "Home Network Infrastructure",
  description: "Configured and documented a small business-style home network — NBN modem, router, managed switch, and PoE-powered wireless access point.",
  longDescription: "Set up a layered home network using a Teltonika RUT240 router (WAN to LAN), a switch for wired distribution, and a Ubiquiti UniFi access point powered via a dedicated PoE adapter for wireless coverage. Documented the full topology in a network diagram distinguishing wired (Ethernet/PoE) and wireless (Wi-Fi) connections by line style and color, following standard networking diagram conventions.",
  tags: ["Networking", "Router Configuration", "PoE", "Documentation"],
  href: "#",
  media: [
    { type: "image", src: "/assets/homelab-network-diagram.png", alt: "Home network topology diagram" },
  ]
},

{
  category: "@it",
  badge: "Service Desk Training",
  title: "Service Desk Simulation",
  description: "Practising real-world IT support scenarios — ticket triage, live chat, and account troubleshooting — using ServiceDesk Simulator.",
  longDescription: "Using ServiceDesk Simulator to build hands-on IT Support Specialist skills in a simulated company environment. Handling incident tickets, voice calls, live chat support, and account management scenarios covering common issues such as hardware failures, VPN and network connectivity problems, shared drive access, and account detail changes, developing structured troubleshooting workflows and prioritisation skills consistent with real service desk operations.",
  tags: ["Service Desk", "Ticketing", "Troubleshooting", "Customer Support"],
  href: "#",
  media: [
    { type: "image", src: "/assets/servicedesk-simulator.jpg", alt: "ServiceDesk Simulator ticket queue" }
  ]
},
  {
    category: "@it",
    badge: "LMS Admin & Technical Docs",
    title: "Technical documentation ",
    description: "Configured LearnWorlds platform, produced user support documentation, and recorded feature guides.",
    longDescription: "Managed backend configuration for the LearnWorlds LMS platform. Authored end-user technical support documentation and produced video walkthrough guides to streamline user onboarding, platform troubleshooting, and operational workflows.",
    tags: ["LearnWorlds", "Technical Writing", "LMS Admin", "Video Documentation", "User Support"],
    href: "https://drive.google.com/file/d/1xPnt8pT1w4SjICeG2SbaqCdWsoGw0bGW/view",
    media: [
      { type: "image", src: "/assets/technical-documentation.png", alt: "Technical Support Documentation" }
    ]
  },


];