export default function DanfoHeroAnimation() {
  const W = 1200
  const H = 300

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#3d7ea6]/10 to-[#0f172a]/[0.04]">
      <style>{`
        /* Travel the full deck; clip keeps buses only over road/skyline (not lagoon/margins) */
        @keyframes danfoBusDrive {
          0% { transform: translateX(-520px); }
          100% { transform: translateX(1280px); }
        }
        @keyframes danfoBusDriveFar {
          0% { transform: translateX(-480px) scale(0.92); }
          100% { transform: translateX(1320px) scale(0.92); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.55; }
        }
        .danfo-bus-a {
          animation: danfoBusDrive 14s linear infinite;
        }
        .danfo-bus-b {
          animation: danfoBusDriveFar 20s linear infinite;
          animation-delay: -7s;
        }
        .lagoon-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-primary-yellow/40 to-transparent" />

      {/* 4:1 matches viewBox (1200×300) so no side gutters / empty “outside” bands */}
      <div className="relative aspect-[4/1] w-full">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 h-full w-full overflow-hidden"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Danfo minibuses on Third Mainland Bridge at dusk over the Lagos lagoon"
        >
        <defs>
          {/* Road deck + skyline only — buses never paint over water or side gutters */}
          <clipPath id="bridgeTrafficClip" clipPathUnits="userSpaceOnUse">
            <rect x="0" y="72" width={W} height="152" />
          </clipPath>
          <linearGradient id="lagosSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff9f43" />
            <stop offset="35%" stopColor="#ffb347" />
            <stop offset="70%" stopColor="#6eb5d9" />
            <stop offset="100%" stopColor="#3d7ea6" />
          </linearGradient>
          <linearGradient id="lagoonWater" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a6f97" />
            <stop offset="100%" stopColor="#1a4a6e" />
          </linearGradient>
          <linearGradient id="sunDisk" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffeaa7" />
            <stop offset="100%" stopColor="#fdcb6e" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="0" y="0" width={W} height="220" fill="url(#lagosSky)" />
        <circle cx="980" cy="58" r="28" fill="url(#sunDisk)" opacity="0.95" filter="url(#softGlow)" />

        <text
          x={W / 2}
          y="36"
          textAnchor="middle"
          fontFamily="Montserrat, Poppins, ui-sans-serif"
          fontSize="13"
          fontWeight="600"
          letterSpacing="0.35em"
          fill="#1e293b"
          opacity="0.55"
        >
          THIRD MAINLAND · LAGOS
        </text>

        <g fill="#5a7a8f" opacity="0.92">
          <rect x="75" y="110" width="60" height="55" />
          <rect x="165" y="90" width="95" height="75" />
          <rect x="290" y="105" width="90" height="60" />
          <rect x="410" y="75" width="105" height="90" />
          <rect x="545" y="98" width="75" height="67" />
          <rect x="650" y="112" width="90" height="53" />
          <rect x="770" y="82" width="105" height="83" />
          <rect x="905" y="104" width="86" height="61" />
        </g>

        <rect x="0" y="180" width={W} height="44" fill="#2F2F2F" />
        <line
          x1="0"
          y1="202"
          x2={W}
          y2="202"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeDasharray="22 18"
          opacity="0.9"
        />

        <rect x="0" y="220" width={W} height={H - 220} fill="url(#lagoonWater)" />
        <rect
          className="lagoon-shimmer"
          x="0"
          y="228"
          width={W}
          height="12"
          fill="#ffffff"
          opacity="0.12"
        />

        <g fill="#24303a">
          <rect x="150" y="224" width="18" height="90" />
          <rect x="375" y="224" width="18" height="90" />
          <rect x="600" y="224" width="18" height="90" />
          <rect x="825" y="224" width="18" height="90" />
          <rect x="1050" y="224" width="18" height="90" />
        </g>

        <g clipPath="url(#bridgeTrafficClip)">
        {/* Far lane — second danfo for “bubbling” traffic */}
        <g className="danfo-bus-b">
          <g transform="translate(-40 88) scale(0.48)">
            <rect x="60" y="126" width="440" height="56" rx="16" fill="#FFC107" />
            <rect x="60" y="182" width="440" height="42" rx="14" fill="#FFC107" />
            <rect x="60" y="178" width="440" height="7" fill="#000000" />
            <g stroke="#000000" strokeWidth="4" fill="#b8d4e8">
              <rect x="85" y="136" width="76" height="28" />
              <rect x="172" y="136" width="76" height="28" />
              <rect x="259" y="136" width="76" height="28" />
              <rect x="346" y="136" width="76" height="28" />
            </g>
            <text
              x="120"
              y="210"
              fontFamily="Montserrat, Poppins, ui-sans-serif"
              fontSize="22"
              fontWeight="800"
              fill="#FFFFFF"
              opacity="0.9"
            >
              IKEJA → LEKKI
            </text>
            <circle cx="502" cy="197" r="8" fill="#e5e7eb" />
            <circle cx="155" cy="232" r="14" fill="#111827" />
            <circle cx="155" cy="232" r="8" fill="#6b7280" />
            <circle cx="410" cy="232" r="14" fill="#111827" />
            <circle cx="410" cy="232" r="8" fill="#6b7280" />
          </g>
        </g>

        <g className="danfo-bus-a">
          <g transform="translate(40 70) scale(0.62)">
            <rect x="60" y="126" width="440" height="56" rx="16" fill="#FFC107" />
            <rect x="60" y="182" width="440" height="42" rx="14" fill="#FFC107" />
            <rect x="60" y="178" width="440" height="7" fill="#000000" />

            <g stroke="#000000" strokeWidth="4" fill="#d7ecf9">
              <rect x="85" y="136" width="76" height="28" />
              <rect x="172" y="136" width="76" height="28" />
              <rect x="259" y="136" width="76" height="28" />
              <rect x="346" y="136" width="76" height="28" />
            </g>

            <text
              x="105"
              y="210"
              fontFamily="Montserrat, Poppins, ui-sans-serif"
              fontSize="24"
              fontWeight="800"
              fill="#FFFFFF"
              opacity="0.9"
            >
              YABA → CMS
            </text>

            <circle cx="502" cy="197" r="8" fill="#e5e7eb" />

            <g>
              <circle cx="155" cy="232" r="14" fill="#111827" />
              <circle cx="155" cy="232" r="8" fill="#6b7280" />

              <circle cx="410" cy="232" r="14" fill="#111827" />
              <circle cx="410" cy="232" r="8" fill="#6b7280" />
            </g>
          </g>
        </g>
        </g>
      </svg>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-10 bg-gradient-to-t from-white/90 to-transparent sm:h-12" />
    </div>
  )
}
