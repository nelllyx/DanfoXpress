import Link from '../router/Link.jsx'

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-sm text-white/70 transition-colors hover:text-primary-yellow"
    >
      {children}
    </Link>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-black/10 bg-eko-navy text-white">
      <div className="h-0.5 w-full bg-gradient-to-r from-primary-yellow/90 via-primary-yellow to-primary-yellow/90" aria-hidden />

      <div className="layout-shell py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block" style={{ textDecoration: 'none' }}>
              <span
                className="font-heading text-xl font-extrabold tracking-[0.12em] text-primary-yellow sm:text-2xl"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                DanfoXpress
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              On-demand shuttles for Lagos — mainland, island, and everywhere in between. Fair fares,
              verified drivers, routes that match how the city moves.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:col-span-4 lg:col-start-8">
            <div>
              <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Product
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <FooterLink to="/">Home</FooterLink>
                </li>
                <li>
                  <FooterLink to="/pricing">Pricing</FooterLink>
                </li>
                <li>
                  <FooterLink to="/about">About</FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Account
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <FooterLink to="/login">Log in</FooterLink>
                </li>
                <li>
                  <FooterLink to="/signup">Get started</FooterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
            © {year} DanfoXpress. Built for Lagos.
          </p>
          <p className="text-xs text-white/40">
            Eko ·{' '}
            <span className="text-white/55">Yaba · VI · Lekki · Ikeja · CMS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
