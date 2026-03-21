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
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-black">
          Welcome back
        </h1>
        <p className="mt-2 text-black/70">
          Log in to request rides and manage your bookings.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
      >
        <div className="grid gap-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-black/80">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={update('email')}
              className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-black shadow-sm outline-none transition-shadow focus:border-accent-red focus:ring-2 focus:ring-accent-red/30"
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
              className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-black shadow-sm outline-none transition-shadow focus:border-accent-red focus:ring-2 focus:ring-accent-red/30"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-colors hover:bg-black/90"
          >
            Log in
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-black/70">
          New here?{' '}
          <Link to="/signup" className="font-semibold text-accent-red">
            Create an account
          </Link>
        </p>
      </form>

      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        <h2 className="font-heading text-lg font-bold tracking-tight text-black">
          Quick Tailwind check
        </h2>
        <p className="mt-2 text-black/70">
          If styles don&apos;t show up, go to the test page.
        </p>
        <div className="mt-4">
          <Link
            to="/tailwind-test"
            className="inline-flex items-center justify-center rounded-xl bg-primary-yellow px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-primary-yellow/90"
          >
            Open Tailwind test
          </Link>
        </div>
      </div>
    </div>
  )
}

