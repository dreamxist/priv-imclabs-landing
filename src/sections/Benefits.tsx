import { Container } from '../components/Container'
import { AnimatedSection } from '../components/AnimatedSection'
import { Card } from '../components/Card'

const doctorBenefits = [
  {
    icon: '🔒',
    title: 'Seguridad Garantizada',
    description: 'Certeza en la existencia de componentes antes de recetar'
  },
  {
    icon: '⚡',
    title: 'Rapidez al Recetar',
    description: 'De minutos a segundos con recomendaciones inteligentes'
  },
  {
    icon: '🧠',
    title: 'Aprende de Ti',
    description: 'El sistema se adapta a tus preferencias médicas'
  },
  {
    icon: '✅',
    title: 'Sin Rechazos',
    description: 'Recetas validadas que pasan siempre en fabricación'
  },
]

const patientBenefits = [
  {
    icon: '⚡',
    title: 'Proceso Rápido',
    description: 'Obtén tu preparado de manera efectiva y sin demoras'
  },
  {
    icon: '💰',
    title: 'Menor Costo',
    description: 'Recetas personalizadas a precios más accesibles'
  },
  {
    icon: '🎯',
    title: 'A Tu Medida',
    description: 'Tratamiento personalizado según tus necesidades'
  },
]

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="snap-start snap-always relative h-[calc(100vh-72px)] min-h-[600px] flex items-center py-20 bg-white overflow-hidden">
      <Container className="w-full relative z-10">
        <AnimatedSection className="text-center mb-12 md:mb-16 px-4">
          <div className="inline-block mb-6 px-5 py-2 bg-primary/50 rounded-full text-primary font-semibold text-sm">
            Beneficios Clave
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Mejor para <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Médicos y Pacientes</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Una solución que conecta y beneficia a <span className="font-semibold text-accent">todo el ecosistema</span> de salud
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Doctor Benefits */}
          <AnimatedSection delay={100}>
            <Card variant="elevated" className="h-full">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                  👨‍⚕️
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Para Médicos
                </h3>
              </div>
              <div className="space-y-4">
                {doctorBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-primary/50 rounded-xl">
                    <div className="flex-shrink-0 text-2xl">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>

          {/* Patient Benefits */}
          <AnimatedSection delay={200}>
            <Card variant="elevated" className="h-full">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                  👥
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Para Pacientes
                </h3>
              </div>
              <div className="space-y-4">
                {patientBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-accent/50 rounded-xl">
                    <div className="flex-shrink-0 text-2xl">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
