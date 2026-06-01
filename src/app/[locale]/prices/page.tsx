import { getTranslations } from "next-intl/server";
import PricesPage from "@/components/pages/PricesPage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "prices" });
  return { title: `${t("title")} | ${locale === "uk" ? "Адвокат Юлія Москаленко" : "Attorney Yulia Moskalenko"}` };
}

export default function Page() {
  return <PricesPage />;
}
