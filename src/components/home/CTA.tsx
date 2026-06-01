"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Phone } from "lucide-react";

export default function CTA() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Navy gradient background */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0F1B4D 0%, #1E3A8A 50%, #1D4ED8 100%)" }} />
      {/* Blue radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 60%, rgba(59,130,246,0.2) 0%, transparent 55%)" }} />
      {/* Light blue glow right */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 30%, rgba(96,165,250,0.15) 0%, transparent 50%)" }} />
      {/* Dot pattern */}
      <div className="absolute inset-0 pattern-dots opacity-[0.08]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.65 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-widest"
            style={{ background:"rgba(96,165,250,0.12)", border:"1px solid rgba(96,165,250,0.25)", color:"#93C5FD" }}>
            ⚡ {t("title")}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight"
            style={{ color:"white", letterSpacing:"-0.02em" }}>
            {t("subtitle")}
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="tel:+380671234567"
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold w-full sm:w-auto justify-center shimmer-btn transition-all hover:scale-105"
              style={{
                background: "white",
                color: "#1D4ED8",
                boxShadow: "0 8px 28px rgba(255,255,255,0.2)",
              }}>
              <Phone size={16} />
              {t("primary")}
            </a>
            <Link href="/contact"
              className="btn-outline-white flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold w-full sm:w-auto justify-center">
              {t("secondary")}
            </Link>
          </div>

          <p className="mt-6 text-xs" style={{ color:"rgba(255,255,255,0.3)" }}>
            +38 (067) 123-45-67 · julia.moskalenko@ukr.net
          </p>
        </motion.div>
      </div>
    </section>
  );
}
