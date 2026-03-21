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

export default function Landing() {
  return (
    <div className="flex flex-col gap-6 pt-4">
      {/* Full-bleed hero: animation spans viewport width while nav stays centered */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen max-w-[100vw] overflow-x-hidden">
        <DanfoHeroAnimation />
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <h2 className="col-span-3 mb-2 text-center font-heading text-2xl font-bold tracking-tight text-black" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
          Move smart across Lagos
        </h2>
        <Stat label="Fast matching" value="~2 mins" />
        <Stat label="Affordable fares" value="Upfront" />
        <Stat label="Safe rides" value="Verified drivers" />
      </section>

      <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight text-black">
              Want to test Tailwind right now?
            </h2>
            <p className="mt-1 text-black/70">
              Go to the Tailwind test page to confirm fonts and styling.
            </p>
          </div>
          <Link
            to="/tailwind-test"
            className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/90"
          >
            Tailwind test
          </Link>
        </div>
      </section>
    </div>
  )
}
