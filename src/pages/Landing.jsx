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

export default function Landing() {
  return (
    <div className="flex flex-col gap-6 pt-0">
      <section>
        <div>
          <div className="pb-10 pt-10 text-center sm:pb-12 sm:pt-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/45">
              Eko · On-demand shuttles
            </p>

            <h1 className="mt-7 font-heading text-[2.1rem] font-extrabold leading-[1.08] tracking-tight text-eko-navy sm:text-5xl md:text-[3.25rem]">
              Lagos moves fast.
              <span className="block text-black">
                Your ride should{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary-yellow">keep up</span>
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-3 rounded-sm bg-primary-yellow/25 sm:h-3.5"
                    aria-hidden
                  />
                </span>
                .
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/65 sm:text-lg">
              Shared routes across the mainland and islands — the rhythm of danfos and BRT,
              with verified drivers, upfront pricing, and matching that respects your time.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/signup"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-black px-8 text-base font-semibold text-white shadow-lg shadow-black/15 transition hover:bg-black/90 sm:w-auto"
              >
                Book a ride
              </Link>
              <Link
                to="/login"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-black/15 bg-white px-8 text-base font-semibold text-black transition hover:border-black/25 hover:bg-black/[0.03] sm:w-auto"
              >
                I have an account
              </Link>
            </div>

            <p className="mt-8 text-sm text-black/45">
              {hoods.join(' · ')}
            </p>
          </div>

          <div className="relative mt-2">
            <DanfoHeroAnimation />
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <h2 className="col-span-3 mb-2 text-center font-heading text-2xl font-bold tracking-tight text-black">
          Move smart across Lagos
        </h2>
        <Stat label="Fast matching" value="~2 mins" />
        <Stat label="Affordable fares" value="Upfront" />
        <Stat label="Safe rides" value="Verified drivers" />
      </section>
    </div>
  )
}
