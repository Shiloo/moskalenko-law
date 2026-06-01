export default function LawyerPortrait({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Attorney portrait"
    >
      {/* Background shape */}
      <rect width="320" height="400" rx="20" fill="url(#portraitBg)" />

      {/* Decorative corner accents */}
      <path d="M0 40 L0 0 L40 0" stroke="#D4A84B" strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M280 0 L320 0 L320 40" stroke="#D4A84B" strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M0 360 L0 400 L40 400" stroke="#D4A84B" strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M280 400 L320 400 L320 360" stroke="#D4A84B" strokeWidth="3" fill="none" opacity="0.5" />

      {/* Subtle pattern */}
      <rect width="320" height="400" rx="20" fill="url(#portraitPattern)" opacity="0.06" />

      {/* Figure silhouette - business suit */}
      {/* Suit body */}
      <path
        d="M95 280 C95 260 80 250 70 240 C60 230 55 215 55 200 L55 340 L265 340 L265 200 C265 215 260 230 250 240 C240 250 225 260 225 280"
        fill="url(#suitGrad)"
      />
      {/* Lapels */}
      <path d="M160 200 L140 230 L130 280 L160 270 L190 280 L180 230 Z" fill="url(#lapelGrad)" />
      {/* Shirt / blouse */}
      <path d="M148 210 L160 240 L172 210 Z" fill="white" opacity="0.85" />
      {/* Button details */}
      <circle cx="160" cy="248" r="3" fill="white" opacity="0.6" />
      <circle cx="160" cy="261" r="3" fill="white" opacity="0.6" />

      {/* Shoulders */}
      <ellipse cx="100" cy="245" rx="40" ry="20" fill="url(#suitGrad)" />
      <ellipse cx="220" cy="245" rx="40" ry="20" fill="url(#suitGrad)" />

      {/* Neck */}
      <rect x="148" y="170" width="24" height="45" rx="10" fill="#F5D5B8" />

      {/* Head */}
      <ellipse cx="160" cy="145" rx="56" ry="62" fill="#F5D5B8" />

      {/* Hair */}
      <path
        d="M104 130 C104 95 118 75 160 72 C202 75 216 95 216 130 C216 115 208 95 190 88 C178 82 168 80 160 80 C152 80 142 82 130 88 C112 95 104 115 104 130"
        fill="url(#hairGrad)"
      />
      {/* Hair volume sides */}
      <path d="M104 130 C102 120 100 135 103 155 C106 168 108 172 104 170 C98 165 96 150 98 135 Z" fill="url(#hairGrad)" />
      <path d="M216 130 C218 120 220 135 217 155 C214 168 212 172 216 170 C222 165 224 150 222 135 Z" fill="url(#hairGrad)" />

      {/* Face features */}
      {/* Eyes */}
      <ellipse cx="142" cy="138" rx="9" ry="7" fill="white" />
      <ellipse cx="178" cy="138" rx="9" ry="7" fill="white" />
      <circle cx="143" cy="138" r="5" fill="#3D2B1A" />
      <circle cx="179" cy="138" r="5" fill="#3D2B1A" />
      <circle cx="145" cy="136" r="1.5" fill="white" opacity="0.7" />
      <circle cx="181" cy="136" r="1.5" fill="white" opacity="0.7" />
      {/* Eyebrows */}
      <path d="M133 128 Q142 124 151 127" stroke="#5C3D20" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M169 127 Q178 124 187 128" stroke="#5C3D20" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <path d="M158 148 Q156 158 153 162 Q160 165 167 162 Q164 158 162 148" stroke="#D4A080" strokeWidth="1.2" fill="none" opacity="0.6" />
      {/* Mouth */}
      <path d="M147 172 Q160 180 173 172" stroke="#C08060" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M149 172 Q160 176 171 172" fill="rgba(192,80,60,0.2)" stroke="none" />

      {/* Earrings - small gold dots */}
      <circle cx="104" cy="148" r="4" fill="#D4A84B" />
      <circle cx="104" cy="148" r="2" fill="#F0C870" />
      <circle cx="216" cy="148" r="4" fill="#D4A84B" />
      <circle cx="216" cy="148" r="2" fill="#F0C870" />

      {/* Small necklace */}
      <path d="M148 185 Q160 192 172 185" stroke="#D4A84B" strokeWidth="1.5" fill="none" opacity="0.7" />

      {/* Gold badge / pin on jacket */}
      <circle cx="127" cy="260" r="8" fill="url(#badgeGrad)" />
      <text x="127" y="264" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">⚖</text>

      {/* Bottom text area */}
      <rect x="40" y="348" width="240" height="40" rx="8" fill="rgba(255,255,255,0.1)" />
      <text x="160" y="368" textAnchor="middle" fontSize="13" fontWeight="700" fill="white" letterSpacing="0.5">Юлія Москаленко</text>
      <text x="160" y="382" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)">Адвокат · 30+ років досвіду</text>

      <defs>
        <linearGradient id="portraitBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A2744" />
          <stop offset="50%" stopColor="#1E3A5F" />
          <stop offset="100%" stopColor="#1A2744" />
        </linearGradient>
        <pattern id="portraitPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="#C4922A" />
        </pattern>
        <linearGradient id="suitGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A2744" />
          <stop offset="100%" stopColor="#0F1B2D" />
        </linearGradient>
        <linearGradient id="lapelGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2E4E7A" />
          <stop offset="100%" stopColor="#1A2744" />
        </linearGradient>
        <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B4423" />
          <stop offset="100%" stopColor="#3D2010" />
        </linearGradient>
        <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4A84B" />
          <stop offset="100%" stopColor="#C4922A" />
        </linearGradient>
      </defs>
    </svg>
  );
}
