'use client';

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, Github, Play } from "lucide-react";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

export type Project = {
  category: "@analytics" | "@software" | "@it";
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
  {
    category: "@analytics",
    badge: "81% accuracy",
    title: "Closed-Loop EEG Brain Stimulation Controller",
    description:
      "Trained a model to predict neural state changes from EEG data, achieving 81% accuracy.",
    longDescription:
      "Built a closed-loop system that reads live EEG signal, classifies neural state in real time, and triggers stimulation adjustments automatically. The pipeline covers signal cleaning, feature extraction, and a trained classifier that hit 81% accuracy on held-out sessions.",
    tags: ["Python", "Signal Processing", "Machine Learning"],
    href: "https://github.com/yourname/eeg-closed-loop",
    media: [
      { type: "image", src: "/assets/closed-loop-eeg.png", alt: "EEG signal traces" },
      { type: "image", src: "/assets/business-overview-dashboard.png", alt: "Overview visual" },
    ],
  },
  {
    category: "@analytics",
    badge: "Retention strategy",
    title: "Customer Segmentation & Recommendations",
    description:
      "Data-driven Power BI dashboard highlighting key customer personas and retention strategies.",
    longDescription:
      "Segmented the customer base into distinct personas using RFM analysis and k-means clustering, then built a Power BI dashboard so the retention team could see which segments were at risk and what offers historically worked for each.",
    tags: ["Python", "scikit-learn", "Power BI"],
    href: "https://github.com/yourname/customer-segmentation",
    media: [
      { type: "image", src: "/assets/customer-segmentation-dashboard.png", alt: "Segmentation Overview" },
      { type: "image", src: "/assets/churn-reason-dashboard.png", alt: "Churn Reason Breakdown" },
    ],
  },
];
