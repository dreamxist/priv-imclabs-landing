import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface TimelineStep {
  icon: LucideIcon;
  title: string;
  description: string;
  userType: 'doctor' | 'patient' | 'system';
  iconBgColor?: string;
  iconColor?: string;
}

interface TimelineFlowProps {
  steps: TimelineStep[];
  className?: string;
}

const getUserTypeStyles = (userType: TimelineStep['userType']) => {
  switch (userType) {
    case 'doctor':
      return {
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        iconBg: 'bg-blue-500',
        iconColor: 'text-white',
        badgeBg: 'bg-blue-500',
        badgeText: 'Médico',
      };
    case 'patient':
      return {
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        iconBg: 'bg-green-500',
        iconColor: 'text-white',
        badgeBg: 'bg-green-500',
        badgeText: 'Paciente',
      };
    case 'system':
      return {
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        iconBg: 'bg-purple-500',
        iconColor: 'text-white',
        badgeBg: 'bg-purple-500',
        badgeText: 'Sistema',
      };
  }
};

export const TimelineFlow = ({ steps, className = '' }: TimelineFlowProps) => {
  return (
    <div className={clsx('relative', className)}>
      {/* Desktop Timeline - Horizontal */}
      <div className="hidden lg:block">
        <div className="relative flex items-center justify-between gap-4">
          {steps.map((step, index) => {
            const styles = getUserTypeStyles(step.userType);
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={index} className="relative flex items-center flex-1">
                {/* Step Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={clsx(
                    'relative w-full p-4 rounded-xl border-2 shadow-lg hover:shadow-xl transition-all duration-300',
                    styles.bgColor,
                    styles.borderColor
                  )}
                >
                  {/* User Type Badge */}
                  <div className={clsx('absolute -top-2 left-4 px-2 py-0.5 rounded-full text-[10px] font-bold text-white', styles.badgeBg)}>
                    {styles.badgeText}
                  </div>

                  {/* Icon */}
                  <div className={clsx('w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto', styles.iconBg)}>
                    <Icon className={clsx('w-5 h-5', styles.iconColor)} />
                  </div>

                  {/* Content */}
                  <h3 className="text-sm font-bold text-gray-800 mb-1 text-center">{step.title}</h3>
                  <p className="text-xs text-gray-600 text-center leading-tight">{step.description}</p>
                </motion.div>

                {/* Arrow Connector */}
                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    className="flex-shrink-0 mx-2"
                  >
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Timeline - Vertical */}
      <div className="lg:hidden space-y-3">
        {steps.map((step, index) => {
          const styles = getUserTypeStyles(step.userType);
          const Icon = step.icon;
          const isLast = index === steps.length - 1;

          return (
            <div key={index} className="relative">
              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={clsx(
                  'relative p-3 rounded-xl border-2 shadow-lg',
                  styles.bgColor,
                  styles.borderColor
                )}
              >
                {/* User Type Badge */}
                <div className={clsx('absolute -top-2 left-4 px-2 py-0.5 rounded-full text-[10px] font-bold text-white', styles.badgeBg)}>
                  {styles.badgeText}
                </div>

                <div className="flex items-start gap-3 mt-1">
                  {/* Icon */}
                  <div className={clsx('flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center', styles.iconBg)}>
                    <Icon className={clsx('w-5 h-5', styles.iconColor)} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-800 mb-1">{step.title}</h3>
                    <p className="text-xs text-gray-600 leading-tight">{step.description}</p>
                  </div>
                </div>
              </motion.div>

              {/* Vertical Arrow Connector */}
              {!isLast && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  className="flex justify-center my-2"
                >
                  <div className="w-0.5 h-6 bg-gradient-to-b from-gray-300 to-gray-200 rounded-full" />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
