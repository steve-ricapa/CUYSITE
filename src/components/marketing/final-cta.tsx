import { ArrowRight, Mail } from 'lucide-react'
import { contactLinks } from '../../content/site-content'
import { MotionGlow, MotionReveal, MotionStagger, MotionStaggerItem } from '../motion/motion-primitives'
import { ButtonLink } from '../ui/button-link'

const whatsappLink = contactLinks.find((link) => link.label === 'WhatsApp')
const socialLinks = contactLinks.filter((link) => link.label === 'Instagram' || link.label === 'Facebook')
const emailLink = contactLinks.find((link) => link.label === 'Correo')

export function FinalCta() {
  return (
    <section className="section-shell pt-16 sm:pt-20">
      <div className="container-shell">
        <MotionReveal>
          <div className="panel-dark relative px-8 py-10 sm:px-10 lg:px-12">
            <MotionGlow className="absolute -right-12 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full blur-3xl" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <MotionStagger className="flex flex-col items-start gap-6">
                <MotionStaggerItem>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
                    Ultimo paso
                  </p>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <h2 className="headline-md max-w-xl !text-white text-balance">
                    Si ya te imaginas tu web online, conversemos y la empezamos bien desde hoy.
                  </h2>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <p className="max-w-xl text-base leading-7 text-white/72 text-pretty">
                    Puedes escribirnos por WhatsApp, seguirnos en redes o enviarnos tu idea por contacto.
                    Te respondemos con una ruta clara para tu proyecto.
                  </p>
                </MotionStaggerItem>
                <MotionStaggerItem>
                  <div className="flex flex-wrap gap-3">
                    <ButtonLink to="/contacto" className="btn-loading mt-2">
                      Empezar proyecto
                      <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                    {emailLink && (
                      <a
                        href={emailLink.href}
                        className="btn-ghost mt-2 !border !border-white/12 !bg-white/6 !text-white hover:!bg-white/12"
                      >
                        <Mail className="h-4 w-4" />
                        Enviar correo
                      </a>
                    )}
                  </div>
                </MotionStaggerItem>
              </MotionStagger>

              <MotionStagger className="grid gap-4">
                {whatsappLink && (
                  <MotionStaggerItem>
                    <a
                      href={whatsappLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-loading group relative block overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/8 p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:bg-white/12"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                          <img
                            src="https://www.google.com/s2/favicons?domain=wa.me&sz=64"
                            alt="WhatsApp"
                            className="h-8 w-8 rounded-md object-contain"
                            loading="lazy"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/62">
                              WhatsApp directo
                            </p>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/70 transition group-hover:rotate-90 group-hover:text-white">
                              <ArrowRight className="h-4 w-4" />
                            </span>
                          </div>

                          <p className="mt-3 text-2xl font-semibold text-white">{whatsappLink.value}</p>
                          <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">
                            El canal mas rapido para hablar de tu proyecto, pedir una cotizacion o resolver dudas.
                          </p>

                          <div className="mt-4 flex items-center gap-3">
                            <span className="rounded-full border border-[#25d366]/30 bg-[#25d366]/12 px-3 py-1 text-xs font-semibold text-[#b8ffd1]">
                              Respuesta rapida
                            </span>
                            <span className="flex items-center gap-1 text-xs text-white/50">
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#25d366]" />
                              Hover para abrir
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pointer-events-none absolute right-5 top-5 flex items-center gap-1 opacity-0 transition duration-300 group-hover:opacity-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/70 [animation-delay:0ms] animate-pulse" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/70 [animation-delay:150ms] animate-pulse" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/70 [animation-delay:300ms] animate-pulse" />
                      </div>
                    </a>
                  </MotionStaggerItem>
                )}

                <MotionStaggerItem>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                    <p className="text-sm font-semibold text-white/86">Redes y contacto</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {socialLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white/78 transition hover:bg-white/12 hover:text-white"
                        >
                          <link.icon className="h-4 w-4 text-[var(--secondary-light)]" />
                          {link.label}
                        </a>
                      ))}
                      {emailLink && (
                        <a
                          href={emailLink.href}
                          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white/78 transition hover:bg-white/12 hover:text-white"
                        >
                          <Mail className="h-4 w-4 text-[var(--secondary-light)]" />
                          Correo
                        </a>
                      )}
                    </div>
                  </div>
                </MotionStaggerItem>
              </MotionStagger>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
