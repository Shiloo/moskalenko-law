"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const T_UK = [
  { name:"Дмитро К.", case:"Справа про наркотики", text:"Юлія Сергіївна взялася за мою справу, коли всі вважали, що вирок вже вирішений. Вона знайшла порушення при обшуку, і справу закрили. Дякую за повернуте майбутнє.", rating:5 },
  { name:"Ірина В.", case:"Економічний злочин", text:"Чоловік-підприємець опинився під слідством. Адвокат Москаленко довела, що звинувачення сфабриковано. Тепер він вільний. Безкінечно вдячна.", rating:5 },
  { name:"Сергій М.", case:"Захист від арешту", text:"Дзвонив о 3 ночі — Юлія Сергіївна відразу виїхала. До ранку я був вдома, а не в ізоляторі. Рекомендую всім у критичних ситуаціях.", rating:5 },
  { name:"Марина Т.", case:"Апеляція", text:"Брат отримав несправедливий вирок 5 років. Адвокат подала апеляцію і домоглася умовного строку. Це зміна долі людини. Вічна подяка.", rating:5 },
];

const T_EN = [
  { name:"Dmytro K.", case:"Drug case", text:"Yulia took my case when everyone thought the verdict was decided. She found violations during the search and the case was dismissed. Thank you for giving me my future back.", rating:5 },
  { name:"Iryna V.", case:"Economic crime", text:"My businessman husband was under investigation. Attorney Moskalenko proved the charges were fabricated. He is free now. Eternally grateful.", rating:5 },
  { name:"Serhiy M.", case:"Defense against arrest", text:"Called at 3 AM — Yulia arrived immediately. By morning I was home, not in detention. I recommend her to anyone in a critical situation.", rating:5 },
  { name:"Maryna T.", case:"Appeal", text:"My brother received an unjust 5-year sentence. The attorney filed an appeal and obtained a suspended sentence. This is a life changed. Endless thanks.", rating:5 },
];

export default function Testimonials() {
  const t = useTranslations("home.testimonials");
  const locale = useLocale();
  const items = locale === "uk" ? T_UK : T_EN;
  const [cur, setCur] = useState(0);

  return (
    <section className="py-20 lg:py-28 relative" style={{ background: "#EFF6FF" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        </div>

        {/* Desktop: all 4 */}
        <div className="hidden lg:grid grid-cols-2 gap-5">
          {items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="card p-7 relative group hover:shadow-md transition-all duration-300"
                style={{ borderColor: i === 0 ? "rgba(37,99,235,0.2)" : undefined }}>
                <div className="absolute top-5 right-6 opacity-[0.06]" style={{ color:"#2563EB" }}>
                  <Quote size={44} />
                </div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <span key={j} style={{ color:"#2563EB" }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color:"#374151" }}>
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white"
                    style={{ background:"linear-gradient(135deg,#1D4ED8,#3B82F6)" }}>
                    {item.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color:"#0A0E1A" }}>{item.name}</div>
                    <div className="text-xs" style={{ color:"#2563EB" }}>{item.case}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden relative max-w-lg mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={cur}
              initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-20 }}
              transition={{ duration:0.3 }}
              className="card p-7">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: items[cur].rating }).map((_, j) => (
                  <span key={j} style={{ color:"#2563EB" }}>★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color:"#374151" }}>
                &ldquo;{items[cur].text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white"
                  style={{ background:"linear-gradient(135deg,#1D4ED8,#3B82F6)" }}>
                  {items[cur].name[0]}
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color:"#0A0E1A" }}>{items[cur].name}</div>
                  <div className="text-xs" style={{ color:"#2563EB" }}>{items[cur].case}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-4 mt-5">
            <button onClick={() => setCur(c => (c-1+items.length)%items.length)}
              className="w-10 h-10 rounded-full flex items-center justify-center card transition-all hover:shadow-md"
              style={{ color:"#1D4ED8" }}><ChevronLeft size={18} /></button>
            <div className="flex gap-2">
              {items.map((_,i) => (
                <button key={i} onClick={() => setCur(i)} className="rounded-full transition-all"
                  style={{ width:i===cur?"20px":"8px", height:"8px",
                    background:i===cur?"#2563EB":"rgba(37,99,235,0.2)" }} />
              ))}
            </div>
            <button onClick={() => setCur(c => (c+1)%items.length)}
              className="w-10 h-10 rounded-full flex items-center justify-center card transition-all hover:shadow-md"
              style={{ color:"#1D4ED8" }}><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
