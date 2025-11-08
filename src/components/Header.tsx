import { Button } from './Button'
import { Container } from './Container'
import logoImg from '../assets/images/logoimc.png'

export const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">

      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src={logoImg}
              alt="IMCLABS Logo"
              className="h-12 w-auto"
            />
          </div>

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
    </header>
  )
}
