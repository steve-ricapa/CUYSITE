import { MotionHover, MotionReveal, MotionStagger, MotionStaggerItem } from '../../../components/motion/motion-primitives'
import { benefitItems } from '../../../content/site-content'

const featuredBenefit = {
  title: 'Tu web pasa de ser un gasto visual a una herramienta comercial.',
  description:
    'No solo ordena tu presencia online. Tambien responde preguntas, filtra mejor a tus clientes y te ayuda a vender con mas claridad sin depender todo el tiempo de estar atendiendo manualmente.',
}

export function BenefitsImpactSection() {
  const [primaryBenefit, ...secondaryBenefits] = benefitItems

  return (
    <section className="section-shell pt-0">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <MotionReveal>
            <div className="panel px-7 py-8 sm:px-8 sm:py-9 lg:sticky lg:top-28">
              <p className="eyebrow">Impacto real</p>
              <h2 className="headline-lg mt-6 max-w-xl text-balance">{featuredBenefit.title}</h2>
              <p className="body-lg mt-5 max-w-xl text-pretty">{featuredBenefit.description}</p>

              <div
                className="mt-8 rounded-[1.5rem] border p-5"
                style={{
                  background: 'var(--surface-tint)',
                  borderColor: 'var(--border)',
                }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--secondary)' }}>
                  Beneficio clave
                </p>
                <h3 className="mt-3 text-xl font-semibold" style={{ color: 'var(--primary)' }}>
                  {primaryBenefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                  {primaryBenefit.description}
                </p>
              </div>
            </div>
          </MotionReveal>

          <MotionStagger className="grid gap-5 sm:grid-cols-2">
            {secondaryBenefits.map(({ icon: Icon, title, description }) => (
              <MotionStaggerItem key={title}>
                <MotionHover className="h-full">
                  <article className="feature-card h-full">
                    <div className="icon-chip">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="headline-md mt-6 !text-[1.45rem]">{title}</h3>
                    <p className="body-md mt-4">{description}</p>
                  </article>
                </MotionHover>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </div>
    </section>
  )
}
