import { ArrowRight, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { MotionGlow, MotionReveal, MotionStagger, MotionStaggerItem } from '../../../components/motion/motion-primitives'
import { ButtonLink } from '../../../components/ui/button-link'
import { BrandLogo } from '../../../components/brand/brand-logo'
import { VideoBackground } from '../../../components/ui/video-background'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden -mt-28 pb-16 sm:pb-20 lg:pb-28" style={{ background: 'var(--surface-dark)' }}>
      <VideoBackground />

      <MotionGlow className="absolute left-[6%] top-24 h-40 w-40 rounded-full blur-3xl" />
      <div className="container-shell relative z-10 pt-40 sm:pt-44 lg:pt-60">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionStagger>
            <div>
              <MotionStaggerItem>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-md">
                  <Sparkles className="h-4 w-4" />
                  Agencia web moderna para negocios que quieren crecer
                </p>
              </MotionStaggerItem>
              <MotionStaggerItem>
                <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-8xl !text-white">
                  Paginas web modernas que venden mas.
                </h1>
              </MotionStaggerItem>
              <MotionStaggerItem>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl">
                  Sitios rapidos, claros y diseñados para convertir visitantes en clientes. Tecnologia actual para negocios que quieren verse profesionales.
                </p>
              </MotionStaggerItem>
              <MotionStaggerItem>
                <div className="mt-10 flex flex-wrap gap-3">
                  {[
                    { icon: Zap, label: 'Carga rapida' },
                    { icon: ShieldCheck, label: 'Imagen solida' },
                    { icon: Sparkles, label: 'Diseño actual' },
                  ].map(({ icon: Icon, label }) => (
                    <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md">
                      <Icon className="h-4 w-4 text-[#a89bff]" />
                      {label}
                    </span>
                  ))}
                </div>
              </MotionStaggerItem>
              <MotionStaggerItem>
                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                  <ButtonLink to="/contacto">
                    Solicitar cotizacion
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink to="/servicios" variant="ghost">
                    Ver servicios
                  </ButtonLink>
                </div>
              </MotionStaggerItem>
            </div>
          </MotionStagger>

          <MotionReveal delay={0.12}>
            <div className="panel-dark relative overflow-hidden px-6 py-6 sm:px-8 sm:py-10">
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <BrandLogo variant="light" className="h-12 w-auto" />
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/80">
                    Vista previa
                  </span>
                </div>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/8 p-6">
                    <p className="text-sm font-semibold text-white/80">Landing page</p>
                    <div className="mt-5 space-y-3">
                      <div className="h-3 w-3/4 rounded-full bg-white/12" />
                      <div className="h-3 w-full rounded-full bg-white/12" />
                      <div className="h-3 w-1/2 rounded-full bg-white/12" />
                    </div>
                    <div className="mt-6 rounded-xl bg-gradient-to-r from-[#5B2EFF] to-[#8A6BFF] p-3 text-center text-sm font-semibold text-white">
                      CTA principal
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/8 p-6">
                    <p className="text-sm font-semibold text-white/80">Metricas</p>
                    <div className="mt-5 space-y-5">
                      {[
                        { label: 'Visitas', value: '+2.5K' },
                        { label: 'Conversion', value: '8.4%' },
                        { label: 'Tiempo', value: '1.2s' },
                      ].map(({ label, value }) => (
                        <div key={label} className="flex items-center justify-between">
                          <span className="text-sm text-white/60">{label}</span>
                          <span className="text-sm font-semibold text-white">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  )
}
