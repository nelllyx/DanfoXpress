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

export default function HowItWorksSection() {
  return (
    <section
      className="border-t border-black/10 pt-16 sm:pt-20"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-primary-yellow">
          Seamless boarding flow
        </p>
        <h2
          id="how-it-works-heading"
          className="mt-2 font-heading text-2xl font-bold tracking-tight text-eko-navy sm:text-3xl !font-black"
        >
          Tap, ride, top up
        </h2>
        <p className="mt-3 text-base text-black/65">
          See the estimated fee, scan your Lagos Card at the entrance, then ride electric — with top-ups built in.
        </p>
      </div>

      <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="flex flex-col items-center text-center sm:items-stretch sm:text-left"
          >
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
  )
}
