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
    <section className="py-20 lg:py-28" style={{ background: "#FFFFFF" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        </div>
        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.07}>
              <div className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  border: `1.5px solid ${open===i ? "rgba(37,99,235,0.25)" : "rgba(37,99,235,0.1)"}`,
                  background: open===i ? "#EFF6FF" : "#FFFFFF",
                  boxShadow: open===i ? "0 4px 16px rgba(37,99,235,0.08)" : "var(--shadow-sm)",
                }}>
                <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open===i ? null : i)}>
                  <span className="text-sm sm:text-base font-semibold leading-snug"
                    style={{ color: open===i ? "#1D4ED8" : "#0A0E1A" }}>
                    {item.q}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all"
                    style={{
                      background: open===i ? "linear-gradient(135deg,#1D4ED8,#2563EB)" : "rgba(37,99,235,0.08)",
                      color: open===i ? "white" : "#2563EB",
                    }}>
                    {open===i ? <Minus size={14}/> : <Plus size={14}/>}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open===i && (
                    <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }}
                      exit={{ height:0, opacity:0 }} transition={{ duration:0.28, ease:"easeInOut" }}>
                      <div className="px-6 pb-5 text-sm leading-relaxed"
                        style={{ color:"#374151", borderTop:"1px solid rgba(37,99,235,0.1)" }}>
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
