import { useEffect, useMemo, useRef, useState } from 'react'
import { type LucideIcon } from 'lucide-react'
import InfiniteMenu from './infinite-menu'

type Capability = {
  title: string
  desc: string
  icon: LucideIcon
  kind: string
  accent: string
  soft: string
  accentClass: string
}

function encodeSvg(svg: string) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

function createIconArtwork(title: string, kind: string, accent: string, soft: string) {
  const iconMarkup: Record<string, string> = {
    calendar: `
      <rect x="116" y="126" width="280" height="250" rx="44" fill="none" stroke="${accent}" stroke-width="18"/>
      <line x1="116" y1="190" x2="396" y2="190" stroke="${accent}" stroke-width="18" stroke-linecap="round"/>
      <line x1="180" y1="92" x2="180" y2="152" stroke="${accent}" stroke-width="18" stroke-linecap="round"/>
      <line x1="332" y1="92" x2="332" y2="152" stroke="${accent}" stroke-width="18" stroke-linecap="round"/>
      <circle cx="186" cy="248" r="12" fill="${accent}"/>
      <circle cx="256" cy="248" r="12" fill="${accent}"/>
      <circle cx="326" cy="248" r="12" fill="${accent}"/>
      <circle cx="186" cy="308" r="12" fill="${accent}"/>
      <circle cx="256" cy="308" r="12" fill="${accent}"/>
    `,
    clock: `
      <circle cx="256" cy="256" r="144" fill="none" stroke="${accent}" stroke-width="18"/>
      <line x1="256" y1="256" x2="256" y2="174" stroke="${accent}" stroke-width="18" stroke-linecap="round"/>
      <line x1="256" y1="256" x2="320" y2="286" stroke="${accent}" stroke-width="18" stroke-linecap="round"/>
      <circle cx="256" cy="256" r="18" fill="${accent}"/>
    `,
    cart: `
      <circle cx="192" cy="338" r="24" fill="none" stroke="${accent}" stroke-width="18"/>
      <circle cx="332" cy="338" r="24" fill="none" stroke="${accent}" stroke-width="18"/>
      <path d="M118 142h52l34 136h134l36-96H182" fill="none" stroke="${accent}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
    `,
    users: `
      <circle cx="214" cy="210" r="50" fill="none" stroke="${accent}" stroke-width="18"/>
      <circle cx="322" cy="222" r="40" fill="none" stroke="${accent}" stroke-width="18"/>
      <path d="M142 362c18-58 56-86 112-86s94 28 112 86" fill="none" stroke="${accent}" stroke-width="18" stroke-linecap="round"/>
      <path d="M282 354c12-34 38-52 78-56" fill="none" stroke="${accent}" stroke-width="18" stroke-linecap="round"/>
    `,
    image: `
      <rect x="116" y="126" width="280" height="250" rx="42" fill="none" stroke="${accent}" stroke-width="18"/>
      <circle cx="334" cy="190" r="24" fill="none" stroke="${accent}" stroke-width="18"/>
      <path d="M146 336l74-86 64 64 42-48 40 70" fill="none" stroke="${accent}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
    `,
    list: `
      <circle cx="158" cy="180" r="14" fill="${accent}"/>
      <circle cx="158" cy="256" r="14" fill="${accent}"/>
      <circle cx="158" cy="332" r="14" fill="${accent}"/>
      <line x1="200" y1="180" x2="372" y2="180" stroke="${accent}" stroke-width="18" stroke-linecap="round"/>
      <line x1="200" y1="256" x2="372" y2="256" stroke="${accent}" stroke-width="18" stroke-linecap="round"/>
      <line x1="200" y1="332" x2="372" y2="332" stroke="${accent}" stroke-width="18" stroke-linecap="round"/>
    `,
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" fill="none">
      <defs>
        <radialGradient id="g" cx="0" cy="0" r="1" gradientTransform="translate(256 214) rotate(90) scale(220)">
          <stop stop-color="${soft}" stop-opacity="1"/>
          <stop offset="1" stop-color="${soft}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="512" height="512" rx="128" fill="#ffffff"/>
      <rect x="22" y="22" width="468" height="468" rx="108" fill="${soft}" fill-opacity="0.28"/>
      <circle cx="256" cy="228" r="188" fill="url(#g)"/>
      <g>${iconMarkup[kind]}</g>
      <text x="256" y="438" text-anchor="middle" fill="#172033" font-family="Arial, sans-serif" font-size="28" font-weight="700">${title}</text>
    </svg>
  `

  return encodeSvg(svg)
}

export function ServicesCapabilitiesSection({ items }: { items: Capability[] }) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [activeItem, setActiveItem] = useState<{ title: string; description: string } | null>(null)
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const sync = () => setIsDesktop(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section || !isDesktop) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: '220px 0px 220px 0px', threshold: 0.05 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [isDesktop])

  const menuItems = useMemo(
    () =>
      items.map(item => ({
        title: item.title,
        description: item.desc,
        image: createIconArtwork(item.title, item.kind, item.accent, item.soft),
      })),
    [items],
  )

  useEffect(() => {
    if (items.length > 0 && !activeItem) {
      setActiveItem({ title: items[0].title, description: items[0].desc })
    }
  }, [items, activeItem])

  return (
    <section ref={sectionRef} className="mt-12">
      <div className="relative overflow-hidden rounded-[2.25rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-md)] lg:p-8">
        <div className="pointer-events-none absolute inset-x-[12%] top-[10%] h-48 rounded-full bg-[radial-gradient(circle,rgba(91,46,255,0.14)_0%,rgba(91,46,255,0.04)_38%,rgba(91,46,255,0)_78%)] blur-3xl" />

        <div className="relative z-10 lg:hidden">
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map(({ title, desc, icon: Icon, accentClass }) => (
              <div
                key={title}
                className="overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-tint)] p-5 shadow-[var(--shadow-sm)]"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${accentClass}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold" style={{ color: 'var(--text)' }}>
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6" style={{ color: 'var(--text-soft)' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 hidden lg:block">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--text-soft)]">Explora las capacidades</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                Mueve la esfera para explorar cada capacidad.
              </p>
            </div>
            <div className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
              {isInView ? 'Activo' : 'En pausa'}
            </div>
          </div>

          <div className="flex items-center gap-14">
            <div className="h-[32rem] w-[32rem] shrink-0 overflow-hidden rounded-full border border-[var(--border-strong)] bg-[var(--surface-hero)]">
              <InfiniteMenu
                items={menuItems}
                scale={1.0}
                enabled={isInView}
                hideOverlay
                onActiveChange={setActiveItem}
                onMovementChange={setIsMoving}
              />
            </div>

            <div className="flex-1">
              {activeItem ? (
                <div
                  className={`transition-all ease-out ${
                    isMoving
                      ? 'translate-y-3 opacity-0 duration-150'
                      : 'translate-y-0 opacity-100 duration-500'
                  }`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--text-soft)]">
                    Capacidad activa
                  </p>
                  <h3 className="mt-4 text-5xl font-bold leading-tight tracking-[-0.03em] text-[var(--text)]">
                    {activeItem.title}
                  </h3>
                  <p className="mt-6 text-lg leading-8 text-[var(--text-soft)]">
                    {activeItem.description}
                  </p>
                </div>
              ) : (
                <p className="text-2xl font-semibold text-[var(--text-soft)]">
                  Gira la esfera para explorar
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
