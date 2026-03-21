import NavBar from './components/NavBar.jsx'
import Router from './router/Router.jsx'

export default function App() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-white via-white to-primary-yellow/15">
      <NavBar />
      <main className="mx-auto w-full max-w-3xl px-0 py-6 sm:px-4 sm:py-8">
        <Router />
      </main>
    </div>
  )
}

