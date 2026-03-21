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
        <div className="mx-auto w-full max-w-3xl px-4 py-2">
          <h1 className="mb-1 text-center font-heading text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Move Smart Across Lagos
          </h1>
        </div>
        <DanfoHeroAnimation />
        <div className="mx-auto mt-2 flex w-full max-w-3xl flex-col gap-3 px-4 sm:flex-row sm:justify-center">
          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-xl bg-primary-yellow px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-colors hover:bg-primary-yellow/90"
          >
            Create account
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black/80 transition-colors hover:bg-black/5"
          >
            Log in
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
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
