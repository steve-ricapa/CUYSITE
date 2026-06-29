import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import {
  MotionHover,
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from '../../../components/motion/motion-primitives'
import { frontendTechItems } from '../../../content/site-content'

const LiquidEther = lazy(() => import('../../../components/ui/liquid-ether'))

const developmentHighlights = ['Rapido', 'Escalable', 'Facil de mantener']

export function TechTrustSection() {
  const [shouldRenderBackground, setShouldRenderBackground] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node || shouldRenderBackground) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShouldRenderBackground(true)
        observer.disconnect()
      },
      { rootMargin: '240px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [shouldRenderBackground])

  return (
    <section ref={sectionRef} className="section-shell relative overflow-hidden" style={{ background: 'var(--surface-muted)' }}>
      <div className="absolute inset-0 opacity-95" aria-hidden="true">
        {shouldRenderBackground ? (
          <Suspense fallback={null}>
            <LiquidEther
              colors={['#644bd2', '#a89bff', '#b497cf']}
              mouseForce={16}
              cursorSize={80}
              isViscous
              viscous={24}
              iterationsViscous={24}
              iterationsPoisson={20}
              autoDemo
              autoSpeed={0.38}
              autoIntensity={1.6}
              isBounce={false}
              resolution={0.35}
            />
          </Suspense>
        ) : null}
      </div>

      <div className="container-shell relative z-10">
        <MotionReveal>
          <div className="flex flex-col gap-8">
            <div className="grid max-w-none gap-5 lg:w-full lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-4">
              <div className="max-w-2xl">
                <p className="eyebrow">Tecnologia real</p>
                <h2 className="headline-lg mt-6 max-w-xl text-balance">Tecnologias de desarrollo.</h2>
                <p className="body-lg mt-5 max-w-2xl text-pretty">
                  HTML, CSS, JavaScript, TypeScript y React forman la base del sitio para que cargue rapido, se vea limpio y sea facil de mantener cuando tu negocio crezca.
                </p>
              </div>

              <div className="flex justify-start lg:justify-end lg:pt-14 xl:-translate-x-3 2xl:-translate-x-4">
                <img
                  src="/assets/cuy-designer.png"
                  alt="Cuy Designer"
                  className="h-[11.7rem] w-auto object-contain sm:h-[14.04rem] lg:h-[16.38rem]"
                  loading="lazy"
                />
              </div>
            </div>

            <MotionStagger className="mt-2 flex flex-wrap gap-3 lg:flex-nowrap">
              {developmentHighlights.map((item) => (
                <MotionStaggerItem key={item}>
                  <div
                    className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold"
                    style={{
                      background: 'var(--surface)',
                      borderColor: 'var(--border)',
                      color: 'var(--primary)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    {item}
                  </div>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        </MotionReveal>

        <MotionReveal>
          <div
            className="mt-12 rounded-[1.75rem] border p-4 sm:p-5"
            style={{
              background: 'var(--surface-tint)',
              borderColor: 'var(--border-strong)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <MotionStagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {frontendTechItems.map(({ name, iconUrl, title, description, icon: Icon }) => (
                <MotionStaggerItem key={title}>
                  <MotionHover className="h-full">
                    <div
                      className="flex h-full flex-col gap-4 rounded-[1.25rem] border px-5 py-5 text-left"
                      style={{
                        background: 'var(--surface)',
                        borderColor: 'var(--border)',
                        boxShadow: 'var(--shadow-sm)',
                      }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                          {iconUrl ? (
                            <img src={iconUrl} alt={name} className="h-7 w-7 object-contain" loading="lazy" />
                          ) : Icon ? (
                            <Icon className="h-7 w-7 text-[var(--secondary)]" />
                          ) : null}
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--secondary)' }}>
                          Frontend
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-semibold leading-tight text-balance" style={{ color: 'var(--primary)' }}>
                          {title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-pretty" style={{ color: 'var(--text-soft)' }}>
                          {description}
                        </p>
                      </div>
                    </div>
                  </MotionHover>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
