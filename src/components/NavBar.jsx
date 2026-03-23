import { useState } from 'react'
import { usePathname } from '../router/usePathname.js'
import Link from '../router/Link.jsx'

function NavItem({ to, label, activePath, onNavigate }) {
  const isActive = activePath === to
  return (
    <Link
      to={to}
      onClick={onNavigate}
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
  const [menuOpen, setMenuOpen] = useState(false)

  // Helper to close menu on nav item click (mobile only)
  const handleNav = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-white/70 backdrop-blur">
      <div className="w-full flex items-center justify-between px-4 sm:px-8 py-3">
        <Link
          to="/"
          className="flex items-center gap-2 ml-2 sm:ml-4 mr-4 sm:mr-12"
          style={{ textDecoration: 'none' }}
          onClick={handleNav}
        >
          <span
            className="text-xl sm:text-2xl font-extrabold font-heading tracking-widest"
            style={{ color: '#FFC107', letterSpacing: '0.15em', fontFamily: 'Montserrat, sans-serif' }}
          >
            DanfoXpress
          </span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 mr-2">
          <NavItem to="/" label="Home" activePath={pathname} />
          <NavItem to="/about" label="About" activePath={pathname} />
          <NavItem to="/pricing" label="Pricing" activePath={pathname} />
          <NavItem to="/route-finder" label="Route Finder" activePath={pathname} />
          <Link
            to="/signup"
            className="rounded-xl bg-[#FFC107] px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-black shadow transition-colors hover:bg-yellow-400"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="rounded-xl border border-black/10 bg-white px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-black transition-colors hover:bg-black/5"
          >
            Log in
          </Link>
        </nav>
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black/20"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t border-black/10 px-4 py-4 flex flex-col gap-2 shadow-lg">
          <NavItem to="/" label="Home" activePath={pathname} onNavigate={handleNav} />
          <NavItem to="/about" label="About" activePath={pathname} onNavigate={handleNav} />
          <NavItem to="/pricing" label="Pricing" activePath={pathname} onNavigate={handleNav} />
          <NavItem to="/route-finder" label="Route Finder" activePath={pathname} onNavigate={handleNav} />
          <Link
            to="/signup"
            className="rounded-xl bg-[#FFC107] px-5 py-3 text-base font-semibold text-black shadow transition-colors hover:bg-yellow-400"
            onClick={handleNav}
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="rounded-xl border border-black/10 bg-white px-5 py-3 text-base font-semibold text-black transition-colors hover:bg-black/5"
            onClick={handleNav}
          >
            Log in
          </Link>
        </div>
      )}
    </header>
  )
}
