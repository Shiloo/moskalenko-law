export default function CourthouseIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Sky gradient */}
      <rect width="800" height="400" fill="url(#skyGrad)" />

      {/* Clouds */}
      <ellipse cx="120" cy="80" rx="60" ry="22" fill="white" opacity="0.6" />
      <ellipse cx="160" cy="70" rx="50" ry="18" fill="white" opacity="0.5" />
      <ellipse cx="620" cy="90" rx="70" ry="24" fill="white" opacity="0.55" />
      <ellipse cx="670" cy="78" rx="55" ry="20" fill="white" opacity="0.45" />

      {/* Ground */}
      <rect x="0" y="330" width="800" height="70" fill="url(#groundGrad)" />
      {/* Ground steps */}
      <rect x="120" y="315" width="560" height="20" rx="2" fill="url(#stoneGrad)" />
      <rect x="150" y="300" width="500" height="20" rx="2" fill="url(#stoneGrad)" />
      <rect x="180" y="285" width="440" height="20" rx="2" fill="url(#stoneGrad)" />

      {/* Main building body */}
      <rect x="210" y="160" width="380" height="130" fill="url(#buildingGrad)" />

      {/* Pediment (triangular roof) */}
      <path d="M180 160 L400 60 L620 160 Z" fill="url(#pedimentGrad)" />
      <path d="M195 160 L400 72 L605 160 Z" fill="url(#pedimentInner)" />

      {/* Pediment decoration */}
      {/* Scales of justice inside pediment */}
      <g transform="translate(370, 95)">
        <rect x="28" y="0" width="4" height="50" rx="2" fill="rgba(255,255,255,0.7)" />
        <rect x="10" y="18" width="40" height="5" rx="2" fill="rgba(255,255,255,0.7)" />
        <line x1="14" y1="23" x2="8"  y2="38" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="2,2"/>
        <line x1="14" y1="23" x2="20" y2="38" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="2,2"/>
        <line x1="46" y1="23" x2="40" y2="40" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="2,2"/>
        <line x1="46" y1="23" x2="52" y2="40" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="2,2"/>
        <ellipse cx="14" cy="39" rx="8" ry="3.5" fill="rgba(255,255,255,0.5)" />
        <ellipse cx="46" cy="41" rx="8" ry="3.5" fill="rgba(255,255,255,0.5)" />
      </g>

      {/* Cornice line */}
      <rect x="200" y="157" width="400" height="8" rx="2" fill="url(#corniceGrad)" />

      {/* Columns — 8 total */}
      {[240, 290, 340, 390, 410, 460, 510, 560].map((x, i) => (
        <g key={i}>
          {/* Column shaft */}
          <rect x={x} y="168" width="18" height="120" rx="3" fill="url(#columnGrad)" />
          {/* Column capital */}
          <rect x={x - 3} y="165" width="24" height="8" rx="2" fill="url(#capitalGrad)" />
          {/* Column base */}
          <rect x={x - 4} y="285" width="26" height="6" rx="2" fill="url(#capitalGrad)" />
          {/* Fluting shadows */}
          <line x1={x + 5}  y1="170" x2={x + 5}  y2="284" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
          <line x1={x + 9}  y1="170" x2={x + 9}  y2="284" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
          <line x1={x + 13} y1="170" x2={x + 13} y2="284" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
        </g>
      ))}

      {/* Door */}
      <rect x="362" y="230" width="76" height="62" rx="4" fill="url(#doorGrad)" />
      <path d="M362 232 Q400 210 438 232" fill="url(#archGrad)" />
      {/* Door details */}
      <rect x="368" y="238" width="30" height="48" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="402" y="238" width="30" height="48" rx="2" fill="rgba(255,255,255,0.15)" />
      <circle cx="398" cy="262" r="3" fill="rgba(255,255,255,0.5)" />
      <circle cx="402" cy="262" r="3" fill="rgba(255,255,255,0.5)" />

      {/* Windows */}
      {[230, 310, 490, 560].map((x, i) => (
        <g key={i}>
          <rect x={x} y="195" width="42" height="60" rx="3" fill="url(#windowGrad)" />
          <path d={`M${x} 197 Q${x+21} 183 ${x+42} 197`} fill="rgba(37,99,235,0.3)" />
          <line x1={x+21} y1="197" x2={x+21} y2="255" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1={x}    y1="226" x2={x+42} y2="226" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        </g>
      ))}

      {/* Flag / finial on pediment */}
      <rect x="397" y="42" width="3" height="25" fill="rgba(255,255,255,0.6)" />
      <path d="M400 42 L418 50 L400 58 Z" fill="rgba(37,99,235,0.7)" />

      {/* Trees */}
      {[155, 640].map((x, i) => (
        <g key={i}>
          <rect x={x + 10} y="280" width="8" height="55" fill="#4B7C3A" opacity="0.6" />
          <ellipse cx={x + 14} cy="265" rx="30" ry="40" fill="#3D6B2D" opacity="0.55" />
          <ellipse cx={x + 14} cy="250" rx="22" ry="30" fill="#4B7C3A" opacity="0.5" />
        </g>
      ))}

      {/* Foreground bushes */}
      {[130, 620].map((x, i) => (
        <ellipse key={i} cx={x} cy="330" rx="35" ry="18" fill="#4B7C3A" opacity="0.4" />
      ))}

      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#DBEAFE" />
          <stop offset="100%" stopColor="#EFF6FF" />
        </linearGradient>
        <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#D1D5DB" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
        <linearGradient id="stoneGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#F3F4F6" />
          <stop offset="100%" stopColor="#E5E7EB" />
        </linearGradient>
        <linearGradient id="buildingGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#F9FAFB" />
          <stop offset="100%" stopColor="#F3F4F6" />
        </linearGradient>
        <linearGradient id="pedimentGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#DBEAFE" />
        </linearGradient>
        <linearGradient id="pedimentInner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(219,234,254,0.8)" />
        </linearGradient>
        <linearGradient id="corniceGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#E5E7EB" />
          <stop offset="100%" stopColor="#D1D5DB" />
        </linearGradient>
        <linearGradient id="columnGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#F3F4F6" />
          <stop offset="30%"  stopColor="#FFFFFF" />
          <stop offset="70%"  stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E5E7EB" />
        </linearGradient>
        <linearGradient id="capitalGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#E5E7EB" />
          <stop offset="100%" stopColor="#D1D5DB" />
        </linearGradient>
        <linearGradient id="doorGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="archGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="windowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#BFDBFE" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
      </defs>
    </svg>
  );
}
