import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = [
  { emoji: '🌐', label: 'Sitio web completamente publicado' },
  { emoji: '📱', label: 'Diseño adaptable a cualquier dispositivo' },
  { emoji: '⚡', label: 'Alto rendimiento y velocidad' },
  { emoji: '🔒', label: 'Configuración segura del sitio' },
  { emoji: '🌍', label: 'Dominio y hosting (según el proyecto)' },
  { emoji: '🔧', label: 'Soporte inicial después de la entrega' },
  { emoji: '📈', label: 'Preparado para buscadores (SEO básico)' },
  { emoji: '📞', label: 'WhatsApp y redes sociales integrados' },
]

export function ServicesProcessDeliverables() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      const cards = el.querySelectorAll('.deliverable-card')
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' },
          },
        )
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-shell relative overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 82% 14%, rgba(91, 46, 255, 0.06) 0%, transparent 22%), radial-gradient(circle at 16% 86%, rgba(34, 197, 94, 0.06) 0%, transparent 22%)',
      }}
    >
      <div className="container-shell">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em]" style={{ color: 'var(--text-soft)' }}>
              Resultado final
            </p>
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl" style={{ color: 'var(--text)' }}>
              ¿Qué recibirás al finalizar?
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <div
                key={item.label}
                className="deliverable-card rounded-2xl border p-5 text-center shadow-sm transition-shadow hover:shadow-md"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                }}
              >
                <span className="text-3xl">{item.emoji}</span>
                <p className="mt-3 text-sm font-semibold leading-6" style={{ color: 'var(--text)' }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
