import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageCircle, ClipboardList, Palette, Code, CheckCircle, Rocket } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    title: 'Conocemos tu proyecto',
    desc: 'Todo comienza con una conversación. Queremos entender tu negocio, marca personal o idea para conocer tus objetivos, tu público y lo que deseas transmitir.',
    icon: MessageCircle,
    accent: '#5b2eff',
  },
  {
    number: '02',
    title: 'Planificamos la solución',
    desc: 'Organizamos la estructura de la página, definimos sus secciones, funcionalidades y el contenido necesario para que la experiencia sea clara y efectiva.',
    icon: ClipboardList,
    accent: '#0891b2',
  },
  {
    number: '03',
    title: 'Diseñamos la experiencia',
    desc: 'Creamos una propuesta visual moderna, intuitiva y alineada con tu identidad, cuidando tanto la estética como la facilidad de uso.',
    icon: Palette,
    accent: '#7c3aed',
  },
  {
    number: '04',
    title: 'Desarrollamos tu sitio',
    desc: 'Construimos la página utilizando tecnologías actuales para ofrecer un sitio rápido, seguro y adaptable a computadoras, tablets y celulares.',
    icon: Code,
    accent: '#d97706',
  },
  {
    number: '05',
    title: 'Revisamos cada detalle',
    desc: 'Antes de publicar realizamos pruebas, revisamos el funcionamiento completo y realizamos los ajustes necesarios junto contigo.',
    icon: CheckCircle,
    accent: '#059669',
  },
  {
    number: '06',
    title: 'Publicamos y acompañamos',
    desc: 'Una vez aprobado el proyecto, ponemos tu sitio en línea y verificamos que todo funcione correctamente para que puedas compartirlo con confianza.',
    icon: Rocket,
    accent: '#e11d48',
  },
]

export function ServicesProcessSteps() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    const line = lineRef.current
    if (!section || !line) return

    const ctx = gsap.context(() => {
      gsap.set(line, { scaleY: 0 })
      gsap.to(line, {
        scaleY: 1,
        transformOrigin: 'top center',
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom 15%',
          scrub: 1,
        },
      })

      cardsRef.current.forEach((card, i) => {
        if (!card) return
        const direction = i % 2 === 0 ? -1 : 1
        gsap.fromTo(
          card,
          { opacity: 0, x: direction * 80, y: 40 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        )
        const numberEl = card.querySelector('.step-number')
        if (numberEl) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top 75%',
            onEnter: () => {
              gsap.to(numberEl, {
                color: 'var(--primary)',
                duration: 0.4,
              })
            },
            onLeaveBack: () => {
              gsap.to(numberEl, {
                color: 'var(--text-soft)',
                duration: 0.4,
              })
            },
          })
        }
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-shell relative overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 12% 18%, rgba(91, 46, 255, 0.06) 0%, transparent 28%), radial-gradient(circle at 88% 84%, rgba(217, 132, 38, 0.06) 0%, transparent 26%)',
      }}
    >
      <div className="container-shell">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em]" style={{ color: 'var(--text-soft)' }}>
              Paso a paso
            </p>
            <h3 className="mt-3 text-3xl font-bold sm:text-4xl" style={{ color: 'var(--text)' }}>
              Cómo trabajamos cada proyecto
            </h3>
          </div>

          <div className="relative">
            <div
              ref={lineRef}
              className="absolute left-6 top-0 hidden h-full w-0.5 sm:block lg:left-1/2 lg:-translate-x-1/2"
              style={{ backgroundColor: 'var(--border)' }}
            />

            <div className="space-y-12 sm:space-y-16">
              {steps.map((step, i) => {
                const isLeft = i % 2 === 0
                const Icon = step.icon
                return (
                  <div
                    key={step.number}
                    ref={el => { cardsRef.current[i] = el }}
                    className={`relative flex flex-col items-start sm:flex-row sm:items-center ${
                      isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div
                      className={`relative z-10 sm:ml-16 sm:w-[calc(50%-2rem)] lg:ml-0 lg:w-1/2 ${
                        isLeft ? 'lg:pr-10 lg:text-right' : 'lg:pl-10'
                      }`}
                    >
                      <div
                        className="overflow-hidden rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md"
                        style={{
                          backgroundColor: 'var(--surface)',
                          borderColor: 'var(--border)',
                        }}
                      >
                        <div className="flex items-start gap-4" style={{ flexDirection: isLeft ? 'row' : 'row' }}>
                          <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                            style={{
                              backgroundColor: `${step.accent}18`,
                              color: step.accent,
                            }}
                          >
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span
                              className="step-number text-sm font-bold tracking-wider transition-colors duration-300"
                              style={{ color: 'var(--text-soft)' }}
                            >
                              {step.number}
                            </span>
                            <h4 className="mt-1 text-lg font-semibold" style={{ color: 'var(--text)' }}>
                              {step.title}
                            </h4>
                            <p className="mt-2 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute left-6 z-20 hidden h-5 w-5 -translate-x-1/2 rounded-full border-2 sm:block lg:left-1/2"
                      style={{
                        backgroundColor: 'var(--surface)',
                        borderColor: 'var(--border)',
                      }}
                    />

                    <div className="hidden w-1/2 lg:block" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
