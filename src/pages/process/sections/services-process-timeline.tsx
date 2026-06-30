import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { emoji: '💬', label: 'Descubrimiento' },
  { emoji: '📝', label: 'Planificación' },
  { emoji: '🎨', label: 'Diseño' },
  { emoji: '💻', label: 'Desarrollo' },
  { emoji: '🚀', label: 'Publicación' },
]

export function ServicesProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const dotsRef = useRef<(HTMLDivElement | null)[]>([])
  const linesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return
        ScrollTrigger.create({
          trigger: dot,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(dot, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)' })
            gsap.to(dot.querySelector('.dot-glow'), { opacity: 1, scale: 1, duration: 0.6 })
            gsap.to(dot.querySelector('.dot-circle'), {
              backgroundColor: 'var(--primary)',
              borderColor: 'var(--primary)',
              duration: 0.4,
            })
            if (i > 0) {
              const line = linesRef.current[i - 1]
              if (line) gsap.to(line, { scaleX: 1, duration: 0.5, ease: 'power2.out', transformOrigin: 'left center' })
            }
          },
        })
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-shell" style={{ background: 'var(--surface)' }}>
      <div className="container-shell">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-1 flex-col items-center">
                <div
                  ref={el => { dotsRef.current[i] = el }}
                  className="relative flex flex-col items-center"
                >
                  <div
                    className="dot-glow absolute -inset-2 rounded-full opacity-0"
                    style={{
                      background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
                      filter: 'blur(8px)',
                    }}
                  />
                  <div
                    className="dot-circle relative flex h-12 w-12 items-center justify-center rounded-full border-2"
                    style={{
                      backgroundColor: 'var(--surface)',
                      borderColor: 'var(--border)',
                      transform: 'scale(0.8)',
                      opacity: 0.5,
                    }}
                  >
                    <span className="text-xl">{step.emoji}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="absolute left-full top-1/2 hidden sm:block"
                      style={{
                        height: 2,
                        width: 'calc(100% + 2rem)',
                      }}
                    >
                      <div
                        ref={el => { linesRef.current[i] = el }}
                        className="h-full"
                        style={{
                          backgroundColor: 'var(--border)',
                          transform: 'scaleX(0)',
                          transformOrigin: 'left center',
                        }}
                      />
                    </div>
                  )}
                </div>
                <p className="mt-3 text-center text-xs font-semibold sm:text-sm" style={{ color: 'var(--text-soft)' }}>
                  {step.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <p className="text-xs" style={{ color: 'var(--text-soft)' }}>
              💬 Descubrimiento → 📝 Planificación → 🎨 Diseño → 💻 Desarrollo → 🚀 Publicación
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
