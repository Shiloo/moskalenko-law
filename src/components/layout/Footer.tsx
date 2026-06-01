"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Scale, Phone, Mail, MapPin, Clock } from "lucide-react";

const NAV_LINKS = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/about", key: "about" },
  { href: "/cases", key: "cases" },
  { href: "/prices", key: "prices" },
  { href: "/contact", key: "contact" },
] as const;

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const ci = useTranslations("contact.info");
  const locale = useLocale();

  return (
    <footer style={{ background: "#0A1628", color: "rgba(255,255,255,0.85)" }}>
      {/* Top accent */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #2563EB, #60A5FA, #2563EB, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#1D4ED8,#2563EB)" }}
              >
                <Scale size={19} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-xs font-semibold" style={{ color: "#60A5FA" }}>
                  {locale === "uk" ? "Адвокат" : "Attorney"}
                </div>
                <div className="font-bold text-base text-white leading-tight">
                  {locale === "uk" ? "Юлія Москаленко" : "Yulia Moskalenko"}
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              {t("desc")}
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href="https://t.me/moskalenko_law"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all hover:scale-110"
                style={{
                  background: "rgba(96,165,250,0.1)",
                  border: "1px solid rgba(96,165,250,0.2)",
                  color: "#60A5FA",
                }}
              >TG</a>
              <a
                href="tel:+380671234567"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(96,165,250,0.1)",
                  border: "1px solid rgba(96,165,250,0.2)",
                  color: "#60A5FA",
                }}
              ><Phone size={14} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold mb-5 uppercase tracking-widest" style={{ color: "#60A5FA" }}>
              {t("links")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ href, key }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:text-blue-300"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >{nav(key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xs font-bold mb-5 uppercase tracking-widest" style={{ color: "#60A5FA" }}>
              {t("contacts")}
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                { icon: <Phone size={14} />, val: ci("phone"), href: "tel:+380671234567" },
                { icon: <Mail size={14} />, val: ci("email"), href: "mailto:julia.moskalenko@ukr.net" },
                { icon: <MapPin size={14} />, val: ci("address") },
                { icon: <Clock size={14} />, val: ci("hours"), accent: true },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span style={{ color: "#60A5FA" }}>{item.icon}</span>
                  {"href" in item && item.href ? (
                    <a href={item.href} className="text-sm hover:text-blue-300 transition-colors"
                      style={{ color: (item as {accent?:boolean}).accent ? "#93C5FD" : "rgba(255,255,255,0.65)", fontWeight: (item as {accent?:boolean}).accent ? 600 : undefined }}>
                      {item.val}
                    </a>
                  ) : (
                    <span className="text-sm"
                      style={{ color: (item as {accent?:boolean}).accent ? "#93C5FD" : "rgba(255,255,255,0.65)", fontWeight: (item as {accent?:boolean}).accent ? 600 : undefined }}>
                      {item.val}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{t("rights")}</p>
          <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.2)" }}>{t("disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}
