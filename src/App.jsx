import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Router from './router/Router.jsx'

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-gradient-to-b from-white via-white to-primary-yellow/15">
      <NavBar />
      <main className="layout-shell flex-1 py-6 sm:py-8">
        <Router />
      </main>
      <Footer />
    </div>
  )
}

