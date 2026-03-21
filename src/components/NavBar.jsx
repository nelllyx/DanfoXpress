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
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="font-heading text-lg font-semibold tracking-tight text-black"
        >
          DanfoXpress
        </Link>

        <nav className="flex items-center gap-2">
          <NavItem to="/" label="Home" activePath={pathname} />
          <NavItem to="/signup" label="Sign up" activePath={pathname} />
          <NavItem to="/login" label="Log in" activePath={pathname} />
        </nav>
      </div>
    </header>
  )
}

