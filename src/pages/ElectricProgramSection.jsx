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
            <span className="mb-5 text-5xl" role="img" aria-label="Electric Bus">🔋</span>
            <div className="text-lg font-bold text-eko-navy text-center">Electric, not fuel-driven</div>
            <p className="mt-4 text-base leading-relaxed text-black/65 text-center">
              The routes are powered electrically, so commutes are less affected by fuel price pressure.
            </p>
          </div>
          {/* Card 2: Estimated fee upfront */}
          <div className="rounded-2xl border border-black/10 bg-white/80 p-12 shadow-[0_8px_32px_rgba(15,23,42,0.08)] flex flex-col items-center min-w-65 w-full max-w-xs">
            <span className="mb-5 text-5xl" role="img" aria-label="Money">💳</span>
            <div className="text-lg font-bold text-eko-navy text-center">Estimated fee upfront</div>
            <p className="mt-4 text-base leading-relaxed text-black/65 text-center">
              Know what you’ll pay before you board — built for confidence at the gate.
            </p>
          </div>
          {/* Card 3: Tap Lagos Card at entry */}
          <div className="rounded-2xl border border-black/10 bg-white/80 p-12 shadow-[0_8px_32px_rgba(15,23,42,0.08)] flex flex-col items-center min-w-65 w-full max-w-xs">
            <span className="mb-5 text-5xl" role="img" aria-label="Tap Card">🛂</span>
            <div className="text-lg font-bold text-eko-navy text-center">Tap Lagos Card at entry</div>
            <p className="mt-4 text-base leading-relaxed text-black/65 text-center">
              Scan at the entrance. Fare is deducted automatically so boarding stays fast.
            </p>
          </div>
          {/* Card 4: Top up in the app */}
          <div className="rounded-2xl border border-black/10 bg-white/80 p-12 shadow-[0_8px_32px_rgba(15,23,42,0.08)] flex flex-col items-center min-w-65 w-full max-w-xs">
            <span className="mb-5 text-5xl" role="img" aria-label="Top Up">📲</span>
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
