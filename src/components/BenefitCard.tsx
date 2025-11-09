import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import clsx from 'clsx'

export interface BenefitCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'indigo'
  delay?: number
  testimonial?: {
    name: string
    role: string
    quote: string
  }
}

const colorConfig = {
  blue: {
    bg: 'from-blue-50 to-blue-100',
    icon: 'bg-blue-500',
    text: 'text-blue-600',
    border: 'border-blue-200',
    badge: 'bg-blue-100 text-blue-700'
  },
  green: {
    bg: 'from-green-50 to-green-100',
    icon: 'bg-green-500',
    text: 'text-green-600',
    border: 'border-green-200',
    badge: 'bg-green-100 text-green-700'
  },
  purple: {
    bg: 'from-purple-50 to-purple-100',
    icon: 'bg-purple-500',
    text: 'text-purple-600',
    border: 'border-purple-200',
    badge: 'bg-purple-100 text-purple-700'
  },
  orange: {
    bg: 'from-orange-50 to-orange-100',
    icon: 'bg-orange-500',
    text: 'text-orange-600',
    border: 'border-orange-200',
    badge: 'bg-orange-100 text-orange-700'
  },
  indigo: {
    bg: 'from-indigo-50 to-indigo-100',
    icon: 'bg-indigo-500',
    text: 'text-indigo-600',
    border: 'border-indigo-200',
    badge: 'bg-indigo-100 text-indigo-700'
  }
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  icon: Icon,
  title,
  description,
  features = [],
  color = 'blue',
  delay = 0,
  testimonial
}) => {
  const colors = colorConfig[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={clsx(
        "relative bg-white rounded-2xl p-4 md:p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl",
        colors.border
      )}
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: delay + 0.2,
          type: "spring",
          stiffness: 200
        }}
        className={clsx(
          "w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 shadow-md",
          colors.icon
        )}
      >
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
      </motion.div>

      {/* Title */}
      <h3 className={clsx("text-lg md:text-2xl font-bold mb-2 md:mb-3", colors.text)}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 text-xs md:text-base leading-relaxed mb-3 md:mb-4">
        {description}
      </p>

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: delay + 0.3 + (index * 0.1) }}
              className="flex items-start gap-2 text-xs md:text-sm text-gray-600"
            >
              <span className={clsx("mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0", colors.icon)} />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      )}

      {/* Testimonial */}
      {testimonial && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
          className={clsx(
            "mt-4 pt-4 border-t-2",
            colors.border
          )}
        >
          <p className="text-xs md:text-sm text-gray-600 italic mb-2">
            "{testimonial.quote}"
          </p>
          <div className="flex items-center gap-2">
            <div className={clsx(
              "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white",
              colors.icon
            )}>
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-xs text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hover Gradient Overlay */}
      <motion.div
        className={clsx(
          "absolute inset-0 rounded-2xl opacity-0 pointer-events-none bg-gradient-to-br transition-opacity duration-300",
          colors.bg
        )}
        whileHover={{ opacity: 0.05 }}
      />
    </motion.div>
  )
}
