import { Container } from '../components/Container'
import { AnimatedSection } from '../components/AnimatedSection'
import { Card } from '../components/Card'
import { IconWrapper } from '../components/IconWrapper'
import { AnimatedBackground } from '../components/AnimatedBackground'
import { motion } from 'framer-motion'

const steps = [
  {
    number: 1,
    title: 'Médico: Ingreso de Datos',
    description: 'Ingresa RUT del paciente y diagnóstico en el sistema',
    icon: '👨‍⚕️',
    detail: 'Solo toma unos segundos',
  },
  {
    number: 2,
    title: 'IA: Recomendación Inteligente',
    description: 'El sistema analiza el diagnóstico, historial de recetas exitosas y disponibilidad de componentes',
    icon: '🤖',
    detail: 'El médico solo ajusta detalles según el paciente',
  },
  {
    number: 3,
    title: 'Médico: Envío Digital',
    description: 'Envía la receta de forma digital al paciente',
    icon: '📧',
    detail: 'Sin papeles, 100% digital',
  },
  {
    number: 4,
    title: 'Paciente: Recibe Información',
    description: 'Recibe por email la receta y lista de recetarios disponibles para elaborarla',
    icon: '📱',
    detail: 'Toda la información en un solo lugar',
  },
  {
    number: 5,
    title: 'Paciente: Pago',
    description: 'Paga la receta y la elaboración comienza inmediatamente',
    icon: '💳',
    detail: 'Sin esperas innecesarias',
  },
  {
    number: 6,
    title: 'Paciente: Retiro',
    description: 'Retira su medicamento preparado a la medida',
    icon: '✅',
    detail: 'Tratamiento personalizado listo',
  },
]

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="min-h-screen flex items-center py-20 bg-white relative overflow-hidden">
      <AnimatedBackground variant="mixed" />
      {/* Flowing line background */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full" style={{ maxWidth: '1200px' }}>
          <motion.path
            d="M 100 100 Q 400 100 400 300 T 700 500 T 1000 700"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10 10"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.2 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5CD6B2" />
              <stop offset="100%" stopColor="#A29BFE" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="w-full relative z-10">
        <AnimatedSection className="text-center mb-12 md:mb-16 px-4">
          <div className="inline-block mb-6 px-5 py-2 bg-accent/50 rounded-full text-accent font-semibold text-sm">
            Flujo de Trabajo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Simple, Rápido y <span className="bg-gradient-to-r from-accent to-accent-foreground bg-clip-text text-transparent">Efectivo</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            De la consulta médica al medicamento en <span className="font-semibold text-accent">6 pasos sencillos</span>
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="h-full relative">
                <div className="flex items-start space-x-4">
                  <IconWrapper
                    variant={index % 2 === 0 ? 'menta' : 'lavanda'}
                    size="md"
                    className="flex-shrink-0"
                  >
                    <span className="font-bold text-xl">{step.number}</span>
                  </IconWrapper>
                  <div className="flex-1">
                    <div className="text-3xl mb-3">{step.icon}</div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-2">
                      {step.description}
                    </p>
                    <p className="text-sm text-primary font-medium italic">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
