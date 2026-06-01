"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTA from "@/components/home/CTA";
import { Scale, Pill, DollarSign, ShieldAlert, RotateCcw, Lock, MessageSquare, CheckCircle, ChevronDown, ArrowRight } from "lucide-react";

const ICONS = [Scale, Pill, DollarSign, ShieldAlert, RotateCcw, Lock, MessageSquare];

export default function ServicesPage() {
  const t = useTranslations("services");
  const locale = useLocale();
  const items = t.raw("items") as Array<{ title: string; desc: string; details: string[] }>;
  const [expanded, setExpanded] = useState<number | null>(null);
  const ctaLabel = locale === "uk" ? "Замовити консультацію" : "Book Consultation";

  return (
    <>
      <section className="pt-24 pb-16" style={{ background: "var(--bg-section-alt)" }}>
        <div className="section-divider absolute" />
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
          <div className="grid md:grid-cols-2 gap-4">
            {items.map((item, i) => {
              const Icon = ICONS[i];
              const isOpen = expanded === i;
              return (
                <AnimatedSection key={i} delay={i * 0.07}>
                  <div
                    className="rounded-2xl overflow-hidden transition-all duration-300"
                    style={{
                      border: `1.5px solid ${isOpen ? "rgba(196, 146, 42, 0.3)" : "rgba(196, 146, 42, 0.1)"}`,
                      background: isOpen ? "var(--gold-pale)" : "white",
                      boxShadow: isOpen ? "0 8px 24px rgba(196, 146, 42, 0.1)" : "var(--shadow-sm)",
                    }}
                  >
                    <button
                      className="w-full p-6 flex items-start gap-4 text-left"
                      onClick={() => setExpanded(isOpen ? null : i)}
                    >
                      <div
                        className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg, rgba(196,146,42,0.1), rgba(212,168,75,0.06))", color: "#C4922A" }}
                      >
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm mb-1 leading-snug" style={{ color: isOpen ? "#A87820" : "#1A2744" }}>
                          {item.title}
                        </h3>
                        <p className="text-xs leading-relaxed" style={{ color: "#7A8899" }}>{item.desc}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0 mt-1"
                        style={{ color: "#C4922A" }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                        >
                          <div className="px-6 pb-6" style={{ borderTop: "1px solid rgba(196, 146, 42, 0.15)" }}>
                            <ul className="flex flex-col gap-2 mt-4">
                              {item.details.map((d, j) => (
                                <li key={j} className="flex items-center gap-2.5 text-sm">
                                  <CheckCircle size={13} style={{ color: "#C4922A" }} className="shrink-0" />
                                  <span style={{ color: "#445066" }}>{d}</span>
                                </li>
                              ))}
                            </ul>
                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-xl text-sm font-bold btn-gold shimmer-btn"
                            >
                              <span className="relative z-10 flex items-center gap-2">
                                <ArrowRight size={14} />
                                {ctaLabel}
                              </span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
