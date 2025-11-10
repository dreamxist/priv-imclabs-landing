import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  userType: 'doctor' | 'patient';
  avatar?: string;
  quote: string;
  location?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoplayDelay?: number;
  className?: string;
}

export const TestimonialCarousel = ({
  testimonials,
  autoplayDelay = 5000,
  className = ''
}: TestimonialCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
    },
    [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const getUserTypeColor = (userType: 'doctor' | 'patient') => {
    return userType === 'doctor' ? 'blue' : 'green';
  };

  return (
    <div className={clsx('relative', className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial) => {
            const color = getUserTypeColor(testimonial.userType);

            return (
              <div
                key={testimonial.id}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={clsx(
                    'relative bg-white/90 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg hover:shadow-2xl h-full flex flex-col border-2',
                    color === 'blue'
                      ? 'border-blue-200/50 hover:border-blue-300'
                      : 'border-green-200/50 hover:border-green-300',
                    'transition-all duration-300'
                  )}
                >
                  {/* Decorative gradient corner */}
                  <div className={clsx(
                    'absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-10',
                    color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-gradient-to-br from-green-500 to-green-600'
                  )}></div>

                  {/* Header con badge y rating */}
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <span className={clsx(
                      'px-3 py-1 rounded-full text-xs font-semibold shadow-sm',
                      color === 'blue' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
                    )}>
                      {testimonial.userType === 'doctor' ? '👨‍⚕️ Médico' : '👤 Paciente'}
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className={clsx(
                    'w-8 h-8 rounded-lg flex items-center justify-center mb-2',
                    color === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                  )}>
                    <Quote className={clsx(
                      'w-4 h-4',
                      color === 'blue' ? 'text-blue-600' : 'text-green-600'
                    )} />
                  </div>

                  {/* Quote Text */}
                  <p className="text-xs md:text-sm text-gray-700 mb-4 leading-relaxed flex-grow line-clamp-5 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info - Compacto */}
                  <div className="flex items-center gap-3 pt-3 border-t-2 border-gray-100">
                    <div className={clsx(
                      'w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md',
                      color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-gradient-to-br from-green-500 to-green-600'
                    )}>
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        testimonial.name.charAt(0)
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="font-bold text-gray-800 text-sm md:text-base truncate">{testimonial.name}</p>
                      <p className="text-xs text-gray-600 truncate">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <motion.button
        onClick={scrollPrev}
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 md:p-3 shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 border-2 border-gray-100 hover:border-purple-200 z-10 group"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-purple-600 transition-colors" />
      </motion.button>

      <motion.button
        onClick={scrollNext}
        whileHover={{ scale: 1.1, x: 3 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 md:p-3 shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 border-2 border-gray-100 hover:border-purple-200 z-10 group"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-purple-600 transition-colors" />
      </motion.button>
    </div>
  );
};
