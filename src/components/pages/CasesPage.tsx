"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTA from "@/components/home/CTA";
import { Users, Package, Pill, DollarSign, Shield, Monitor } from "lucide-react";

const ICONS = [Users, Package, Pill, DollarSign, Shield, Monitor];
const BG_COLORS = [
  "rgba(196, 146, 42, 0.07)",
  "rgba(26, 39, 68, 0.05)",
  "rgba(196, 146, 42, 0.07)",
  "rgba(26, 39, 68, 0.05)",
  "rgba(196, 146, 42, 0.07)",
  "rgba(26, 39, 68, 0.05)",
];

export default function CasesPage() {
  const t = useTranslations("cases");
  const categories = t.raw("categories") as Array<{ title: string; cases: string[] }>;

  return (
    <>
      <section className="pt-24 pb-16" style={{ background: "var(--bg-section-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: "#1A2744", letterSpacing: "-0.03em" }}>{t("title")}</h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#7A8899" }}>{t("subtitle")}</p>
            <div className="gold-line mx-auto mt-5" />
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20" style={{ background: "var(--bg-page)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => {
              const Icon = ICONS[i] || Shield;
              return (
                <AnimatedSection key={i} delay={i * 0.09}>
                  <div
                    className="card card-hover p-6 h-full"
                    style={{ background: BG_COLORS[i] === "rgba(26, 39, 68, 0.05)" ? "white" : "var(--gold-pale)" }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "linear-gradient(135deg, #C4922A, #D4A84B)", color: "white" }}
                      >
                        <Icon size={18} />
                      </div>
                      <h3 className="font-bold text-sm leading-snug" style={{ color: "#1A2744" }}>{cat.title}</h3>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {cat.cases.map((c, j) => (
                        <li
                          key={j}
                          className="flex items-center gap-2.5 text-xs px-3 py-2 rounded-lg"
                          style={{
                            background: "white",
                            color: "#445066",
                            border: "1px solid rgba(196, 146, 42, 0.1)",
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#C4922A" }} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
