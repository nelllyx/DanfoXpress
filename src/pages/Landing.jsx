import Link from '../router/Link.jsx'
import DanfoHeroAnimation from '../components/DanfoHeroAnimation.jsx'

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
    title: 'Pick route & time',
    body: "Enter where you're going and when you need to leave. See the fare before you commit.",
  },
  {
    title: 'Get matched',
    body: 'We pair you with a verified driver and a shuttle heading your way — usually within minutes.',
  },
  {
    title: 'Ride & arrive',
    body: 'Hop on, track progress in-app, and pay the price you saw — no haggling at the door.',
  },
]

const benefits = [
  {
    title: 'Upfront pricing',
    body: 'Know the cost before you book. No surprise “last-minute” charges.',
  },
  {
    title: 'Verified drivers',
    body: 'Drivers and vehicles are checked so you can ride with more peace of mind.',
  },
  {
    title: 'Built for traffic reality',
    body: 'Routing and matching tuned for Lagos roads — mainland, island, and the bridges between.',
  },
  {
    title: 'Shared, not chaotic',
    body: 'Shuttle-style pooling that keeps fares lower and still respects your time.',
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

      <section className="grid gap-4 sm:grid-cols-3">
        <h2 className="col-span-1 mb-2 text-center font-heading text-xl font-bold tracking-tight text-black sm:col-span-3 sm:text-2xl">
          Move smart across Lagos
        </h2>
        <Stat label="Fast matching" value="~2 mins" />
        <Stat label="Affordable fares" value="Upfront" />
        <Stat label="Safe rides" value="Verified drivers" />
      </section>

      <section
        className="border-t border-black/10 pt-16 sm:pt-20"
        aria-labelledby="how-it-works-heading"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-yellow">
            Simple steps
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-2 font-heading text-2xl font-bold tracking-tight text-eko-navy sm:text-3xl"
          >
            How it works
          </h2>
          <p className="mt-3 text-base text-black/65">
            From booking to drop-off — built to feel as straightforward as flagging a danfo, without the guesswork.
          </p>
        </div>

        <ol className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
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
            Why riders choose us
          </p>
          <h2 id="why-heading" className="mt-2 font-heading text-2xl font-bold tracking-tight text-eko-navy sm:text-3xl">
            Built for how Lagos moves
          </h2>
          <p className="mt-3 text-base text-black/65">
            The things that matter on crowded roads and long bridge runs — in one place.
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
