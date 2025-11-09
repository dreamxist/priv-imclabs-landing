import { ProcessIntro, DoctorProcess, PatientProcess, TimelineStep } from '../components/VerticalSwipeTimeline'
import {
  UserCheck,
  Sparkles,
  Send,
  Mail,
  CreditCard,
  Package,
} from 'lucide-react'

// Complete app workflow - 6 simple steps
const workflowSteps: TimelineStep[] = [
  {
    icon: UserCheck,
    title: 'Ingreso de RUT y Diagnóstico',
    description: 'Ingresas el RUT del paciente y el diagnóstico',
    row: 'doctor' as const,
  },
  {
    icon: Sparkles,
    title: 'Recomendación con IA',
    description: 'El sistema recomienda una receta que solo ajustas según el paciente',
    row: 'doctor' as const,
  },
  {
    icon: Send,
    title: 'Envío Digital',
    description: 'Envías la receta al paciente instantáneamente',
    row: 'doctor' as const,
  },
  {
    icon: Mail,
    title: 'Recepción de Receta',
    description: 'Recibe por email la receta y opciones de recetarios disponibles',
    row: 'patient' as const,
  },
  {
    icon: CreditCard,
    title: 'Pago y Elaboración',
    description: 'Paga y comienza la elaboración inmediatamente',
    row: 'patient' as const,
  },
  {
    icon: Package,
    title: 'Retiro o Delivery',
    description: 'Retira en recetario o recibe a domicilio',
    row: 'patient' as const,
  },
]

export const HowItWorks: React.FC = () => {
  return (
    <>
      <ProcessIntro
        title="Proceso Completo"
        subtitle="De la prescripción médica a tu medicamento personalizado"
      />
      <DoctorProcess steps={workflowSteps} />
      <PatientProcess steps={workflowSteps} />
    </>
  )
}
