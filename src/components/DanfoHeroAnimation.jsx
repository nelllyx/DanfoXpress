export default function DanfoHeroAnimation() {
  const W = 1200
  const H = 300

  return (
    <div className="relative w-full overflow-hidden">
      <style>{`
        @keyframes danfoBusDrive {
          0% {
            transform: translateX(0px);
          }
          100% {
            transform: translateX(820px);
          }
        }

        .danfo-bus {
          animation: danfoBusDrive 18s linear infinite;
        }
      `}</style>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-[320px] w-full sm:h-[360px]"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Danfo minibus driving across a bridge over Lagos lagoon"
      >
        {/* Sky + water background (matching provided bridge style) */}
        <rect x="0" y="0" width={W} height="220" fill="#87CEEB" />
        <rect x="0" y="220" width={W} height={H - 220} fill="#58A9D8" />

        {/* Bridge title from provided style */}
        <text
          x={W / 2}
          y="42"
          textAnchor="middle"
          fontFamily="Montserrat, Poppins, ui-sans-serif"
          fontSize="40"
          fontWeight="700"
          fill="#1f2937"
        >
          Third Mainland Bridge
        </text>

        {/* Skyline blocks */}
        <g fill="#6c8ea5">
          <rect x="75" y="110" width="60" height="55" />
          <rect x="165" y="90" width="95" height="75" />
          <rect x="290" y="105" width="90" height="60" />
          <rect x="410" y="75" width="105" height="90" />
          <rect x="545" y="98" width="75" height="67" />
          <rect x="650" y="112" width="90" height="53" />
          <rect x="770" y="82" width="105" height="83" />
          <rect x="905" y="104" width="86" height="61" />
        </g>

        {/* Flat bridge road and lanes */}
        <rect x="0" y="180" width={W} height="44" fill="#2F2F2F" />
        <line x1="0" y1="202" x2={W} y2="202" stroke="#FFFFFF" strokeWidth="4" strokeDasharray="22 18" />

        {/* Bridge pillars */}
        <g fill="#2b3036">
          <rect x="150" y="224" width="18" height="90" />
          <rect x="375" y="224" width="18" height="90" />
          <rect x="600" y="224" width="18" height="90" />
          <rect x="825" y="224" width="18" height="90" />
          <rect x="1050" y="224" width="18" height="90" />
        </g>

        {/* Danfo bus matching provided simple SVG look */}
        <g className="danfo-bus">
          <g transform="translate(40 70) scale(0.62)">
          <rect x="60" y="126" width="440" height="56" rx="16" fill="#FFC107" />
          <rect x="60" y="182" width="440" height="42" rx="14" fill="#FFC107" />
          <rect x="60" y="178" width="440" height="7" fill="#000000" />

          {/* Windows */}
          <g stroke="#000000" strokeWidth="4" fill="#d7ecf9">
            <rect x="85" y="136" width="76" height="28" />
            <rect x="172" y="136" width="76" height="28" />
            <rect x="259" y="136" width="76" height="28" />
            <rect x="346" y="136" width="76" height="28" />
          </g>

          {/* Route text from sample style */}
          <text
            x="105"
            y="210"
            fontFamily="Montserrat, Poppins, ui-sans-serif"
            fontSize="24"
            fontWeight="800"
            fill="#FFFFFF"
            opacity="0.85"
          >
            YABA → CMS
          </text>

          {/* Rear signal dot */}
          <circle cx="502" cy="197" r="8" fill="#e5e7eb" />

          {/* Wheels */}
          <g>
            <circle cx="155" cy="232" r="14" fill="#111827" />
            <circle cx="155" cy="232" r="8" fill="#6b7280" />

            <circle cx="410" cy="232" r="14" fill="#111827" />
            <circle cx="410" cy="232" r="8" fill="#6b7280" />
          </g>
          </g>
        </g>
      </svg>
    </div>
  )
}
