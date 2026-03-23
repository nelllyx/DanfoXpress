import Link from '../router/Link.jsx'
import DanfoHeroAnimation from '../components/DanfoHeroAnimation.jsx'
import RouteFinder from './RouteFinder.jsx'

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
      <div className="text-sm font-medium text-black/70">{label}</div>
      <div className="mt-1 text-2xl font-bold tracking-tight text-black">
        {value}
      </div>
    </div>
  )
}

const hoods = ['Yaba', 'VI', 'Lekki', 'Ikeja', 'CMS']

const steps = [
  {
    title: 'Estimate your fare',
    body: 'Pick your start and destination. You’ll see the estimated subsidized fee before you board.',
  },
  {
    title: 'Tap Lagos Card at entry',
    body: 'At the entrance, scan your Lagos Card. Transport is deducted instantly for a seamless ride.',
  },
  {
    title: 'Ride electric buses',
    body: 'These are electric buses — designed to reduce dependency on fuel and cushion hardship from fuel increments.',
  },
  {
    title: 'Top up in the app',
    body: 'If your credit runs out, top up inside the application whenever you need to keep moving.',
  },
]

const benefits = [
  {
    title: 'Estimated fee upfront',
    body: 'Commuters know the expected cost to their destination before stepping into the bus.',
  },
  {
    title: 'Seamless Lagos Card payment',
    body: 'Just scan your Lagos Card at the entrance — deductions are fast, making boarding smoother.',
  },
  {
    title: 'Electric routes that cushion fuel hardship',
    body: 'Electric buses reduce dependency on fuel, helping stabilize commutes during fuel price pressure.',
  },
  {
    title: 'Navigation for new arrivals',
    body: 'New in Lagos? Get guided routes without the stress of figuring the city out alone.',
  },
]

export default function Landing() {
  return (
    <div className="flex w-full flex-col gap-16 pt-0 sm:gap-20">
      <section>
        <div>
          <div className="pb-8 pt-8 text-center sm:pb-12 sm:pt-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45 sm:text-xs">
              Eko · On-demand shuttles
            </p>

            <h1 className="mx-auto mt-6 max-w-5xl font-heading text-2xl font-extrabold leading-tight tracking-tight text-eko-navy sm:text-4xl md:text-5xl lg:text-6xl">
              Lagos moves fast.
              <span className="block text-black">
                Your ride should{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary-yellow">keep up</span>
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-2 rounded-sm bg-primary-yellow/25 sm:h-3"
                    aria-hidden
                  />
                </span>
                .
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-black/65 sm:text-base md:text-lg lg:max-w-3xl">
              Shared routes across the mainland and islands — the rhythm of danfos and BRT, with verified drivers, upfront pricing, and matching that respects your time.
            </p>

            <div className="mx-auto mt-7 flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:max-w-2xl sm:flex-row sm:gap-4 md:max-w-none">
              <Link
                to="/signup"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-black px-8 text-base font-semibold text-white shadow-lg shadow-black/15 transition hover:bg-black/90 sm:w-auto sm:text-lg"
              >
                Book a ride
              </Link>
              <Link
                to="/login"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-black/15 bg-white px-8 text-base font-semibold text-black transition hover:border-black/25 hover:bg-black/5 sm:w-auto sm:text-lg"
              >
                I have an account
              </Link>
            </div>

            <p className="mt-7 text-center text-xs text-black/45 sm:text-sm">{hoods.join(' · ')}</p>
          </div>

          <div className="relative mt-2 w-full">
            <DanfoHeroAnimation />
          </div>
        </div>
      </section>

      {/* New in Lagos: estimated fare + route guidance */}
      <section className="pt-4 sm:pt-8" aria-labelledby="navigation-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-yellow">
              New in Lagos?
            </p>
            <h2
              id="navigation-heading"
              className="mt-2 font-heading text-2xl font-bold tracking-tight text-eko-navy sm:text-3xl"
            >
              Estimate your fee and find the right route
            </h2>
            <p className="mt-3 text-base text-black/65">
              The subsidized electric buses show an estimated fee upfront. When you arrive, tap your Lagos Card at the entrance — the transport is deducted automatically.
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

      {/* Subsidized electric bus features */}
      <section className="pt-16 sm:pt-20" aria-labelledby="service-heading">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-yellow">
            Subsidized electric buses
          </p>
          <h2 id="service-heading" className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-black">
            Designed for fuel hardship and seamless payment
          </h2>
          <p className="mt-4 text-black/70 text-base sm:text-lg">
            Electric buses reduce dependency on fuel. Riders see an estimated fee, tap Lagos Card at the entrance for instant deduction, and can top up in the app whenever credit is low.
          </p>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
              <div className="text-sm font-semibold text-eko-navy">Electric, not fuel-driven</div>
              <p className="mt-2 text-sm leading-relaxed text-black/65">
                The routes are powered electrically, so commutes are less affected by fuel price pressure.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
              <div className="text-sm font-semibold text-eko-navy">Estimated fee upfront</div>
              <p className="mt-2 text-sm leading-relaxed text-black/65">
                Know what you’ll pay before you board — built for confidence at the gate.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
              <div className="text-sm font-semibold text-eko-navy">Tap Lagos Card at entry</div>
              <p className="mt-2 text-sm leading-relaxed text-black/65">
                Scan at the entrance. Fare is deducted automatically so boarding stays fast.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
              <div className="text-sm font-semibold text-eko-navy">Top up in the app</div>
              <p className="mt-2 text-sm leading-relaxed text-black/65">
                Refill your Lagos Card credit directly from the application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <h2 className="col-span-1 mb-2 text-center font-heading text-xl font-bold tracking-tight text-black sm:col-span-3 sm:text-2xl">
          Seamless commute, subsidized by design
        </h2>
        <Stat label="Estimated fare" value="Shown upfront" />
        <Stat label="Lagos Card tap-to-pay" value="Scan at entrance" />
        <Stat label="Top up credit" value="In the app" />
      </section>

      <section
        className="border-t border-black/10 pt-16 sm:pt-20"
        aria-labelledby="how-it-works-heading"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-yellow">
            Seamless boarding flow
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-2 font-heading text-2xl font-bold tracking-tight text-eko-navy sm:text-3xl"
          >
            Tap, ride, top up
          </h2>
          <p className="mt-3 text-base text-black/65">
            See the estimated fee, scan your Lagos Card at the entrance, then ride electric — with top-ups built in.
          </p>
        </div>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col items-center text-center sm:items-stretch sm:text-left">
              <div className="flex flex-col items-center sm:flex-row sm:gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-yellow font-heading text-lg font-bold text-black"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div className="mt-4 sm:mt-0">
                  <h3 className="font-heading text-lg font-semibold text-black">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/65">{step.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="border-t border-black/10 pb-4 pt-16 sm:pt-20"
        aria-labelledby="why-heading"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-yellow">
            Why riders choose this program
          </p>
          <h2 id="why-heading" className="mt-2 font-heading text-2xl font-bold tracking-tight text-eko-navy sm:text-3xl">
            Electric rides with Lagos Card tap-to-pay
          </h2>
          <p className="mt-3 text-base text-black/65">
            Clear estimates upfront, faster boarding with card tap at the entrance, and electric routes designed to cushion fuel hardship.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {benefits.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
            >
              <div className="flex gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-yellow/25 text-xs font-bold text-eko-navy"
                  aria-hidden
                >
                  ✓
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-black">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-black/65">{item.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Link
            to="/signup"
            className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-black px-10 text-base font-semibold text-white shadow-lg shadow-black/15 transition hover:bg-black/90"
          >
            Get started
          </Link>
        </div>
      </section>
    </div>
  )
}
