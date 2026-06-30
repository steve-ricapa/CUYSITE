import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Building2,
  LayoutTemplate,
  BriefcaseBusiness,
  Sparkles,
  ShoppingBag,
  Puzzle,
} from 'lucide-react'
import { useTheme } from '../../../theme/theme-provider'

gsap.registerPlugin(ScrollTrigger)

const serviceIcons = [
  {
    icon: Building2,
    label: 'Corporativo',
    glow: 'radial-gradient(circle at center, rgba(96, 165, 250, 0.52) 0%, rgba(59, 130, 246, 0.24) 42%, rgba(59, 130, 246, 0) 78%)',
    hoverGlow: 'radial-gradient(circle at center, rgba(125, 211, 252, 0.78) 0%, rgba(56, 189, 248, 0.34) 44%, rgba(56, 189, 248, 0) 78%)',
  },
  {
    icon: LayoutTemplate,
    label: 'Landing page',
    glow: 'radial-gradient(circle at center, rgba(45, 212, 191, 0.5) 0%, rgba(20, 184, 166, 0.24) 42%, rgba(20, 184, 166, 0) 78%)',
    hoverGlow: 'radial-gradient(circle at center, rgba(94, 234, 212, 0.78) 0%, rgba(45, 212, 191, 0.34) 44%, rgba(45, 212, 191, 0) 78%)',
  },
  {
    icon: BriefcaseBusiness,
    label: 'Portafolio',
    glow: 'radial-gradient(circle at center, rgba(167, 139, 250, 0.5) 0%, rgba(139, 92, 246, 0.24) 42%, rgba(139, 92, 246, 0) 78%)',
    hoverGlow: 'radial-gradient(circle at center, rgba(196, 181, 253, 0.82) 0%, rgba(168, 85, 247, 0.36) 44%, rgba(168, 85, 247, 0) 78%)',
  },
  {
    icon: Sparkles,
    label: 'Marca personal',
    glow: 'radial-gradient(circle at center, rgba(244, 114, 182, 0.5) 0%, rgba(236, 72, 153, 0.24) 42%, rgba(236, 72, 153, 0) 78%)',
    hoverGlow: 'radial-gradient(circle at center, rgba(251, 182, 206, 0.84) 0%, rgba(244, 114, 182, 0.36) 44%, rgba(244, 114, 182, 0) 78%)',
  },
  {
    icon: ShoppingBag,
    label: 'Tienda online',
    glow: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.54) 0%, rgba(245, 158, 11, 0.24) 42%, rgba(245, 158, 11, 0) 78%)',
    hoverGlow: 'radial-gradient(circle at center, rgba(253, 224, 71, 0.82) 0%, rgba(251, 191, 36, 0.34) 44%, rgba(251, 191, 36, 0) 78%)',
  },
  {
    icon: Puzzle,
    label: 'Personalizado',
    glow: 'radial-gradient(circle at center, rgba(74, 222, 128, 0.5) 0%, rgba(34, 197, 94, 0.24) 42%, rgba(34, 197, 94, 0) 78%)',
    hoverGlow: 'radial-gradient(circle at center, rgba(134, 239, 172, 0.8) 0%, rgba(74, 222, 128, 0.34) 44%, rgba(74, 222, 128, 0) 78%)',
  },
]

export function ServicesHeroReel() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const sectionRef = useRef<HTMLElement>(null)
  const cuy1Ref = useRef<HTMLDivElement>(null)
  const cuy2Ref = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)
  const [progressLabel, setProgressLabel] = useState('0.000')

  useLayoutEffect(() => {
    const section = sectionRef.current
    const cuy1 = cuy1Ref.current
    const cuy2 = cuy2Ref.current
    const glow = glowRef.current
    const title = titleRef.current
    const icons = iconsRef.current

    if (!section || !cuy1 || !cuy2 || !glow || !title || !icons) return

    const ctx = gsap.context(() => {
      gsap.set(cuy1, { autoAlpha: 1, scale: 0.9 })
      gsap.set(cuy2, { autoAlpha: 0, scale: 0.96, y: 12 })
      gsap.set(glow, { autoAlpha: 0, scale: 0.72 })
      gsap.set(title, { autoAlpha: 0, y: 18 })
      gsap.set(icons, { autoAlpha: 0, y: 18 })

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=4200',
          pin: true,
          scrub: 1,
          onUpdate: self => {
            setProgressLabel(self.progress.toFixed(3))
          },
        },
      })

      // Acto 1: cuy1 domina la escena y apenas se prepara.
      tl.to(cuy1, { scale: 0.86, duration: 52 }, 0)

      // Acto 2: relevo corto y solapado, sin hueco visual.
      tl.to(cuy1, { scale: 0, autoAlpha: 0, duration: 6 }, 52)
      tl.to(glow, { autoAlpha: 1, scale: 1, duration: 5 }, 53)
      tl.to(cuy2, { autoAlpha: 1, scale: 1, y: 0, duration: 4 }, 54)

      // Acto 3: se arma el hero final.
      tl.to(title, { autoAlpha: 1, y: 0, duration: 8 }, 64)
      tl.to(icons, { autoAlpha: 1, y: 0, duration: 10 }, 68)

      // Acto 4: se retiene el estado final bastante scroll.
      tl.to({}, { duration: 22 }, 78)
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative -mt-24 h-[calc(100vh+6rem)] overflow-hidden lg:-mt-28 lg:h-[calc(100vh+7rem)]"
      style={{ background: 'var(--surface-hero)' }}
    >
      <div className="fixed right-4 top-1/2 z-[60] -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-3 py-2 font-mono text-xs text-white backdrop-blur-md">
        {progressLabel}
      </div>

      <div className="relative h-full w-full">
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-x-[8%] bottom-[2%] top-[18%] z-0 rounded-full blur-3xl lg:inset-x-[14%] lg:bottom-[6%] lg:top-[22%]"
          style={{
            background:
              theme === 'dark'
                ? 'radial-gradient(circle, rgba(168, 155, 255, 0.38) 0%, rgba(91, 46, 255, 0.22) 32%, rgba(91, 46, 255, 0) 72%)'
                : 'radial-gradient(circle, rgba(91, 46, 255, 0.26) 0%, rgba(91, 46, 255, 0.12) 34%, rgba(91, 46, 255, 0) 72%)',
          }}
        />

        <div ref={titleRef} className="pointer-events-none absolute inset-x-0 top-28 z-30 px-6 text-center lg:top-32">
          <h1 className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${isDark ? 'text-white' : 'text-[var(--text)]'}`}>
            Nuestros servicios
          </h1>
          <p className={`mx-auto mt-3 max-w-2xl text-sm sm:text-base ${isDark ? 'text-white/70' : 'text-[var(--text-soft)]'}`}>
            Sitios web pensados para convertir ideas en resultados.
          </p>
        </div>

        <div ref={cuy2Ref} className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center pt-40 sm:pt-44 lg:pt-48">
          <img
            src="/assets/cuy-menu2.png"
            alt=""
            className="h-[88%] w-[88%] object-contain p-6 sm:h-[84%] sm:w-[84%] sm:p-10"
            loading="eager"
          />
        </div>

        <div ref={cuy1Ref} className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <img
            src="/assets/cuy-menu1.png"
            alt=""
            className="h-full w-full object-contain p-6 sm:p-10"
            loading="eager"
          />
        </div>

        <div
          ref={iconsRef}
          className="absolute left-1/2 top-[18%] z-30 -translate-x-1/2 flex max-w-5xl flex-wrap justify-center gap-4 px-6 lg:top-[23%] lg:gap-5"
        >
          {serviceIcons.map(({ icon: Icon, label, glow, hoverGlow }) => (
            <div key={label} className="group flex flex-col items-center gap-2">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-white/55 group-hover:bg-white/16">
                <div
                  className="absolute -inset-3 rounded-[1.35rem] opacity-100 blur-xl transition-all duration-300 group-hover:-inset-4 group-hover:scale-125 group-hover:blur-2xl"
                  style={{ background: glow }}
                />
                <div
                  className="absolute -inset-3 rounded-[1.35rem] opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-100"
                  style={{ background: hoverGlow }}
                />
                <Icon className="relative h-6 w-6 text-white transition-colors duration-300 group-hover:text-cyan-100" />
              </div>
              <span className="whitespace-nowrap text-[11px] font-semibold text-white/80 transition-colors duration-300 group-hover:text-white">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
