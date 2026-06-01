import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isUk = locale === "uk";
  return {
    title: isUk
      ? "Адвокат Юлія Москаленко | Кримінальний захист у Києві"
      : "Attorney Yulia Moskalenko | Criminal Defense Lawyer Kyiv",
    description: isUk
      ? "Досвідчений адвокат у кримінальних справах. 10+ років практики, 200+ справ. Київ. Дзвоніть 24/7."
      : "Experienced criminal defense lawyer. 10+ years practice, 200+ cases. Kyiv, Ukraine. Call 24/7.",
    keywords: isUk
      ? ["адвокат", "кримінальний адвокат", "захист у суді", "Київ", "кримінальні справи"]
      : ["lawyer", "criminal defense", "attorney", "Kyiv", "Ukraine"],
    openGraph: {
      type: "website",
      locale: isUk ? "uk_UA" : "en_US",
      siteName: isUk ? "Адвокат Юлія Москаленко" : "Attorney Yulia Moskalenko",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AnnouncementBanner />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
