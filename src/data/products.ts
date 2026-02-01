import { Package, Heart, Smartphone, Monitor, Truck, Users, Bell, MessageCircle, Activity, Shield, BarChart3, ClipboardList, UserCheck, HeartHandshake, Brain, Link } from "lucide-react";

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  features: Feature[];
  benefits: string[];
  color: string;
  status: "launching-soon" | "available";
}

export const products: Product[] = [
  {
    id: "orderly",
    name: "Orderly",
    tagline: "Streamline your distribution, amplify your sales",
    description: "A complete Distribution Management System with a powerful web admin portal and dedicated mobile apps for your sales team and delivery personnel.",
    longDescription: "Orderly is an end-to-end order and inventory management solution designed for modern distribution businesses. It connects your entire supply chain—from warehouse managers to field sales representatives to delivery drivers—through a unified, real-time platform that eliminates manual errors and accelerates order fulfillment.",
    icon: Package,
    color: "from-blue-500 to-indigo-500",
    status: "launching-soon",
    features: [
      {
        icon: Monitor,
        title: "Admin Web Portal",
        description: "Centralized dashboard for inventory tracking, order management, analytics, and complete business oversight."
      },
      {
        icon: Smartphone,
        title: "Salesperson Mobile App",
        description: "Empower your field sales team to place orders, check stock availability, and manage customer relationships on the go."
      },
      {
        icon: Truck,
        title: "Delivery App",
        description: "Optimized routing, real-time delivery tracking, proof of delivery, and seamless communication with dispatch."
      },
      {
        icon: BarChart3,
        title: "Real-Time Analytics",
        description: "Track sales performance, inventory turnover, and delivery efficiency with actionable insights."
      }
    ],
    benefits: [
      "Unified platform",
      "Real-time inventory sync",
      "Route optimization",
      "Order tracking",
      "Multi-location support"
    ]
  },
  {
    id: "dilcare",
    name: "DilCare",
    tagline: "Because distance shouldn't mean disconnect",
    description: "An all-in-one eldercare ecosystem that automates health tracking, medication reminders, and emergency alerts—giving peace of mind to families caring from afar.",
    longDescription: "DilCare bridges the gap between busy adult children and their aging parents living alone. Built on React Native for high performance, it replaces complex health apps with voice-first interactions and emotionally intuitive design, making technology feel supportive rather than intimidating.",
    icon: Heart,
    color: "from-rose-500 to-pink-500",
    status: "launching-soon",
    features: [
      {
        icon: Brain,
        title: "AI Health Companion",
        description: "Talks gently, answers questions in simple words, and reminds parents about their health without sounding bossy or robotic."
      },
      {
        icon: Link,
        title: "Parent-Child Account Linking",
        description: "Parents and children can link accounts, enabling children to monitor medication adherence, health alerts, and daily well-being through a single dashboard."
      },
      {
        icon: Users,
        title: "Community Connection",
        description: "DilCare connects parents with others on similar journeys, making healthy routines feel shared, not lonely."
      },
      {
        icon: HeartHandshake,
        title: "Emotional-First UX",
        description: "Designed to feel calm, friendly, and reassuring—reducing stress instead of increasing it, unlike clinical health apps."
      }
    ],
    benefits: [
      "Daily health tracking",
      "Medication reminders",
      "Emergency alerts",
      "Voice-first interface",
      "Family dashboard"
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
