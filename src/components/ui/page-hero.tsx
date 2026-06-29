import type { ReactNode } from 'react'
import { MotionReveal, MotionStagger, MotionStaggerItem } from '../motion/motion-primitives'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  highlights?: string[]
  visual?: ReactNode
  overflowVisible?: boolean
  dark?: boolean
}

const defaultHighlights = ['UI moderna', 'Responsive', 'Rapida']

export function PageHero({ eyebrow, title, description, highlights = defaultHighlights, visual, overflowVisible = false, dark = false }: PageHeroProps) {
  return (
    <section className="section-shell pb-8 sm:pb-10">
      <div className="container-shell">
        <MotionReveal>
          <div className={`${dark ? 'panel-dark' : 'panel-strong'} px-8 py-12 sm:px-10 lg:px-14 lg:py-16 ${overflowVisible ? '!overflow-visible' : ''}`}>
            <MotionStagger className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
              <div>
                <MotionStaggerItem>
                  <p className="eyebrow">{eyebrow}</p>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <h1 className={`headline-lg mt-6 max-w-4xl ${dark ? '!text-white' : ''}`}>{title}</h1>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <p className={`body-lg mt-6 max-w-3xl ${dark ? '!text-white/72' : ''}`}>{description}</p>
                </MotionStaggerItem>
              </div>
              {visual ? <MotionStaggerItem>{visual}</MotionStaggerItem> : null}
              {!visual && highlights.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {highlights.map((item) => (
                    <MotionStaggerItem key={item}>
                      <div className="rounded-2xl border px-4 py-3 text-sm font-medium" style={dark ? { background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.12)', color: '#ffffff' } : { background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--primary)' }}>
                        {item}
                      </div>
                    </MotionStaggerItem>
                  ))}
                </div>
              ) : null}
            </MotionStagger>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
