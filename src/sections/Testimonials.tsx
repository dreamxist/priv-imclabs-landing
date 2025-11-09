import { Container } from '../components/Container'
import { TestimonialCarousel, Testimonial } from '../components/TestimonialCarousel'
import { StatCard } from '../components/StatCard'
import { motion } from 'framer-motion'
import {
  CheckCircle,
  Zap,
  TrendingUp,
  DollarSign,
} from 'lucide-react'

// Sample testimonials - Replace with real testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. María González',
    role: 'Médico General',
    userType: 'doctor',
    location: 'Santiago, Chile',
    quote: 'IMC Labs transformó mi práctica. Antes perdía minutos verificando componentes, ahora el sistema me da certeza inmediata. Mis recetas nunca son rechazadas.',
  },
  {
    id: 2,
    name: 'Carlos Pérez',
    role: 'Paciente',
    userType: 'patient',
    location: 'Valparaíso, Chile',
    quote: 'El cambio es increíble. Antes esperaba días para mis preparados magistrales, ahora todo es rápido y a un mejor precio. Tratamiento realmente personalizado.',
  },
  {
    id: 3,
    name: 'Dra. Ana Martínez',
    role: 'Especialista en Dermatología',
    userType: 'doctor',
    location: 'Concepción, Chile',
    quote: 'La IA aprende mis preferencias de prescripción. Cada vez es más rápido y preciso. Mis pacientes reciben exactamente lo que necesitan.',
  },
  {
    id: 4,
    name: 'Patricia Silva',
    role: 'Paciente Crónica',
    userType: 'patient',
    location: 'La Serena, Chile',
    quote: 'Como paciente con tratamiento continuo, el ahorro de tiempo y dinero es significativo. La atención es más personalizada que nunca.',
  },
  {
    id: 5,
    name: 'Dr. Roberto Fernández',
    role: 'Médico Internista',
    userType: 'doctor',
    location: 'Antofagasta, Chile',
    quote: 'La seguridad que brinda el sistema es invaluable. Sé que cada receta será procesada correctamente. Cero rechazos, cero pérdidas de tiempo.',
  },
]

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="snap-start snap-always relative min-h-[calc(100vh-64px)] md:min-h-screen flex items-center py-12 md:py-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <Container size="lg" className="w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8 px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-3"
          >
            <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 border border-purple-200 rounded-full text-xs md:text-sm font-semibold text-purple-700">
              ⭐ Testimonios Reales
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Lo Que Dicen{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Nuestros Usuarios
            </span>
          </h2>

          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Médicos y pacientes que transformaron su experiencia con preparados magistrales
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 md:mb-10"
        >
          <TestimonialCarousel testimonials={testimonials} />
        </motion.div>

        {/* Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 md:mb-10"
        >
          <div className="text-center mb-5">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
              Resultados Comprobados
            </h3>
            <p className="text-sm text-gray-600">Impacto real en la práctica médica</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            <StatCard
              icon={CheckCircle}
              value="100%"
              label="Validación"
              description="Recetas validadas en primera instancia"
              color="green"
              delay={0.1}
              trend="up"
            />

            <StatCard
              icon={Zap}
              value="0"
              label="Rechazos"
              description="Cero rechazos por componentes"
              color="blue"
              delay={0.2}
              trend="neutral"
            />

            <StatCard
              icon={TrendingUp}
              value="-50%"
              label="Tiempo"
              description="Reducción en tiempo de prescripción"
              color="purple"
              delay={0.3}
              trend="down"
            />

            <StatCard
              icon={DollarSign}
              value="-30%"
              label="Costo"
              description="Ahorro promedio para pacientes"
              color="orange"
              delay={0.4}
              trend="down"
            />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center relative"
        >
          <div className="relative inline-block">
            {/* Decorative blur effect behind CTA */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 blur-2xl opacity-20 scale-110"></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200/50">
              <p className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                Únete a +500 profesionales de la salud
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-5">
                que ya transformaron su práctica médica con IMC Labs
              </p>

              <motion.a
                href="https://app.imclabs.com/es"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white font-bold rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-sm md:text-base"
              >
                <span>Comienza Gratis Ahora</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>

              <p className="text-xs text-gray-500 mt-3">
                ✓ Sin tarjeta de crédito • ✓ Configuración en 2 minutos
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
