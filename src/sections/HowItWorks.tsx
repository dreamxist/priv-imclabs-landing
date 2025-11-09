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
    description: 'El médico ingresa el RUT del paciente y el diagnóstico para iniciar el proceso de prescripción',
    row: 'doctor' as const,
  },
  {
    icon: Sparkles,
    title: 'Recomendación Inteligente',
    description: 'El sistema recomienda una receta magistral, que luego el médico solo ajusta en función del tipo de paciente',
    row: 'doctor' as const,
  },
  {
    icon: Send,
    title: 'Envío Digital de Receta',
    description: 'El médico envía de manera digital la receta al paciente de forma instantánea',
    row: 'doctor' as const,
  },
  {
    icon: Mail,
    title: 'Recepción de Receta y Opciones',
    description: 'El paciente recibe vía email la receta y una lista de recetarios magistrales en condición de elaborarla',
    row: 'patient' as const,
  },
  {
    icon: CreditCard,
    title: 'Pago y Elaboración',
    description: 'El paciente paga la receta e inmediatamente comienza su elaboración por el recetario seleccionado',
    row: 'patient' as const,
  },
  {
    icon: Package,
    title: 'Retiro del Preparado',
    description: 'El paciente retira su preparado magistral en el recetario seleccionado o lo recibe a domicilio',
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
