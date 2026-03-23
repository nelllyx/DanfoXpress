import RouteFinder from './RouteFinder.jsx'

export default function RouteFinderSection() {
  return (
    <section className="pt-4 sm:pt-8" aria-labelledby="navigation-heading">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary-yellow">
            New in Lagos?
          </p>
          <h2
            id="navigation-heading"
            className="mt-2 font-heading text-2xl font-bold tracking-tight text-eko-navy sm:text-3xl !font-black"
          >
            Estimate your fee and find the right route
          </h2>
          <p className="mt-3 text-base text-black/65">
            The subsidized electric buses show an estimated fee upfront. When you arrive,
            tap your Lagos Card at the entrance — the transport is deducted automatically.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white/80 p-5">
              <div className="text-sm font-semibold text-eko-navy">Upfront estimate</div>
              <div className="mt-1 text-sm text-black/65">Know the cost before boarding.</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/80 p-5">
              <div className="text-sm font-semibold text-eko-navy">Tap-to-pay</div>
              <div className="mt-1 text-sm text-black/65">Scan Lagos Card at entry.</div>
            </div>
          </div>
        </div>

        <RouteFinder />
      </div>
    </section>
  )
}
