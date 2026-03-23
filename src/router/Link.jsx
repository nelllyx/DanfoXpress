import { navigate } from './navigate.js'

export default function Link({ to, className, children, onClick }) {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        // Allow callers (e.g. mobile navbar) to close UI on click.
        if (onClick) onClick(e)

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

