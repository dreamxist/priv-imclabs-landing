import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { AnimatedSection } from '../components/AnimatedSection'
import webAppImage from '../assets/images/app-image/web.png'
import mobileAppImage from '../assets/images/app-image/mobile.png'

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="snap-start snap-always relative h-[calc(100vh-72px)] min-h-[600px] flex items-center overflow-hidden bg-white">
      <Container className="relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          {/* Left Column - Content */}
          <AnimatedSection animation="fade-right" className="text-center lg:text-left">
            <AnimatedSection delay={200} animation="fade-up">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
                🧬 Machine Learning + Salud Personalizada
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300} animation="fade-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                Acercando la{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Receta Magistral</span>
                <br />
                a toda la Población
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={400} animation="fade-up">
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
                Obtén la receta magistral que tu paciente necesita con{' '}
                <span className="font-semibold text-accent">3 simples clics</span>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={500} animation="fade-up">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="primary" size="lg" onClick={scrollToContact}>
                  Comenzar Ahora
                </Button>
                <Button variant="outline" size="lg" onClick={() => {
                  const element = document.getElementById('how-it-works')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}>
                  Ver Cómo Funciona
                </Button>
              </div>
            </AnimatedSection>
          </AnimatedSection>

          {/* Right Column - App Screenshots */}
          <AnimatedSection animation="fade-left" delay={300} className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
            {/* Web App Screenshot */}
            <div className="absolute top-0 left-0 right-0 z-10 animate-float">
              <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 md:border-4 border-white">
                <img
                  src={webAppImage}
                  alt="IMCLABS Web Platform"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Mobile App Screenshot */}
            <div className="absolute bottom-0 right-0 w-2/5 sm:w-1/3 lg:w-2/5 z-20 animate-float [animation-delay:500ms]">
              <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 md:border-4 border-white">
                <img
                  src={mobileAppImage}
                  alt="IMCLABS Mobile App"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-3xl -z-10"></div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
