"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
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

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
          {/* Handshake photo */}
          <AnimatedSection direction="left">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: "16/10" }}
            >
              <Image
                src="/images/handshake.png"
                alt="Lawyer and client trust"
                fill
                className="object-cover"
                quality={90}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, transparent 60%, rgba(10,22,60,0.3) 100%)",
                }}
              />
              {/* Quote on photo */}
              <div
                className="absolute bottom-5 left-5 right-20"
              >
                <div
                  className="inline-block px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
                  style={{ background: "rgba(10,22,60,0.65)", backdropFilter: "blur(8px)" }}
                >
                  &ldquo;{t("subtitle")}&rdquo;
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* First 3 reasons */}
          <div className="flex flex-col gap-5">
            {items.slice(0, 3).map((item, i) => {
              const Icon = ICONS[i];
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div
                    className="flex items-start gap-4 p-5 rounded-2xl card-hover"
                    style={{
                      background: i === 0 ? "linear-gradient(135deg,#0F1B4D,#1E3A8A)" : "white",
                      border: i === 0 ? "none" : "1px solid rgba(37,99,235,0.1)",
                      boxShadow: i === 0 ? "0 12px 32px rgba(15,27,77,0.2)" : "var(--shadow-card)",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: i === 0 ? "rgba(96,165,250,0.15)" : "linear-gradient(135deg,rgba(37,99,235,0.1),rgba(59,130,246,0.06))",
                        color: i === 0 ? "#93C5FD" : "#1D4ED8",
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-sm mb-1"
                        style={{ color: i === 0 ? "#93C5FD" : "#0A0E1A" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: i === 0 ? "rgba(255,255,255,0.6)" : "#6B7280" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Bottom 3 reasons — full width grid */}
        <div className="grid sm:grid-cols-3 gap-5">
          {items.slice(3).map((item, i) => {
            const Icon = ICONS[i + 3];
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className="card card-hover p-6 group relative overflow-hidden"
                >
                  <div
                    className="absolute top-4 right-5 text-5xl font-black opacity-[0.04] select-none"
                    style={{ color: "#2563EB" }}
                  >
                    {String(i + 4).padStart(2, "0")}
                  </div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg,rgba(37,99,235,0.1),rgba(59,130,246,0.06))",
                      color: "#1D4ED8",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#0A0E1A" }}>{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>{item.desc}</p>
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
