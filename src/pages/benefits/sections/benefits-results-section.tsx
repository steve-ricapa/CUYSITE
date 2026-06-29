import { Check } from 'lucide-react'
import { MotionReveal, MotionStagger, MotionStaggerItem } from '../../../components/motion/motion-primitives'

const resultItems = [
  'Te encuentran mas facil cuando buscan lo que ofreces.',
  'Tu marca se ve mas seria y mas ordenada desde el primer vistazo.',
  'El cliente entiende mejor tu servicio antes de escribirte.',
  'Tu canal de contacto queda mas claro y convierte con menos friccion.',
]

export function BenefitsResultsSection() {
  return (
    <section className="section-shell pt-0">
      <div className="container-shell">
        <MotionReveal>
          <div className="panel-dark px-8 py-10 sm:px-10 lg:px-12 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/62">Lo que cambia</p>
                <h2 className="headline-lg mt-6 !text-white text-balance">
                  Cuando tu web esta bien pensada, el negocio se entiende mejor y avanzar es mas facil.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
                  Estos beneficios no son teoria: son mejoras concretas en como te perciben, como te contactan y como toman decisiones contigo.
                </p>
              </div>

              <MotionStagger className="grid gap-4">
                {resultItems.map((item) => (
                  <MotionStaggerItem key={item}>
                    <div className="feature-card-dark flex items-start gap-4">
                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[var(--secondary-light)]">
                        <Check className="h-4 w-4" />
                      </span>
                      <p className="text-sm leading-7 text-white/82 sm:text-base">{item}</p>
                    </div>
                  </MotionStaggerItem>
                ))}
              </MotionStagger>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
