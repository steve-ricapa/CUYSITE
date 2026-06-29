import { FinalCta } from '../../components/marketing/final-cta'
import { MotionReveal, MotionStagger, MotionStaggerItem } from '../../components/motion/motion-primitives'
import { PageHero } from '../../components/ui/page-hero'
import { SectionShell } from '../../components/ui/section-shell'
import { processSteps } from '../../content/site-content'

export function ProcessPage() {
  const darkPageBackground = '#040812'

  return (
    <>
      <PageHero
        dark
        eyebrow="Proceso"
        title="Trabajamos con un proceso claro para que sepas que sucede en cada etapa y por que importa."
        description="Nuestro objetivo no es solo entregar una web bonita, sino ayudarte a construir una presencia digital ordenada y funcional."
      />
      <SectionShell style={{ background: darkPageBackground }}>
        <MotionStagger className="mx-auto grid max-w-5xl gap-5">
          {processSteps.map((step, index) => (
            <MotionStaggerItem key={step.title}>
              <article className="panel px-6 py-6 sm:px-7">
                <div className="flex items-start gap-4">
                  <MotionReveal y={14} amount={0.3}>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-semibold text-white" style={{ background: 'linear-gradient(90deg, var(--secondary), var(--secondary-light))', boxShadow: '0 8px 18px rgba(91,46,255,.25)' }}>
                      {index + 1}
                    </div>
                  </MotionReveal>
                  <div>
                    <h2 className="headline-md !text-[1.35rem]">{step.title}</h2>
                    <p className="body-md mt-3">{step.description}</p>
                  </div>
                </div>
              </article>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </SectionShell>
      <FinalCta />
    </>
  )
}
