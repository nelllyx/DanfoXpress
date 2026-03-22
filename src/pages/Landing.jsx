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
    <div className="flex flex-col gap-8 pt-0 w-full">
      <section>
        <div>
          <div className="pb-8 pt-8 text-center sm:pb-12 sm:pt-14 px-4 sm:px-6 md:px-10 lg:px-24 xl:px-40 2xl:px-64 w-full">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
              Eko · On-demand shuttles
            </p>

            <h1 className="mt-6 font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-eko-navy">
              Lagos moves fast.
              <span className="block text-black">
                Your ride should{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary-yellow">keep up</span>
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-2 sm:h-3 rounded-sm bg-primary-yellow/25"
                    aria-hidden
                  />
                </span>
                .
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-md sm:max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-black/65">
              Shared routes across the mainland and islands — the rhythm of danfos and BRT, with verified drivers, upfront pricing, and matching that respects your time.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 w-full max-w-xs sm:max-w-lg md:max-w-xl mx-auto">
              <Link
                to="/signup"
                className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center rounded-2xl bg-black px-6 sm:px-8 text-base sm:text-lg font-semibold text-white shadow-lg shadow-black/15 transition hover:bg-black/90"
              >
                Book a ride
              </Link>
              <Link
                to="/login"
                className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center rounded-2xl border border-black/15 bg-white px-6 sm:px-8 text-base sm:text-lg font-semibold text-black transition hover:border-black/25 hover:bg-black/5"
              >
                I have an account
              </Link>
            </div>

            <p className="mt-7 text-xs sm:text-sm text-black/45 overflow-x-auto whitespace-nowrap">
              {hoods.join(' · ')}
            </p>
          </div>

          <div className="relative mt-2 px-2 sm:px-6 md:px-10 lg:px-24 xl:px-40 2xl:px-64 w-full">
            <DanfoHeroAnimation />
          </div>
        </div>
      </section>

      <section className="grid gap-4 grid-cols-1 sm:grid-cols-3 px-4 sm:px-6 md:px-10 lg:px-24 xl:px-40 2xl:px-64 w-full">
        <h2 className="col-span-1 sm:col-span-3 mb-2 text-center font-heading text-xl sm:text-2xl font-bold tracking-tight text-black">
          Move smart across Lagos
        </h2>
        <Stat label="Fast matching" value="~2 mins" />
        <Stat label="Affordable fares" value="Upfront" />
        <Stat label="Safe rides" value="Verified drivers" />
      </section>
    </div>
  )
}
