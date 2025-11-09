import { Container } from '../components/Container'
import { AnimatedSection } from '../components/AnimatedSection'
import { BenefitCard } from '../components/BenefitCard'
import {
  ShieldCheck,
  DollarSign,
  Users,
  Sparkles,
  Workflow,
  Gauge,
} from 'lucide-react'


export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="snap-start snap-always relative py-12 md:py-16 bg-white overflow-hidden">
      <Container size="lg" className="w-full relative z-10">
        {/* Header - Nivel 1 */}
        <AnimatedSection className="text-center mb-6 md:mb-10 px-4">
          <div className="inline-block mb-4 px-4 py-2 bg-green-100 rounded-full text-green-700 font-semibold text-sm">
            🎁 Gratis para Médicos
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight">
            Beneficios para{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Todos
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            IA que elimina rechazos y optimiza cada paso
          </p>
        </AnimatedSection>

        {/* Feature Grid - Nivel 3: Ventajas específicas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Beneficio 1: Velocidad */}
          <BenefitCard
            icon={Gauge}
            title="Velocidad"
            description="Prescribe en segundos con validación automática"
            features={[
              'Validación en tiempo real',
              'Sugerencias automáticas'
            ]}
            color="blue"
            delay={0.1}
          />

          {/* Beneficio 2: Seguridad */}
          <BenefitCard
            icon={ShieldCheck}
            title="Seguridad"
            description="Cero rechazos con verificación completa"
            features={[
              'Componentes en stock',
              'Verificación de interacciones'
            ]}
            color="green"
            delay={0.2}
          />

          {/* Beneficio 3: Ahorro */}
          <BenefitCard
            icon={DollarSign}
            title="Ahorro"
            description="Reduce costos hasta 30%"
            features={[
              'Componentes optimizados',
              'Sin costos de rechazo'
            ]}
            color="orange"
            delay={0.3}
          />

          {/* Beneficio 4: Personalización */}
          <BenefitCard
            icon={Sparkles}
            title="Personalización con IA"
            description="Aprende tus preferencias de prescripción"
            features={[
              'Historial médico',
              'Recomendaciones personalizadas'
            ]}
            color="purple"
            delay={0.4}
          />

          {/* Beneficio 5: Experiencia */}
          <BenefitCard
            icon={Users}
            title="Fácil de Usar"
            description="Interfaz intuitiva sin curva de aprendizaje"
            features={[
              'Diseño simple',
              'Soporte 24/7'
            ]}
            color="indigo"
            delay={0.5}
          />

          {/* Beneficio 6: Eficiencia */}
          <BenefitCard
            icon={Workflow}
            title="Flujo Completo"
            description="De prescripción a entrega integrado"
            features={[
              'Trazabilidad completa',
              'Notificaciones automáticas'
            ]}
            color="green"
            delay={0.6}
          />
        </div>
      </Container>
    </section>
  )
}
