import { MotionReveal, MotionStagger, MotionStaggerItem } from '../motion/motion-primitives'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="section-shell pb-8 sm:pb-10">
      <div className="container-shell">
        <MotionReveal>
          <div className="panel-strong px-8 py-12 sm:px-10 lg:px-14 lg:py-16">
            <MotionStagger className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
              <div>
                <MotionStaggerItem>
                  <p className="eyebrow">{eyebrow}</p>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <h1 className="headline-lg mt-6 max-w-4xl">{title}</h1>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <p className="body-lg mt-6 max-w-3xl">{description}</p>
                </MotionStaggerItem>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {['UI moderna', 'Responsive', 'Rapida'].map((item) => (
                  <MotionStaggerItem key={item}>
                    <div className="rounded-2xl border px-4 py-3 text-sm font-medium" style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--primary)' }}>
                      {item}
                    </div>
                  </MotionStaggerItem>
                ))}
              </div>
            </MotionStagger>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
