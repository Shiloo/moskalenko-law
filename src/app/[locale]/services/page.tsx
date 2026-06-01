import { getTranslations } from "next-intl/server";
import ServicesPage from "@/components/pages/ServicesPage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return { title: `${t("title")} | ${locale === "uk" ? "Адвокат Олексій Шило" : "Attorney Oleksiy Shylo"}` };
}

export default function Page() {
  return <ServicesPage />;
}
