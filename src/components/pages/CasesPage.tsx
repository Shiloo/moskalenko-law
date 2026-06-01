"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHero from "@/components/ui/PageHero";
import CTA from "@/components/home/CTA";
import { Users,Package,Pill,DollarSign,Shield,Monitor } from "lucide-react";

const ICONS=[Users,Package,Pill,DollarSign,Shield,Monitor];

export default function CasesPage() {
  const t=useTranslations("cases");
  const cats=t.raw("categories") as Array<{title:string;cases:string[]}>;
  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />
      <section className="py-16 lg:py-20" style={{background:"#FFFFFF"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cats.map((cat,i)=>{
              const Icon=ICONS[i]||Shield;
              return (
                <AnimatedSection key={i} delay={i*0.09}>
                  <div className="card card-hover p-6 h-full" style={{background:i%2===0?"white":"#F0F7FF"}}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{background:"linear-gradient(135deg,#1D4ED8,#2563EB)",color:"white"}}>
                        <Icon size={18}/>
                      </div>
                      <h3 className="font-bold text-sm leading-snug" style={{color:"#0A0E1A"}}>{cat.title}</h3>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {cat.cases.map((c,j)=>(
                        <li key={j} className="flex items-center gap-2.5 text-xs px-3 py-2 rounded-lg"
                          style={{background:"white",color:"#374151",border:"1px solid rgba(37,99,235,0.08)"}}>
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{background:"#2563EB"}}/>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
      <CTA/>
    </>
  );
}
