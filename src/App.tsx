import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero, About, Features, HowItWorks, Benefits, ContactCTA } from './sections'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Benefits />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
