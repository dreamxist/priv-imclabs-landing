import { Container } from '../components/Container'
import { AnimatedSection } from '../components/AnimatedSection'

export const About: React.FC = () => {
  return (
    <section id="about" className="snap-start snap-always relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-72px)] flex items-center py-12 md:py-20 bg-white overflow-hidden">
      <Container className="relative z-10">
        <AnimatedSection className="text-center max-w-5xl mx-auto px-4">
          <div className="inline-block mb-6 px-5 py-2 bg-accent/50 rounded-full text-accent font-semibold text-sm">
            El Problema
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
            El Problema Actual
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start space-x-4 p-6 bg-white/50 rounded-2xl shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                ❌
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Recetas Rechazadas</h3>
                <p className="text-gray-600">Falta de componentes o dosis incorrectas</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white/50 rounded-2xl shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                ⚠️
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Interacciones Peligrosas</h3>
                <p className="text-gray-600">Incompatibilidad entre componentes</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white/50 rounded-2xl shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                🐌
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Proceso Lento</h3>
                <p className="text-gray-600">Tiempo excesivo de elaboración</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white/50 rounded-2xl shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                🔄
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Ajustes Constantes</h3>
                <p className="text-gray-600">Múltiples iteraciones necesarias</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
