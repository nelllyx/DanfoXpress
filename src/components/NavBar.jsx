import { usePathname } from '../router/usePathname.js'
import Link from '../router/Link.jsx'

function NavItem({ to, label, activePath }) {
  const isActive = activePath === to

  return (
    <Link
      to={to}
      className={[
        'rounded-xl px-3 py-2 text-sm font-medium transition-colors',
        isActive
          ? 'bg-black text-white'
          : 'bg-white text-black hover:bg-black/5',
      ].join(' ')}
    >
      {label}
    </Link>
  )
}

export default function NavBar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-white/70 backdrop-blur">
      <div className="w-full flex items-center justify-between px-8 py-3">
        <Link
          to="/"
          className="flex items-center gap-2 ml-4 mr-12"
          style={{ textDecoration: 'none' }}
        >
          <span
            className="text-2xl font-extrabold font-heading tracking-widest"
            style={{ color: '#FFC107', letterSpacing: '0.15em', fontFamily: 'Montserrat, sans-serif' }}
          >
            DanfoXpress
          </span>
        </Link>
        <nav className="flex items-center gap-8 mr-2">
          <NavItem to="/" label="Home" activePath={pathname} />
          <NavItem to="/about" label="About" activePath={pathname} />
          <NavItem to="/pricing" label="Pricing" activePath={pathname} />
          <Link
            to="/signup"
            className="rounded-xl bg-[#FFC107] px-6 py-3 text-base font-semibold text-black shadow transition-colors hover:bg-yellow-400"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="rounded-xl border border-black/10 bg-white px-6 py-3 text-base font-semibold text-black transition-colors hover:bg-black/5"
          >
            Log in
          </Link>
        </nav>
      </div>
    </header>
  )
}