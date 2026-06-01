"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTA from "@/components/home/CTA";
import LawyerPlaceholder from "@/components/ui/LawyerPlaceholder";
import { CheckCircle, Star, Award } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("about");
  const exp = useTranslations("about.experience");
  const ach = useTranslations("about.achievements");
  const val = useTranslations("about.values");
  const expItems = exp.raw("items") as Array<{ year:string; text:string }>;
  const achItems = ach.raw("items") as string[];
  const valItems = val.raw("items") as Array<{ title:string; desc:string }>;

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden" style={{ background:"#EFF6FF" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:"radial-gradient(ellipse at 75% 50%, rgba(37,99,235,0.07) 0%, transparent 60%)" }} />
        <div className="section-divider absolute bottom-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
              <span className="badge-blue mb-5 inline-flex"><Award size={12}/>{t("title")}</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-2"
                style={{ color:"#0A0E1A", letterSpacing:"-0.03em" }}>{t("name")}</h1>
              <p className="text-lg font-semibold mb-6" style={{ color:"#1D4ED8" }}>{t("role")}</p>
              <p className="text-base leading-relaxed mb-4" style={{ color:"#374151" }}>{t("bio")}</p>
              <p className="text-base leading-relaxed mb-7" style={{ color:"#6B7280" }}>{t("bio2")}</p>
              <div className="flex items-center gap-1.5">
                {Array.from({ length:5 }).map((_,i) => (
                  <Star key={i} size={18} style={{ color:"#2563EB" }} fill="#2563EB"/>
                ))}
                <span className="ml-2 text-sm font-medium" style={{ color:"#6B7280" }}>
                  5.0 · 30+ {t("title").toLowerCase()}
                </span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }}
              transition={{ duration:0.7, delay:0.2 }}
              className="flex justify-center lg:justify-end">
              <div className="relative">
                {/*
                  ╔═══════════════════════════════════════════╗
                  ║  ЗАГЛУШКА — замінити фото Юлії:           ║
                  ║  1. Помісти: public/images/yulia.jpg      ║
                  ║  2. Заміни LawyerPlaceholder на:          ║
                  ║  <div className="relative w-64 lg:w-72    ║
                  ║    rounded-2xl overflow-hidden shadow-2xl ║
                  ║    aspect-[3/4]">                         ║
                  ║    <Image src="/images/yulia.jpg"         ║
                  ║      alt="Юлія Москаленко" fill           ║
                  ║      className="object-cover              ║
                  ║        object-top" />                     ║
                  ║  </div>                                   ║
                  ╚═══════════════════════════════════════════╝
                */}
                <LawyerPlaceholder
                  className="w-64 lg:w-72 shadow-2xl"
                  label="Фото Юлії Москаленко"
                  aspectRatio="portrait"
                />
                <motion.div animate={{ y:[-5,5,-5] }}
                  transition={{ duration:4, repeat:Infinity, ease:"easeInOut" }}
                  className="absolute -left-10 top-1/3 card px-4 py-3 shadow-lg"
                  style={{ border:"1.5px solid rgba(37,99,235,0.15)" }}>
                  <div className="text-2xl font-extrabold text-gradient-blue">30+</div>
                  <div className="text-xs" style={{ color:"#6B7280" }}>Років досвіду</div>
                </motion.div>
                <motion.div animate={{ y:[5,-5,5] }}
                  transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}
                  className="absolute -right-10 bottom-1/3 card px-4 py-3 shadow-lg"
                  style={{ border:"1.5px solid rgba(37,99,235,0.15)" }}>
                  <div className="text-2xl font-extrabold text-gradient-blue">97%</div>
                  <div className="text-xs" style={{ color:"#6B7280" }}>Успішних справ</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ background:"#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center"><SectionHeader title={exp("title")}/></div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background:"linear-gradient(180deg,#2563EB,rgba(37,99,235,0.2),transparent)" }}/>
            <div className="flex flex-col gap-5">
              {expItems.map((item, i) => (
                <AnimatedSection key={i} delay={i*0.1} direction="left">
                  <div className="flex gap-5 items-start pl-14 relative">
                    <div className="absolute left-3 top-1.5 w-6 h-6 rounded-full flex items-center justify-center shadow-md"
                      style={{ background:"linear-gradient(135deg,#1D4ED8,#2563EB)",
                        boxShadow:"0 0 0 3px rgba(37,99,235,0.12), 0 2px 8px rgba(37,99,235,0.25)" }}>
                      <div className="w-2 h-2 rounded-full bg-white"/>
                    </div>
                    <div className="card p-4 flex-1">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full mb-2 inline-block"
                        style={{ background:"#EFF6FF", color:"#1D4ED8", border:"1px solid rgba(37,99,235,0.18)" }}>
                        {item.year}
                      </span>
                      <p className="text-sm leading-relaxed" style={{ color:"#374151" }}>{item.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Books photo + Achievements */}
      <section className="py-20" style={{ background:"#F0F7FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Books real photo */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <div className="relative rounded-2xl overflow-hidden shadow-xl"
                  style={{ aspectRatio:"4/5" }}>
                  <Image
                    src="/images/books.jpg"
                    alt="Ukrainian law codes"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                  {/* Bottom caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4"
                    style={{ background:"linear-gradient(to top, rgba(10,22,60,0.8), transparent)" }}>
                    <p className="text-white text-xs font-medium text-center">
                      Кримінальний кодекс України
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Achievements */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="text-2xl font-bold mb-6" style={{ color:"#0A0E1A" }}>{ach("title")}</h2>
              </AnimatedSection>
              <div className="flex flex-col gap-3">
                {achItems.map((item, i) => (
                  <AnimatedSection key={i} delay={i*0.08}>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white"
                      style={{ border:"1px solid rgba(37,99,235,0.1)" }}>
                      <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color:"#2563EB" }}/>
                      <span className="text-sm" style={{ color:"#374151" }}>{item}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background:"#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center"><SectionHeader title={val("title")}/></div>
          <div className="grid sm:grid-cols-3 gap-5">
            {valItems.map((item, i) => (
              <AnimatedSection key={i} delay={i*0.1}>
                <div className="p-6 rounded-2xl card-hover text-center"
                  style={{ background:i===1?"linear-gradient(135deg,#0F1B4D,#1E3A8A)":"white",
                    border:i===1?"none":"1px solid rgba(37,99,235,0.12)",
                    boxShadow:i===1?"0 12px 32px rgba(15,27,77,0.2)":"var(--shadow-card)" }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background:i===1?"rgba(96,165,250,0.15)":"linear-gradient(135deg,rgba(37,99,235,0.1),rgba(59,130,246,0.06))" }}>
                    <span className="text-2xl">{["🤝","⚖️","📚"][i]}</span>
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color:i===1?"#93C5FD":"#1D4ED8" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed"
                    style={{ color:i===1?"rgba(255,255,255,0.65)":"#6B7280" }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
