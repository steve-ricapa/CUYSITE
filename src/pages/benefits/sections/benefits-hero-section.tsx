import { ArrowRight, BadgeCheck, MessageCircle, ShieldCheck } from 'lucide-react'
import { MotionReveal, MotionStagger, MotionStaggerItem } from '../../../components/motion/motion-primitives'
import { ButtonLink } from '../../../components/ui/button-link'

const heroHighlights = ['Mas confianza al primer vistazo', 'Tu negocio visible todo el dia', 'Mas claridad para vender']

export function BenefitsHeroSection() {
  return (
    <section className="section-shell pb-10 sm:pb-12">
      <div className="container-shell">
        <MotionReveal>
          <div className="panel-strong relative overflow-hidden px-8 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div
              className="absolute inset-y-0 right-0 w-[42%] opacity-80"
              style={{
                background: 'radial-gradient(circle at 30% 35%, rgba(91,46,255,0.18) 0%, rgba(91,46,255,0.08) 28%, rgba(91,46,255,0) 68%)',
              }}
              aria-hidden="true"
            />

            <MotionStagger className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,26rem)] lg:items-center">
              <div className="max-w-3xl">
                <MotionStaggerItem>
                  <p className="eyebrow">Beneficios</p>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <h1 className="headline-lg mt-6 max-w-4xl text-balance">
                    Tu pagina web no deberia ser solo presencia: deberia ayudarte a atraer, convencer y convertir.
                  </h1>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <p className="body-lg mt-6 max-w-2xl text-pretty">
                    Una web bien hecha ordena tu propuesta, transmite profesionalismo y hace mas facil que un visitante se convierta en un cliente real.
                  </p>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <ButtonLink to="/contacto" className="btn-loading">
                      Solicitar cotizacion
                      <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                    <ButtonLink to="/proceso" variant="ghost">
                      Ver proceso
                    </ButtonLink>
                  </div>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {heroHighlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-full border px-4 py-2 text-sm font-semibold"
                        style={{
                          background: 'var(--surface)',
                          borderColor: 'var(--border)',
                          color: 'var(--primary)',
                          boxShadow: 'var(--shadow-sm)',
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </MotionStaggerItem>
              </div>

              <MotionStaggerItem>
                <div className="relative mx-auto w-full max-w-[22rem] lg:max-w-[25rem]">
                  <div
                    className="absolute inset-x-2 bottom-8 top-14 rounded-full blur-3xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(255,255,255,0.42) 0%, rgba(168,155,255,0.24) 36%, rgba(255,255,255,0) 74%)',
                    }}
                    aria-hidden="true"
                  />
                  <img
                    src="/assets/cuy-designer.png"
                    alt="Cuy Designer"
                    className="relative z-10 h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </MotionStaggerItem>
            </MotionStagger>

            <MotionStagger className="relative z-10 mt-10 grid gap-4 md:grid-cols-3">
              {[
                { icon: BadgeCheck, title: 'Mejor primera impresion', text: 'La gente entiende mas rapido que ofreces y por que deberian confiar en ti.' },
                { icon: ShieldCheck, title: 'Mas seguridad para escribirte', text: 'Una web profesional reduce dudas y hace que tu negocio se vea mas serio.' },
                { icon: MessageCircle, title: 'Camino mas claro al contacto', text: 'Tu visitante encuentra rapido como pedir informacion, cotizar o comprar.' },
              ].map(({ icon: Icon, title, text }) => (
                <MotionStaggerItem key={title}>
                  <div className="feature-card h-full">
                    <div className="icon-chip">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="headline-md mt-5 !text-[1.35rem]">{title}</h2>
                    <p className="body-md mt-3">{text}</p>
                  </div>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
