import { clsx } from 'clsx'

interface IconWrapperProps {
  children: React.ReactNode
  variant?: 'primary' | 'accent' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
}) => {
  const baseStyles = 'rounded-full flex items-center justify-center shadow-neu'

  const variantStyles = {
    primary: 'bg-gradient-to-br from-primary/70 to-primary text-primary-foreground',
    accent: 'bg-gradient-to-br from-accent to-accent/80 text-accent-foreground',
    neutral: 'bg-gray-100 text-gray-700',
  }

  const sizeStyles = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-14 h-14 text-2xl',
    lg: 'w-20 h-20 text-3xl',
  }

  return (
    <div className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}>
      {children}
    </div>
  )
}
