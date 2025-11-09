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
    <section id="benefits" className="snap-start snap-always relative h-[calc(100vh-72px)] min-h-[600px] flex items-center py-12 md:py-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <Container size="lg" className="w-full relative z-10">
        {/* Header - Nivel 1 */}
        <AnimatedSection className="text-center mb-8 md:mb-10 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight">
            Transformación Real para{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Médicos y Pacientes
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Tecnología de IA que elimina rechazos, reduce costos y optimiza cada paso del proceso
          </p>
        </AnimatedSection>

        {/* Feature Grid - Nivel 3: Ventajas específicas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Beneficio 1: Velocidad */}
          <BenefitCard
            icon={Gauge}
            title="Velocidad Sin Precedentes"
            description="Reduce el tiempo de prescripción de minutos a segundos con validación automática instantánea"
            features={[
              'Validación en tiempo real',
              'Sugerencias automáticas',
              'Búsqueda inteligente de componentes'
            ]}
            color="blue"
            delay={0.1}
          />

          {/* Beneficio 2: Seguridad */}
          <BenefitCard
            icon={ShieldCheck}
            title="Seguridad Garantizada"
            description="Cero rechazos con verificación triple: disponibilidad, compatibilidad y fabricabilidad"
            features={[
              'Validación de componentes en stock',
              'Verificación de interacciones',
              'Control de calidad automático'
            ]}
            color="green"
            delay={0.2}
          />

          {/* Beneficio 3: Ahorro */}
          <BenefitCard
            icon={DollarSign}
            title="Ahorro Significativo"
            description="Reduce costos hasta 30% con optimización de fórmulas y eliminación de rechazos"
            features={[
              'Componentes optimizados',
              'Sin costos de rechazo',
              'Precios competitivos en tiempo real'
            ]}
            color="orange"
            delay={0.3}
          />

          {/* Beneficio 4: Personalización */}
          <BenefitCard
            icon={Sparkles}
            title="Personalización con IA"
            description="Sistema que aprende tus preferencias y sugiere las mejores opciones para cada paciente"
            features={[
              'Historial de prescripciones',
              'Patrones de tratamiento',
              'Recomendaciones personalizadas'
            ]}
            color="purple"
            delay={0.4}
          />

          {/* Beneficio 5: Experiencia */}
          <BenefitCard
            icon={Users}
            title="Mejor Experiencia"
            description="Interfaz intuitiva que médicos y pacientes aman usar, sin curva de aprendizaje"
            features={[
              'Diseño simple e intuitivo',
              'Acceso desde cualquier dispositivo',
              'Soporte 24/7'
            ]}
            color="indigo"
            delay={0.5}
          />

          {/* Beneficio 6: Eficiencia */}
          <BenefitCard
            icon={Workflow}
            title="Flujo Optimizado"
            description="Proceso end-to-end integrado desde prescripción hasta entrega del preparado"
            features={[
              'Trazabilidad completa',
              'Notificaciones automáticas',
              'Seguimiento en tiempo real'
            ]}
            color="green"
            delay={0.6}
          />
        </div>
      </Container>
    </section>
  )
}
