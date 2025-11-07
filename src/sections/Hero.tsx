import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { AnimatedBackground } from '../components/AnimatedBackground'
import webAppImage from '../assets/images/app-image/web.png'
import mobileAppImage from '../assets/images/app-image/mobile.png'

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="mixed" />

      <Container className="relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm"
            >
              🧬 Machine Learning + Salud Personalizada
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6"
            >
              Acercando la{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Receta Magistral</span>
              <br />
              a toda la Población
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Obtén la receta magistral que tu paciente necesita con{' '}
              <span className="font-semibold text-accent">3 simples clics</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="primary" size="lg" onClick={scrollToContact}>
                Comenzar Ahora
              </Button>
              <Button variant="outline" size="lg" onClick={() => {
                const element = document.getElementById('how-it-works')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}>
                Ver Cómo Funciona
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - App Screenshots */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full"
          >
            {/* Web App Screenshot */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-0 left-0 right-0 z-10"
            >
              <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 md:border-4 border-white">
                <img
                  src={webAppImage}
                  alt="IMCLABS Web Platform"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Mobile App Screenshot */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="absolute bottom-0 right-0 w-2/5 sm:w-1/3 lg:w-2/5 z-20"
            >
              <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 md:border-4 border-white">
                <img
                  src={mobileAppImage}
                  alt="IMCLABS Mobile App"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Decorative glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
