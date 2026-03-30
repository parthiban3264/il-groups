"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  Activity,
  Award,
  BarChart3,
  BadgeCheck,
  Bolt,
  Clock3,
  ContactRound,
  Lightbulb,
  Lock,
  type LucideIcon,
} from "lucide-react";
import "./Home.css";

type Metric = {
  label: string;
  value: string;
  fill: string;
};

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const stats = [
  { value: "500+", label: "Projects Done" },
  { value: "200+", label: "Expert Team" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Years Experience" },
];

const metrics: Metric[] = [
  { label: "Revenue Growth", value: "+84%", fill: "84%" },
  { label: "Client Retention", value: "97%", fill: "97%" },
  { label: "Projects Active", value: "142", fill: "71%" },
  { label: "Team Size", value: "214", fill: "78%" },
];

const features: Feature[] = [
  {
    icon: Award,
    title: "Award Winning",
    description:
      "Recognized across 20+ national and international platforms for excellence in innovation and service delivery.",
  },
  {
    icon: ContactRound,
    title: "Expert Team",
    description:
      "A diverse team of 200+ skilled professionals dedicated to building world-class digital solutions for enterprises.",
  },
  {
    icon: Clock3,
    title: "24/7 Support",
    description:
      "Round-the-clock dedicated support ensuring your systems run flawlessly with zero downtime commitments.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "Cutting-edge R&D ensures clients always stay ahead with the latest technology trends and solutions.",
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security protocols and ISO-certified processes for maximum data protection and compliance.",
  },
  {
    icon: BarChart3,
    title: "Proven Results",
    description:
      "Over 500 successful projects with measurable ROI improvements averaging 3x for our enterprise clients.",
  },
];

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const featuresRef = useRef<HTMLElement | null>(null);
  const ctaRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setHeroVisible(true), 120);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === featuresRef.current) {
              setFeaturesVisible(true);
            }
            if (entry.target === ctaRef.current) {
              setCtaVisible(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="home-page" aria-label="Home section">
      <div className="home-grid-overlay" />
      <div className="home-gradient-glow home-gradient-top" />
      <div className="home-gradient-glow home-gradient-bottom" />

      <div className="home-container">
        <section className={`home-hero ${heroVisible ? "is-visible" : ""}`}>
          <div className="home-left">
            <p className="home-pill home-seq" style={{ "--delay": "0.05s" } as CSSProperties}>
              <span className="home-pill-dot" />
              WELCOME TO I GROUPS
            </p>

            <h1 className="home-main-title home-seq" style={{ "--delay": "0.12s" } as CSSProperties}>
              Build Your Career.
              <br />
              Become a Leader.
              <br />
              <span>Create Your Future.</span>
            </h1>

            <p className="home-description home-seq" style={{ "--delay": "0.18s" } as CSSProperties}>
              Welcome to I Groups Business Training Centre, a fast-growing training network
              established in 2021, headquartered in Pudukkottai and expanding across Tamil Nadu.
            </p>

            <p className="home-description home-seq" style={{ "--delay": "0.24s" } as CSSProperties}>
              We specialize in developing individuals into confident professionals, skilled
              managers, and successful entrepreneurs through structured training and real-world
              exposure.
            </p>

            <div className="home-action-row home-seq" style={{ "--delay": "0.3s" } as CSSProperties}>
              <a href="/internship" className="home-apply-btn">
                Apply now
              </a>
            </div>
          </div>

          <div className="home-right">
            <article className="home-dashboard-card" aria-label="Business performance dashboard">
              <header className="home-dashboard-header">
                <span className="home-dashboard-icon" aria-hidden="true">
                  <Activity size={16} />
                </span>
                <div>
                  <h2>Business Performance</h2>
                  <p>Q4 2024 - Live Dashboard</p>
                </div>
              </header>

              <div className="home-metric-grid">
                {metrics.map((item) => (
                  <article key={item.label} className="home-metric-card">
                    <p>{item.label}</p>
                    <h3>{item.value}</h3>
                    <div className="home-progress-track">
                      <span
                        className="home-progress-fill"
                        style={{ "--fill": item.fill } as CSSProperties}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </article>

            <div className="home-floating-badge home-floating-top">
              <span className="home-floating-icon" aria-hidden="true">
                <Bolt size={14} />
              </span>
              <strong>24/7 Active</strong>
              <span>Support Online</span>
            </div>
            <div className="home-floating-badge home-floating-bottom">
              <span className="home-floating-icon" aria-hidden="true">
                <BadgeCheck size={14} />
              </span>
              <strong>Top Rated 2024</strong>
              <span>Clutch Global Awards</span>
            </div>
          </div>
        </section>

        <section className={`home-stat-strip ${heroVisible ? "is-visible" : ""}`}>
          {stats.map((item) => (
            <article key={item.label} className="home-stat-item">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </article>
          ))}
        </section>

        <section
          ref={featuresRef}
          className={`home-why-section ${featuresVisible ? "is-visible" : ""}`}
          aria-label="Why choose us"
        >
          <div className="home-why-head">
            <p className="home-pill home-pill-center home-why-pill">WHY CHOOSE US</p>
            <h2 className="home-why-title">
              Driving Innovation and Growth
              <br />
              for <span>Your Career</span>
            </h2>
            <p className="home-why-subtitle">
              We combine deep expertise, proven methodologies, and relentless passion to deliver
              results that matter.
            </p>
          </div>

          <div className="home-feature-grid">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="home-feature-card"
                  style={{ "--delay": `${index * 0.08}s` } as CSSProperties}
                >
                  <span className="home-feature-icon" aria-hidden="true">
                    <Icon size={17} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          ref={ctaRef}
          className={`home-cta-section ${ctaVisible ? "is-visible" : ""}`}
          aria-label="Call to action"
        >
          <div className="home-cta-card">
            <p className="home-pill home-pill-center">GET STARTED TODAY</p>
            <h2>
              Ready to Transform <span>Your Career</span>
            </h2>
            <p>
              Join 500+ companies that trust I Groups to power their digital future.
            </p>
            <button type="button" className="home-outline-btn">
              Join Our Team
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
