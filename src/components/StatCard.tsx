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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.03, y: -2 }}
      className={clsx(
        "relative bg-white/80 backdrop-blur-sm rounded-lg p-2.5 md:p-3 shadow-sm border transition-all duration-300 hover:shadow-md overflow-hidden group",
        colors.border
      )}
    >
      {/* Background Gradient */}
      <div className={clsx(
        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300",
        colors.gradient
      )} />

      {/* Content - Horizontal layout */}
      <div className="relative z-10 flex items-center gap-2">
        {/* Icon */}
        <div className={clsx(
          "w-8 h-8 flex-shrink-0 rounded-md bg-gradient-to-br shadow-sm flex items-center justify-center",
          colors.gradient
        )}>
          <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
        </div>

        {/* Text content */}
        <div className="flex-grow min-w-0">
          <div className={clsx(
            "text-lg md:text-xl font-bold leading-none mb-0.5",
            colors.text
          )}>
            {value}
          </div>
          <div className="text-xs font-medium text-gray-600 truncate">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
