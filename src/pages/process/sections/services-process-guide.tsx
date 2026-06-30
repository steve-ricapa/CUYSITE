import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ServicesProcessGuide() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelector('.guide-content'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' },
        },
      )
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="section-shell">
      <div className="container-shell">
        <div className="guide-content mx-auto max-w-2xl text-center">
          <h3 className="text-2xl font-bold sm:text-3xl" style={{ color: 'var(--text)' }}>
            Un proceso guiado de principio a fin
          </h3>
          <p className="mt-5 text-base leading-7" style={{ color: 'var(--text-soft)' }}>
            No importa si ya tienes una idea muy definida o si recién estás comenzando. En cada etapa te acompañamos con recomendaciones y propuestas para que el desarrollo del proyecto sea claro, ordenado y sin complicaciones.
          </p>
        </div>
      </div>
    </section>
  )
}
