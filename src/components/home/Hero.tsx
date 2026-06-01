"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Phone, ChevronDown, Shield, Star, Clock, Award } from "lucide-react";
import ScalesIllustration from "@/components/ui/ScalesIllustration";

const WORDS_UK = ["кримінальних справах","справах про наркотики","корупційних справах","апеляціях","захисті від арешту"];
const WORDS_EN = ["criminal cases","drug offenses","corruption cases","appeals","arrest defense"];

function TypeWriter({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = words[idx % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!del && text.length < cur.length)
      t = setTimeout(() => setText(cur.slice(0, text.length + 1)), 65);
    else if (!del)
      t = setTimeout(() => setDel(true), 2400);
    else if (del && text.length > 0)
      t = setTimeout(() => setText(cur.slice(0, text.length - 1)), 38);
    else { setDel(false); setIdx(i => i + 1); }
    return () => clearTimeout(t);
  }, [text, del, idx, words]);

  return (
    <span>
      <span className="text-gradient-blue font-extrabold">{text}</span>
      <span className="inline-block w-0.5 h-7 sm:h-9 ml-0.5 align-middle rounded-full animate-pulse"
        style={{ background: "#2563EB" }} />
    </span>
  );
}

export default function Hero() {
  const t = useTranslations("home.hero");
  const locale = useLocale();
  const words = locale === "uk" ? WORDS_UK : WORDS_EN;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#FFFFFF" }}>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blue radial gradient top-right */}
        <div className="absolute rounded-full"
          style={{ width:"55vw", height:"55vw", top:"-15%", right:"-10%",
            background:"radial-gradient(circle, rgba(219,234,254,0.7) 0%, transparent 65%)",
            filter:"blur(30px)" }} />
        {/* Soft navy bottom-left */}
        <div className="absolute rounded-full"
          style={{ width:"35vw", height:"35vw", bottom:"0", left:"-8%",
            background:"radial-gradient(circle, rgba(239,246,255,0.8) 0%, transparent 65%)",
            filter:"blur(40px)" }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 pattern-grid" style={{ opacity:0.6 }} />
        {/* Diagonal lines top-right */}
        <svg className="absolute top-0 right-0 w-1/3 h-full opacity-[0.06]" viewBox="0 0 300 800" fill="none">
          <path d="M150 0 L300 150 L300 650 L150 800" stroke="#2563EB" strokeWidth="1"/>
          <path d="M225 0 L300 75 L300 725 L225 800" stroke="#2563EB" strokeWidth="0.5"/>
        </svg>
      </div>

      <motion.div style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Text */}
          <div>
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
              className="flex flex-wrap items-center gap-2 mb-6">
              <span className="badge-blue">
                <Shield size={12} />
                {t("badge")}
              </span>
              <span className="badge-navy">
                <Award className="inline w-3 h-3 mr-1" />
                30+ {locale === "uk" ? "Років" : "Years"}
              </span>
            </motion.div>

            <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.1 }}>
              <div className="text-xs font-bold uppercase tracking-[0.22em] mb-3" style={{ color:"#2563EB" }}>
                {t("tagline")}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.06] mb-5"
                style={{ color:"#0A0E1A", letterSpacing:"-0.03em" }}>
                {t("title1")}<br />
                <span className="text-gradient-blue">{t("title2")}</span>
              </h1>
            </motion.div>

            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5, delay:0.35 }}
              className="text-xl sm:text-2xl font-semibold mb-5 min-h-[3rem]"
              style={{ color:"#374151" }}>
              {locale === "uk" ? "Досвід у " : "Expertise in "}
              <TypeWriter words={words} />
            </motion.div>

            <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.3 }}
              className="text-base sm:text-lg leading-relaxed mb-7 max-w-lg"
              style={{ color:"#6B7280" }}>
              {t("subtitle")}
            </motion.p>

            {/* Trust chips */}
            <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.45 }}
              className="flex flex-wrap gap-2.5 mb-8">
              {[
                { icon:<Clock size={12}/>, text:t("available") },
                { icon:<Star  size={12}/>, text:t("free") },
              ].map((chip, i) => (
                <div key={i}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold"
                  style={{ background:"#EFF6FF", border:"1px solid rgba(37,99,235,0.18)", color:"#1D4ED8" }}>
                  {chip.icon}
                  {chip.text}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.5 }}
              className="flex flex-col sm:flex-row gap-3.5">
              <a href="tel:+380671234567"
                className="btn-blue shimmer-btn flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold animate-pulse-blue">
                <span className="relative z-10 flex items-center gap-2.5">
                  <Phone size={16} />
                  {t("cta_primary")}
                </span>
              </a>
              <Link href="/services"
                className="btn-outline-blue flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold">
                {t("cta_secondary")}
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Illustration card */}
          <motion.div initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.8, delay:0.25 }}
            className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full max-w-md rounded-3xl p-8"
              style={{
                background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
                border: "1px solid rgba(37,99,235,0.15)",
                boxShadow: "0 24px 64px rgba(37,99,235,0.15), 0 4px 16px rgba(10,14,26,0.06)",
              }}>
              {/* Corner SVG accents */}
              <svg className="absolute top-4 right-4 w-10 h-10 opacity-25" viewBox="0 0 40 40" fill="none">
                <path d="M0 8 L0 0 L8 0" stroke="#2563EB" strokeWidth="2"/>
                <path d="M32 0 L40 0 L40 8" stroke="#2563EB" strokeWidth="2"/>
              </svg>
              <svg className="absolute bottom-4 left-4 w-10 h-10 opacity-25" viewBox="0 0 40 40" fill="none">
                <path d="M0 32 L0 40 L8 40" stroke="#2563EB" strokeWidth="2"/>
                <path d="M32 40 L40 40 L40 32" stroke="#2563EB" strokeWidth="2"/>
              </svg>

              <ScalesIllustration className="w-full h-auto animate-float" />

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { val:"30+", label: locale === "uk" ? "Років" : "Years" },
                  { val:"500+", label: locale === "uk" ? "Справ" : "Cases" },
                  { val:"97%",  label: locale === "uk" ? "Успіх" : "Success" },
                ].map((s, i) => (
                  <motion.div key={i}
                    initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="text-center rounded-xl py-3"
                    style={{ background:"white", boxShadow:"0 2px 8px rgba(37,99,235,0.1)" }}>
                    <div className="text-xl font-extrabold" style={{ color:"#1D4ED8" }}>{s.val}</div>
                    <div className="text-xs mt-0.5" style={{ color:"#6B7280" }}>{s.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Available badge */}
              <motion.div
                initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }}
                transition={{ delay:0.9 }}
                className="absolute -top-3 -right-4 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg text-xs font-bold"
                style={{ background:"white", border:"1.5px solid rgba(37,99,235,0.2)", color:"#0A0E1A" }}>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {locale === "uk" ? "Зараз доступна" : "Available now"}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-xs font-medium" style={{ color:"#9CA3AF" }}>{t("scroll")}</span>
        <motion.div animate={{ y:[0,6,0] }} transition={{ duration:2, repeat:Infinity }}
          style={{ color:"#2563EB" }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
