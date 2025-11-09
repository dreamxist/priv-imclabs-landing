import { useState } from 'react'
import { Button } from './Button'
import { Container } from './Container'
import logoImg from '../assets/images/logoimc.png'
import { X, Menu } from 'lucide-react'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Close menu after navigation
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <Container>
        <nav className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src={logoImg}
              alt="IMCLABS Logo"
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm lg:text-base"
            >
              Qué hacemos
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm lg:text-base"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm lg:text-base"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm lg:text-base"
            >
              Testimonios
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
            className="md:hidden text-gray-700 focus:outline-none p-2"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-3 border-t border-gray-200">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200 font-medium rounded-lg"
            >
              Qué hacemos
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200 font-medium rounded-lg"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200 font-medium rounded-lg"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200 font-medium rounded-lg"
            >
              Testimonios
            </button>
            <div className="px-4 pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection('contact')}
                className="w-full"
              >
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
