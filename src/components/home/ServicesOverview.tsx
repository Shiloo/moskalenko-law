"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { Scale, Pill, DollarSign, ShieldAlert, RotateCcw, Lock, MessageSquare, ArrowRight } from "lucide-react";

const ICONS = [Scale, Pill, DollarSign, ShieldAlert, RotateCcw, Lock, MessageSquare];
const COLORS = ["#C4922A", "#A87820", "#C4922A", "#8B6014", "#C4922A", "#A87820", "#C4922A"];

export default function ServicesOverview() {
  const t = useTranslations("services");
  const th = useTranslations("home.services");
  const items = t.raw("items") as Array<{ title: string; desc: string }>;

  return (
    <section className="py-20 lg:py-28" style={{ background: "var(--bg-section-alt)" }}>
      <div className="section-divider mb-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0">
        <div className="mb-14 text-center">
          <SectionHeader title={th("title")} subtitle={th("subtitle")} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {items.slice(0, 7).map((item, i) => {
            const Icon = ICONS[i];
            return (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="card card-hover p-6 h-full flex flex-col group cursor-pointer">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, rgba(196, 146, 42, 0.1), rgba(212, 168, 75, 0.06))`,
                      color: COLORS[i],
                    }}
                  >
                    <Icon size={21} />
                  </div>
                  <h3 className="font-bold text-sm mb-2 leading-snug" style={{ color: "#1A2744" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed flex-1" style={{ color: "#7A8899" }}>
                    {item.desc.substring(0, 80)}...
                  </p>
                  <div
                    className="flex items-center gap-1 mt-3 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "#C4922A" }}
                  >
                    {th("cta")} <ArrowRight size={12} />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}

          {/* CTA card */}
          <AnimatedSection delay={0.5}>
            <Link
              href="/services"
              className="rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center group transition-all duration-300 hover:shadow-lg"
              style={{
                border: "2px dashed rgba(196, 146, 42, 0.3)",
                background: "rgba(196, 146, 42, 0.03)",
                minHeight: "160px",
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                style={{
                  background: "linear-gradient(135deg, rgba(196, 146, 42, 0.12), rgba(212, 168, 75, 0.08))",
                  color: "#C4922A",
                }}
              >
                <ArrowRight size={20} />
              </div>
              <span className="text-sm font-bold" style={{ color: "#C4922A" }}>{th("cta")}</span>
              <span className="text-xs mt-1" style={{ color: "#A8B5C4" }}>7 {th("title").toLowerCase()}</span>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
