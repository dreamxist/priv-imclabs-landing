import { useEffect } from 'react'

export const useSmoothScroll = () => {
  useEffect(() => {
    const smoothScrollContainer = document.querySelector('main')
    if (!smoothScrollContainer) return

    let isScrolling = false
    let scrollTimeout: number

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault()
        return
      }

      const delta = e.deltaY
      const scrollThreshold = 50

      if (Math.abs(delta) > scrollThreshold) {
        e.preventDefault()
        isScrolling = true

        const sections = document.querySelectorAll('section')
        const currentScroll = smoothScrollContainer.scrollTop
        let targetSection: Element | null = null

        if (delta > 0) {
          // Scroll down
          for (let i = 0; i < sections.length; i++) {
            const section = sections[i]
            const sectionTop = (section as HTMLElement).offsetTop - 72
            if (sectionTop > currentScroll + 10) {
              targetSection = section
              break
            }
          }
        } else {
          // Scroll up
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i]
            const sectionTop = (section as HTMLElement).offsetTop - 72
            if (sectionTop < currentScroll - 10) {
              targetSection = section
              break
            }
          }
        }

        if (targetSection) {
          const targetPosition = (targetSection as HTMLElement).offsetTop - 72
          smoothScrollContainer.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          })
        }

        setTimeout(() => {
          isScrolling = false
        }, 1500) // Aumentar el tiempo de cooldown para hacer más lento
      }
    }

    const handleScrollEnd = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        isScrolling = false
      }, 100)
    }

    smoothScrollContainer.addEventListener('wheel', handleWheel, { passive: false })
    smoothScrollContainer.addEventListener('scroll', handleScrollEnd)

    return () => {
      smoothScrollContainer.removeEventListener('wheel', handleWheel)
      smoothScrollContainer.removeEventListener('scroll', handleScrollEnd)
      clearTimeout(scrollTimeout)
    }
  }, [])
}
