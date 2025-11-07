import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from './Button'
import { Container } from './Container'
import logoImg from '../assets/images/logoimc.png'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src={logoImg}
              alt="IMCLABS Logo"
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Quiénes somos
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Qué hacemos
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Beneficios
            </button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Contáctanos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>
      </Container>
    </motion.header>
  )
}
