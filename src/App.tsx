import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero, Features, HowItWorks, Benefits, Testimonials, ContactCTA } from './sections'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  useSmoothScroll()

  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <main className="snap-y snap-mandatory overflow-y-scroll h-screen pt-[64px] md:pt-[72px]">
        <Hero />
        <Features />
        {/* HowItWorks now renders 3 separate sections */}
        <HowItWorks />
        <Benefits />
        {/* <Testimonials /> */}
        <ContactCTA />
        <div className="snap-start">
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
