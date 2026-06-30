import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { LucideIcon } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type ServiceItem = {
  title: string
  description: string
  icon: LucideIcon
  image: string
  gradient: string
  iconBg: string
}

const glowBackgrounds = [
  'radial-gradient(circle at center, rgba(96, 165, 250, 0.28) 0%, rgba(59, 130, 246, 0.14) 38%, rgba(59, 130, 246, 0) 74%)',
  'radial-gradient(circle at center, rgba(45, 212, 191, 0.28) 0%, rgba(20, 184, 166, 0.14) 38%, rgba(20, 184, 166, 0) 74%)',
  'radial-gradient(circle at center, rgba(167, 139, 250, 0.28) 0%, rgba(139, 92, 246, 0.14) 38%, rgba(139, 92, 246, 0) 74%)',
  'radial-gradient(circle at center, rgba(244, 114, 182, 0.28) 0%, rgba(236, 72, 153, 0.14) 38%, rgba(236, 72, 153, 0) 74%)',
  'radial-gradient(circle at center, rgba(251, 191, 36, 0.28) 0%, rgba(245, 158, 11, 0.14) 38%, rgba(245, 158, 11, 0) 74%)',
  'radial-gradient(circle at center, rgba(74, 222, 128, 0.28) 0%, rgba(34, 197, 94, 0.14) 38%, rgba(34, 197, 94, 0) 74%)',
]

export function ServicesShowcaseSection({ services }: { services: ServiceItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const previewCardRef = useRef<HTMLDivElement>(null)
  const previewImageRef = useRef<HTMLImageElement>(null)
  const previewCopyRef = useRef<HTMLDivElement>(null)
  const previewGlowRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!items.length) return

    const ctx = gsap.context(() => {
      const triggers = items.map((item, index) =>
        ScrollTrigger.create({
          trigger: item,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        }),
      )

      return () => {
        triggers.forEach(trigger => trigger.kill())
      }
    })

    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    const previewCard = previewCardRef.current
    const previewImage = previewImageRef.current
    const previewCopy = previewCopyRef.current
    const previewGlow = previewGlowRef.current

    if (!previewCard || !previewImage || !previewCopy || !previewGlow) return

    const previewImageScale = activeIndex === 1 ? 1.12 : activeIndex === 3 ? 1.7 : activeIndex === 5 ? 1.42 : 1

    const ctx = gsap.context(() => {
      gsap.fromTo(
        previewCard,
        { y: 22, autoAlpha: 0.82 },
        { y: 0, autoAlpha: 1, duration: 0.45, ease: 'power2.out', overwrite: true },
      )
      gsap.fromTo(
        previewImage,
        { scale: Math.max(0.92, previewImageScale - 0.08), autoAlpha: 0.78 },
        { scale: previewImageScale, autoAlpha: 1, duration: 0.55, ease: 'power2.out', overwrite: true },
      )
      gsap.fromTo(
        previewCopy,
        { y: 16, autoAlpha: 0.82 },
        { y: 0, autoAlpha: 1, duration: 0.42, ease: 'power2.out', overwrite: true },
      )
      gsap.fromTo(
        previewGlow,
        { scale: 0.8, autoAlpha: 0.4 },
        { scale: 1, autoAlpha: 1, duration: 0.6, ease: 'power2.out', overwrite: true },
      )
    })

    return () => ctx.revert()
  }, [activeIndex])

  const activeService = services[activeIndex]
  const activeGlow = glowBackgrounds[activeIndex % glowBackgrounds.length]
  const previewFramePaddingClassName = activeIndex === 3 ? 'p-1 lg:p-2' : 'p-6'
  const previewFrameClassName = activeIndex === 4 ? 'bg-transparent' : activeService.gradient
  const previewInnerFrameClassName = activeIndex === 4 ? 'h-full w-full overflow-hidden rounded-[2rem]' : 'h-full w-full'
  const previewImageClassName = activeIndex === 4 ? 'h-full w-full rounded-[2rem] object-cover' : 'h-full w-full object-contain'
  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(26rem,1.08fr)] lg:gap-12">
      <div className="space-y-6">
        {services.map(({ title, description, icon: Icon, iconBg }, index) => {
          const isActive = index === activeIndex

          return (
            <div
              key={title}
              ref={node => {
                itemRefs.current[index] = node
              }}
              className="min-h-[46vh] lg:min-h-[54vh]"
            >
              <div
                className={`relative overflow-hidden rounded-[2rem] border p-6 transition-all duration-300 lg:p-8 ${
                  isActive ? 'shadow-2xl shadow-[rgba(91,46,255,0.12)]' : 'shadow-sm'
                }`}
                style={{
                  background: isActive ? 'var(--surface-tint)' : 'var(--surface)',
                  borderColor: isActive ? 'var(--secondary-light)' : 'var(--border)',
                  boxShadow: isActive ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                }}
              >
                <div
                  className={`absolute inset-y-0 left-0 w-1 rounded-full transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                  style={{ background: 'linear-gradient(180deg, var(--secondary-light) 0%, var(--secondary) 100%)' }}
                />
                <div className="relative flex items-start gap-4 lg:gap-5">
                  <div className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${iconBg}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-soft)]">
                        Servicio {String(index + 1).padStart(2, '0')}
                      </span>
                      {isActive ? (
                        <span className="rounded-full border border-[var(--secondary-light)]/35 bg-[var(--secondary-glow)] px-3 py-1 text-[11px] font-semibold text-[var(--secondary-strong)] dark:text-[var(--secondary-light)]">
                          Activo
                        </span>
                      ) : null}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em]" style={{ color: 'var(--text)' }}>
                      {title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 lg:text-base" style={{ color: 'var(--text-soft)' }}>
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="lg:sticky lg:top-28 lg:h-[calc(100vh-8rem)]">
        <div
          ref={previewCardRef}
          className="relative overflow-hidden rounded-[2rem] border p-6 lg:flex lg:h-full lg:flex-col lg:gap-6 lg:p-8"
          style={{ background: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-md)' }}
        >
          <div
            ref={previewGlowRef}
            className="pointer-events-none absolute inset-x-[8%] top-[8%] h-[50%] rounded-full blur-3xl"
            style={{ background: activeGlow }}
          />

          <div ref={previewCopyRef} className="relative z-10 max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">Vista destacada</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] lg:text-4xl" style={{ color: 'var(--text)' }}>
              {activeService.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 lg:text-base" style={{ color: 'var(--text-soft)' }}>
              {activeService.description}
            </p>
          </div>

          <div
            className={`relative z-10 mt-8 flex min-h-[18rem] items-center justify-center rounded-[1.75rem] lg:mt-2 lg:min-h-0 lg:flex-1 ${previewFramePaddingClassName} ${previewFrameClassName}`}
          >
            <div className={previewInnerFrameClassName}>
              <img
                ref={previewImageRef}
                src={activeService.image}
                alt=""
                className={previewImageClassName}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
