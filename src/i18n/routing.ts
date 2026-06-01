import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["uk", "en"],
  defaultLocale: "uk",
  pathnames: {
    "/": "/",
    "/services": "/services",
    "/about": "/about",
    "/cases": "/cases",
    "/prices": "/prices",
    "/contact": "/contact",
  },
});

export type Locale = (typeof routing.locales)[number];
