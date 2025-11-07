import { motion } from 'framer-motion'
import { clsx } from 'clsx'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'accent' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary shadow-lg hover:shadow-xl',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-accent shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const disabledStyles = 'opacity-50 cursor-not-allowed'

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabled && disabledStyles,
        className
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}
