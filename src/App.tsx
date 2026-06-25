import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Globe,
  Handshake,
  Headset,
  Instagram,
  LayoutTemplate,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  ShoppingBag,
  Sparkles,
  Store,
  WalletCards,
  type LucideIcon,
} from 'lucide-react'
import type { ReactNode } from 'react'
import {
  Link,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom'
import logoDark from '../logo-principal-tema-oscuro.png'
import logoLight from '../logo-principal-tema-blanco.png'

type Benefit = {
  icon: LucideIcon
  title: string
  description: string
}

type Service = {
  icon: LucideIcon
  title: string
  description: string
}

type ContactLink = {
  icon: LucideIcon
  label: string
  value: string
  href: string
}

const benefits: Benefit[] = [
  {
    icon: Globe,
    title: 'Mas clientes',
    description:
      'Haz que te encuentren online y convierte visitas en consultas reales para tu negocio.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Presencia 24/7',
    description:
      'Tu web trabaja por ti todo el dia mostrando servicios, horarios, contacto y confianza.',
  },
  {
    icon: BadgeCheck,
    title: 'Mayor confianza',
    description:
      'Una imagen profesional hace que tu marca se vea seria, moderna y lista para vender.',
  },
  {
    icon: WalletCards,
    title: 'Mas ventas',
    description:
      'Diseñamos paginas enfocadas en accion para que mas personas te escriban o compren.',
  },
]

const services: Service[] = [
  {
    icon: LayoutTemplate,
    title: 'Landing Pages',
    description: 'Paginas enfocadas en campañas, anuncios y conversion.',
  },
  {
    icon: Store,
    title: 'Paginas para negocios',
    description:
      'Sitios claros y profesionales para empresas, marcas y emprendimientos.',
  },
  {
    icon: ShoppingBag,
    title: 'Tiendas online',
    description:
      'Escaparates digitales listos para mostrar productos y captar pedidos.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Portafolios profesionales',
    description:
      'Muestra tu trabajo, experiencia y propuesta de valor con estilo.',
  },
  {
    icon: Headset,
    title: 'Mantenimiento y soporte',
    description:
      'Acompañamiento continuo para mantener tu sitio actualizado y en orden.',
  },
]

const steps = [
  {
    title: 'Cuentanos tu idea',
    description:
      'Escuchamos tu objetivo, tu rubro y lo que necesitas comunicar para enfocar la web correctamente.',
  },
  {
    title: 'Diseñamos',
    description:
      'Definimos estructura, estilo visual y experiencia de usuario para que tu marca destaque.',
  },
  {
    title: 'Desarrollamos',
    description:
      'Construimos una web moderna, rapida y adaptable a celulares con buenas practicas.',
  },
  {
    title: 'Publicamos',
    description:
      'Dejamos tu pagina lista para salir al aire y empezar a mostrar tu negocio al mundo.',
  },
  {
    title: 'Brindamos soporte',
    description:
      'Seguimos contigo para mejoras, ajustes y mantenimiento posterior cuando lo necesites.',
  },
]

const faqs = [
  {
    question: '¿Cuanto demora?',
    answer:
      'Depende del alcance, pero una pagina informativa suele tomar entre 1 y 3 semanas.',
  },
  {
    question: '¿Incluye dominio?',
    answer:
      'Podemos ayudarte a gestionarlo. El dominio puede incluirse o cotizarse aparte segun el proyecto.',
  },
  {
    question: '¿Incluye hosting?',
    answer:
      'Si lo necesitas, podemos recomendarlo o incluirlo dentro de una propuesta completa.',
  },
  {
    question: '¿Puedo pagar en partes?',
    answer:
      'Si. Podemos trabajar con adelanto inicial y pagos por etapas segun el proyecto.',
  },
  {
    question: '¿La pagina se adapta a celulares?',
    answer:
      'Si. Todos nuestros sitios se desarrollan para verse bien en celular, tablet y escritorio.',
  },
]

const contactLinks: ContactLink[] = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+51 999 999 999',
    href: 'https://wa.me/51999999999',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@cuysite',
    href: 'https://instagram.com/cuysite',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: 'hola@cuysite.com',
    href: 'mailto:hola@cuysite.com',
  },
]

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/beneficios', label: 'Beneficios' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proceso', label: 'Proceso' },
  { to: '/precios', label: 'Precios' },
  { to: '/contacto', label: 'Contacto' },
]

const quickLinks = [
  {
    title: 'Beneficios',
    description: 'Por que una pagina web puede ayudarte a vender y dar confianza.',
    to: '/beneficios',
  },
  {
    title: 'Servicios',
    description: 'Tipos de paginas que desarrollamos para marcas y negocios.',
    to: '/servicios',
  },
  {
    title: 'Proceso',
    description: 'Asi trabajamos desde la idea hasta la publicacion.',
    to: '/proceso',
  },
  {
    title: 'Precios',
    description: 'Rango inicial y factores que influyen en la cotizacion final.',
    to: '/precios',
  },
  {
    title: 'Contacto',
    description: 'Formulario, WhatsApp, Instagram y correo para empezar.',
    to: '/contacto',
  },
]

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="beneficios" element={<BenefitsPage />} />
        <Route path="servicios" element={<ServicesPage />} />
        <Route path="proceso" element={<ProcessPage />} />
        <Route path="precios" element={<PricingPage />} />
        <Route path="contacto" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function SiteLayout() {
  return (
    <div className="min-h-screen bg-[var(--surface-soft)] text-[var(--text)]">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoDark} alt="Cuysite" className="h-11 w-auto" />
            </Link>
            <Link to="/contacto" className="btn-primary md:hidden">
              Cotizar
            </Link>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-[var(--primary)] md:gap-4 xl:justify-center">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : ''}`
                }
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/contacto" className="btn-primary hidden md:inline-flex">
            Solicitar cotizacion
          </Link>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-[var(--border)] bg-white px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src={logoDark} alt="Cuysite" className="h-10 w-auto" />
            <p className="text-sm text-[var(--text-soft)]">
              Paginas web modernas para negocios y emprendedores.
            </p>
          </div>
          <p className="text-sm text-[var(--text-soft)]">
            © 2026 Cuysite. Hecho con diseño amigable y tecnologia moderna.
          </p>
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-18">
        <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_right,_rgba(124,99,255,0.18),_transparent_35%),linear-gradient(180deg,#FFFFFF_0%,#F7F8FC_100%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--primary)] shadow-[0_10px_25px_rgba(9,21,74,.08)]">
              <Sparkles className="h-4 w-4 text-[var(--secondary)]" />
              Paginas web modernas para hacer crecer tu negocio
            </div>
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight text-[var(--primary)] sm:text-5xl lg:text-6xl">
              Tu negocio merece una web que inspire confianza y genere clientes.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-soft)]">
              En Cuysite creamos paginas web rapidas, responsivas y profesionales para negocios, emprendedores y marcas que quieren destacar online.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contacto" className="btn-primary justify-center">
                Solicitar cotizacion
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/servicios" className="btn-secondary justify-center">
                Ver servicios
              </Link>
            </div>
            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {['Diseño profesional', 'Compatible con celulares', 'Soporte cercano'].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-[var(--border)] bg-white px-4 py-4 text-sm font-medium text-[var(--primary)] shadow-[0_10px_25px_rgba(9,21,74,.08)]"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -left-2 top-10 hidden rounded-3xl bg-white p-4 shadow-[0_15px_35px_rgba(9,21,74,.12)] sm:block">
              <p className="text-sm font-semibold text-[var(--primary)]">Mascota de marca</p>
              <p className="mt-1 text-sm text-[var(--text-soft)]">
                El cuy programador que acompaña la experiencia.
              </p>
            </div>
            <div className="absolute -right-2 bottom-12 hidden rounded-3xl bg-[var(--primary)] p-4 text-white shadow-[0_15px_35px_rgba(9,21,74,.18)] sm:block">
              <p className="text-sm font-semibold">Mockup moderno</p>
              <p className="mt-1 text-sm text-white/80">
                Pensado para vender y verse bien en cualquier pantalla.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/70 bg-white p-4 shadow-[0_18px_60px_rgba(9,21,74,.12)]">
              <div className="rounded-[1.6rem] bg-[linear-gradient(135deg,#09154A_0%,#5B2EFF_100%)] p-5 sm:p-7">
                <div className="grid gap-4 lg:grid-cols-[0.62fr_0.38fr]">
                  <div className="rounded-[1.4rem] bg-white p-5 shadow-[0_10px_25px_rgba(9,21,74,.12)]">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[var(--primary)]">Cuysite</span>
                      <span className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--secondary)]">
                        Web lista
                      </span>
                    </div>
                    <div className="mt-6 rounded-[1.25rem] bg-[var(--surface)] p-5">
                      <img src={logoDark} alt="Logo Cuysite oscuro" className="h-16 w-auto" />
                      <div className="mt-4 space-y-3">
                        <div className="h-3 w-3/4 rounded-full bg-[var(--primary)]/12" />
                        <div className="h-3 w-full rounded-full bg-[var(--secondary)]/12" />
                        <div className="h-3 w-2/3 rounded-full bg-[var(--primary)]/12" />
                      </div>
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl bg-white p-4 shadow-[0_10px_25px_rgba(9,21,74,.08)]">
                          <div className="h-20 rounded-2xl bg-[linear-gradient(180deg,#F7F8FC,#EEF1FF)]" />
                        </div>
                        <div className="rounded-2xl bg-white p-4 shadow-[0_10px_25px_rgba(9,21,74,.08)]">
                          <div className="h-20 rounded-2xl bg-[linear-gradient(180deg,#F8F2EA,#FFF6E9)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="rounded-[1.4rem] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                      <p className="text-sm font-semibold text-white/90">Mascota / identidad</p>
                      <div className="mt-4 rounded-[1.25rem] bg-white/95 p-4">
                        <img src={logoDark} alt="Mascota Cuysite" className="mx-auto h-44 w-auto object-contain" />
                      </div>
                    </div>
                    <div className="rounded-[1.4rem] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                      <p className="text-sm font-semibold text-white/90">Vista oscura</p>
                      <div className="mt-4 rounded-[1.25rem] bg-[var(--primary)] p-5">
                        <img src={logoLight} alt="Logo Cuysite claro" className="h-12 w-auto" />
                        <div className="mt-4 space-y-3">
                          <div className="h-3 w-full rounded-full bg-white/18" />
                          <div className="h-3 w-4/5 rounded-full bg-white/14" />
                          <div className="h-3 w-2/3 rounded-full bg-white/18" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="section-kicker">Explora Cuysite</p>
            <h2 className="section-title">
              Cada tema importante ahora tiene su propia pagina.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {quickLinks.map((item) => (
              <Link key={item.to} to={item.to} className="card group">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition group-hover:text-[var(--secondary)]">
                  Ir a la pagina
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}

function BenefitsPage() {
  return (
    <>
      <PageHero
        kicker="Beneficios"
        title="Una pagina web bien hecha puede convertirse en tu mejor vendedor digital."
        description="No se trata solo de estar en internet, sino de tener una presencia profesional que genere confianza, consultas y mas oportunidades."
      />
      <SectionShell>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article key={title} className="card">
              <div className="icon-chip">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--primary)]">{title}</h3>
              <p className="mt-3 text-[var(--text-soft)]">{description}</p>
            </article>
          ))}
        </div>
      </SectionShell>
      <FinalCta />
    </>
  )
}

function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Servicios"
        title="Desarrollamos paginas web segun el objetivo real de tu negocio."
        description="Cada servicio responde a una necesidad distinta: captar leads, mostrar credibilidad, vender productos o presentar tu trabajo de forma profesional."
      />
      <SectionShell background="white">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <article key={title} className="card group">
              <div className="icon-chip transition group-hover:bg-[var(--secondary)] group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--primary)]">{title}</h3>
              <p className="mt-3 text-[var(--text-soft)]">{description}</p>
            </article>
          ))}
        </div>
      </SectionShell>
      <FinalCta />
    </>
  )
}

function ProcessPage() {
  return (
    <>
      <PageHero
        kicker="Proceso"
        title="Trabajamos con un proceso claro para que sepas que pasa en cada etapa."
        description="Desde la idea hasta la publicacion, buscamos que el proyecto avance con orden, buena comunicacion y enfoque en resultados."
      />
      <SectionShell>
        <div className="mx-auto grid max-w-5xl gap-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex items-start gap-4 rounded-[1.5rem] border border-[var(--border)] bg-white p-5 shadow-[0_10px_25px_rgba(9,21,74,.08)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(90deg,#5B2EFF,#8A6BFF)] text-lg font-semibold text-white shadow-[0_8px_18px_rgba(91,46,255,.25)]">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--primary)]">{step.title}</h3>
                <p className="mt-2 text-[var(--text-soft)]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>
      <FinalCta />
    </>
  )
}

function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Precios"
        title="Cada proyecto se cotiza segun lo que realmente necesita tu negocio."
        description="Te damos una referencia inicial, pero el monto final depende del alcance, funciones, contenido, integraciones y nivel de soporte requerido."
      />
      <SectionShell background="white">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[linear-gradient(135deg,#09154A_0%,#5B2EFF_100%)] p-8 text-white shadow-[0_18px_60px_rgba(9,21,74,.18)] sm:p-10 lg:p-14">
          <p className="section-kicker !border-white/20 !bg-white/10 !text-white/85">
            Planes o precios
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Desde S/. XXX</h2>
              <p className="mt-4 max-w-2xl text-white/80">
                El precio final depende del tipo de pagina, la cantidad de secciones,
                funciones especiales, integraciones y soporte requerido.
              </p>
            </div>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--secondary)] transition hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(9,21,74,.12)]"
            >
              Pedir cotizacion
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionShell>
      <FinalCta />
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contacto"
        title="Cuéntanos tu proyecto y te ayudamos a convertirlo en una web clara, moderna y profesional."
        description="Escribenos por formulario, WhatsApp, Instagram o correo. Tambien dejamos aqui las preguntas frecuentes para que tengas una respuesta rapida antes de empezar."
      />
      <SectionShell background="white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--primary)]">Hablemos</h2>
            <p className="mt-5 max-w-xl text-[var(--text-soft)]">
              Si tienes una idea, un negocio o quieres mejorar tu presencia digital,
              escribenos y conversemos.
            </p>
            <div className="mt-8 space-y-4">
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 transition hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(9,21,74,.12)]"
                >
                  <div className="icon-chip">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--text-soft)]">{label}</p>
                    <p className="font-semibold text-[var(--primary)]">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface-soft)] p-6 shadow-[0_10px_25px_rgba(9,21,74,.08)] sm:p-8">
            <form className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-[var(--primary)]">
                  Nombre
                  <input type="text" placeholder="Tu nombre" className="input-base" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[var(--primary)]">
                  Negocio
                  <input
                    type="text"
                    placeholder="Nombre de tu negocio"
                    className="input-base"
                  />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-[var(--primary)]">
                  Correo
                  <input type="email" placeholder="tu@correo.com" className="input-base" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[var(--primary)]">
                  WhatsApp
                  <input type="tel" placeholder="Tu numero" className="input-base" />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium text-[var(--primary)]">
                ¿Que necesitas?
                <textarea
                  placeholder="Cuéntanos tu idea, tipo de pagina y objetivo principal."
                  rows={5}
                  className="input-base resize-none"
                />
              </label>
              <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
                Solicitar cotizacion
              </button>
            </form>
          </div>
        </div>
      </SectionShell>
      <SectionShell>
        <div className="max-w-5xl">
          <div className="max-w-2xl">
            <p className="section-kicker">Preguntas frecuentes</p>
            <h2 className="section-title">
              Resolvemos las dudas mas comunes antes de empezar.
            </h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-[1.5rem] border border-[var(--border)] bg-white p-6 shadow-[0_10px_25px_rgba(9,21,74,.08)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-[var(--primary)]">
                  {question}
                  <span className="rounded-full bg-[var(--surface)] px-3 py-1 text-sm text-[var(--secondary)] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-[var(--text-soft)]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>
      <FinalCta />
    </>
  )
}

function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string
  title: string
  description: string
}) {
  return (
    <section className="px-6 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F8FC_100%)] px-8 py-12 shadow-[0_18px_60px_rgba(9,21,74,.08)] sm:px-10 lg:px-14 lg:py-16">
        <p className="section-kicker">{kicker}</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-[var(--primary)] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-soft)]">
          {description}
        </p>
      </div>
    </section>
  )
}

function SectionShell({
  children,
  background,
}: {
  children: ReactNode
  background?: 'white'
}) {
  return (
    <section className={`${background === 'white' ? 'bg-white' : ''} px-6 py-20 lg:px-8`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="px-6 pb-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-[var(--primary)] px-8 py-10 text-white shadow-[0_18px_60px_rgba(9,21,74,.18)] sm:px-10 lg:flex lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
            CTA final
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold">
            Haz que tu negocio se vea profesional desde hoy con Cuysite.
          </h2>
        </div>
        <Link
          to="/contacto"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--secondary)] transition hover:-translate-y-0.5 lg:mt-0"
        >
          Empezar proyecto
          <Handshake className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

export default App
