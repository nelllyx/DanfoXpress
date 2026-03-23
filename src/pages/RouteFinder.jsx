import { useState } from 'react'

export default function RouteFinder() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [result, setResult] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    // Mock result for now
    setResult({
      route: `${from} → ${to}`,
      time: '25 mins',
      fare: '₦800',
      note: 'This is a sample route. Real integration coming soon!'
    })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFBEA] px-4 py-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl border border-black/10 bg-white p-8 shadow-lg">
        <h1 className="font-heading text-2xl font-bold text-black text-center mb-4">Route Finder</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-black/80">From</label>
            <input value={from} onChange={e => setFrom(e.target.value)} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-black shadow-sm outline-none transition-shadow focus:border-accent-red focus:ring-2 focus:ring-accent-red/30" placeholder="Start location" required />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-black/80">To</label>
            <input value={to} onChange={e => setTo(e.target.value)} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-black shadow-sm outline-none transition-shadow focus:border-accent-red focus:ring-2 focus:ring-accent-red/30" placeholder="Destination" required />
          </div>
          <button type="submit" className="w-full rounded-xl bg-black px-6 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-black/90">Find Route</button>
        </form>
        {result && (
          <div className="mt-6 p-4 rounded-xl bg-[#FFF8E1] border border-[#FFC107] text-black">
            <div className="font-semibold">Route: {result.route}</div>
            <div>Estimated time: {result.time}</div>
            <div>Estimated fare: {result.fare}</div>
            <div className="text-xs mt-2 text-black/60">{result.note}</div>
          </div>
        )}
      </div>
    </div>
  )
}

