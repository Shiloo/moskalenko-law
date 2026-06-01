"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  title: string;
  subtitle?: string;
  badge?: string;
  image?: string; // override default courthouse
}

export default function PageHero({ title, subtitle, badge, image = "/images/courthouse.png" }: Props) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "280px" }}>
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Legal background"
          fill
          className="object-cover object-center"
          quality={85}
          priority
        />
        {/* Light blue gradient overlay — keeps the light theme */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(239,246,255,0.96) 0%, rgba(219,234,254,0.93) 40%, rgba(239,246,255,0.9) 100%)",
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge && <div className="badge-blue inline-flex mb-4">{badge}</div>}
          <h1
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ color: "#0A0E1A", letterSpacing: "-0.03em" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#374151" }}>
              {subtitle}
            </p>
          )}
          <div className="blue-line mx-auto mt-5" />
        </motion.div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
