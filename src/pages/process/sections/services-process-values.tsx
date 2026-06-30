import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageCircle, CalendarCheck, Target, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const items = [
  {
    icon: MessageCircle,
    title: 'Comunicación constante',
    desc: 'Te mantenemos informado durante todo el desarrollo, sin vueltas ni silencios.',
  },
  {
    icon: CalendarCheck,
    title: 'Cumplimos los tiempos acordados',
    desc: 'Cada etapa tiene una planificación clara con fechas realistas que respetamos.',
  },
  {
    icon: Target,
    title: 'Soluciones personalizadas',
    desc: 'Cada proyecto se adapta a las necesidades del cliente. Nada de plantillas genéricas.',
  },
  {
    icon: Sparkles,
    title: 'Atención al detalle',
    desc: 'Nos enfocamos en ofrecer un resultado profesional tanto en diseño como en funcionamiento.',
  },
]

export function ServicesProcessValues() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      const cards = el.querySelectorAll('.value-card')
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
    <section className="section-shell" style={{ background: 'var(--surface)' }}>
      <div className="container-shell">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em]" style={{ color: 'var(--text-soft)' }}>
              Nuestra forma de trabajar
            </p>
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl" style={{ color: 'var(--text)' }}>
              Cómo nos comprometemos con tu proyecto
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="value-card rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    backgroundColor: 'var(--surface-tint)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: 'rgba(91, 46, 255, 0.12)',
                      color: 'var(--primary)',
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-4 text-base font-semibold" style={{ color: 'var(--text)' }}>
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
