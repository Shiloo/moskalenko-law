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
  const contact = useTranslations("contact.info");
  const locale = useLocale();

  return (
    <footer style={{ background: "#1A2744", color: "rgba(255,255,255,0.85)" }}>
      {/* Top gold line */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #C4922A, #D4A84B, #C4922A, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #C4922A, #D4A84B)" }}
              >
                <Scale size={19} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-xs font-medium" style={{ color: "#D4A84B" }}>
                  {locale === "uk" ? "Адвокат" : "Attorney"}
                </div>
                <div className="font-bold text-base leading-tight text-white">
                  {locale === "uk" ? "Юлія Москаленко" : "Yulia Moskalenko"}
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              {t("desc")}
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href="https://t.me/moskalenko_law"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all hover:scale-110"
                style={{
                  background: "rgba(212, 168, 75, 0.12)",
                  border: "1px solid rgba(212, 168, 75, 0.2)",
                  color: "#D4A84B",
                }}
              >
                TG
              </a>
              <a
                href="tel:+380671234567"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(212, 168, 75, 0.12)",
                  border: "1px solid rgba(212, 168, 75, 0.2)",
                  color: "#D4A84B",
                }}
              >
                <Phone size={14} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3
              className="text-xs font-bold mb-5 uppercase tracking-widest"
              style={{ color: "#D4A84B" }}
            >
              {t("links")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ href, key }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:text-amber-300"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {nav(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3
              className="text-xs font-bold mb-5 uppercase tracking-widest"
              style={{ color: "#D4A84B" }}
            >
              {t("contacts")}
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                { icon: <Phone size={14} />, val: contact("phone"), href: "tel:+380671234567" },
                { icon: <Mail size={14} />, val: contact("email"), href: "mailto:julia.moskalenko@ukr.net" },
                { icon: <MapPin size={14} />, val: contact("address"), href: undefined },
                { icon: <Clock size={14} />, val: contact("hours"), href: undefined, gold: true },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span style={{ color: "#D4A84B" }}>{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm transition-colors hover:text-amber-300"
                      style={{ color: item.gold ? "#D4A84B" : "rgba(255,255,255,0.75)", fontWeight: item.gold ? 600 : undefined }}
                    >
                      {item.val}
                    </a>
                  ) : (
                    <span
                      className="text-sm"
                      style={{ color: item.gold ? "#D4A84B" : "rgba(255,255,255,0.75)", fontWeight: item.gold ? 600 : undefined }}
                    >
                      {item.val}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{t("rights")}</p>
          <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.25)" }}>{t("disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}
