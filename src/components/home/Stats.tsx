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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  useEffect(() => {
    if (!inView) return;
    const steps = 50;
    const inc = target / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(cur));
    }, 1600 / steps);
    return () => clearInterval(t);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const STATS = [
  { icon: <Trophy size={24} />, val: <><Counter target={30} />+</>, key: "years" },
  { icon: <Briefcase size={24} />, val: <><Counter target={500} />+</>, key: "cases" },
  { icon: <TrendingUp size={24} />, val: <><Counter target={97} />%</>, key: "rate" },
  { icon: <Users size={24} />, val: <><Counter target={600} />+</>, key: "clients" },
] as const;

export default function Stats() {
  const t = useTranslations("home.stats");

  return (
    <section className="py-20 lg:py-24 relative" style={{ background: "#EFF6FF" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="card card-hover p-6 lg:p-8 text-center group">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(59,130,246,0.06))", color: "#1D4ED8" }}>
                  {s.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-extrabold mb-1.5 text-gradient-blue">
                  {s.val}
                </div>
                <div className="text-sm font-medium" style={{ color: "#6B7280" }}>{t(s.key)}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
