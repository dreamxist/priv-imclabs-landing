import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import clsx from 'clsx'

export interface StatCardProps {
  icon: LucideIcon
  value: string
  label: string
  description?: string
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'indigo' | 'red'
  delay?: number
  trend?: 'up' | 'down' | 'neutral'
}

const colorConfig = {
  blue: {
    gradient: 'from-blue-500 to-blue-600',
    light: 'from-blue-50 to-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-200',
    shadow: 'shadow-blue-200'
  },
  green: {
    gradient: 'from-green-500 to-green-600',
    light: 'from-green-50 to-green-100',
    text: 'text-green-600',
    border: 'border-green-200',
    shadow: 'shadow-green-200'
  },
  purple: {
    gradient: 'from-purple-500 to-purple-600',
    light: 'from-purple-50 to-purple-100',
    text: 'text-purple-600',
    border: 'border-purple-200',
    shadow: 'shadow-purple-200'
  },
  orange: {
    gradient: 'from-orange-500 to-orange-600',
    light: 'from-orange-50 to-orange-100',
    text: 'text-orange-600',
    border: 'border-orange-200',
    shadow: 'shadow-orange-200'
  },
  indigo: {
    gradient: 'from-indigo-500 to-indigo-600',
    light: 'from-indigo-50 to-indigo-100',
    text: 'text-indigo-600',
    border: 'border-indigo-200',
    shadow: 'shadow-indigo-200'
  },
  red: {
    gradient: 'from-red-500 to-red-600',
    light: 'from-red-50 to-red-100',
    text: 'text-red-600',
    border: 'border-red-200',
    shadow: 'shadow-red-200'
  }
}

export const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  value,
  label,
  description,
  color = 'blue',
  delay = 0,
  trend = 'neutral'
}) => {
  const colors = colorConfig[color]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
      whileHover={{ scale: 1.05, y: -8 }}
      className={clsx(
        "relative bg-white rounded-2xl p-5 md:p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl overflow-hidden",
        colors.border,
        colors.shadow
      )}
    >
      {/* Background Gradient */}
      <div className={clsx(
        "absolute inset-0 bg-gradient-to-br opacity-5",
        colors.light
      )} />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delay + 0.1,
            type: "spring",
            stiffness: 200
          }}
          className="mb-3"
        >
          <div className={clsx(
            "w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br shadow-md flex items-center justify-center",
            colors.gradient
          )}>
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2.5} />
          </div>
        </motion.div>

        {/* Value */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delay + 0.2,
            type: "spring",
            stiffness: 150
          }}
          className={clsx(
            "text-3xl md:text-4xl font-bold mb-1",
            colors.text
          )}
        >
          {value}
        </motion.div>

        {/* Label */}
        <div className="text-sm md:text-base font-semibold text-gray-700 mb-1">
          {label}
        </div>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + 0.3 }}
            className="text-xs md:text-sm text-gray-500 leading-snug"
          >
            {description}
          </motion.p>
        )}

        {/* Trend Indicator */}
        {trend !== 'neutral' && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + 0.4 }}
            className={clsx(
              "absolute top-5 right-5 w-2 h-2 rounded-full",
              trend === 'up' ? 'bg-green-500' : 'bg-red-500'
            )}
          />
        )}
      </div>

      {/* Decorative Corner */}
      <div className={clsx(
        "absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br opacity-10 blur-2xl",
        colors.gradient
      )} />
    </motion.div>
  )
}
