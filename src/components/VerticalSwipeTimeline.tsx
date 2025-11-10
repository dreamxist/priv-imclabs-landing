import { motion } from 'framer-motion';
import { LucideIcon, ChevronDown } from 'lucide-react';

export interface TimelineStep {
  icon: LucideIcon;
  title: string;
  description: string;
  row: 'doctor' | 'patient';
}

const getRowStyles = (row: TimelineStep['row']) => {
  return row === 'doctor'
    ? {
        bgColor: 'bg-blue-50/80',
        iconBg: 'bg-blue-500',
        badgeText: 'Médico',
        lineColor: '#3b82f6',
      }
    : {
        bgColor: 'bg-green-50/80',
        iconBg: 'bg-green-500',
        badgeText: 'Paciente',
        lineColor: '#22c55e',
      };
};

const StepCard = ({ step, index, globalIndex }: { step: TimelineStep; index: number; globalIndex: number }) => {
  const styles = getRowStyles(step.row);
  const Icon = step.icon;
  const isLast = index === 2;

  return (
    <div className="mb-6 md:mb-8 last:mb-0">
      <div className="flex items-start gap-3 md:gap-6">
        {/* Timeline Line */}
        <div className="flex flex-col items-center flex-shrink-0">
          {/* Icon Circle */}
          <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg ${styles.iconBg}`}>
            <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />

            {/* Step Number */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
              <span className={`text-xs font-bold ${step.row === 'doctor' ? 'text-blue-600' : 'text-green-600'}`}>
                {globalIndex}
              </span>
            </div>
          </div>

          {/* Vertical Line */}
          {!isLast && (
            <div className="w-0.5 h-16 md:h-20 my-2 rounded-full" style={{ background: styles.lineColor }} />
          )}
        </div>

        {/* Content Card */}
        <div className={`flex-1 p-4 md:p-5 rounded-xl shadow-md ${styles.bgColor} backdrop-blur-sm transition-shadow hover:shadow-lg`}>
          {/* User Type Badge */}
          <div className={`inline-block mb-2 px-3 py-1 rounded-full text-xs font-semibold text-white ${styles.iconBg}`}>
            {styles.badgeText}
          </div>

          {/* Title */}
          <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">{step.title}</h3>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  );
};

// Intro Section
export const ProcessIntro = ({ title, subtitle }: { title?: string; subtitle?: string }) => {
  return (
    <section id="how-it-works" className="snap-start snap-always relative min-h-[calc(100vh-64px)] md:min-h-screen flex items-center justify-center bg-white overflow-hidden py-12 md:py-0">
      <div className="text-center max-w-2xl md:max-w-3xl px-4 md:px-8">
        <div className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full text-white font-semibold text-sm md:text-base shadow-lg">
          {title || 'Proceso Completo'}
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight px-4">
          {subtitle || 'De la prescripción al medicamento'}
        </h3>
        <p className="text-sm md:text-base text-gray-600 mb-8 px-4">
          Desliza para conocer cada paso del proceso
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="mt-6 md:mt-8"
        >
          <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-gray-400 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

// Doctor Process Section
export const DoctorProcess = ({ steps }: { steps: TimelineStep[] }) => {
  const doctorSteps = steps.filter(step => step.row === 'doctor');

  return (
    <section className="snap-start snap-always relative min-h-[calc(100vh-64px)] md:min-h-screen flex items-center justify-center bg-white overflow-hidden py-12 md:py-16">
      <div className="w-full max-w-3xl mx-auto px-4 md:px-8">
        <div className="mb-6 md:mb-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">Proceso del Médico</h3>
        </div>
        <div>
          {doctorSteps.map((step, index) => (
            <StepCard key={index} step={step} index={index} globalIndex={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Patient Process Section
export const PatientProcess = ({ steps }: { steps: TimelineStep[] }) => {
  const patientSteps = steps.filter(step => step.row === 'patient');

  return (
    <section className="snap-start snap-always relative min-h-[calc(100vh-64px)] md:min-h-screen flex items-center justify-center bg-white overflow-hidden py-12 md:py-16">
      <div className="w-full max-w-3xl mx-auto px-4 md:px-8">
        <div className="mb-6 md:mb-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-2">Proceso del Paciente</h3>

        </div>
        <div>
          {patientSteps.map((step, index) => (
            <StepCard key={index} step={step} index={index} globalIndex={index + 4} />
          ))}
        </div>
      </div>
    </section>
  );
};
