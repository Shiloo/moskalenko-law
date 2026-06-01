"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { Award, User, Lock, Clock, Eye, CheckCircle } from "lucide-react";

const ICONS = [Award, User, Lock, Clock, Eye, CheckCircle];

export default function WhyUs() {
  const t = useTranslations("home.whyus");
  const items = t.raw("items") as Array<{ title: string; desc: string }>;

  return (
    <section className="py-20 lg:py-28" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <AnimatedSection key={i} delay={i * 0.09}>
                <div
                  className="card card-hover p-7 group h-full relative overflow-hidden"
                  style={{ background: i % 2 === 0 ? "#FFFFFF" : "#F8FAFD" }}
                >
                  {/* Number watermark */}
                  <div className="absolute top-4 right-5 text-6xl font-black opacity-[0.04] select-none"
                    style={{ color:"#2563EB" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div
                    className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                    style={{
                      background: "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(59,130,246,0.06))",
                      color: "#1D4ED8",
                    }}>
                    <Icon size={22} />
                  </div>

                  <h3 className="font-bold text-base mb-2.5 leading-snug" style={{ color:"#0A0E1A" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color:"#6B7280" }}>
                    {item.desc}
                  </p>

                  {/* Bottom hover accent */}
                  <div
                    className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-b-lg"
                    style={{ background: "linear-gradient(90deg,#1D4ED8,#3B82F6)" }}
                  />
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
