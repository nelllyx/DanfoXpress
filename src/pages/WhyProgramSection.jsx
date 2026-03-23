import Link from '../router/Link.jsx'

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

export default function WhyProgramSection() {
  return (
    <section
      className="border-t border-black/10 pb-4 pt-16 sm:pt-20"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-primary-yellow">
          Why riders choose this program
        </p>
        <h2
          id="why-heading"
          className="mt-2 font-heading text-2xl font-bold tracking-tight text-eko-navy sm:text-3xl !font-black"
        >
          Electric rides with Lagos Card tap-to-pay
        </h2>
        <p className="mt-3 text-base text-black/65">
          Clear estimates upfront, faster boarding with card tap at the entrance, and electric routes
          designed to cushion fuel hardship.
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
  )
}
