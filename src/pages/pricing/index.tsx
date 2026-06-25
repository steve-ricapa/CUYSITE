import { ArrowRight } from 'lucide-react'
import { FinalCta } from '../../components/marketing/final-cta'
import { MotionReveal, MotionStagger, MotionStaggerItem } from '../../components/motion/motion-primitives'
import { ButtonLink } from '../../components/ui/button-link'
import { PageHero } from '../../components/ui/page-hero'
import { SectionShell } from '../../components/ui/section-shell'

export function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Precios"
        title="Cada proyecto se cotiza segun sus objetivos, alcance y nivel de personalizacion."
        description="Te mostramos una base orientativa para que tengas una referencia clara, pero el precio final depende de lo que tu negocio realmente necesite."
      />
      <SectionShell muted>
        <MotionReveal>
          <div className="panel-dark px-8 py-10 sm:px-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
            <MotionStagger className="contents">
              <div>
                <MotionStaggerItem>
                  <p className="eyebrow border-white/20 bg-white/10 !text-white/80">Planes o precios</p>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <h2 className="headline-lg mt-6 !text-white">Desde S/. XXX</h2>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                    El precio final depende del tipo de pagina, cantidad de secciones, contenido disponible, integraciones, funcionalidades especiales y soporte posterior.
                  </p>
                </MotionStaggerItem>
              </div>
              <MotionStaggerItem>
                <ButtonLink to="/contacto" className="mt-8 lg:mt-0">
                  Pedir cotizacion
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </MotionStaggerItem>
            </MotionStagger>
          </div>
        </MotionReveal>
      </SectionShell>
      <FinalCta />
    </>
  )
}
