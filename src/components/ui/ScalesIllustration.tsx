export default function ScalesIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Glow base */}
      <ellipse cx="260" cy="425" rx="170" ry="28" fill="rgba(37,99,235,0.08)" />

      {/* Base column */}
      <rect x="245" y="360" width="30" height="60" rx="4" fill="#DBEAFE" />
      <rect x="232" y="415" width="56" height="12" rx="6" fill="#2563EB" opacity="0.4" />

      {/* Main pole */}
      <rect x="257" y="80" width="6" height="290" rx="3" fill="url(#poleGrad)" />

      {/* Crossbar */}
      <rect x="100" y="108" width="320" height="8" rx="4" fill="url(#barGrad)" />

      {/* Center ornament */}
      <circle cx="260" cy="112" r="18" fill="white" stroke="url(#blueGrad)" strokeWidth="2.5" />
      <path d="M252 112 L260 104 L268 112 L260 120 Z" fill="url(#blueGrad)" />

      {/* === LEFT PAN — slightly higher === */}
      <line x1="160" y1="116" x2="144" y2="200" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6" />
      <line x1="160" y1="116" x2="176" y2="200" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6" />
      <ellipse cx="160" cy="205" rx="52" ry="13" fill="url(#panGrad)" />
      <path d="M110 205 Q160 233 210 205" fill="url(#panFill)" stroke="#2563EB" strokeWidth="1.2" />

      {/* Documents in left pan */}
      <rect x="135" y="188" width="22" height="28" rx="2" fill="white" stroke="#93C5FD" strokeWidth="1" />
      <rect x="129" y="183" width="22" height="28" rx="2" fill="white" stroke="#2563EB" strokeWidth="1.2" />
      <line x1="133" y1="191" x2="147" y2="191" stroke="#2563EB" strokeWidth="1" opacity="0.4" />
      <line x1="133" y1="197" x2="147" y2="197" stroke="#2563EB" strokeWidth="1" opacity="0.4" />
      <line x1="133" y1="203" x2="141" y2="203" stroke="#2563EB" strokeWidth="1" opacity="0.4" />
      <ellipse cx="160" cy="217" rx="38" ry="5" fill="rgba(37,99,235,0.08)" />

      {/* === RIGHT PAN — slightly lower === */}
      <line x1="360" y1="116" x2="344" y2="220" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6" />
      <line x1="360" y1="116" x2="376" y2="220" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6" />
      <ellipse cx="360" cy="225" rx="52" ry="13" fill="url(#panGrad)" />
      <path d="M310 225 Q360 253 410 225" fill="url(#panFill)" stroke="#2563EB" strokeWidth="1.2" />

      {/* Gavel in right pan */}
      <rect x="342" y="200" width="36" height="12" rx="3" fill="#1E3A8A" />
      <rect x="350" y="196" width="12" height="20" rx="2" fill="#1D4ED8" />
      <line x1="356" y1="212" x2="342" y2="224" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="360" cy="237" rx="38" ry="5" fill="rgba(37,99,235,0.08)" />

      {/* Sparkle dots */}
      <circle cx="80"  cy="160" r="3"   fill="#60A5FA" opacity="0.4" />
      <circle cx="440" cy="140" r="2.5" fill="#3B82F6" opacity="0.4" />
      <circle cx="60"  cy="280" r="2"   fill="#2563EB" opacity="0.3" />
      <circle cx="460" cy="300" r="3"   fill="#60A5FA" opacity="0.3" />
      <circle cx="180" cy="70"  r="2"   fill="#93C5FD" opacity="0.35" />
      <circle cx="340" cy="65"  r="1.5" fill="#60A5FA" opacity="0.35" />

      <defs>
        <linearGradient id="poleGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="barGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#DBEAFE" />
          <stop offset="30%"  stopColor="#2563EB" />
          <stop offset="70%"  stopColor="#2563EB" />
          <stop offset="100%" stopColor="#DBEAFE" />
        </linearGradient>
        <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="panGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#3B82F6" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="panFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(59,130,246,0.12)" />
          <stop offset="100%" stopColor="rgba(37,99,235,0.04)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
