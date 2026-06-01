"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { Trophy, Briefcase, TrendingUp, Users } from "lucide-react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const steps = 50;
    const step = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const t = useTranslations("home.stats");

  const stats = [
    { icon: <Trophy size={24} />, value: <><Counter target={30} />+</>, label: t("years") },
    { icon: <Briefcase size={24} />, value: <><Counter target={500} />+</>, label: t("cases") },
    { icon: <TrendingUp size={24} />, value: <><Counter target={97} />%</>, label: t("rate") },
    { icon: <Users size={24} />, value: <><Counter target={600} />+</>, label: t("clients") },
  ];

  return (
    <section
      className="py-20 lg:py-24 relative"
      style={{ background: "var(--bg-section-alt)" }}
    >
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className="card card-hover p-6 lg:p-8 text-center group"
              >
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(196, 146, 42, 0.1), rgba(212, 168, 75, 0.06))",
                    color: "#C4922A",
                  }}
                >
                  {stat.icon}
                </div>
                <div
                  className="text-4xl lg:text-5xl font-extrabold mb-1.5"
                  style={{ color: "#C4922A" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-medium" style={{ color: "#7A8899" }}>
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
