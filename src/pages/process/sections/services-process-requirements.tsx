import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Lightbulb, Image, Bookmark } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const items = [
  {
    icon: Lightbulb,
    title: 'Tu proyecto',
    desc: 'Cuéntanos qué haces, qué ofreces y cuál es el objetivo principal de tu página.',
  },
  {
    icon: Image,
    title: 'Información e imágenes',
    desc: 'Logo, fotografías, textos, datos de contacto o cualquier material que desees incluir.',
  },
  {
    icon: Bookmark,
    title: 'Referencias (Opcional)',
    desc: 'Si tienes páginas web cuyos estilos te gusten, podemos tomarlas como inspiración para definir la dirección visual.',
  },
]

export function ServicesProcessRequirements() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      const cards = el.querySelectorAll('.req-card')
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' },
          },
        )
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-shell" style={{ background: 'var(--surface)' }}>
      <div className="container-shell">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em]" style={{ color: 'var(--text-soft)' }}>
              Para empezar
            </p>
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl" style={{ color: 'var(--text)' }}>
              ¿Qué necesitaremos para comenzar?
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="req-card rounded-2xl border p-6 shadow-sm"
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
                  <h4 className="mt-4 text-lg font-semibold" style={{ color: 'var(--text)' }}>
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
