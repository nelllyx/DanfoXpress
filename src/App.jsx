import NavBar from './components/NavBar.jsx'
import Router from './router/Router.jsx'

export default function App() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-white via-white to-primary-yellow/15">
      <NavBar />
      <main className="layout-shell py-6 sm:py-8">
        <Router />
      </main>
    </div>
  )
}

