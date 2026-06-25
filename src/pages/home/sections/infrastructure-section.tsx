import {
  MotionHover,
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from '../../../components/motion/motion-primitives'
import { SectionShell } from '../../../components/ui/section-shell'
import { infrastructureTechItems } from '../../../content/site-content'

export function InfrastructureSection() {
  return (
    <SectionShell>
      <MotionReveal>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Infraestructura</p>
            <h2 className="headline-lg mt-6 max-w-xl text-balance">
              Infraestructura y hosting.
            </h2>
            <p className="body-lg mt-5 max-w-xl text-pretty">
              Aqui vive tu sitio: nube, dominio, distribucion y seguridad para que todo cargue bien y se mantenga estable.
            </p>
          </div>

          <div
            className="rounded-[1.75rem] border p-6 sm:p-8"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <MotionStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {infrastructureTechItems.map(({ name, iconUrl, title, description, icon: Icon }) => (
                <MotionStaggerItem key={title}>
                  <MotionHover className="h-full">
                    <div
                      className="flex h-full flex-col gap-3 rounded-[1.5rem] border p-5 text-left"
                      style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                        {iconUrl ? (
                          <img src={iconUrl} alt={name} className="h-7 w-7 object-contain" loading="lazy" />
                        ) : Icon ? (
                          <Icon className="h-7 w-7 text-[var(--secondary)]" />
                        ) : null}
                      </div>
                      <h3 className="text-base font-semibold leading-tight text-balance" style={{ color: 'var(--primary)' }}>
                        {title}
                      </h3>
                      <p className="text-sm leading-6 text-pretty" style={{ color: 'var(--text-soft)' }}>
                        {description}
                      </p>
                    </div>
                  </MotionHover>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        </div>
      </MotionReveal>
    </SectionShell>
  )
}
