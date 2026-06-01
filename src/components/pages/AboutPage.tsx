"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTA from "@/components/home/CTA";
import LawyerPortrait from "@/components/ui/LawyerPortrait";
import { CheckCircle, Star, Award } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("about");
  const exp = useTranslations("about.experience");
  const ach = useTranslations("about.achievements");
  const val = useTranslations("about.values");

  const expItems = exp.raw("items") as Array<{ year: string; text: string }>;
  const achItems = ach.raw("items") as string[];
  const valItems = val.raw("items") as Array<{ title: string; desc: string }>;

  return (
    <>
      {/* Hero */}
      <section
        className="pt-24 pb-16 relative overflow-hidden"
        style={{ background: "var(--bg-section-alt)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 80% 50%, rgba(196, 146, 42, 0.06) 0%, transparent 60%)",
          }}
        />
        <div className="section-divider absolute bottom-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="badge-gold mb-5 inline-flex">
                <Award size={12} />
                {t("title")}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-2" style={{ color: "#1A2744", letterSpacing: "-0.03em" }}>
                {t("name")}
              </h1>
              <p className="text-lg font-semibold mb-6" style={{ color: "#C4922A" }}>{t("role")}</p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#445066" }}>{t("bio")}</p>
              <p className="text-base leading-relaxed mb-7" style={{ color: "#7A8899" }}>{t("bio2")}</p>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} style={{ color: "#D4A84B" }} fill="#D4A84B" />
                ))}
                <span className="ml-2 text-sm font-medium" style={{ color: "#7A8899" }}>
                  5.0 · 30+ {t("title").toLowerCase()}
                </span>
              </div>
            </motion.div>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <LawyerPortrait className="w-64 lg:w-72 h-auto rounded-3xl shadow-2xl" />

                {/* Floating stats */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-8 top-1/3 card px-4 py-3 shadow-lg"
                  style={{ border: "1.5px solid rgba(196, 146, 42, 0.2)" }}
                >
                  <div className="text-2xl font-extrabold" style={{ color: "#C4922A" }}>30+</div>
                  <div className="text-xs" style={{ color: "#7A8899" }}>Років досвіду</div>
                </motion.div>
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 bottom-1/3 card px-4 py-3 shadow-lg"
                  style={{ border: "1.5px solid rgba(196, 146, 42, 0.2)" }}
                >
                  <div className="text-2xl font-extrabold" style={{ color: "#C4922A" }}>97%</div>
                  <div className="text-xs" style={{ color: "#7A8899" }}>Успішних справ</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ background: "var(--bg-page)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SectionHeader title={exp("title")} />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(180deg, #C4922A, rgba(196,146,42,0.2), transparent)" }}
            />
            <div className="flex flex-col gap-5">
              {expItems.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1} direction="left">
                  <div className="flex gap-5 items-start pl-14 relative">
                    <div
                      className="absolute left-3 top-1.5 w-6 h-6 rounded-full flex items-center justify-center shadow-md"
                      style={{
                        background: "linear-gradient(135deg, #C4922A, #D4A84B)",
                        boxShadow: "0 0 0 3px rgba(196, 146, 42, 0.15), 0 2px 8px rgba(196, 146, 42, 0.3)",
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="card p-4 flex-1">
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full mb-2 inline-block"
                        style={{ background: "var(--gold-pale)", color: "#A87820", border: "1px solid rgba(196,146,42,0.2)" }}
                      >
                        {item.year}
                      </span>
                      <p className="text-sm leading-relaxed" style={{ color: "#445066" }}>{item.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements + Values */}
      <section className="py-20" style={{ background: "var(--bg-section-alt)" }}>
        <div className="section-divider absolute" style={{ top: 0, left: 0, right: 0 }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Achievements */}
            <div>
              <AnimatedSection>
                <h2 className="text-2xl font-bold mb-6" style={{ color: "#1A2744" }}>{ach("title")}</h2>
              </AnimatedSection>
              <div className="flex flex-col gap-3">
                {achItems.map((item, i) => (
                  <AnimatedSection key={i} delay={i * 0.08}>
                    <div
                      className="flex items-start gap-3 p-4 rounded-xl bg-white transition-all hover:shadow-sm"
                      style={{ border: "1px solid rgba(196, 146, 42, 0.12)" }}
                    >
                      <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: "#C4922A" }} />
                      <span className="text-sm" style={{ color: "#445066" }}>{item}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Values */}
            <div>
              <AnimatedSection>
                <h2 className="text-2xl font-bold mb-6" style={{ color: "#1A2744" }}>{val("title")}</h2>
              </AnimatedSection>
              <div className="flex flex-col gap-4">
                {valItems.map((item, i) => (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <div
                      className="p-6 rounded-2xl group card-hover"
                      style={{
                        background: "white",
                        border: "1px solid rgba(196, 146, 42, 0.15)",
                        boxShadow: "var(--shadow-card)",
                      }}
                    >
                      <h3 className="font-bold text-base mb-1.5" style={{ color: "#C4922A" }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#7A8899" }}>{item.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
