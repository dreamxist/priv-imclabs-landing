import { motion } from 'framer-motion'
import { clsx } from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'neu' | 'flat' | 'elevated'
  hover?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'neu',
  hover = true,
}) => {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-200'

  const variantStyles = {
    neu: 'bg-gray-100 shadow-neu',
    flat: 'bg-white',
    elevated: 'bg-white shadow-lg',
  }

  const hoverStyles = hover && variant === 'neu'
    ? 'hover:shadow-neu-hover transform hover:-translate-y-1'
    : hover
    ? 'hover:shadow-xl transform hover:-translate-y-1'
    : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        hoverStyles,
        className
      )}
    >
      {children}
    </motion.div>
  )
}
