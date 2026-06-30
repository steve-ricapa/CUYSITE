import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  Globe,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { FinalCta } from '../../components/marketing/final-cta'
import { MotionHover, MotionReveal, MotionStagger, MotionStaggerItem } from '../../components/motion/motion-primitives'
import { ButtonLink } from '../../components/ui/button-link'
import { faqItems, frontendTechItems, infrastructureTechItems } from '../../content/site-content'

const primaryBenefits = [
  {
    icon: Rocket,
    title: 'Carga ultrarrapida',
    description: 'Tu web carga en segundos para que no pierdas visitantes antes de que conozcan tu negocio.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Diseno adaptable',
    description: 'Se ve bien en celulares, tablets y computadoras sin que tu cliente tenga que esforzarse.',
  },
  {
    icon: ShieldCheck,
    title: 'Hosting seguro',
    description: 'Infraestructura moderna con seguridad, SSL y una base mas estable para operar con confianza.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp integrado',
    description: 'Atiendes consultas al instante y conviertes mas visitas en conversaciones reales.',
  },
  {
    icon: BarChart3,
    title: 'Mas visibilidad',
    description: 'Optimizamos tu sitio para ayudarte a aparecer mejor y ser mas facil de encontrar.',
  },
  {
    icon: Sparkles,
    title: 'Diseno profesional',
    description: 'Una presencia mas clara, moderna y confiable para que tu marca destaque.',
  },
  {
    icon: Globe,
    title: 'Facil de administrar',
    description: 'Estructura simple para actualizar contenido sin depender de procesos complicados.',
  },
  {
    icon: BadgeCheck,
    title: 'Soporte humano',
    description: 'Siempre tendras una persona real para ayudarte cuando necesites hacer ajustes.',
  },
]

const comparisonWithout = [
  'Solo dependes de redes y WhatsApp',
  'Horarios limitados',
  'Poca confianza al primer vistazo',
  'Dificil de encontrar',
  'Pierdes clientes cada dia',
]

const comparisonWith = [
  'Disponible 24/7',
  'Imagen profesional y confiable',
  'Te encuentran mas facil',
  'Informacion siempre accesible',
  'Mas contactos y mas ventas',
]

const includes = [
  { icon: MonitorSmartphone, label: 'Diseno responsive' },
  { icon: ShieldCheck, label: 'Certificado SSL' },
  { icon: Search, label: 'SEO basico' },
  { icon: Globe, label: 'Dominio personalizado' },
  { icon: Rocket, label: 'Hosting rapido' },
  { icon: MessageCircle, label: 'WhatsApp integrado' },
  { icon: BadgeCheck, label: 'Formularios de contacto' },
  { icon: Sparkles, label: 'Optimizacion visual' },
  { icon: BarChart3, label: 'Analytics integrado' },
  { icon: ShieldCheck, label: 'Seguridad avanzada' },
]

const stats = [
  { value: '24/7', label: 'Disponible todo el dia' },
  { value: '< 3s', label: 'Carga optimizada' },
  { value: 'SSL', label: 'Conexion segura' },
  { value: 'SEO', label: 'Base optimizada' },
  { value: '100%', label: 'Adaptado a moviles' },
  { value: 'Cloud', label: 'Infraestructura estable' },
]

const comparisonCards = [
  {
    title: 'Sin pagina web',
    toneClassName: 'dark:border-[#ff6b8a]/22 dark:bg-[#391221]',
    bulletWrapClassName: 'bg-red-100 text-red-700 dark:bg-[#ff6b8a]/16 dark:text-[#ff9ab0]',
    items: comparisonWithout,
    icon: '\u00d7',
  },
  {
    title: 'Con Cuysite',
    toneClassName: 'dark:border-emerald-400/16 dark:bg-[#0e2c21]',
    bulletWrapClassName: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-400/14 dark:text-emerald-300',
    items: comparisonWith,
    icon: 'check',
  },
]

const heroBadges = [
  {
    label: 'Rapido',
    className: 'left-[2%] top-[24%] z-20',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    label: 'SSL',
    className: 'left-[1%] top-[58%] z-20',
    iconUrl: '/assets-aws/Architecture-Service-Icons_07312025/Arch_Security-Identity-Compliance/48/Arch_AWS-Certificate-Manager_48.svg',
  },
  {
    label: 'SEO',
    className: 'right-[1%] top-[22%] z-20',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    label: 'WhatsApp',
    className: 'right-[1%] top-[56%] z-20',
    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg',
    iconWrapClassName: 'bg-white',
  },
  {
    label: 'AWS',
    className: 'left-[20%] top-[10%] z-20',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    iconWrapClassName: 'bg-white',
  },
  {
    label: 'Cloudflare',
    className: 'right-[12%] top-[74%] z-20',
    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cloudflare.svg',
    iconWrapClassName: 'bg-white',
  },
  {
    label: 'DNS',
    className: 'left-[18%] top-[72%] z-20',
    iconUrl: '/assets-aws/Architecture-Service-Icons_07312025/Arch_Networking-Content-Delivery/48/Arch_Amazon-Route-53_48.svg',
  },
  {
    label: 'S3',
    className: 'left-[33%] top-[84%] z-20',
    iconUrl: '/assets-aws/Architecture-Service-Icons_07312025/Arch_Storage/48/Arch_Amazon-Simple-Storage-Service_48.svg',
  },
  {
    label: 'React',
    className: 'right-[28%] top-[8%] z-20',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    label: 'TypeScript',
    className: 'right-[24%] top-[82%] z-20',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    label: 'CSS',
    className: 'left-[37%] top-[18%] z-20',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
]

const allTech = [...frontendTechItems, ...infrastructureTechItems].slice(0, 10)

export function BenefitsPage() {
  return (
    <>
      <section className="relative -mt-24 overflow-hidden border-b border-gray-200 bg-gray-50 px-6 pb-12 pt-14 md:pb-14 lg:-mt-28 lg:px-8 lg:pt-18 dark:border-white/8 dark:bg-[#040812] dark:text-white">
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            background:
              'radial-gradient(circle at 70% 22%, rgba(91,46,255,0.28) 0%, rgba(91,46,255,0.1) 22%, rgba(91,46,255,0) 48%), linear-gradient(180deg, #050b1e 0%, #08112e 100%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 block dark:hidden"
          style={{
            background:
              'radial-gradient(circle at 70% 22%, rgba(91,46,255,0.06) 0%, rgba(91,46,255,0.02) 22%, rgba(91,46,255,0) 48%), linear-gradient(180deg, #f0f5ff 0%, #e8f0fe 100%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-60 hidden dark:block"
          style={{
            background:
              'linear-gradient(to right, transparent 0, transparent calc(100% - 1px), rgba(168,155,255,0.12) calc(100% - 1px)), linear-gradient(to bottom, transparent 0, transparent calc(100% - 1px), rgba(168,155,255,0.12) calc(100% - 1px))',
            backgroundSize: '70px 70px',
          }}
          aria-hidden="true"
        />
        <div className="container-shell relative z-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,34rem)] lg:items-start">
            <MotionStagger className="max-w-2xl lg:translate-y-44">
              <MotionStaggerItem>
                <p className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100/80 px-4 py-2 text-sm font-semibold text-gray-700 dark:border-white/12 dark:bg-white/6 dark:text-white/78">
                  Beneficios principales
                </p>
              </MotionStaggerItem>
              <MotionStaggerItem>
                <h1 className="mt-6 max-w-xl text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.03em] text-gray-900 sm:text-[3.6rem] lg:text-[4.5rem] dark:text-white">
                  Beneficios que impulsan <span className="text-[var(--secondary-light)]">tu negocio</span>
                </h1>
              </MotionStaggerItem>
              <MotionStaggerItem>
                <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600 dark:text-white/68">
                  Creamos paginas web que trabajan por ti, generan confianza y te ayudan a conseguir mas clientes sin depender solo de redes sociales.
                </p>
              </MotionStaggerItem>
              <MotionStaggerItem>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink to="/contacto" className="btn-loading shadow-[0_0_38px_var(--secondary-glow)]">
                    Quiero mi pagina web
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink to="/precios" variant="ghost" className="!border-gray-300 !bg-gray-100/80 !text-gray-700 dark:!border-white/12 dark:!bg-white/6 dark:!text-white">
                    Ver precios
                  </ButtonLink>
                </div>
              </MotionStaggerItem>
            </MotionStagger>

            <MotionReveal>
              <div className="relative mx-auto -mt-6 w-full max-w-[34rem] lg:-mt-10">
                {heroBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className={`absolute inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold shadow-[0_0_26px_rgba(168,155,255,0.22)] backdrop-blur-md ${badge.className} border-gray-200 bg-gray-100/80 text-gray-700 dark:border-white/10 dark:bg-white/7 dark:text-white/82`}
                  >
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full ${badge.iconWrapClassName ?? 'bg-gray-200/60 dark:bg-white/8'}`}>
                      <img src={badge.iconUrl} alt={badge.label} className="h-4 w-4 object-contain" loading="lazy" />
                    </span>
                    {badge.label}
                  </div>
                ))}
                <div
                  className="absolute inset-x-6 bottom-10 top-16 rounded-full blur-3xl hidden dark:block"
                  style={{ background: 'radial-gradient(circle, rgba(168,155,255,0.34) 0%, rgba(255,255,255,0.14) 38%, rgba(255,255,255,0) 74%)' }}
                  aria-hidden="true"
                />
                <img src="/assets/cuy-con-cuysite.png" alt="Cuy con Cuysite" className="relative z-10 h-auto w-[108%] max-w-none object-contain" loading="lazy" />
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50 px-6 py-12 lg:px-8 dark:border-white/8 dark:bg-[#040812]">
        <div className="container-shell">
          <MotionReveal>
            <h2 className="text-center text-3xl font-semibold text-gray-900 dark:text-white">
              Beneficios <span className="text-[var(--secondary-light)]">principales</span>
            </h2>
          </MotionReveal>
          <MotionStagger className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {primaryBenefits.map(({ icon: Icon, title, description }) => (
              <MotionStaggerItem key={title}>
                <MotionHover className="h-full">
                  <article className="feature-card-dark h-full rounded-[1.5rem] p-6">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border text-[var(--secondary-light)] border-gray-200 bg-gray-100/80 dark:border-white/10 dark:bg-white/6">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-500 dark:text-white/64">{description}</p>
                  </article>
                </MotionHover>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50 px-6 py-14 lg:px-8 dark:border-white/8 dark:bg-[#040812]">
        <div className="container-shell">
          <MotionReveal>
            <h2 className="text-center text-3xl font-semibold text-gray-900 dark:text-white">
              La diferencia <span className="text-[var(--secondary-light)]">se nota</span>
            </h2>
          </MotionReveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.78fr_1.44fr_0.78fr] lg:items-center">
            <MotionReveal>
              <div className="relative mx-auto w-full max-w-[18rem] lg:max-w-[19rem]">
                <div className="absolute inset-x-3 bottom-3 top-10 rounded-full blur-3xl hidden dark:block" style={{ background: 'radial-gradient(circle, rgba(168,155,255,0.28) 0%, rgba(255,255,255,0) 74%)' }} aria-hidden="true" />
                <img src="/assets/cuy-sin-pagina-web.png" alt="Cuy sin pagina web" className="relative z-10 h-auto w-full object-contain" loading="lazy" />
              </div>
            </MotionReveal>
            <MotionStagger className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
              <MotionStaggerItem>
                <div className={`rounded-[1.9rem] border p-7 shadow-[0_20px_50px_rgba(0,0,0,0.22)] border-red-200 bg-red-50 text-gray-900 ${comparisonCards[0].toneClassName}`}>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{comparisonCards[0].title}</h3>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${comparisonCards[0].bulletWrapClassName}`}>
                      <span className="text-xl font-bold">×</span>
                    </span>
                  </div>
                  <ul className="mt-5 grid gap-3">
                    {comparisonCards[0].items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-700 dark:text-white/86">
                        <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${comparisonCards[0].bulletWrapClassName}`}>
                          <span className="text-sm leading-none">×</span>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionStaggerItem>
              <MotionStaggerItem>
                <div className="mx-auto flex h-full items-center justify-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border text-lg font-semibold border-gray-200 bg-gray-100/80 text-gray-700 dark:border-white/12 dark:bg-white/7 dark:text-white">
                    VS
                  </span>
                </div>
              </MotionStaggerItem>
              <MotionStaggerItem>
                <div className={`rounded-[1.9rem] border p-7 shadow-[0_20px_50px_rgba(0,0,0,0.22)] border-emerald-200 bg-emerald-50 text-gray-900 ${comparisonCards[1].toneClassName}`}>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{comparisonCards[1].title}</h3>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${comparisonCards[1].bulletWrapClassName}`}>
                      <Check className="h-4 w-4" />
                    </span>
                  </div>
                  <ul className="mt-5 grid gap-3">
                    {comparisonCards[1].items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-700 dark:text-white/86">
                        <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${comparisonCards[1].bulletWrapClassName}`}>
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionStaggerItem>
            </MotionStagger>
            <MotionReveal>
              <div className="relative mx-auto w-full max-w-[18rem] lg:max-w-[19rem]">
                <div className="absolute inset-x-3 bottom-3 top-10 rounded-full blur-3xl hidden dark:block" style={{ background: 'radial-gradient(circle, rgba(168,155,255,0.28) 0%, rgba(255,255,255,0) 74%)' }} aria-hidden="true" />
                <img src="/assets/cuy-con-cuysite.png" alt="Cuy con Cuysite" className="relative z-10 h-auto w-full object-contain" loading="lazy" />
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50 px-6 py-14 lg:px-8 dark:border-white/8 dark:bg-[#040812]">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <MotionReveal>
            <div className="max-w-xl">
              <h2 className="text-4xl font-semibold leading-tight text-gray-900 dark:text-white">
                Tu web trabaja <span className="text-[var(--secondary-light)]">mientras tu descansas</span>
                <br />
                y atiende por ti
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-white/68">
                Tu pagina sigue activa 24/7 atrayendo, respondiendo y convirtiendo visitantes en oportunidades para tu negocio.
              </p>
            </div>
          </MotionReveal>
          <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <MotionReveal>
              <div className="feature-card-dark overflow-hidden rounded-[1.75rem] p-0">
                <div className="relative flex min-h-[20rem] items-center justify-center overflow-hidden px-6 py-8 dark:bg-[radial-gradient(circle_at_top,rgba(168,155,255,0.22),rgba(5,11,30,0.18)_55%,rgba(5,11,30,0)_82%)] bg-[radial-gradient(circle_at_top,rgba(168,155,255,0.08),rgba(200,210,240,0.5)_55%,rgba(200,210,240,0)_82%)]">
                  <div className="w-full max-w-[18rem] rounded-[2rem] border p-5 shadow-[0_24px_70px_rgba(0,0,0,0.32)] border-gray-200 bg-gray-100/80 dark:border-white/10 dark:bg-[#0d1738]/86">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-white/58">
                      <span>Actividad</span>
                      <span className="rounded-full bg-emerald-400/14 px-2 py-1 text-emerald-300">En linea</span>
                    </div>
                    <div className="mt-5 grid gap-3">
                      {[
                        'Nuevo cliente detectado',
                        'Consulta recibida',
                        'Formulario completado',
                        'WhatsApp abierto',
                      ].map((item, index) => (
                        <div key={item} className="flex items-center gap-3 rounded-[1rem] border px-4 py-3 text-sm border-gray-200 bg-gray-100/80 text-gray-700 dark:border-white/8 dark:bg-white/6 dark:text-white/82">
                          <span className={`h-2.5 w-2.5 rounded-full ${index === 0 ? 'bg-emerald-300' : index === 1 ? 'bg-[var(--secondary-light)]' : index === 2 ? 'bg-sky-300' : 'bg-amber-300'}`} />
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 rounded-[1rem] border px-4 py-3 text-sm border-gray-200 bg-gray-100/80 text-gray-500 dark:border-white/8 dark:bg-white/6 dark:text-white/64">
                      Tu web sigue trabajando incluso cuando no estas conectado.
                    </div>
                  </div>
                </div>
              </div>
            </MotionReveal>
            <MotionStagger className="grid gap-3">
              {[
                { label: 'Disponible 24/7', icon: Globe },
                { label: 'Responde consultas', icon: MessageCircle },
                { label: 'Atrae nuevos clientes', icon: Rocket },
                { label: 'Genera mas ventas', icon: BarChart3 },
              ].map(({ label, icon: Icon }) => (
                <MotionStaggerItem key={label}>
                  <div className="group flex items-center gap-4 rounded-2xl border px-5 py-4 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_-8px_rgba(91,46,255,0.12),0_8px_32px_-8px_rgba(0,0,0,0.3)] border-gray-200 bg-white dark:border-white/[0.06] dark:bg-white/[0.03] dark:hover:border-white/[0.15] dark:hover:bg-white/[0.06]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[var(--secondary-light)] ring-1 transition-all duration-300 bg-gray-100/80 ring-gray-200 group-hover:bg-gray-200/60 group-hover:ring-gray-300 dark:bg-white/[0.06] dark:ring-white/[0.06] dark:group-hover:bg-white/[0.1] dark:group-hover:ring-white/[0.12]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:text-gray-900 dark:text-white/80 dark:group-hover:text-white/90">{label}</span>
                  </div>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50 px-6 py-14 lg:px-8 dark:border-white/8 dark:bg-[#040812]">
        <div className="container-shell">
          <MotionReveal>
            <h2 className="text-center text-3xl font-semibold text-gray-900 dark:text-white">
              Todo lo que puede incluir <span className="text-[var(--secondary-light)]">tu pagina web</span>
            </h2>
          </MotionReveal>
          <MotionStagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {includes.map(({ icon: Icon, label }) => (
              <MotionStaggerItem key={label}>
                <div className="feature-card-dark flex h-full items-center gap-3 rounded-[1.25rem] p-4 text-sm font-medium text-gray-700 dark:text-white/82">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[var(--secondary-light)] bg-gray-100/80 dark:bg-white/6">
                    <Icon className="h-5 w-5" />
                  </span>
                  {label}
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50 px-6 py-14 lg:px-8 dark:border-white/8 dark:bg-[#040812]">
        <div className="container-shell">
          <MotionReveal>
            <h2 className="text-center text-3xl font-semibold text-gray-900 dark:text-white">
              Tecnologias modernas para <span className="text-[var(--secondary-light)]">resultados reales</span>
            </h2>
            <p className="mt-4 text-center text-sm text-gray-500 dark:text-white/60">
              Usamos una base moderna para que tu web sea rapida, segura y mas facil de mantener a futuro.
            </p>
          </MotionReveal>
          <MotionStagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {allTech.map((item) => (
              <MotionStaggerItem key={item.title}>
                <div className="feature-card-dark flex items-center gap-3 rounded-[1.2rem] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-white/7">
                    {item.iconUrl ? <img src={item.iconUrl} alt={item.name} className="h-6 w-6 object-contain" loading="lazy" /> : null}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.title}</p>
                    <p className="mt-1 text-xs text-gray-400 dark:text-white/56">{item.name}</p>
                  </div>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50 px-6 py-14 lg:px-8 dark:border-white/8 dark:bg-[#040812]">
        <div className="container-shell">
          <MotionReveal>
            <h2 className="text-center text-3xl font-semibold text-gray-900 dark:text-white">
              Resultados que <span className="text-[var(--secondary-light)]">nos enorgullecen</span>
            </h2>
          </MotionReveal>
          <MotionStagger className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
            {stats.map((item) => (
              <MotionStaggerItem key={item.label}>
                <div className="feature-card-dark rounded-[1.3rem] p-5 text-center">
                  <p className="text-4xl font-semibold text-[var(--secondary-light)]">{item.value}</p>
                  <p className="mt-3 text-sm text-gray-500 dark:text-white/64">{item.label}</p>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50 px-6 py-10 lg:px-8 dark:border-white/8 dark:bg-[#040812]">
        <div className="container-shell">
          <MotionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100/80 px-4 py-2 text-sm font-semibold text-gray-700 dark:border-white/12 dark:bg-white/6 dark:text-white/78">
                FAQ interactivo
              </p>
              <h2 className="mt-5 text-3xl font-semibold text-gray-900 sm:text-4xl dark:text-white">
                Resolvemos <span className="text-[var(--secondary-light)]">tus dudas</span>
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-white/60">
                Abre cada pregunta para ver la respuesta.
              </p>
            </div>
          </MotionReveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-2 lg:gap-6">
            <MotionStagger className="grid gap-4">
              {faqItems.slice(0, 3).map((item, index) => (
                <MotionStaggerItem key={item.question}>
                  <details className="group rounded-[1.25rem] border p-4 transition border-gray-200 bg-white dark:border-white/8 dark:bg-white/[0.03] dark:hover:border-white/16">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold text-[var(--secondary-light)] border-gray-200 bg-gray-100/80 dark:border-white/10 dark:bg-white/8">
                          {index + 1}
                        </span>
                        <span className="text-sm font-semibold text-gray-900 sm:text-base dark:text-white">{item.question}</span>
                      </div>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition duration-200 group-open:rotate-45 border-gray-200 bg-gray-100/80 text-gray-600 dark:border-white/10 dark:bg-white/8 dark:text-white/70">
                        +
                      </span>
                    </summary>
                    <div className="faq-content">
                      <div className="overflow-hidden">
                        <div className="mt-3 border-t border-gray-200 pt-3 dark:border-white/8">
                          <p className="max-w-3xl text-sm leading-6 text-gray-500 dark:text-white/60">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </details>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
            <MotionStagger className="grid gap-4">
              {faqItems.slice(3).map((item, index) => (
                <MotionStaggerItem key={item.question}>
                  <details className="group rounded-[1.25rem] border p-4 transition border-gray-200 bg-white dark:border-white/8 dark:bg-white/[0.03] dark:hover:border-white/16">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold text-[var(--secondary-light)] border-gray-200 bg-gray-100/80 dark:border-white/10 dark:bg-white/8">
                          {index + 4}
                        </span>
                        <span className="text-sm font-semibold text-gray-900 sm:text-base dark:text-white">{item.question}</span>
                      </div>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition duration-200 group-open:rotate-45 border-gray-200 bg-gray-100/80 text-gray-600 dark:border-white/10 dark:bg-white/8 dark:text-white/70">
                        +
                      </span>
                    </summary>
                    <div className="faq-content">
                      <div className="overflow-hidden">
                        <div className="mt-3 border-t border-gray-200 pt-3 dark:border-white/8">
                          <p className="max-w-3xl text-sm leading-6 text-gray-500 dark:text-white/60">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </details>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>

          <div className="mt-8 flex justify-center">
            <img src="/assets/cuy-contacto.png" alt="" className="h-auto w-24 select-none opacity-25 lg:w-28" loading="lazy" />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
