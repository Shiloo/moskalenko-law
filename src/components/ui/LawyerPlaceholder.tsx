/**
 * Placeholder for Yulia's real photo.
 * To replace: put your image at public/images/lawyer-portrait.jpg
 * and swap this component for:
 *   <Image src="/images/lawyer-portrait.jpg" alt="Юлія Москаленко" fill className="object-cover" />
 */

interface Props {
  className?: string;
  label?: string;
  aspectRatio?: "portrait" | "square" | "wide";
}

export default function LawyerPlaceholder({
  className = "",
  label = "Фото Юлії Москаленко",
  aspectRatio = "portrait",
}: Props) {
  const ratios = {
    portrait: "3/4",
    square: "1/1",
    wide: "16/9",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ aspectRatio: ratios[aspectRatio] }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)",
        }}
      />

      {/* Pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="photoPattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r="1.5" fill="#2563EB" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#photoPattern)" />
      </svg>

      {/* Person silhouette */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 240 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Body / suit silhouette */}
        <path
          d="M60 320 L60 210 C60 200 50 190 40 180 L40 320 Z"
          fill="rgba(37,99,235,0.15)"
        />
        <path
          d="M180 320 L180 210 C180 200 190 190 200 180 L200 320 Z"
          fill="rgba(37,99,235,0.15)"
        />
        <path
          d="M65 230 C65 215 75 205 85 200 L155 200 C165 205 175 215 175 230 L175 320 L65 320 Z"
          fill="rgba(37,99,235,0.2)"
        />
        {/* Neck */}
        <rect x="107" y="160" width="26" height="48" rx="8" fill="rgba(37,99,235,0.12)" />
        {/* Head */}
        <ellipse cx="120" cy="130" rx="42" ry="48" fill="rgba(37,99,235,0.15)" />
        {/* Hair suggestion */}
        <path
          d="M80 115 C80 85 95 65 120 62 C145 65 160 85 160 115 C160 100 152 82 138 75 C128 70 120 68 120 68 C120 68 112 70 102 75 C88 82 80 100 80 115 Z"
          fill="rgba(37,99,235,0.25)"
        />
      </svg>

      {/* Dashed border */}
      <div
        className="absolute inset-3 rounded-xl"
        style={{
          border: "2px dashed rgba(37,99,235,0.3)",
        }}
      />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center"
        style={{ background: "linear-gradient(to top, rgba(37,99,235,0.12), transparent)" }}>
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{
            background: "rgba(255,255,255,0.85)",
            color: "#1D4ED8",
            border: "1px solid rgba(37,99,235,0.2)",
          }}
        >
          📸 {label}
        </div>
      </div>
    </div>
  );
}
