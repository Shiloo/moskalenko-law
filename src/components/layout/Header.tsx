"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Menu, X, Scale, Phone } from "lucide-react";

const NAV_LINKS = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/about", key: "about" },
  { href: "/cases", key: "cases" },
  { href: "/prices", key: "prices" },
  { href: "/contact", key: "contact" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const otherLocale = locale === "uk" ? "en" : "uk";
  const localePath = pathname.replace(`/${locale}`, `/${otherLocale}`) || `/${otherLocale}`;

  const isActive = (href: string) => {
    const s = pathname.replace(`/${locale}`, "") || "/";
    return s === href;
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.90)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(37,99,235,0.12)"
            : "1px solid rgba(37,99,235,0.06)",
          boxShadow: scrolled ? "0 2px 20px rgba(10,14,26,0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #1D4ED8, #2563EB)",
                  boxShadow: "0 3px 12px rgba(37,99,235,0.35)",
                }}
              >
                <Scale size={17} color="white" strokeWidth={2.5} />
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-semibold leading-tight" style={{ color: "#2563EB" }}>
                  {locale === "uk" ? "Адвокат" : "Attorney"}
                </div>
                <div className="text-sm font-bold leading-tight" style={{ color: "#0A0E1A" }}>
                  {locale === "uk" ? "Юлія Москаленко" : "Yulia Moskalenko"}
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map(({ href, key }) => (
                <Link
                  key={key}
                  href={href}
                  className="relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group"
                  style={{ color: isActive(href) ? "#1D4ED8" : "#374151" }}
                >
                  <span className="relative z-10">{t(key)}</span>
                  {isActive(href) && (
                    <span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                      style={{ background: "linear-gradient(90deg,#1D4ED8,#3B82F6)" }}
                    />
                  )}
                  <span
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "rgba(37,99,235,0.05)" }}
                  />
                </Link>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2.5">
              {/* Lang switcher */}
              <a
                href={localePath}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all hover:shadow-sm"
                style={{
                  border: "1.5px solid rgba(37,99,235,0.2)",
                  color: "#1D4ED8",
                  background: "rgba(37,99,235,0.04)",
                }}
              >
                <span className="text-sm">{otherLocale === "uk" ? "🇺🇦" : "🇬🇧"}</span>
                {otherLocale.toUpperCase()}
              </a>

              {/* CTA */}
              <Link
                href="/contact"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold btn-blue shimmer-btn"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Phone size={13} />
                  {t("consultation")}
                </span>
              </Link>

              {/* Burger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2.5 rounded-xl transition-colors"
                style={{
                  border: "1.5px solid rgba(37,99,235,0.18)",
                  color: "#1D4ED8",
                  background: "rgba(37,99,235,0.04)",
                }}
                aria-label="Menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0"
            style={{ background: "rgba(10,14,26,0.55)", backdropFilter: "blur(4px)" }}
            onClick={() => setMenuOpen(false)}
          />
          <div
            className="absolute right-0 top-0 h-full w-72 flex flex-col shadow-2xl"
            style={{ background: "#FFFFFF", borderLeft: "1px solid rgba(37,99,235,0.1)" }}
          >
            <div
              className="flex items-center justify-between px-5 py-4 border-b"
              style={{ borderColor: "rgba(37,99,235,0.08)" }}
            >
              <div>
                <div className="text-xs font-semibold" style={{ color: "#2563EB" }}>
                  {locale === "uk" ? "Адвокат" : "Attorney"}
                </div>
                <div className="font-bold text-sm" style={{ color: "#0A0E1A" }}>
                  {locale === "uk" ? "Юлія Москаленко" : "Yulia Moskalenko"}
                </div>
              </div>
              <button onClick={() => setMenuOpen(false)} style={{ color: "#9CA3AF" }}>
                <X size={18} />
              </button>
            </div>

            <nav className="flex-1 p-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ href, key }) => (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{
                    background: isActive(href) ? "rgba(37,99,235,0.06)" : "transparent",
                    color: isActive(href) ? "#1D4ED8" : "#374151",
                    borderLeft: `2px solid ${isActive(href) ? "#2563EB" : "transparent"}`,
                  }}
                >
                  {t(key)}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t" style={{ borderColor: "rgba(37,99,235,0.08)" }}>
              <a
                href={localePath}
                className="flex items-center justify-center gap-2 w-full py-2.5 mb-3 rounded-xl text-sm font-medium"
                style={{ border: "1.5px solid rgba(37,99,235,0.2)", color: "#1D4ED8" }}
              >
                <span>{otherLocale === "uk" ? "🇺🇦" : "🇬🇧"}</span>
                {otherLocale === "uk" ? "Українська" : "English"}
              </a>
              <a
                href="tel:+380671234567"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold btn-blue"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone size={14} />
                  +38 (067) 123-45-67
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
