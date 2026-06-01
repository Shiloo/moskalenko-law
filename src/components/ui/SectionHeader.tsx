import AnimatedSection from "./AnimatedSection";

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true, light = false }: Props) {
  return (
    <div className={centered ? "text-center" : ""}>
      <AnimatedSection>
        <h2
          className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight"
          style={{
            color: light ? "white" : "var(--text-heading)",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h2>
      </AnimatedSection>
      {subtitle && (
        <AnimatedSection delay={0.1}>
          <p
            className="text-base sm:text-lg max-w-2xl leading-relaxed"
            style={{
              color: light ? "rgba(255,255,255,0.7)" : "var(--text-muted)",
              margin: centered ? "0 auto" : undefined,
            }}
          >
            {subtitle}
          </p>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.15}>
        <div
          className="mt-4 h-[3px] w-12 rounded-full"
          style={{
            background: "linear-gradient(90deg, #C4922A, #D4A84B)",
            margin: centered ? "1rem auto 0" : "1rem 0 0",
          }}
        />
      </AnimatedSection>
    </div>
  );
}
