import { getTranslations } from "next-intl/server";
import ContactPage from "@/components/pages/ContactPage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: `${t("title")} | ${locale === "uk" ? "Адвокат Юлія Москаленко" : "Attorney Yulia Moskalenko"}` };
}

export default function Page() {
  return <ContactPage />;
}
