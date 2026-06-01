"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Phone, ChevronDown, Shield, Star, Clock, Award } from "lucide-react";
import ScalesIllustration from "@/components/ui/ScalesIllustration";

const WORDS_UK = ["кримінальних справах", "справах про наркотики", "корупційних справах", "апеляціях", "захисті від арешту"];
const WORDS_EN = ["criminal cases", "drug offenses", "corruption cases", "appeals", "arrest defense"];

function TypeWriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 38);
    } else {
      setDeleting(false);
      setIndex((i) => i + 1);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, index, words]);

  return (
    <span>
      <span className="text-gradient-gold font-extrabold">{displayed}</span>
      <span
        className="inline-block w-0.5 h-7 sm:h-9 ml-0.5 align-middle rounded-full animate-pulse"
        style={{ background: "#C4922A" }}
      />
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
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--bg-page)" }}
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: "50vw",
            height: "50vw",
            top: "-15%",
            right: "-10%",
            background: "radial-gradient(circle, rgba(196, 146, 42, 0.07) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "40vw",
            height: "40vw",
            bottom: "0",
            left: "-10%",
            background: "radial-gradient(circle, rgba(26, 39, 68, 0.05) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 pattern-dots"
          style={{ opacity: 0.4 }}
        />
        {/* Decorative lines */}
        <svg className="absolute top-0 right-0 w-1/2 h-full opacity-[0.035] pointer-events-none" viewBox="0 0 400 800" fill="none">
          <path d="M200 0 L400 200 L400 600 L200 800" stroke="#C4922A" strokeWidth="1" />
          <path d="M300 0 L400 100 L400 700 L300 800" stroke="#C4922A" strokeWidth="0.5" />
        </svg>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-28"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <span className="badge-gold">
                <Shield size={12} />
                {t("badge")}
              </span>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: "rgba(26, 39, 68, 0.06)", color: "#1A2744" }}
              >
                <Award className="inline w-3 h-3 mr-1" />
                30+ {locale === "uk" ? "Років" : "Years"}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                style={{ color: "#C4922A" }}
              >
                {t("tagline")}
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-5"
                style={{ color: "#1A2744", letterSpacing: "-0.03em" }}
              >
                {t("title1")}<br />
                <span className="text-gradient-gold">{t("title2")}</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-xl sm:text-2xl font-semibold mb-5 min-h-[3rem]"
              style={{ color: "#445066" }}
            >
              {locale === "uk" ? "Досвід у " : "Expertise in "}
              <TypeWriter words={words} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg leading-relaxed mb-7 max-w-lg"
              style={{ color: "#7A8899" }}
            >
              {t("subtitle")}
            </motion.p>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-2.5 mb-8"
            >
              {[
                { icon: <Clock size={12} />, text: t("available") },
                { icon: <Star size={12} />, text: t("free") },
              ].map((chip, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold"
                  style={{
                    background: "var(--gold-pale)",
                    border: "1px solid rgba(196, 146, 42, 0.22)",
                    color: "#A87820",
                  }}
                >
                  {chip.icon}
                  {chip.text}
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3.5"
            >
              <a
                href="tel:+380671234567"
                className="btn-gold shimmer-btn flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold animate-pulse-gold"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <Phone size={16} />
                  {t("cta_primary")}
                </span>
              </a>
              <Link
                href="/services"
                className="btn-outline-navy flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold"
              >
                {t("cta_secondary")}
              </Link>
            </motion.div>
          </div>

          {/* Illustration column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Card with illustration */}
            <div
              className="relative w-full max-w-md rounded-3xl p-8"
              style={{
                background: "linear-gradient(135deg, #F8F5EF 0%, #F0EAD8 100%)",
                border: "1px solid rgba(196, 146, 42, 0.18)",
                boxShadow: "0 20px 60px rgba(26, 39, 68, 0.1), 0 4px 16px rgba(196, 146, 42, 0.12)",
              }}
            >
              {/* Corner decorations */}
              <svg className="absolute top-4 right-4 w-12 h-12 opacity-20" viewBox="0 0 48 48" fill="none">
                <path d="M0 8 L0 0 L8 0" stroke="#C4922A" strokeWidth="2" />
                <path d="M40 0 L48 0 L48 8" stroke="#C4922A" strokeWidth="2" />
              </svg>
              <svg className="absolute bottom-4 left-4 w-12 h-12 opacity-20" viewBox="0 0 48 48" fill="none">
                <path d="M0 40 L0 48 L8 48" stroke="#C4922A" strokeWidth="2" />
                <path d="M40 48 L48 48 L48 40" stroke="#C4922A" strokeWidth="2" />
              </svg>

              <ScalesIllustration className="w-full h-auto animate-float" />

              {/* Stats overlay */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { val: "30+", label: locale === "uk" ? "Років" : "Years" },
                  { val: "500+", label: locale === "uk" ? "Справ" : "Cases" },
                  { val: "97%", label: locale === "uk" ? "Успіх" : "Success" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="text-center rounded-xl py-3"
                    style={{
                      background: "white",
                      boxShadow: "0 2px 8px rgba(26,39,68,0.07)",
                    }}
                  >
                    <div
                      className="text-xl font-extrabold"
                      style={{ color: "#C4922A" }}
                    >
                      {s.val}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "#7A8899" }}>{s.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Live badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute -top-3 -right-4 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg text-xs font-bold"
                style={{
                  background: "white",
                  border: "1.5px solid rgba(196, 146, 42, 0.25)",
                  color: "#1A2744",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {locale === "uk" ? "Зараз доступна" : "Available now"}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: "#C4922A" }}
      >
        <span className="text-xs font-medium" style={{ color: "#A8B5C4" }}>{t("scroll")}</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
