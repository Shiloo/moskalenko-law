import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesOverview />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
