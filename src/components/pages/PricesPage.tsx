"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHero from "@/components/ui/PageHero";
import CTA from "@/components/home/CTA";
import { CheckCircle, Phone, Sparkles } from "lucide-react";

export default function PricesPage() {
  const t = useTranslations("prices");
  const items = t.raw("items") as Array<{
    title:string; price:string; period:string; desc:string;
    features:string[]; cta:string; highlight:boolean;
  }>;

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} badge={`✨ ${t("free_note")}`} />

      <section className="py-16 lg:py-20" style={{ background:"#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Gavel photo banner */}
          <AnimatedSection>
            <div className="relative w-full max-w-xs mx-auto mb-14 rounded-2xl overflow-hidden shadow-xl"
              style={{ height:"200px" }}>
              <Image
                src="/images/gavel.png"
                alt="Judge gavel"
                fill
                className="object-cover object-center"
                quality={90}
              />
              <div className="absolute inset-0"
                style={{ background:"linear-gradient(to right, rgba(239,246,255,0.3), transparent)" }} />
              {/* Quote overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="text-2xl font-bold text-white drop-shadow-lg">⚖️</div>
                  <p className="text-white text-sm font-semibold drop-shadow-lg mt-1">
                    {t("free_note")}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className="relative rounded-2xl p-6 h-full flex flex-col transition-all duration-300 card-hover"
                  style={item.highlight ? {
                    background:"linear-gradient(135deg,#0F1B4D 0%,#1E3A8A 100%)",
                    border:"none", boxShadow:"0 16px 40px rgba(15,27,77,0.25)",
                  } : {
                    background:"white", border:"1px solid rgba(37,99,235,0.1)",
                    boxShadow:"var(--shadow-card)",
                  }}>
                  {item.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background:"linear-gradient(135deg,#1D4ED8,#3B82F6)" }}>
                      ★ Popular
                    </div>
                  )}
                  <div className="mb-5">
                    <h3 className="text-lg font-bold mb-1.5"
                      style={{ color:item.highlight?"#93C5FD":"#0A0E1A" }}>{item.title}</h3>
                    <p className="text-xs leading-relaxed mb-4"
                      style={{ color:item.highlight?"rgba(255,255,255,0.55)":"#6B7280" }}>{item.desc}</p>
                    <div className="text-3xl font-extrabold text-gradient-blue">{item.price}</div>
                    <span className="text-xs" style={{ color:item.highlight?"rgba(255,255,255,0.35)":"#9CA3AF" }}>
                      {item.period}
                    </span>
                  </div>
                  <div className="h-px mb-5"
                    style={{ background:item.highlight?"rgba(255,255,255,0.1)":"rgba(37,99,235,0.08)" }} />
                  <ul className="flex flex-col gap-2.5 flex-1 mb-6">
                    {item.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color:"#2563EB" }} />
                        <span style={{ color:item.highlight?"rgba(255,255,255,0.8)":"#374151" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact"
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold ${item.highlight?"btn-blue shimmer-btn":"btn-outline-blue"}`}>
                    <span className="relative z-10 flex items-center gap-2">
                      {item.highlight && <Phone size={13} />}{item.cta}
                    </span>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <p className="text-center mt-8 text-xs" style={{ color:"#9CA3AF" }}>{t("note")}</p>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  );
}
