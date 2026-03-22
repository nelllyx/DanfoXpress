import { useState } from 'react'
import Link from '../router/Link.jsx'

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  function update(key) {
    return (e) =>
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }))
  }

  function onSubmit(e) {
    e.preventDefault()
    // Placeholder: wire this up to your backend later.
    alert(`Login submitted for ${form.email}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFBEA] px-4 py-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl border border-black/10 bg-white p-8 shadow-lg">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-black text-center">
            Welcome back
          </h1>
          <p className="mt-2 text-black/70 text-center">
            Log in to request rides and manage your bookings.
          </p>
        </div>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-black/80">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={update('email')}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-black shadow-sm outline-none transition-shadow focus:border-accent-red focus:ring-2 focus:ring-accent-red/30"
              placeholder="jane@example.com"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-black/80">
              Password
            </label>
            <input
              type="password"
              value={form.password}
              onChange={update('password')}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-black shadow-sm outline-none transition-shadow focus:border-accent-red focus:ring-2 focus:ring-accent-red/30"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-black px-6 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-black/90"
          >
            Log in
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-black/70">
          New here?{' '}
          <Link to="/signup" className="font-semibold text-accent-red">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  )
}
