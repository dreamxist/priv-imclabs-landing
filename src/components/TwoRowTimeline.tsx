import { motion } from 'framer-motion';
import { LucideIcon, ArrowDown } from 'lucide-react';
import clsx from 'clsx';

interface TimelineStep {
  icon: LucideIcon;
  title: string;
  description: string;
  row: 'doctor' | 'patient'; // Simplified to just doctor or patient row
}

interface TwoRowTimelineProps {
  steps: TimelineStep[];
  className?: string;
}

const getRowStyles = (row: TimelineStep['row']) => {
  if (row === 'doctor') {
    return {
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconBg: 'bg-blue-500',
      iconColor: 'text-white',
      lineColor: '#3b82f6',
    };
  } else {
    return {
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconBg: 'bg-green-500',
      iconColor: 'text-white',
      lineColor: '#22c55e',
    };
  }
};

export const TwoRowTimeline = ({ steps, className = '' }: TwoRowTimelineProps) => {
  const StepCard = ({
    step,
    index,
    delay,
    position
  }: {
    step: TimelineStep;
    index: number;
    delay: number;
    position: { gridColumn: number; gridRow: number };
  }) => {
    const styles = getRowStyles(step.row);
    const Icon = step.icon;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ scale: 1.05, y: -5 }}
        className={clsx(
          'relative p-4 rounded-xl border-2 shadow-lg transition-all duration-300',
          styles.bgColor,
          styles.borderColor
        )}
        style={{
          gridColumn: position.gridColumn,
          gridRow: position.gridRow,
        }}
      >
        {/* Step Number */}
        <div className={clsx('absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg', styles.iconBg)}>
          {index + 1}
        </div>

        {/* Icon */}
        <div className={clsx('w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto', styles.iconBg)}>
          <Icon className={clsx('w-5 h-5', styles.iconColor)} />
        </div>

        {/* Content */}
        <h3 className="text-sm font-bold text-gray-800 mb-1 text-center">{step.title}</h3>
        <p className="text-xs text-gray-600 text-center leading-tight">{step.description}</p>
      </motion.div>
    );
  };

  // Calculate positions for each step
  const positions = steps.map((step, index) => {
    const column = index + 1;
    const row = step.row === 'doctor' ? 2 : 4; // Row 2 for doctor, row 4 for patient
    return { gridColumn: column, gridRow: row };
  });

  // Generate SVG path for connecting line
  const generatePath = () => {
    let path = '';
    steps.forEach((step, index) => {
      const x = (index * 100) / (steps.length - 1);
      const y = step.row === 'doctor' ? 25 : 75;

      if (index === 0) {
        path += `M ${x} ${y}`;
      } else {
        // Create smooth curve to next point
        const prevStep = steps[index - 1];
        const prevX = ((index - 1) * 100) / (steps.length - 1);
        const prevY = prevStep.row === 'doctor' ? 25 : 75;
        const midX = (prevX + x) / 2;

        path += ` Q ${midX} ${prevY}, ${midX} ${(prevY + y) / 2} Q ${midX} ${y}, ${x} ${y}`;
      }
    });
    return path;
  };

  return (
    <div className={clsx('relative', className)}>
      {/* Desktop Timeline - Two Labeled Rows */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Row Labels */}
          <div className="absolute left-0 top-0 -translate-x-20 flex flex-col justify-around h-full">
            <div className="flex items-center">
              <div className="bg-blue-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                Médico
              </div>
            </div>
            <div className="flex items-center mt-32">
              <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                Paciente
              </div>
            </div>
          </div>

          {/* Grid Container */}
          <div
            className="relative grid gap-4"
            style={{
              gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
              gridTemplateRows: 'auto 3rem auto 3rem auto',
            }}
          >
            {/* Steps */}
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                delay={index * 0.1}
                position={positions[index]}
              />
            ))}

            {/* Connecting Line SVG */}
            <motion.svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ gridColumn: '1 / -1', gridRow: '1 / -1' }}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.path
                d={generatePath()}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="0.4"
                strokeDasharray="2 2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
        </div>
      </div>

      {/* Mobile Timeline - Single Column */}
      <div className="lg:hidden space-y-3">
        {steps.map((step, index) => {
          const styles = getRowStyles(step.row);
          const isLast = index === steps.length - 1;

          return (
            <div key={index} className="relative">
              <StepCard
                step={step}
                index={index}
                delay={index * 0.1}
                position={{ gridColumn: 1, gridRow: 1 }}
              />

              {/* Vertical Arrow */}
              {!isLast && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  className="flex justify-center my-2"
                >
                  <ArrowDown className="w-5 h-5" style={{ color: styles.lineColor }} />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
