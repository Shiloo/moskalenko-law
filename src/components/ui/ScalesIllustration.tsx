export default function ScalesIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Glow backdrop */}
      <ellipse cx="260" cy="420" rx="160" ry="28" fill="rgba(196,146,42,0.08)" />

      {/* Column base */}
      <rect x="245" y="360" width="30" height="60" rx="4" fill="#EDE5D5" />
      <rect x="232" y="415" width="56" height="12" rx="6" fill="#D4A84B" opacity="0.6" />

      {/* Main pole */}
      <rect x="257" y="80" width="6" height="290" rx="3" fill="url(#poleGrad)" />

      {/* Crossbar */}
      <rect x="100" y="108" width="320" height="8" rx="4" fill="url(#barGrad)" />

      {/* Center ornament */}
      <circle cx="260" cy="112" r="18" fill="white" stroke="url(#goldGrad)" strokeWidth="2.5" />
      <path d="M252 112 L260 104 L268 112 L260 120 Z" fill="url(#goldGrad)" />

      {/* === LEFT PAN === */}
      {/* Left chain */}
      <line x1="160" y1="116" x2="144" y2="200" stroke="#D4A84B" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.7" />
      <line x1="160" y1="116" x2="176" y2="200" stroke="#D4A84B" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.7" />

      {/* Left pan (slightly higher - winning side) */}
      <ellipse cx="160" cy="205" rx="52" ry="14" fill="url(#panGrad)" />
      <path d="M110 205 Q160 235 210 205" stroke="#C4922A" strokeWidth="1.5" fill="url(#panFill)" />

      {/* Items in left pan - documents */}
      <rect x="135" y="188" width="22" height="28" rx="2" fill="white" stroke="#D4A84B" strokeWidth="1" />
      <rect x="130" y="184" width="22" height="28" rx="2" fill="white" stroke="#C4922A" strokeWidth="1.2" />
      <line x1="134" y1="192" x2="148" y2="192" stroke="#C4922A" strokeWidth="1" opacity="0.5" />
      <line x1="134" y1="197" x2="148" y2="197" stroke="#C4922A" strokeWidth="1" opacity="0.5" />
      <line x1="134" y1="202" x2="142" y2="202" stroke="#C4922A" strokeWidth="1" opacity="0.5" />

      {/* Left pan shadow */}
      <ellipse cx="160" cy="218" rx="38" ry="5" fill="rgba(196,146,42,0.1)" />

      {/* === RIGHT PAN === */}
      {/* Right chain */}
      <line x1="360" y1="116" x2="344" y2="220" stroke="#D4A84B" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.7" />
      <line x1="360" y1="116" x2="376" y2="220" stroke="#D4A84B" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.7" />

      {/* Right pan (slightly lower) */}
      <ellipse cx="360" cy="225" rx="52" ry="14" fill="url(#panGrad)" />
      <path d="M310 225 Q360 255 410 225" stroke="#C4922A" strokeWidth="1.5" fill="url(#panFill)" />

      {/* Items in right pan - gavel */}
      <rect x="342" y="200" width="36" height="12" rx="3" fill="#8B6014" />
      <rect x="350" y="196" width="12" height="20" rx="2" fill="#A87820" />
      <line x1="356" y1="212" x2="342" y2="224" stroke="#8B6014" strokeWidth="2.5" strokeLinecap="round" />

      {/* Right pan shadow */}
      <ellipse cx="360" cy="238" rx="38" ry="5" fill="rgba(196,146,42,0.1)" />

      {/* Decorative stars / sparkles */}
      <circle cx="80" cy="160" r="3" fill="#D4A84B" opacity="0.4" />
      <circle cx="440" cy="140" r="2.5" fill="#D4A84B" opacity="0.4" />
      <circle cx="60" cy="280" r="2" fill="#C4922A" opacity="0.3" />
      <circle cx="460" cy="300" r="3" fill="#C4922A" opacity="0.3" />
      <circle cx="180" cy="70" r="2" fill="#D4A84B" opacity="0.35" />
      <circle cx="340" cy="65" r="1.5" fill="#D4A84B" opacity="0.35" />

      {/* Flying documents decoration */}
      <g opacity="0.15" transform="rotate(-12, 80, 320)">
        <rect x="55" y="310" width="40" height="52" rx="3" fill="#C4922A" />
        <line x1="62" y1="325" x2="88" y2="325" stroke="white" strokeWidth="2" />
        <line x1="62" y1="333" x2="88" y2="333" stroke="white" strokeWidth="2" />
        <line x1="62" y1="341" x2="78" y2="341" stroke="white" strokeWidth="2" />
      </g>
      <g opacity="0.12" transform="rotate(8, 420, 300)">
        <rect x="420" y="290" width="36" height="46" rx="3" fill="#C4922A" />
        <line x1="427" y1="303" x2="449" y2="303" stroke="white" strokeWidth="2" />
        <line x1="427" y1="311" x2="449" y2="311" stroke="white" strokeWidth="2" />
        <line x1="427" y1="319" x2="439" y2="319" stroke="white" strokeWidth="2" />
      </g>

      {/* Gradient defs */}
      <defs>
        <linearGradient id="poleGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4A84B" />
          <stop offset="100%" stopColor="#A87820" />
        </linearGradient>
        <linearGradient id="barGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#EDE5D5" />
          <stop offset="30%" stopColor="#D4A84B" />
          <stop offset="70%" stopColor="#D4A84B" />
          <stop offset="100%" stopColor="#EDE5D5" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C4922A" />
          <stop offset="100%" stopColor="#D4A84B" />
        </linearGradient>
        <linearGradient id="panGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4A84B" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#A87820" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="panFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(212,168,75,0.15)" />
          <stop offset="100%" stopColor="rgba(196,146,42,0.05)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
