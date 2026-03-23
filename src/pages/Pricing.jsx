import Link from '../router/Link.jsx'

export default function Pricing() {
  return (
    <div className="mx-auto max-w-2xl py-2">
      <h1 className="font-heading text-3xl font-bold tracking-tight text-black sm:text-4xl">
        Pricing
      </h1>
      <p className="mt-4 text-base leading-relaxed text-black/70">
        Fares are shown upfront before you confirm a ride — no surprises, no hidden charges. Exact
        pricing for your route will appear in the app when you book.
      </p>
      <p className="mt-4 text-base leading-relaxed text-black/70">
        We&apos;re still finalizing public rate tables for this page. Check back soon, or create an
        account to see live quotes for trips you take often.
      </p>
      <p className="mt-8">
        <Link
          to="/signup"
          className="font-semibold text-black underline decoration-primary-yellow decoration-2 underline-offset-4 hover:text-black/80"
        >
          Get started
        </Link>
        <span className="text-black/40"> · </span>
        <Link to="/" className="font-semibold text-black/70 hover:text-black">
          Home
        </Link>
      </p>
    </div>
  )
}
