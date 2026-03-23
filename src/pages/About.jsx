import Link from '../router/Link.jsx'

export default function About() {
  return (
    <div className="mx-auto max-w-2xl py-2">
      <h1 className="font-heading text-3xl font-bold tracking-tight text-black sm:text-4xl">
        About DanfoXpress
      </h1>
      <p className="mt-4 text-base leading-relaxed text-black/70">
        We&apos;re building shared, on-demand shuttles for Lagos — routes that respect how people
        actually move between the mainland and the islands, with upfront pricing and drivers you can
        trust.
      </p>
      <p className="mt-4 text-base leading-relaxed text-black/70">
        This page is a placeholder while we finish the full story. Questions? Reach out through your
        account once you&apos;re signed up.
      </p>
      <p className="mt-8">
        <Link to="/" className="font-semibold text-black underline decoration-primary-yellow decoration-2 underline-offset-4 hover:text-black/80">
          Back to home
        </Link>
      </p>
    </div>
  )
}
