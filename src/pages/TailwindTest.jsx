import Link from '../router/Link.jsx'

export default function TailwindTest() {
  return (
    <div className="flex flex-col gap-6">
      <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-black">
          Tailwind is working
        </h1>
        <p className="mt-2 text-black/70">
          This page uses Tailwind utilities and the configured font.
        </p>

        <div className="mt-5 space-y-3">
          <div className="text-lg font-semibold text-black/80">
            Buttons
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="rounded-xl bg-primary-yellow px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-colors hover:bg-primary-yellow/90">
              Primary Yellow Button
            </button>
            <button className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/80 transition-colors hover:bg-black/5">
              Outline Button
            </button>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-gradient-to-r from-accent-red via-primary-yellow to-primary-yellow p-5 text-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
          <div className="text-sm font-medium text-white/90">Gradient</div>
          <div className="mt-1 text-xl font-bold">
            Poppins/Montserrat should be visible
          </div>
          <div className="mt-2 text-sm text-white/90">
            Try resizing your window to see responsive styles.
          </div>
        </div>

        <p className="mt-4 text-sm text-black/70">
          Current route classes:{' '}
          <code className="rounded bg-black/5 px-1.5 py-0.5">/tailwind-test</code>
        </p>
      </section>

      <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-heading text-lg font-bold tracking-tight text-black">
              Next
            </h2>
            <p className="mt-1 text-black/70">
              Continue to signup or login.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-primary-yellow px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-primary-yellow/90"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/80 transition-colors hover:bg-black/5"
            >
              Log in
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

