"use client";

import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";

export default function AnnouncementBanner() {
  const t = useTranslations("banner");

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #1A2744 0%, #2E4E7A 50%, #1A2744 100%)",
      }}
      className="relative overflow-hidden"
    >
      {/* shimmer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 20%, rgba(212,168,75,0.08) 50%, transparent 80%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-4 text-sm font-medium text-white/90">
        <span className="hidden sm:block text-base">⚖️</span>
        <span>{t("text")}</span>
        <a
          href="tel:+380671234567"
          className="flex items-center gap-1.5 font-bold text-amber-300 hover:text-amber-200 transition-colors underline underline-offset-2"
        >
          <Phone size={13} />
          {t("cta")}
        </a>
      </div>
    </div>
  );
}
