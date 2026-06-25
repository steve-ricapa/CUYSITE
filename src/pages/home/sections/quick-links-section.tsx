import { ArrowRight } from 'lucide-react'
import {
  MotionHover,
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from '../../../components/motion/motion-primitives'
import { ButtonLink } from '../../../components/ui/button-link'
import { SectionShell } from '../../../components/ui/section-shell'
import { quickLinks } from '../../../content/site-content'

export function QuickLinksSection() {
  return (
    <SectionShell>
      <MotionReveal>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Explora Cuysite</p>
            <h2 className="headline-lg mt-6 max-w-2xl">
              Cada parte importante del servicio vive en su propia pagina.
            </h2>
          </div>
          <p className="body-lg max-w-2xl">
            Organizamos el sitio para que cada visitante entienda rapido que haces, como trabajas y como puede empezar contigo.
          </p>
        </div>
      </MotionReveal>
      <MotionStagger className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {quickLinks.map((item) => (
          <MotionStaggerItem key={item.to}>
            <MotionHover>
              <ButtonLink to={item.to} variant="secondary" className="feature-card block min-h-0 rounded-[1.75rem] p-6 text-left">
                <span className="block text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--secondary)' }}>
                  {item.title}
                </span>
                <span className="mt-4 block text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                  {item.description}
                </span>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--primary)' }}>
                  Ir a la pagina
                  <ArrowRight className="h-4 w-4" />
                </span>
              </ButtonLink>
            </MotionHover>
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </SectionShell>
  )
}
