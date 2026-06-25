import { ArrowRight } from 'lucide-react'
import { MotionGlow, MotionReveal, MotionStagger, MotionStaggerItem } from '../motion/motion-primitives'
import { ButtonLink } from '../ui/button-link'

export function FinalCta() {
  return (
    <section className="section-shell pt-0">
      <div className="container-shell">
        <MotionReveal>
          <div className="panel-dark relative px-8 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12">
            <MotionGlow className="absolute -right-12 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full blur-3xl" />
            <MotionStagger className="relative z-10 contents">
              <div>
                <MotionStaggerItem>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">CTA final</p>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <h2 className="headline-md mt-4 max-w-2xl !text-white">
                    Haz que tu negocio se vea profesional desde hoy con Cuysite.
                  </h2>
                </MotionStaggerItem>
              </div>
              <MotionStaggerItem>
                <ButtonLink to="/contacto" className="mt-6 lg:mt-0">
                  Empezar proyecto
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </MotionStaggerItem>
            </MotionStagger>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
