import { useScrollReveal } from '../hooks/useScrollReveal'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale'
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
}) => {
  const { elementRef, isVisible } = useScrollReveal()

  const animationClass = {
    'fade-up': 'scroll-reveal',
    'fade-left': 'scroll-reveal-left',
    'fade-right': 'scroll-reveal-right',
    'scale': 'scroll-reveal-scale',
  }[animation]

  // Map delay numbers to CSS class names
  const delayClass = delay > 0 ? `delay-${delay}` : ''

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`${animationClass} ${isVisible ? 'revealed' : ''} ${delayClass} ${className}`}
      style={delay > 0 && !delayClass ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
