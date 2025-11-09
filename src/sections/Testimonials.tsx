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
    <section id="testimonials" className="snap-start snap-always relative h-screen min-h-screen flex items-center py-12 md:py-16 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      <Container size="lg" className="w-full relative z-10 overflow-y-auto max-h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Lo Que Dicen{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Nuestros Usuarios
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Médicos y pacientes comparten su experiencia con nuestra plataforma
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="mb-6 md:mb-8">
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        {/* Stats Dashboard */}
        <div className="mb-6 md:mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-6"
        >
          <p className="text-base md:text-lg text-gray-600 mb-4">
            Únete a los cientos de médicos y pacientes que ya disfrutan de estos beneficios
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-sm md:text-base"
          >
            Comienza Ahora
          </motion.a>
        </motion.div>
      </Container>
    </section>
  )
}
