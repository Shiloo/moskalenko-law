"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional().or(z.literal("")),
  service: z.string().optional(),
  description: z.string().optional(),
  contactMethod: z.string().min(1),
});
type FD = z.infer<typeof schema>;

export default function ContactPage() {
  const t = useTranslations("contact");
  const tf = useTranslations("contact.form");
  const ti = useTranslations("contact.info");
  const tu = useTranslations("contact.urgency");
  const services = tf.raw("services") as string[];
  const methods  = tf.raw("methods")  as string[];
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [selMethod, setSelMethod] = useState(methods[0]);
  const { register, handleSubmit, reset, setValue, formState:{errors} } = useForm<FD>({
    resolver: zodResolver(schema),
    defaultValues: { contactMethod: methods[0] },
  });

  async function onSubmit(data: FD) {
    setStatus("loading");
    try {
      const r = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data) });
      if (r.ok) { setStatus("success"); reset(); } else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <>
      <section className="pt-24 pb-12" style={{ background:"#EFF6FF" }}>
        <div className="section-divider absolute bottom-0 left-0 right-0"/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity:0,y:30 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color:"#0A0E1A", letterSpacing:"-0.03em" }}>{t("title")}</h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color:"#6B7280" }}>{t("subtitle")}</p>
            <div className="blue-line mx-auto mt-5"/>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16" style={{ background:"#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left info */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <AnimatedSection>
                <div className="rounded-2xl p-5 relative overflow-hidden"
                  style={{ background:"linear-gradient(135deg,#0F1B4D 0%,#1E3A8A 100%)", boxShadow:"0 8px 24px rgba(15,27,77,0.2)" }}>
                  <div className="absolute top-3 right-4 text-3xl opacity-10">⚡</div>
                  <h3 className="font-bold text-base mb-1 text-white">{tu("title")}</h3>
                  <p className="text-sm mb-4" style={{ color:"rgba(255,255,255,0.65)" }}>{tu("text")}</p>
                  <a href="tel:+380671234567"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold shimmer-btn transition-all hover:scale-105"
                    style={{ background:"white", color:"#1D4ED8", boxShadow:"0 4px 16px rgba(255,255,255,0.15)" }}>
                    <Phone size={14}/>{tu("cta")}
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="card p-6">
                  <div className="flex flex-col gap-4">
                    {[
                      { icon:<Phone size={15}/>, val:ti("phone"), href:"tel:+380671234567" },
                      { icon:<Mail  size={15}/>, val:ti("email"), href:"mailto:julia.moskalenko@ukr.net" },
                      { icon:<MapPin size={15}/>, val:ti("address") },
                      { icon:<Clock size={15}/>, val:ti("hours"), accent:true },
                    ].map((item,i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background:"#EFF6FF", color:"#1D4ED8" }}>
                          {item.icon}
                        </div>
                        {"href" in item && item.href ? (
                          <a href={item.href} className="text-sm hover:text-blue-700 transition-colors"
                            style={{ color:(item as {accent?:boolean}).accent?"#1D4ED8":"#374151",
                              fontWeight:(item as {accent?:boolean}).accent?600:undefined }}>
                            {item.val}
                          </a>
                        ) : (
                          <span className="text-sm"
                            style={{ color:(item as {accent?:boolean}).accent?"#1D4ED8":"#374151",
                              fontWeight:(item as {accent?:boolean}).accent?600:undefined }}>
                            {item.val}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <a href="https://t.me/moskalenko_law" target="_blank" rel="noopener noreferrer"
                  className="card p-5 flex items-center gap-4 card-hover">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-extrabold"
                    style={{ background:"#e8f4fd", color:"#0088cc" }}>TG</div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color:"#0A0E1A" }}>Telegram</div>
                    <div className="text-xs" style={{ color:"#6B7280" }}>@moskalenko_law</div>
                  </div>
                </a>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.15} direction="right">
                <div className="card p-6 lg:p-8">
                  <h2 className="text-xl font-bold mb-6" style={{ color:"#0A0E1A" }}>{tf("title")}</h2>
                  <AnimatePresence mode="wait">
                    {status==="success" ? (
                      <motion.div key="ok" initial={{ opacity:0,scale:0.95 }} animate={{ opacity:1,scale:1 }}
                        className="flex flex-col items-center text-center py-12 gap-4">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{ background:"rgba(37,99,235,0.08)", border:"2px solid rgba(37,99,235,0.2)" }}>
                          <CheckCircle size={32} style={{ color:"#2563EB" }}/>
                        </div>
                        <h3 className="text-xl font-bold" style={{ color:"#0A0E1A" }}>{tf("success_title")}</h3>
                        <p className="text-sm max-w-sm" style={{ color:"#6B7280" }}>{tf("success_text")}</p>
                        <a href="tel:+380671234567"
                          className="btn-blue shimmer-btn flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold mt-2">
                          <span className="relative z-10 flex items-center gap-2"><Phone size={14}/>+38 (067) 123-45-67</span>
                        </a>
                      </motion.div>
                    ) : (
                      <motion.form key="form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold mb-1.5" style={{ color:"#374151" }}>{tf("name")}</label>
                            <input {...register("name")} placeholder={tf("name_placeholder")} className="input-field"
                              style={{ borderColor:errors.name?"rgba(239,68,68,0.5)":undefined }}/>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold mb-1.5" style={{ color:"#374151" }}>{tf("phone")}</label>
                            <input {...register("phone")} placeholder={tf("phone_placeholder")} type="tel" className="input-field"
                              style={{ borderColor:errors.phone?"rgba(239,68,68,0.5)":undefined }}/>
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold mb-1.5" style={{ color:"#6B7280" }}>{tf("email")}</label>
                            <input {...register("email")} placeholder={tf("email_placeholder")} type="email" className="input-field"/>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold mb-1.5" style={{ color:"#6B7280" }}>{tf("service")}</label>
                            <select {...register("service")} className="input-field">
                              <option value="">{tf("service_placeholder")}</option>
                              {services.map((s,i) => <option key={i} value={s}>{s}</option>)}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color:"#6B7280" }}>{tf("description")}</label>
                          <textarea {...register("description")} placeholder={tf("description_placeholder")} rows={4} className="input-field resize-none"/>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-2" style={{ color:"#6B7280" }}>{tf("contact_method")}</label>
                          <div className="flex gap-2 flex-wrap">
                            {methods.map(m => (
                              <button key={m} type="button"
                                onClick={() => { setSelMethod(m); setValue("contactMethod",m); }}
                                className="px-4 py-2 rounded-xl text-xs font-semibold transition-all"
                                style={selMethod===m ? {
                                  background:"linear-gradient(135deg,#1D4ED8,#2563EB)",
                                  color:"white", border:"none",
                                  boxShadow:"0 3px 10px rgba(37,99,235,0.3)",
                                } : {
                                  border:"1.5px solid rgba(37,99,235,0.18)",
                                  color:"#1D4ED8", background:"transparent",
                                }}>
                                {m}
                              </button>
                            ))}
                          </div>
                        </div>
                        {status==="error" && (
                          <div className="flex items-center gap-2 p-3 rounded-xl text-sm"
                            style={{ background:"rgba(239,68,68,0.06)", border:"1px solid rgba(239,68,68,0.18)", color:"#dc2626" }}>
                            <AlertCircle size={14}/>{tf("error")}
                          </div>
                        )}
                        <button type="submit" disabled={status==="loading"}
                          className="btn-blue shimmer-btn flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold mt-1 disabled:opacity-60">
                          <span className="relative z-10 flex items-center gap-2">
                            <Send size={15}/>{status==="loading" ? tf("submitting") : tf("submit")}
                          </span>
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
