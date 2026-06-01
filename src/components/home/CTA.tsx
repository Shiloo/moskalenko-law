"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Phone } from "lucide-react";

export default function CTA() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #1A2744 0%, #2E4E7A 60%, #1A2744 100%)",
        }}
      />
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(196, 146, 42, 0.15) 0%, transparent 60%)",
        }}
      />
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(212,168,75,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-widest"
            style={{
              background: "rgba(212, 168, 75, 0.12)",
              border: "1px solid rgba(212, 168, 75, 0.25)",
              color: "#D4A84B",
            }}
          >
            ⚡ {t("title")}
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t("subtitle")}
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="tel:+380671234567"
              className="btn-gold shimmer-btn flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold w-full sm:w-auto justify-center animate-pulse-gold"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                <Phone size={16} />
                {t("primary")}
              </span>
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold w-full sm:w-auto justify-center transition-all hover:scale-105"
              style={{
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "white",
              }}
            >
              {t("secondary")}
            </Link>
          </div>

          <p className="mt-6 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            +38 (067) 123-45-67 · julia.moskalenko@ukr.net
          </p>
        </motion.div>
      </div>
    </section>
  );
}
