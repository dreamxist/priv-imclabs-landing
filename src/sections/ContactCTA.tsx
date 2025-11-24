import { useState } from 'react'
import { Container } from '../components/Container'
import { AnimatedSection } from '../components/AnimatedSection'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

interface FormData {
  name: string
  email: string
  message: string
}

export const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nuevo contacto desde landing: ${formData.name}`,
          from_name: 'Landing IMClabs',
          replyto: formData.email,
        })
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' })
          setIsSubmitted(false)
        }, 3000)
      } else {
        console.error('Error:', data)
        alert('Error al enviar. Intenta de nuevo.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error al enviar. Intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.message

  return (
    <section id="contact" className="snap-start snap-always relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-72px)] flex items-center py-12 md:py-20 bg-white overflow-hidden">
      <Container size="md" className="w-full relative z-10">
        <AnimatedSection className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            ¿Listo para <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">comenzar</span>?
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Contáctanos y transforma tu práctica médica
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <Card variant="neu" className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <div className="text-center py-12 animate-scale-in">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Mensaje Enviado!</h3>
                <p className="text-gray-600">Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors duration-200 bg-white shadow-neu-inset"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors duration-200 bg-white shadow-neu-inset"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors duration-200 bg-white shadow-neu-inset resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={!isFormValid || isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Info */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-2">O escríbenos directamente a:</p>
            <a
              href="mailto:contacto@imclabs.com"
              className="text-primary hover:text-primary font-semibold text-lg transition-colors duration-200"
            >
              contacto@imclabs.com
            </a>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
