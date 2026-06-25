import { ArrowRight, Check, Info } from 'lucide-react'
import { FinalCta } from '../../components/marketing/final-cta'
import { MotionReveal, MotionStagger, MotionStaggerItem } from '../../components/motion/motion-primitives'
import { ButtonLink } from '../../components/ui/button-link'
import { PageHero } from '../../components/ui/page-hero'
import { SectionShell } from '../../components/ui/section-shell'
import { maintenanceIncludes, pricingNotes, pricingPlans } from '../../content/site-content'

export function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Precios"
        title="Cada proyecto se cotiza según sus objetivos, alcance y nivel de personalización."
        description="Te mostramos una base orientativa para que tengas una referencia clara, pero el precio final depende de lo que tu negocio realmente necesite."
      />

      <SectionShell>
        <MotionStagger className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <MotionStaggerItem key={plan.name}>
              <div
                className="relative flex flex-col rounded-[1.75rem] border p-7"
                style={{
                  background: plan.name === 'Business' ? 'var(--surface-dark-gradient)' : 'var(--surface)',
                  borderColor: plan.name === 'Business' ? 'rgba(255,255,255,0.1)' : 'var(--border)',
                  boxShadow: plan.name === 'Business' ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                }}
              >
                {plan.name === 'Business' && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#5b2eff] to-[#8a6bff] px-4 py-1 text-xs font-semibold text-white shadow-lg">
                    Más elegido
                  </span>
                )}

                <p
                  className="text-sm font-semibold uppercase tracking-[0.16em]"
                  style={{ color: plan.name === 'Business' ? 'rgba(255,255,255,0.7)' : 'var(--secondary)' }}
                >
                  {plan.name}
                </p>

                <p
                  className="mt-3 text-3xl font-bold sm:text-4xl"
                  style={{ color: plan.name === 'Business' ? '#ffffff' : 'var(--primary)' }}
                >
                  {plan.priceLabel || `S/ ${plan.price}`}
                </p>
                <p
                  className="mt-1 text-sm"
                  style={{ color: plan.name === 'Business' ? 'rgba(255,255,255,0.6)' : 'var(--text-soft)' }}
                >
                  + <span className="font-semibold">{plan.maintenanceLabel || `S/ ${plan.maintenance}/mes`}</span> de mantenimiento
                </p>

                <ul className="mt-6 grid gap-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-5"
                      style={{ color: plan.name === 'Business' ? 'rgba(255,255,255,0.8)' : 'var(--text-soft)' }}
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: plan.name === 'Business' ? '#a89bff' : 'var(--secondary)' }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <ButtonLink
                    to="/contacto"
                    variant={plan.name === 'Business' ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    Cotizar {plan.name}
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </SectionShell>

      <SectionShell muted>
        <MotionReveal>
          <div className="rounded-[1.75rem] border p-7 sm:p-8" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0" style={{ color: 'var(--secondary)' }} />
              <div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--primary)' }}>
                  ¿Qué incluye el mantenimiento?
                </h3>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {maintenanceIncludes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-soft)' }}>
                      <Check className="h-3.5 w-3.5 shrink-0" style={{ color: 'var(--secondary)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {pricingNotes.map((note) => (
              <p key={note} className="rounded-2xl border px-5 py-3 text-sm leading-6" style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text-soft)' }}>
                {note}
              </p>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal>
          <div className="mt-8 text-center">
            <ButtonLink to="/contacto">
              Pedir cotización personalizada
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </MotionReveal>
      </SectionShell>

      <FinalCta />
    </>
  )
}
