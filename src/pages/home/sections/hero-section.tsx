import { useState } from 'react'
import { ArrowRight, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { MotionGlow, MotionStagger, MotionStaggerItem } from '../../../components/motion/motion-primitives'
import { ButtonLink } from '../../../components/ui/button-link'
import { VideoBackground } from '../../../components/ui/video-background'
import { Particles } from '../../../components/ui/particles'

export function HeroSection() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <section className="relative overflow-hidden -mt-28 pb-16 sm:pb-20 lg:pb-28" style={{ background: 'var(--surface-dark)' }}>
      <VideoBackground playing={videoPlaying} />
      <Particles
        particleCount={180}
        particleSpread={10}
        speed={0.08}
        particleColors={['#ffffff']}
        moveParticlesOnHover
        particleHoverFactor={0.7}
        alphaParticles={false}
        particleBaseSize={82}
        sizeRandomness={0.8}
        cameraDistance={18}
        disableRotation={false}
        pixelRatio={1}
      />

      <MotionGlow className="absolute left-[6%] top-24 h-40 w-40 rounded-full blur-3xl" />
      <div className="container-shell relative z-10 pt-36 sm:pt-40 lg:pt-52">
        <MotionStagger className="mx-auto max-w-4xl text-center">
          <MotionStaggerItem>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              Agencia web moderna para negocios que quieren crecer
            </p>
          </MotionStaggerItem>
          <MotionStaggerItem>
            <h1 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-8xl !text-white">
              Paginas web modernas que venden mas.
            </h1>
          </MotionStaggerItem>
          <MotionStaggerItem>
            <p className="mt-8 mx-auto max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl">
              Sitios rapidos, claros y diseñados para convertir visitantes en clientes. Tecnologia actual para negocios que quieren verse profesionales.
            </p>
          </MotionStaggerItem>
          <MotionStaggerItem>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
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
            <div className="relative mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <MotionGlow className="absolute -inset-12 rounded-full blur-3xl opacity-60" />
              <ButtonLink
                to="/contacto"
                className="btn-loading relative shadow-[0_0_40px_var(--secondary-glow)]"
                onMouseEnter={() => setVideoPlaying(true)}
                onMouseLeave={() => setVideoPlaying(false)}
              >
                Solicitar cotizacion
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink to="/servicios" variant="ghost" className="!text-white">
                Ver servicios
              </ButtonLink>
            </div>
          </MotionStaggerItem>
        </MotionStagger>
      </div>
    </section>
  )
}
