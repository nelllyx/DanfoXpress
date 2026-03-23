export default function ElectricProgramSection() {
  return (
    <section className="pt-16 sm:pt-20" aria-labelledby="service-heading">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-primary-yellow">
          Subsidized electric buses
        </p>
        <h2
          id="service-heading"
          className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-black"
        >
          Powering Smarter Rides Across Lagos
        </h2>
        <p className="mt-4 text-black/70 text-base sm:text-lg">
          Electric buses reduce dependency on fuel. Riders see an estimated fee, tap Lagos Card
          at the entrance for instant deduction, and can top up in the app whenever credit is low.
        </p>

        <div className="mx-auto mt-14 grid max-w-6xl gap-y-10 gap-x-16 sm:gap-y-12 sm:gap-x-20 lg:gap-y-16 lg:gap-x-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center">
          {/* Card 1: Electric, not fuel-driven */}
          <div className="rounded-2xl border border-black/10 bg-white/80 p-12 shadow-[0_8px_32px_rgba(15,23,42,0.08)] flex flex-col items-center min-w-65 w-full max-w-xs">
            <span className="mb-5" role="img" aria-label="Electric Bus">
              {/* Heroicon: Bolt */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-yellow-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L6 14.25h7.5L10.5 19.5 18 9.75h-7.5L13.5 4.5z" />
              </svg>
            </span>
            <div className="text-lg font-bold text-eko-navy text-center">Powered by Electricity, Not Fuel Prices</div>
            <p className="mt-4 text-base leading-relaxed text-black/65 text-center">
              Our buses run on electric power, not fuel, so your daily commute stays reliable
              and less affected by sudden fuel price changes or shortages.            </p>
          </div>
          {/* Card 2: Estimated fee upfront */}
          <div className="rounded-2xl border border-black/10 bg-white/80 p-12 shadow-[0_8px_32px_rgba(15,23,42,0.08)] flex flex-col items-center min-w-65 w-full max-w-xs">
            <span className="mb-5" role="img" aria-label="Credit Card">
              {/* Heroicon: Credit Card */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-eko-navy">
                <rect x="3" y="6" width="18" height="12" rx="2" fill="#fff" stroke="currentColor" strokeWidth="1.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18" />
                <rect x="7" y="14" width="4" height="2" rx="0.5" fill="#eab308" />
              </svg>
            </span>
            <div className="text-lg font-bold text-eko-navy text-center">Estimated fee upfront</div>
            <p className="mt-4 text-base leading-relaxed text-black/65 text-center">
              Know what you’ll pay before you board — built for confidence at the gate.
            </p>
          </div>
          {/* Card 3: Tap Lagos Card at entry */}
          <div className="rounded-2xl border border-black/10 bg-white/80 p-12 shadow-[0_8px_32px_rgba(15,23,42,0.08)] flex flex-col items-center min-w-65 w-full max-w-xs">
            <span className="mb-5" role="img" aria-label="Tap Lagos Card at Entry (Best)">
              {/* Custom SVG: Card + Contactless Waves + Gate + Star */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                {/* Card */}
                <rect x="6" y="18" width="20" height="14" rx="3" fill="#fff" stroke="#1e293b" strokeWidth="2" />
                {/* Contactless Waves */}
                <path d="M30 22c2 1.5 3 3.5 3 5.5s-1 4-3 5.5" stroke="#eab308" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M34 20c3 2.5 4.5 5.5 4.5 8.5S37 35 34 37" stroke="#eab308" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* Gate (vertical bars) */}
                <rect x="38" y="18" width="2" height="14" rx="1" fill="#1e293b" />
                <rect x="42" y="18" width="2" height="14" rx="1" fill="#1e293b" />
                {/* Star (Best) */}
                <polygon points="24,10 25.9,15.1 31.4,15.1 27,18.4 28.9,23.5 24,20.2 19.1,23.5 21,18.4 16.6,15.1 22.1,15.1" fill="#eab308" stroke="#eab308" strokeWidth="1" />
              </svg>
            </span>
            <div className="text-lg font-bold text-eko-navy text-center">Tap Lagos Card at entry</div>
            <p className="mt-4 text-base leading-relaxed text-black/65 text-center">
              Scan at the entrance. Fare is deducted automatically so boarding stays fast.
            </p>
          </div>
          {/* Card 4: Top up in the app */}
          <div className="rounded-2xl border border-black/10 bg-white/80 p-12 shadow-[0_8px_32px_rgba(15,23,42,0.08)] flex flex-col items-center min-w-65 w-full max-w-xs">
            <span className="mb-5" role="img" aria-label="Top Up (Phone Plus)">
              {/* Custom SVG: Phone + Plus Symbol */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                {/* Phone outline */}
                <rect x="14" y="8" width="20" height="32" rx="4" fill="#fff" stroke="#22c55e" strokeWidth="2" />
                <rect x="18" y="12" width="12" height="20" rx="2" fill="#e0fce2" />
                {/* Home button */}
                <circle cx="24" cy="36" r="1.5" fill="#22c55e" />
                {/* Plus symbol */}
                <g>
                  <rect x="32" y="14" width="8" height="8" rx="4" fill="#22c55e" />
                  <rect x="35.5" y="16.5" width="1" height="5" rx="0.5" fill="#fff" />
                  <rect x="34" y="18.5" width="5" height="1" rx="0.5" fill="#fff" />
                </g>
              </svg>
            </span>
            <div className="text-lg font-bold text-eko-navy text-center">Top up in the app</div>
            <p className="mt-4 text-base leading-relaxed text-black/65 text-center">
              Refill your Lagos Card credit directly from the application.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
