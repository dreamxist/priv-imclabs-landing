import { motion } from 'framer-motion'

interface AnimatedBackgroundProps {
  variant?: 'primary' | 'accent' | 'mixed'
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ variant = 'mixed' }) => {
  const variants = {
    primary: {
      gradient1: 'from-primary/20 via-primary/10 to-transparent',
      gradient2: 'from-primary/15 via-transparent to-primary/20',
    },
    accent: {
      gradient1: 'from-accent/20 via-accent-foreground/10 to-transparent',
      gradient2: 'from-accent-foreground/15 via-transparent to-accent/20',
    },
    mixed: {
      gradient1: 'from-primary/20 via-accent-foreground/10 to-transparent',
      gradient2: 'from-accent-foreground/15 via-primary/10 to-accent/20',
    },
  }

  const selected = variants[variant]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        className={`absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br ${selected.gradient1} blur-3xl`}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '10%', left: '10%' }}
      />

      <motion.div
        className={`absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br ${selected.gradient2} blur-3xl`}
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        style={{ bottom: '10%', right: '10%' }}
      />

      <motion.div
        className={`absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br ${selected.gradient1} blur-3xl opacity-50`}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        style={{ top: '50%', left: '50%' }}
      />

      {/* Animated particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/40 rounded-full"
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}
