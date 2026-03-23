import Landing from '../pages/Landing.jsx'
import Login from '../pages/Login.jsx'
import Signup from '../pages/Signup.jsx'
import About from '../pages/About.jsx'
import Pricing from '../pages/Pricing.jsx'
import { usePathname } from './usePathname.js'

function NotFound({ pathname }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6">
      <h1 className="font-heading text-2xl font-bold tracking-tight text-black">
        Page not found
      </h1>
      <p className="mt-2 text-black/70">
        No route matches{' '}
        <code className="rounded bg-black/5 px-1.5 py-0.5">{pathname}</code>
      </p>
    </div>
  )
}

export default function Router() {
  const pathname = usePathname()

  switch (pathname) {
    case '/':
      return <Landing />
    case '/signup':
      return <Signup />
    case '/login':
      return <Login />
    case '/about':
      return <About />
    case '/pricing':
      return <Pricing />
    default:
      return <NotFound pathname={pathname} />
  }
}

