import Link from '../router/Link.jsx'
import DanfoHeroAnimation from '../components/DanfoHeroAnimation.jsx'

const hoods = ['Yaba', 'VI', 'Lekki', 'Ikeja', 'CMS']

export default function HeroSection() {
  return (
    <section>
      <div>
        <div className="pb-8 pt-8 text-center sm:pb-12 sm:pt-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45 sm:text-xs">
            Eko · On-demand shuttles
          </p>

          <h1 className="mx-auto mt-6 max-w-5xl font-heading text-2xl font-extrabold leading-tight tracking-tight text-eko-navy sm:text-4xl md:text-5xl lg:text-6xl !font-black">
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
  )
}
