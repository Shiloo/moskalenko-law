"use client";

import { motion } from "framer-motion";
import CourthouseIllustration from "./CourthouseIllustration";

interface Props {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHero({ title, subtitle, badge }: Props) {
  return (
    <section className="pt-24 pb-0 relative overflow-hidden" style={{ background: "#EFF6FF" }}>
      {/* Courthouse illustration as faded background */}
      <div className="absolute inset-0 bottom-0 overflow-hidden pointer-events-none">
        <CourthouseIllustration className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-20" />
      </div>

      {/* Gradient overlay — top-to-bottom on the illustration */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #EFF6FF 30%, rgba(239,246,255,0.6) 70%, transparent 100%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {badge && (
            <div className="badge-blue inline-flex mb-4">{badge}</div>
          )}
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ color: "#0A0E1A", letterSpacing: "-0.03em" }}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>{subtitle}</p>
          )}
          <div className="blue-line mx-auto mt-5" />
        </motion.div>
      </div>

      <div className="section-divider" />
    </section>
  );
}
