import { navigate } from './navigate.js'

export default function Link({ to, className, children }) {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        // Only intercept internal navigation.
        if (to && typeof to === 'string' && to.startsWith('/')) {
          e.preventDefault()
          navigate(to)
        }
      }}
    >
      {children}
    </a>
  )
}

