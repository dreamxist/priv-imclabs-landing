import { Container } from '../components/Container'
import { AnimatedSection } from '../components/AnimatedSection'
import { Card } from '../components/Card'
import { IconWrapper } from '../components/IconWrapper'

const features = [
  {
    icon: '🧠',
    title: 'Inteligencia Artificial',
    description: 'Aprende de recetas exitosas y recomienda fórmulas efectivas',
    color: 'primary' as const,
  },
  {
    icon: '✅',
    title: 'Componentes Verificados',
    description: 'Valida disponibilidad antes de recetar',
    color: 'accent' as const,
  },
  {
    icon: '⚡',
    title: 'Proceso Ágil',
    description: 'De la consulta al pago en minutos',
    color: 'primary' as const,
  },
  {
    icon: '🔒',
    title: 'Seguro y Preciso',
    description: 'Evita interacciones y ajusta dosis automáticamente',
    color: 'accent' as const,
  },
]

export const Features: React.FC = () => {
  return (
    <section id="features" className="snap-start snap-always relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-72px)] flex items-center py-12 md:py-20 bg-white overflow-hidden">
      <Container className="w-full relative z-10">
        <AnimatedSection className="text-center mb-12 md:mb-16 px-4">
          <div className="inline-block mb-6 px-5 py-2 bg-primary/50 rounded-full text-primary font-semibold text-sm">
            La Solución
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Sistema con <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Inteligencia Artificial</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Aprende de recetas exitosas y recomienda fórmulas seguras
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="h-full text-center hover:scale-105 transition-transform duration-200">
                <IconWrapper variant={feature.color} size="lg" className="mx-auto mb-6">
                  <span className="text-4xl">{feature.icon}</span>
                </IconWrapper>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
