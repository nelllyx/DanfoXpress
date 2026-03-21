export function navigate(to) {
  if (!to || typeof to !== 'string') return
  if (!to.startsWith('/')) return
  if (window.location.pathname === to) return

  window.history.pushState({}, '', to)
  // Reuse the browser event so our router listeners update.
  window.dispatchEvent(new PopStateEvent('popstate'))
}

