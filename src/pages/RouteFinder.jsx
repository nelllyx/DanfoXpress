import { useState } from 'react'

export default function RouteFinder({ className = '' }) {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [result, setResult] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    // Mock result for now (replace with real API later)
    setResult({
      route: `${from} → ${to}`,
      time: '25 mins',
      fare: '₦800',
    })
  }

  return (
    <div className={`w-full rounded-2xl border border-black/10 bg-white/90 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] ${className}`}>
      <h2 className="font-heading text-xl font-bold tracking-tight text-eko-navy">
        Estimate your subsidized ride
      </h2>
      <p className="mt-1 text-sm leading-relaxed text-black/65">
        For new riders: pick a start and destination. We show an estimated fee, then you tap to pay with your Lagos Card at the entrance.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-black/80">From</label>
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-black shadow-sm outline-none transition-shadow focus:border-primary-yellow focus:ring-2 focus:ring-primary-yellow/30"
              placeholder="Start location"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-black/80">To</label>
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-black shadow-sm outline-none transition-shadow focus:border-primary-yellow focus:ring-2 focus:ring-primary-yellow/30"
              placeholder="Destination"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-black px-6 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-black/90"
        >
          Get estimate
        </button>
      </form>

      {result && (
        <div className="mt-6 rounded-xl border border-primary-yellow/50 bg-primary-yellow/[0.08] p-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div className="font-semibold text-black">{result.route}</div>
            <div className="text-sm font-semibold text-eko-navy">
              {result.time} · {result.fare}
            </div>
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <div className="flex items-start gap-2">
              <span
                className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-yellow/30 text-eko-navy"
                aria-hidden
              >
                1
              </span>
              <div>
                <div className="text-sm font-semibold text-eko-navy">Tap Lagos Card at the entrance</div>
                <div className="text-sm text-black/65">We deduct the fare automatically on entry.</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span
                className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-eko-navy/10 text-eko-navy"
                aria-hidden
              >
                2
              </span>
              <div>
                <div className="text-sm font-semibold text-eko-navy">Top up in the app</div>
                <div className="text-sm text-black/65">Run out of credit? Add balance right here.</div>
              </div>
            </div>
          </div>

          <p className="mt-3 text-xs text-black/50">
            Demo estimate only. Real routes and fares will connect to your Lagos Card service.
          </p>
        </div>
      )}
    </div>
  )
}

