import { useCallback, useEffect } from 'react';
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
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={clsx(
                    'relative bg-white rounded-2xl p-8 shadow-lg border-2 h-full',
                    color === 'blue' ? 'border-blue-100 hover:border-blue-200' : 'border-green-100 hover:border-green-200',
                    'transition-all duration-300'
                  )}
                >
                  {/* Quote Icon */}
                  <div className={clsx(
                    'absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg',
                    color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                  )}>
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* User Type Badge */}
                  <div className={clsx(
                    'absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-bold text-white',
                    color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                  )}>
                    {testimonial.userType === 'doctor' ? 'Médico' : 'Paciente'}
                  </div>

                  {/* Quote Text */}
                  <p className="text-gray-700 italic mb-6 mt-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mt-auto">
                    {/* Avatar */}
                    <div className={clsx(
                      'w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg',
                      color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-600' : 'bg-gradient-to-br from-green-400 to-green-600'
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

                    {/* Name & Role */}
                    <div>
                      <p className="font-bold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      {testimonial.location && (
                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
};
