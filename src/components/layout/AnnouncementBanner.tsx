"use client";

import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";

export default function AnnouncementBanner() {
  const t = useTranslations("banner");
  return (
    <div
      style={{ background: "linear-gradient(90deg, #0F1B4D 0%, #1D4ED8 50%, #0F1B4D 100%)" }}
      className="relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(96,165,250,0.12) 0%, transparent 70%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-4 text-sm font-medium text-white/90">
        <span className="hidden sm:block">⚖️</span>
        <span>{t("text")}</span>
        <a
          href="tel:+380671234567"
          className="flex items-center gap-1.5 font-bold text-blue-300 hover:text-blue-200 transition-colors underline underline-offset-2"
        >
          <Phone size={13} />
          {t("cta")}
        </a>
      </div>
    </div>
  );
}
