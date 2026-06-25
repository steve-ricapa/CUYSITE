import { ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from '../../../components/motion/motion-primitives'
import { ButtonLink } from '../../../components/ui/button-link'
import { pricingPlans } from '../../../content/site-content'

const planHighlights: Record<string, string> = {
  Landing: 'Ideal para salir rapido con una presencia clara y profesional.',
  Business: 'La opcion mas equilibrada para vender mejor y mostrar mas de tu negocio.',
  Premium: 'Pensado para proyectos que necesitan funciones mas fuertes y crecimiento real.',
}

export function PricingSummarySection() {
  const [activePlan, setActivePlan] = useState<string | null>(null)

  return (
    <section className="section-shell" style={{ background: 'var(--surface-dark-gradient)' }}>
      <div className="container-shell">
        <MotionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold"
              style={{
                background: 'rgba(255,255,255,0.08)',
                borderColor: 'rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              Inversion clara
            </p>
            <h2 className="headline-lg mt-6 !text-white">Planes para cada tipo de proyecto.</h2>
            <p className="body-lg mt-5 text-white/70">
              El precio grande es el pago unico inicial. El mantenimiento va aparte y se muestra por separado.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-12" onMouseLeave={() => setActivePlan(null)}>
          <MotionStagger className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
            {pricingPlans.map((plan) => {
              const isPopular = plan.name === 'Business'
              const isActive = activePlan === plan.name
              const hasActive = activePlan !== null
              const priceText = plan.priceLabel || `S/ ${plan.price}`
              const maintenanceText = plan.maintenanceLabel || `S/ ${plan.maintenance}/mes`
              const previewFeatures = plan.features.slice(0, 2)
              const isCompressed = hasActive && !isActive

              return (
                <div
                  key={plan.name}
                  className="w-full transition-all duration-300 ease-out lg:min-w-0"
                  style={{ flex: isActive ? '1.9 1 0%' : hasActive ? '0.55 1 0%' : '1 1 0%' }}
                >
                  <MotionStaggerItem className="h-full">
                    <div
                      className="group relative flex h-full flex-col rounded-[1.75rem] border transition-all duration-300 ease-out lg:min-h-[36rem]"
                      style={{
                        background: isActive
                          ? 'rgba(255,255,255,0.1)'
                          : isPopular
                            ? 'rgba(255,255,255,0.08)'
                            : 'rgba(7,17,46,0.78)',
                        borderColor: isActive
                          ? 'rgba(168,155,255,0.42)'
                          : isPopular
                            ? 'rgba(168,155,255,0.28)'
                            : 'rgba(255,255,255,0.12)',
                        boxShadow: isActive ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                        transform: isActive ? 'translateY(-8px)' : 'translateY(0)',
                      }}
                      onMouseEnter={() => setActivePlan(plan.name)}
                      onFocus={() => setActivePlan(plan.name)}
                      onClick={() => setActivePlan((current) => (current === plan.name ? null : plan.name))}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          setActivePlan((current) => (current === plan.name ? null : plan.name))
                        }
                      }}
                      tabIndex={0}
                    >
                      {isPopular && (
                        <span className="absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-[var(--secondary)] px-4 py-1 text-xs font-semibold text-white shadow-lg">
                          Mas elegido
                        </span>
                      )}

                    <div className="flex h-full flex-col p-7 pt-12 transition-all duration-300 ease-out lg:p-8 lg:pt-14" style={{ paddingInline: isCompressed ? 20 : undefined }}>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/58">
                            {plan.name}
                          </p>

                          <p className="mt-4 text-3xl font-bold text-white sm:text-4xl">{priceText}</p>
                          <p className="mt-2 text-sm font-semibold text-[var(--secondary-light)]">
                            Pago unico inicial
                          </p>
                          <p className="mt-3 text-sm text-white/70">
                            + <span className="font-semibold text-white">{maintenanceText}</span> de mantenimiento
                          </p>
                        </div>

                        <div
                          className="mt-7 grid gap-2.5 overflow-hidden transition-all duration-300 ease-out"
                          style={{
                            maxHeight: isActive ? 0 : 80,
                            opacity: isActive ? 0 : isCompressed ? 0.35 : 1,
                            marginTop: isActive ? 0 : 28,
                          }}
                        >
                          {previewFeatures.map((feature) => (
                            <div key={feature} className="flex items-start gap-2.5 text-sm leading-5 text-white/78">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--secondary-light)]" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        <div className="mt-5 lg:block">
                          <p className="text-sm text-white/50 lg:transition-opacity lg:duration-200" style={{ opacity: isActive ? 0 : isCompressed ? 0.2 : 1 }}>
                            Pasa el mouse para ver el plan completo.
                          </p>
                        </div>

                        <div
                          className="overflow-hidden transition-all duration-300 ease-out"
                          style={{
                            maxHeight: isActive ? 420 : 0,
                            opacity: isActive ? 1 : 0,
                            marginTop: isActive ? 24 : 0,
                          }}
                        >
                          <div
                            className="rounded-[1.4rem] border p-5"
                            style={{
                              background: 'rgba(255,255,255,0.05)',
                              borderColor: 'rgba(255,255,255,0.1)',
                            }}
                          >
                            <p className="text-sm font-medium leading-6 text-white/82">
                              {planHighlights[plan.name]}
                            </p>

                            <ul className="mt-4 grid gap-2.5">
                              {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2.5 text-sm leading-5 text-white/82">
                                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--secondary-light)]" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-auto pt-6">
                          <ButtonLink
                            to="/contacto"
                            variant={isPopular || isActive ? 'primary' : 'secondary'}
                            className="w-full"
                          >
                            Cotizar {plan.name}
                            <ArrowRight className="h-4 w-4" />
                          </ButtonLink>
                        </div>
                      </div>
                    </div>
                  </MotionStaggerItem>
                </div>
              )
            })}
          </MotionStagger>
        </div>

        <MotionReveal>
          <div className="mt-10 text-center">
            <p className="text-sm text-white/62">
              Dominio y hosting se cotizan segun el proyecto.{` `}
              <ButtonLink to="/precios" variant="ghost" className="!inline-flex !text-sm !font-medium !text-white">
                Ver todos los detalles →
              </ButtonLink>
            </p>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
