"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const t = useTranslations("home.faq");
  const items = t.raw("items") as Array<{ q: string; a: string }>;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28" style={{ background: "var(--bg-page)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.07}>
              <div
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  border: `1.5px solid ${open === i ? "rgba(196, 146, 42, 0.3)" : "rgba(196, 146, 42, 0.1)"}`,
                  background: open === i ? "var(--gold-pale)" : "white",
                  boxShadow: open === i ? "0 4px 16px rgba(196, 146, 42, 0.1)" : "var(--shadow-sm)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-4.5 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    className="text-sm sm:text-base font-semibold leading-snug"
                    style={{ color: open === i ? "#A87820" : "#1A2744" }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all"
                    style={{
                      background: open === i
                        ? "linear-gradient(135deg, #C4922A, #D4A84B)"
                        : "rgba(196, 146, 42, 0.1)",
                      color: open === i ? "white" : "#C4922A",
                    }}
                  >
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div
                        className="px-6 pb-5 text-sm leading-relaxed"
                        style={{ color: "#445066", borderTop: "1px solid rgba(196, 146, 42, 0.12)" }}
                      >
                        <div className="pt-4">{item.a}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
