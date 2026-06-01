export default function LawBooksIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Desk surface */}
      <rect x="0" y="290" width="480" height="70" fill="url(#deskGrad)" />
      <rect x="0" y="290" width="480" height="6" fill="url(#deskEdge)" />

      {/* Reflection on desk */}
      <ellipse cx="240" cy="295" rx="180" ry="8" fill="rgba(255,255,255,0.15)" />

      {/* === BOOKS STACK LEFT === */}
      <g transform="translate(40, 140)">
        {/* Book 6 - bottom */}
        <rect x="0" y="130" width="90" height="18" rx="2" fill="#1E3A8A" />
        <rect x="2" y="131" width="86" height="16" rx="2" fill="#1D4ED8" />
        <line x1="8" y1="131" x2="8" y2="147" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
        <text x="15" y="143" fontSize="7" fill="rgba(255,255,255,0.6)" fontFamily="serif">КРИМІНАЛЬНИЙ КОДЕКС</text>
        {/* Book 5 */}
        <rect x="0" y="108" width="90" height="24" rx="2" fill="#1E40AF" />
        <rect x="2" y="110" width="86" height="20" rx="2" fill="#2563EB" />
        <line x1="8" y1="110" x2="8" y2="130" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
        <text x="15" y="124" fontSize="7" fill="rgba(255,255,255,0.6)" fontFamily="serif">ЦИВІЛЬНИЙ КОДЕКС</text>
        {/* Book 4 */}
        <rect x="4" y="84" width="82" height="26" rx="2" fill="#3B82F6" />
        <rect x="6" y="86" width="78" height="22" rx="2" fill="#60A5FA" />
        <line x1="12" y1="86" x2="12" y2="108" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
        <text x="18" y="101" fontSize="7" fill="rgba(255,255,255,0.7)" fontFamily="serif">КОДЕКС УКРАЇНИ</text>
        {/* Book 3 */}
        <rect x="0" y="58" width="90" height="28" rx="2" fill="#0F2D5E" />
        <rect x="2" y="60" width="86" height="24" rx="2" fill="#1A3A7A" />
        <line x1="8" y1="60" x2="8" y2="84" stroke="rgba(255,255,255,0.25)" strokeWidth="2"/>
        <text x="14" y="75" fontSize="7" fill="rgba(255,255,255,0.55)" fontFamily="serif">ПРОЦЕСУАЛЬНИЙ</text>
        <text x="14" y="83" fontSize="7" fill="rgba(255,255,255,0.55)" fontFamily="serif">КОДЕКС</text>
        {/* Book 2 */}
        <rect x="5" y="30" width="80" height="30" rx="2" fill="#1D4ED8" />
        <rect x="7" y="32" width="76" height="26" rx="2" fill="#2563EB" />
        <line x1="13" y1="32" x2="13" y2="58" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
        {/* Gold emblem */}
        <circle cx="50" cy="45" r="8" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <text x="46" y="49" fontSize="9" fill="rgba(255,255,255,0.4)">⚖</text>
        {/* Book 1 - top */}
        <rect x="0" y="0" width="90" height="32" rx="3" fill="#0F1B4D" />
        <rect x="2" y="2" width="86" height="28" rx="2" fill="#172554" />
        <line x1="8" y1="2" x2="8" y2="30" stroke="rgba(255,255,255,0.25)" strokeWidth="2"/>
        <text x="14" y="14" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="serif" fontWeight="bold">КОМЕНТАР</text>
        <text x="14" y="24" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="serif">до КК України</text>
      </g>

      {/* === GAVEL === */}
      <g transform="translate(185, 220)">
        {/* Handle */}
        <rect x="0" y="20" width="10" height="65" rx="4"
          transform="rotate(-35, 5, 52)" fill="url(#woodGrad)" />
        {/* Handle grain */}
        <line x1="3" y1="25" x2="7" y2="25" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5"
          transform="rotate(-35, 5, 52)" />
        {/* Head */}
        <rect x="15" y="8" width="50" height="22" rx="5"
          transform="rotate(-35, 40, 20)" fill="url(#woodDarkGrad)" />
        {/* Gavel shadow */}
        <ellipse cx="30" cy="68" rx="28" ry="6" fill="rgba(0,0,0,0.06)"
          transform="rotate(-5, 30, 68)" />
      </g>

      {/* === SCALES OF JUSTICE === */}
      <g transform="translate(280, 100)">
        {/* Base */}
        <rect x="65" y="155" width="20" height="40" rx="3" fill="url(#goldGrad)" />
        <rect x="55" y="190" width="40" height="8" rx="4" fill="url(#goldDarkGrad)" />
        {/* Pole */}
        <rect x="72" y="30" width="6" height="130" rx="3" fill="url(#goldGrad)" />
        {/* Crossbar */}
        <rect x="20" y="54" width="110" height="7" rx="3" fill="url(#goldGrad)" />
        {/* Center ornament */}
        <circle cx="75" cy="57" r="10" fill="white" stroke="url(#goldGrad)" strokeWidth="2"/>
        <text x="71" y="61" fontSize="10" fill="#C4922A">⚖</text>
        {/* Left chain */}
        <line x1="30" y1="61" x2="22" y2="108" stroke="#C4922A" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.7"/>
        <line x1="30" y1="61" x2="38" y2="108" stroke="#C4922A" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.7"/>
        {/* Right chain */}
        <line x1="120" y1="61" x2="112" y2="115" stroke="#C4922A" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.7"/>
        <line x1="120" y1="61" x2="128" y2="115" stroke="#C4922A" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.7"/>
        {/* Left pan */}
        <ellipse cx="30" cy="110" rx="20" ry="6" fill="url(#goldGrad)" opacity="0.9"/>
        <path d="M12 110 Q30 125 48 110" fill="rgba(196,146,42,0.15)" stroke="#C4922A" strokeWidth="1"/>
        {/* Right pan */}
        <ellipse cx="120" cy="117" rx="20" ry="6" fill="url(#goldGrad)" opacity="0.9"/>
        <path d="M102 117 Q120 132 138 117" fill="rgba(196,146,42,0.15)" stroke="#C4922A" strokeWidth="1"/>
      </g>

      {/* === DOCUMENTS / PAPERS === */}
      <g transform="translate(155, 230)">
        <rect x="5" y="0" width="85" height="58" rx="3" fill="white"
          style={{ filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.1))" }} />
        <rect x="0" y="5" width="85" height="58" rx="3" fill="white"
          style={{ filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.08))" }} />
        {/* Lines of text */}
        <line x1="10" y1="18" x2="75" y2="18" stroke="#DBEAFE" strokeWidth="2.5"/>
        <line x1="10" y1="26" x2="75" y2="26" stroke="#DBEAFE" strokeWidth="2.5"/>
        <line x1="10" y1="34" x2="65" y2="34" stroke="#DBEAFE" strokeWidth="2.5"/>
        <line x1="10" y1="42" x2="75" y2="42" stroke="#DBEAFE" strokeWidth="2.5"/>
        <line x1="10" y1="50" x2="50" y2="50" stroke="#DBEAFE" strokeWidth="2.5"/>
        {/* Seal */}
        <circle cx="65" cy="45" r="10" fill="none" stroke="#2563EB" strokeWidth="1.5" opacity="0.4"/>
        <text x="61" y="49" fontSize="9" fill="#2563EB" opacity="0.5">⚖</text>
      </g>

      {/* === INKWELL & PEN === */}
      <g transform="translate(380, 245)">
        {/* Inkwell */}
        <ellipse cx="25" cy="38" rx="20" ry="8" fill="url(#inkGrad)" />
        <rect x="8" y="14" width="34" height="25" rx="8" fill="url(#inkGrad)" />
        <ellipse cx="25" cy="14" rx="17" ry="7" fill="#0F1B4D" />
        <ellipse cx="25" cy="14" rx="10" ry="4" fill="#1D4ED8" opacity="0.6" />
        {/* Pen */}
        <rect x="38" y="0" width="4" height="38" rx="2"
          transform="rotate(25, 40, 20)" fill="url(#woodGrad)" />
        <path d="M49 35 L53 42 L45 38 Z" fill="#1E3A8A"
          transform="rotate(25, 49, 38)" />
      </g>

      {/* Ambient light glows */}
      <ellipse cx="350" cy="280" rx="80" ry="15" fill="rgba(37,99,235,0.06)" />
      <ellipse cx="100" cy="280" rx="60" ry="12" fill="rgba(37,99,235,0.05)" />

      <defs>
        <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8D5B0"/>
          <stop offset="100%" stopColor="#C9A87A"/>
        </linearGradient>
        <linearGradient id="deskEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4B896"/>
          <stop offset="100%" stopColor="#B8935A"/>
        </linearGradient>
        <linearGradient id="woodGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8B6014"/>
          <stop offset="50%" stopColor="#A87820"/>
          <stop offset="100%" stopColor="#7A5010"/>
        </linearGradient>
        <linearGradient id="woodDarkGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5C3D10"/>
          <stop offset="50%" stopColor="#7A5018"/>
          <stop offset="100%" stopColor="#4A3008"/>
        </linearGradient>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4A84B"/>
          <stop offset="100%" stopColor="#C4922A"/>
        </linearGradient>
        <linearGradient id="goldDarkGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C4922A"/>
          <stop offset="100%" stopColor="#A87820"/>
        </linearGradient>
        <linearGradient id="inkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E3A8A"/>
          <stop offset="100%" stopColor="#0F1B4D"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
