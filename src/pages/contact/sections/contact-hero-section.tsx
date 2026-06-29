import { Suspense, lazy, useEffect, useState } from 'react'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'
import { MotionReveal, MotionStagger, MotionStaggerItem } from '../../../components/motion/motion-primitives'
import { ButtonLink } from '../../../components/ui/button-link'
import { contactLinks } from '../../../content/site-content'

const Lanyard = lazy(() => import('../../../components/ui/lanyard'))

const whatsappLink = contactLinks.find((link) => link.label === 'WhatsApp')
const emailLink = contactLinks.find((link) => link.label === 'Correo')

export function ContactHeroSection() {
  const [showLanyard, setShowLanyard] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    const sync = () => setShowLanyard(mediaQuery.matches)

    sync()
    mediaQuery.addEventListener('change', sync)
    return () => mediaQuery.removeEventListener('change', sync)
  }, [])

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

            <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block" aria-hidden="true">
              <div className="absolute bottom-0 right-4 h-[78%] w-[34rem]">
                <img
                  src="/assets/cuy-contacto.png"
                  alt=""
                  className="absolute bottom-0 right-0 h-auto w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {showLanyard ? (
              <div className="absolute inset-0 z-40 hidden lg:block">
                <div className="absolute right-0 top-0 h-full w-[60%]">
                  <Suspense fallback={null}>
                    <Lanyard
                      className="pointer-events-auto"
                      position={[0, 0, 26]}
                      gravity={[0, -40, 0]}
                      frontImage="/assets/cuy-carnet.png"
                      backImage="/assets/cuy-carnet.png"
                      lanyardWidth={1.08}
                    />
                  </Suspense>
                </div>
              </div>
            ) : null}

            <MotionStagger className="relative z-30 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,30rem)] lg:items-center">
              <div className="relative z-50 max-w-3xl">
                <MotionStaggerItem>
                  <p className="eyebrow">Contacto</p>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <h1 className="headline-lg mt-6 max-w-4xl text-balance">
                    Cuéntanos tu proyecto y te ayudamos a convertirlo en una web moderna, clara y profesional.
                  </h1>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <p className="body-lg mt-6 max-w-2xl text-pretty">
                    Puedes escribirnos por formulario, WhatsApp, Instagram o correo. Si ya tienes una idea, te ayudamos a ordenarla y aterrizarla con una ruta clara.
                  </p>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <ButtonLink to="#contact-form" className="btn-loading">
                      Empezar por formulario
                      <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                    {whatsappLink ? (
                      <a href={whatsappLink.href} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp directo
                      </a>
                    ) : null}
                    {emailLink ? (
                      <a href={emailLink.href} className="btn-ghost">
                        <Mail className="h-4 w-4" />
                        Enviar correo
                      </a>
                    ) : null}
                  </div>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {['Respuesta clara', 'Canales directos', 'Acompañamiento cercano'].map((item) => (
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
                <div className="relative mx-auto h-[20rem] w-full max-w-[18rem] lg:hidden">
                  <div
                    className="absolute inset-x-2 bottom-4 top-12 rounded-full blur-3xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(255,255,255,0.42) 0%, rgba(168,155,255,0.24) 36%, rgba(255,255,255,0) 74%)',
                    }}
                    aria-hidden="true"
                  />
                  <img
                    src="/assets/cuy-contacto.png"
                    alt="Cuy contacto"
                    className="absolute bottom-0 right-0 z-10 h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </MotionStaggerItem>
            </MotionStagger>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
