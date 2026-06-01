export default function GavelIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Sound block */}
      <rect x="90" y="205" width="140" height="28" rx="8" fill="url(#blockGrad)" />
      <rect x="95" y="200" width="130" height="16" rx="6" fill="url(#blockTopGrad)" />
      {/* Block detail lines */}
      <line x1="108" y1="202" x2="212" y2="202" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
      <line x1="112" y1="208" x2="208" y2="208" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
      {/* Shadow under block */}
      <ellipse cx="160" cy="234" rx="70" ry="8" fill="rgba(0,0,0,0.08)" />

      {/* Handle */}
      <rect
        x="148" y="60" width="18" height="145" rx="8"
        transform="rotate(-40, 157, 132)"
        fill="url(#handleGrad)"
      />
      {/* Handle grain details */}
      {[80, 100, 120, 140, 160].map((y, i) => (
        <line key={i}
          x1="150" y1={y} x2="166" y2={y} stroke="rgba(0,0,0,0.08)" strokeWidth="1"
          transform="rotate(-40, 158, 132)"
        />
      ))}

      {/* Gavel head — main block */}
      <rect x="60" y="55" width="130" height="52" rx="10"
        transform="rotate(-40, 125, 81)"
        fill="url(#headGrad)"
      />
      {/* Head face lighter */}
      <rect x="62" y="57" width="126" height="22" rx="8"
        transform="rotate(-40, 125, 68)"
        fill="url(#headFaceGrad)"
      />
      {/* Head metal band */}
      <rect x="114" y="54" width="22" height="52" rx="2"
        transform="rotate(-40, 125, 80)"
        fill="url(#bandGrad)"
      />

      {/* Impact lines / motion */}
      <line x1="205" y1="170" x2="230" y2="185" stroke="rgba(37,99,235,0.25)" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="215" y1="155" x2="245" y2="163" stroke="rgba(37,99,235,0.18)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="210" y1="142" x2="238" y2="143" stroke="rgba(37,99,235,0.12)" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Sparkle dots on impact */}
      <circle cx="222" cy="183" r="3" fill="#BFDBFE" opacity="0.8"/>
      <circle cx="240" cy="165" r="2" fill="#93C5FD" opacity="0.6"/>
      <circle cx="235" cy="145" r="1.5" fill="#60A5FA" opacity="0.5"/>

      {/* Decorative — law text on block */}
      <text x="118" y="222" fontSize="8" fill="rgba(255,255,255,0.35)" fontFamily="serif" fontWeight="bold"
        letterSpacing="2">ПРАВОСУДДЯ</text>

      <defs>
        <linearGradient id="blockGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2E4E7A"/>
          <stop offset="100%" stopColor="#1A2744"/>
        </linearGradient>
        <linearGradient id="blockTopGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3D6494"/>
          <stop offset="100%" stopColor="#2E4E7A"/>
        </linearGradient>
        <linearGradient id="handleGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="#6B4010"/>
          <stop offset="30%" stopColor="#9A6020"/>
          <stop offset="60%" stopColor="#C48030"/>
          <stop offset="100%" stopColor="#8B5520"/>
        </linearGradient>
        <linearGradient id="headGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="#2A1A08"/>
          <stop offset="30%" stopColor="#5C3810"/>
          <stop offset="70%" stopColor="#7A4E18"/>
          <stop offset="100%" stopColor="#4A2C08"/>
        </linearGradient>
        <linearGradient id="headFaceGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="#7A5020"/>
          <stop offset="50%" stopColor="#A87030"/>
          <stop offset="100%" stopColor="#6B4018"/>
        </linearGradient>
        <linearGradient id="bandGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="#B0B0B0"/>
          <stop offset="30%" stopColor="#E8E8E8"/>
          <stop offset="70%" stopColor="#D0D0D0"/>
          <stop offset="100%" stopColor="#A0A0A0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
