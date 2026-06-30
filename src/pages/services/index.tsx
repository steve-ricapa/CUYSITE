import { FinalCta } from '../../components/marketing/final-cta'
import { ServicesHeroReel } from './sections/services-hero-reel'
import { ServicesShowcaseSection } from './sections/services-showcase-section'
import { ServicesCapabilitiesSection } from './sections/services-capabilities-section'
import {
  Buildings,
  RocketLaunch,
  Scales,
  Stethoscope,
  Brain,
  Camera,
  Briefcase,
  Sparkle,
} from '@phosphor-icons/react'
import {
  Building2,
  LayoutTemplate,
  BriefcaseBusiness,
  Sparkles,
  ShoppingBag,
  Puzzle,
  CalendarCheck,
  CalendarClock,
  ShoppingCart,
  Users,
  Image,
  List,
  Palette,
  Smartphone,
  Zap,
  MessageCircle,
  Shield,
  Headset,
} from 'lucide-react'
import { MotionReveal, MotionStagger, MotionStaggerItem } from '../../components/motion/motion-primitives'

const services = [
  {
    title: 'Sitios web corporativos',
    description: 'Presencia profesional con pagina completa, secciones informativas y diseno adaptado a la identidad de tu marca.',
    icon: Building2,
    image: '/assets/cuy-servicio1.png',
    gradient: 'from-blue-50 to-blue-100/60 dark:from-blue-950/40 dark:to-blue-900/30',
    iconBg: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300',
  },
  {
    title: 'Landing pages',
    description: 'Paginas de una sola vista optimizadas para campanas, lanzamientos y convertir visitantes en clientes.',
    icon: LayoutTemplate,
    image: '/assets/cuy-servicio2.png',
    gradient: 'from-sky-50 to-sky-100/60 dark:from-sky-950/40 dark:to-sky-900/30',
    iconBg: 'bg-sky-100 text-sky-600 dark:bg-sky-900/50 dark:text-sky-300',
  },
  {
    title: 'Portafolios profesionales',
    description: 'Escaparate digital para mostrar tu trabajo, proyectos y experiencia con un diseno visual que impacta.',
    icon: BriefcaseBusiness,
    image: '/assets/cuy-servicio3.png',
    gradient: 'from-indigo-50 to-indigo-100/60 dark:from-indigo-950/40 dark:to-indigo-900/30',
    iconBg: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300',
  },
  {
    title: 'Marca personal',
    description: 'Un sitio creado para destacar tu perfil profesional, tus servicios y lo que te hace unico.',
    icon: Sparkles,
    image: '/assets/cuy-servicio4.png',
    gradient: 'from-violet-50 to-violet-100/60 dark:from-violet-950/40 dark:to-violet-900/30',
    iconBg: 'bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-300',
  },
  {
    title: 'Tiendas online',
    description: 'Catalogos digitales para mostrar productos, recibir pedidos y crecer sin necesidad de una plataforma compleja.',
    icon: ShoppingBag,
    image: '/assets/cuy-servicio5.png',
    gradient: 'from-cyan-50 to-cyan-100/60 dark:from-cyan-950/40 dark:to-cyan-900/30',
    iconBg: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-300',
  },
  {
    title: 'Soluciones personalizadas',
    description: 'Funcionalidades a medida: sistemas de reservas, portales privados o lo que tu proyecto necesite.',
    icon: Puzzle,
    image: '/assets/cuy-servicio6.png',
    gradient: 'from-teal-50 to-teal-100/60 dark:from-teal-950/40 dark:to-teal-900/30',
    iconBg: 'bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-300',
  },
]

const profiles = [
  { name: 'Empresas', tagline: 'Presencia corporativa profesional y confiable', icon: Buildings },
  { name: 'Emprendedores', tagline: 'Tu primer sitio web para arrancar con todo', icon: RocketLaunch },
  { name: 'Abogados', tagline: 'Confianza que se transmite desde el primer clic', icon: Scales },
  { name: 'Medicos y consultorios', tagline: 'Informacion clara y accesible para tus pacientes', icon: Stethoscope },
  { name: 'Psicologos y coaches', tagline: 'Un espacio digital que refleje tu metodo', icon: Brain },
  { name: 'Fotografos y creativos', tagline: 'Tu portafolio habla antes que tu', icon: Camera },
  { name: 'Consultores y freelancers', tagline: 'Diferencia profesional en un mercado competitivo', icon: Briefcase },
  { name: 'Marcas personales', tagline: 'Construye autoridad con presencia digital propia', icon: Sparkle },
]

const useCases = [
  {
    title: 'Reservas online',
    desc: 'Tus clientes agendan servicios directo desde tu web, sin llamadas ni mensajes de ida y vuelta. El sistema les muestra los horarios reales disponibles, ellos eligen el que les queda bien y la reserva queda confirmada al instante. Sin esperar a que les respondas, sin "te llamo para coordinar", sin cadenas interminables de WhatsApp. Cada reserva te llega automáticamente con todos los datos: nombre del cliente, servicio seleccionado, fecha y hora. Tú solo te preocupas de llegar y dar el servicio. Funciona 24/7, incluso cuando estás dormido, de vacaciones o atendiendo a otro cliente. Es como tener una recepcionista digital que nunca se cansa, nunca se equivoca y nunca pide aumento. Además, el cliente recibe una confirmación automática y puede reprogramar o cancelar si lo necesita, todo sin involucrarte. Menos fricción, más reservas, más clientes felices.',
    icon: CalendarCheck,
    kind: 'calendar',
    accent: '#0891b2',
    soft: '#cffafe',
    accentClass: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-300',
  },
  {
    title: 'Agenda de citas',
    desc: 'Un calendario vivo sincronizado con tu disponibilidad real. Tus clientes ven exactamente los horarios libres que tienes, sin que puedan agendar en un espacio que ya está ocupado. Eligen el día, la hora y el servicio, y la cita queda agendada al instante. Tú recibes una notificación automática con el nombre del cliente, el servicio que reservó, la fecha y la hora. Fin de los correos interminables, los "¿qué horas tienes disponibles?", los screenshots del calendario y los mensajes a las 11 de la noche preguntando si hay espacio mañana. El sistema también envía recordatorios automáticos al cliente, lo que reduce drásticamente las cancelaciones de último minuto y los no-shows. Si cambia tu disponibilidad, actualizas una vez y el calendario se ajusta solo. Más orden, menos tiempo perdido coordinando, más citas concretadas sin esfuerzo.',
    icon: CalendarClock,
    kind: 'clock',
    accent: '#7c3aed',
    soft: '#ede9fe',
    accentClass: 'bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-300',
  },
  {
    title: 'Venta de productos',
    desc: 'Tu tienda online completa funcionando en tu propia web, sin depender de mercados externos ni plataformas que te cobran comisión por cada venta. Catálogo visual con fotos grandes, precios claros, descripciones detalladas y stock visible. Tus clientes navegan, eligen lo que quieren, lo agregan al carrito y envían su pedido con un par de clics. Tú recibes cada venta con toda la información: qué producto compraron, en qué cantidad, datos del cliente y el total exacto. Ideal para emprendedores, pequeños fabricantes, artistas o cualquier negocio que venda productos físicos o digitales. Tus clientes pueden comprar a cualquier hora, desde cualquier dispositivo, sin esperar a que les respondas un mensaje. Tú solo preparas el pedido y lo entregas. Sin comisiones abusivas, sin límites de productos, sin complicaciones técnicas. Una tienda que trabaja por vos mientras vos trabajas en producir y hacer crecer tu negocio.',
    icon: ShoppingCart,
    kind: 'cart',
    accent: '#d97706',
    soft: '#fef3c7',
    accentClass: 'bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-300',
  },
  {
    title: 'Captacion de clientes',
    desc: 'Formularios inteligentes diseñados para pedir solo la información que realmente necesitas, ni un campo de más. Nada de formularios eternos que aburren al visitante antes de terminar. Cada formulario está pensado para una acción específica: pedir un presupuesto, suscribirse a novedades, solicitar un servicio o descargar un material. Los botones de llamada a la acción están ubicados estratégicamente en los lugares donde el visitante ya está convencido y listo para dar el paso. Cada envío te llega limpio, ordenado y listo para que actúes. Además, puedes agregar campos condicionales que solo aparecen cuando se necesitan, manteniendo todo simple y rápido. Es un sistema diseñado para convertir visitantes anónimos en leads calificados sin fricción. Más conversiones, más clientes potenciales, menos ruido. Cada formulario recibido es una oportunidad real de negocio esperando a que la contactes.',
    icon: Users,
    kind: 'users',
    accent: '#059669',
    soft: '#d1fae5',
    accentClass: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-300',
  },
  {
    title: 'Portafolio profesional',
    desc: 'Galerías de proyectos diseñadas para mostrar tu trabajo de la mejor manera posible. Cada proyecto tiene su propia página o espacio destacado con imágenes grandes y de alta calidad, descripción del trabajo realizado, detalles técnicos, el desafío que resolviste y el resultado final. La navegación entre proyectos es fluida y rápida, sin tiempos de carga que maten la experiencia. Ideal para fotógrafos que venden con su mirada, diseñadores que necesitan mostrar su proceso, arquitectos que presentan obras terminadas, maquilladores que exhiben transformaciones, o cualquier creativo cuyo trabajo hable mejor que las palabras. Tus clientes potenciales recorren tu portafolio y entienden al instante tu nivel, tu estilo y si eres la persona indicada para su proyecto. Una galería bien hecha responde preguntas antes de que te las hagan y convierte miradas en contratos sin que tengas que decir una palabra.',
    icon: Image,
    kind: 'image',
    accent: '#e11d48',
    soft: '#ffe4e6',
    accentClass: 'bg-rose-100 text-rose-600 dark:bg-rose-900/50 dark:text-rose-300',
  },
  {
    title: 'Catalogo de servicios',
    desc: 'Cada servicio que ofreces con su propia ficha completa y detallada. El cliente ve el precio exacto, la duración estimada, qué incluye, qué no incluye, los requisitos previos y el resultado que puede esperar. Todo claro, todo visible, todo sin ambigüedades. Tus clientes leen y entienden exactamente lo que están contratando, sin tener que preguntar, sin malentendidos, sin "creí que incluía esto" después del servicio. También puedes agrupar servicios por categorías, ofrecer paquetes combinados con descuento y mostrar servicios complementarios que el cliente quizás no sabía que necesitaba. Es como tener un vendedor digital que explica cada opción con claridad, resuelve dudas antes de que surjan y guía al cliente hacia la mejor decisión. Menos preguntas repetitivas por WhatsApp, menos tiempo explicando lo mismo una y otra vez, más clientes informados que contratan con confianza. Una página de servicios bien hecha trabaja por vos mientras vos trabajas en lo que sabes hacer.',
    icon: List,
    kind: 'list',
    accent: '#2563eb',
    soft: '#dbeafe',
    accentClass: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300',
  },
]

const benefits = [
  { title: 'Diseno personalizado', desc: 'Cada detalle pensado para tu marca', icon: Palette },
  { title: 'Experiencia movil', desc: 'Se ve perfecto en celulares y tablets', icon: Smartphone },
  { title: 'Sitios rapidos', desc: 'Carga optimizada para no perder visitas', icon: Zap },
  { title: 'Comunicacion cercana', desc: 'Hablas con personas reales, no con bots', icon: MessageCircle },
  { title: 'Buenas practicas de seguridad', desc: 'SSL, proteccion de datos y base estable', icon: Shield },
  { title: 'Acompanamiento total', desc: 'Estamos contigo desde el inicio hasta el final', icon: Headset },
]

const chipColors = [
  { rest: 'border-blue-200 bg-blue-50 text-blue-700', dark: 'dark:border-blue-800/50 dark:bg-blue-950/40 dark:text-blue-300' },
  { rest: 'border-sky-200 bg-sky-50 text-sky-700', dark: 'dark:border-sky-800/50 dark:bg-sky-950/40 dark:text-sky-300' },
  { rest: 'border-indigo-200 bg-indigo-50 text-indigo-700', dark: 'dark:border-indigo-800/50 dark:bg-indigo-950/40 dark:text-indigo-300' },
]

const profileStyles = [
  {
    shell: 'border-blue-200/80 bg-gradient-to-br from-blue-50 via-white to-blue-100/60 dark:border-blue-800/50 dark:from-blue-950/45 dark:via-slate-950 dark:to-blue-900/25',
    icon: 'bg-blue-100 text-blue-600 group-hover:bg-blue-200 dark:bg-blue-900/55 dark:text-blue-300 dark:group-hover:bg-blue-800/70',
    glow: 'from-blue-300/25 to-transparent dark:from-blue-400/18',
  },
  {
    shell: 'border-amber-200/80 bg-gradient-to-br from-amber-50 via-white to-orange-100/70 dark:border-amber-700/40 dark:from-amber-950/35 dark:via-slate-950 dark:to-orange-900/25',
    icon: 'bg-amber-100 text-amber-600 group-hover:bg-amber-200 dark:bg-amber-900/50 dark:text-amber-300 dark:group-hover:bg-amber-800/65',
    glow: 'from-amber-300/25 to-transparent dark:from-amber-400/18',
  },
  {
    shell: 'border-violet-200/80 bg-gradient-to-br from-violet-50 via-white to-fuchsia-100/70 dark:border-violet-700/40 dark:from-violet-950/35 dark:via-slate-950 dark:to-fuchsia-900/22',
    icon: 'bg-violet-100 text-violet-600 group-hover:bg-violet-200 dark:bg-violet-900/50 dark:text-violet-300 dark:group-hover:bg-violet-800/65',
    glow: 'from-violet-300/25 to-transparent dark:from-violet-400/18',
  },
  {
    shell: 'border-cyan-200/80 bg-gradient-to-br from-cyan-50 via-white to-teal-100/70 dark:border-cyan-700/40 dark:from-cyan-950/35 dark:via-slate-950 dark:to-teal-900/22',
    icon: 'bg-cyan-100 text-cyan-600 group-hover:bg-cyan-200 dark:bg-cyan-900/50 dark:text-cyan-300 dark:group-hover:bg-cyan-800/65',
    glow: 'from-cyan-300/25 to-transparent dark:from-cyan-400/18',
  },
  {
    shell: 'border-fuchsia-200/80 bg-gradient-to-br from-fuchsia-50 via-white to-purple-100/70 dark:border-fuchsia-700/40 dark:from-fuchsia-950/35 dark:via-slate-950 dark:to-purple-900/22',
    icon: 'bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-200 dark:bg-fuchsia-900/50 dark:text-fuchsia-300 dark:group-hover:bg-fuchsia-800/65',
    glow: 'from-fuchsia-300/25 to-transparent dark:from-fuchsia-400/18',
  },
  {
    shell: 'border-rose-200/80 bg-gradient-to-br from-rose-50 via-white to-orange-100/60 dark:border-rose-700/40 dark:from-rose-950/35 dark:via-slate-950 dark:to-orange-900/18',
    icon: 'bg-rose-100 text-rose-600 group-hover:bg-rose-200 dark:bg-rose-900/50 dark:text-rose-300 dark:group-hover:bg-rose-800/65',
    glow: 'from-rose-300/25 to-transparent dark:from-rose-400/18',
  },
  {
    shell: 'border-indigo-200/80 bg-gradient-to-br from-indigo-50 via-white to-sky-100/60 dark:border-indigo-700/40 dark:from-indigo-950/35 dark:via-slate-950 dark:to-sky-900/18',
    icon: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200 dark:bg-indigo-900/50 dark:text-indigo-300 dark:group-hover:bg-indigo-800/65',
    glow: 'from-indigo-300/25 to-transparent dark:from-indigo-400/18',
  },
  {
    shell: 'border-pink-200/80 bg-gradient-to-br from-pink-50 via-white to-violet-100/60 dark:border-pink-700/40 dark:from-pink-950/35 dark:via-slate-950 dark:to-violet-900/18',
    icon: 'bg-pink-100 text-pink-600 group-hover:bg-pink-200 dark:bg-pink-900/50 dark:text-pink-300 dark:group-hover:bg-pink-800/65',
    glow: 'from-pink-300/25 to-transparent dark:from-pink-400/18',
  },
]

const benefitStyles = [
  {
    shell: 'border-violet-200/80 bg-gradient-to-br from-violet-50 via-white to-indigo-100/60 dark:border-violet-800/40 dark:from-violet-950/35 dark:via-slate-950 dark:to-indigo-900/16',
    icon: 'bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-300',
    glow: 'from-violet-300/24 to-transparent dark:from-violet-400/18',
  },
  {
    shell: 'border-cyan-200/80 bg-gradient-to-br from-cyan-50 via-white to-sky-100/60 dark:border-cyan-800/40 dark:from-cyan-950/35 dark:via-slate-950 dark:to-sky-900/16',
    icon: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-300',
    glow: 'from-cyan-300/24 to-transparent dark:from-cyan-400/18',
  },
  {
    shell: 'border-amber-200/80 bg-gradient-to-br from-amber-50 via-white to-orange-100/60 dark:border-amber-800/40 dark:from-amber-950/35 dark:via-slate-950 dark:to-orange-900/16',
    icon: 'bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-300',
    glow: 'from-amber-300/24 to-transparent dark:from-amber-400/18',
  },
  {
    shell: 'border-emerald-200/80 bg-gradient-to-br from-emerald-50 via-white to-teal-100/60 dark:border-emerald-800/40 dark:from-emerald-950/35 dark:via-slate-950 dark:to-teal-900/16',
    icon: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-300',
    glow: 'from-emerald-300/24 to-transparent dark:from-emerald-400/18',
  },
  {
    shell: 'border-fuchsia-200/80 bg-gradient-to-br from-fuchsia-50 via-white to-pink-100/60 dark:border-fuchsia-800/40 dark:from-fuchsia-950/35 dark:via-slate-950 dark:to-pink-900/16',
    icon: 'bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-900/50 dark:text-fuchsia-300',
    glow: 'from-fuchsia-300/24 to-transparent dark:from-fuchsia-400/18',
  },
  {
    shell: 'border-blue-200/80 bg-gradient-to-br from-blue-50 via-white to-indigo-100/60 dark:border-blue-800/40 dark:from-blue-950/35 dark:via-slate-950 dark:to-indigo-900/16',
    icon: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300',
    glow: 'from-blue-300/24 to-transparent dark:from-blue-400/18',
  },
]

const benefitPillars = [
  {
    title: 'Diseño que representa',
    description: 'Tu presencia digital tiene que verse tan profesional como el servicio que ofreces.',
    accent: 'from-violet-300/28 via-fuchsia-300/16 to-transparent dark:from-violet-400/18 dark:via-fuchsia-400/12',
    border: 'border-violet-200/80 dark:border-violet-800/40',
    shell: 'bg-gradient-to-br from-violet-50 via-white to-indigo-100/60 dark:from-violet-950/35 dark:via-slate-950 dark:to-indigo-900/16',
    items: [benefits[0], benefits[1]],
  },
  {
    title: 'Base técnica sólida',
    description: 'Velocidad, seguridad y estructura correcta para que la web funcione de verdad.',
    accent: 'from-cyan-300/28 via-emerald-300/16 to-transparent dark:from-cyan-400/18 dark:via-emerald-400/12',
    border: 'border-cyan-200/80 dark:border-cyan-800/40',
    shell: 'bg-gradient-to-br from-cyan-50 via-white to-emerald-100/60 dark:from-cyan-950/35 dark:via-slate-950 dark:to-emerald-900/16',
    items: [benefits[2], benefits[4]],
  },
  {
    title: 'Acompañamiento real',
    description: 'No te dejamos solo con la web publicada; seguimos ayudando a que avance contigo.',
    accent: 'from-amber-300/28 via-rose-300/16 to-transparent dark:from-amber-400/18 dark:via-rose-400/12',
    border: 'border-amber-200/80 dark:border-amber-800/40',
    shell: 'bg-gradient-to-br from-amber-50 via-white to-rose-100/60 dark:from-amber-950/35 dark:via-slate-950 dark:to-rose-900/16',
    items: [benefits[3], benefits[5]],
  },
]

const sectionBgAlt = 'bg-[var(--background)]'

function SectionChip({ label, index = 0 }: { label: string; index?: number }) {
  const c = chipColors[index % chipColors.length]
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${c.rest} ${c.dark}`}>
      {label}
    </span>
  )
}

export function ServicesPage() {
  return (
    <>
      <ServicesHeroReel />

      <section className={`px-6 py-16 lg:px-8 lg:py-24 ${sectionBgAlt}`}>
        <div className="container-shell">
          <MotionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionChip label="Que ofrecemos" index={0} />
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl" style={{ color: 'var(--text)' }}>Nuestros servicios</h2>
              <p className="mt-4" style={{ color: 'var(--text-soft)' }}>
                Cada proyecto es diferente. Por eso ofrecemos soluciones adaptadas a distintos objetivos.
              </p>
            </div>
          </MotionReveal>

          <ServicesShowcaseSection services={services} />
        </div>
      </section>

      <section
        className="relative overflow-hidden px-6 py-16 lg:px-8 lg:py-24"
        style={{
          background:
            'radial-gradient(circle at 12% 18%, rgba(91, 46, 255, 0.08) 0%, rgba(91, 46, 255, 0) 28%), radial-gradient(circle at 88% 84%, rgba(217, 132, 38, 0.08) 0%, rgba(217, 132, 38, 0) 26%)',
        }}
      >
        <div className="container-shell">
          <MotionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionChip label="Para quien es" index={1} />
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl" style={{ color: 'var(--text)' }}>Soluciones para diferentes perfiles</h2>
              <p className="mt-4" style={{ color: 'var(--text-soft)' }}>
                Cada profesional y negocio tiene necesidades distintas. Encontra el diseno que mejor se adapta a tu rubro.
              </p>
            </div>
          </MotionReveal>

          <MotionStagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {profiles.map(({ name, tagline, icon: Icon }, index) => {
              const style = profileStyles[index % profileStyles.length]

              return (
                <MotionStaggerItem key={name}>
                  <div
                    className={`group relative overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${style.shell}`}
                    style={{ boxShadow: 'var(--shadow-sm)' }}
                  >
                    <div className={`absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b ${style.glow}`} />
                    <div className="absolute -right-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-gradient-to-br from-white/30 to-transparent opacity-60 blur-2xl dark:from-white/8" />
                    <div className="relative flex items-start gap-4">
                      <div className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${style.icon}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="relative min-w-0">
                        <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{name}</h3>
                        <p className="mt-1 text-xs leading-5" style={{ color: 'var(--text-soft)' }}>{tagline}</p>
                      </div>
                    </div>
                  </div>
                </MotionStaggerItem>
              )
            })}
          </MotionStagger>
        </div>
      </section>

      <section
        className={`relative overflow-hidden px-6 py-16 lg:px-8 lg:py-24 ${sectionBgAlt}`}
        style={{
          backgroundImage:
            'radial-gradient(circle at 14% 12%, rgba(91, 46, 255, 0.08) 0%, rgba(91, 46, 255, 0) 24%), radial-gradient(circle at 84% 80%, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0) 24%)',
        }}
      >
        <div className="container-shell">
          <MotionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionChip label="Funcionalidades" index={2} />
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl" style={{ color: 'var(--text)' }}>Que puede hacer tu sitio web</h2>
              <p className="mt-4" style={{ color: 'var(--text-soft)' }}>
                Mas alla de una pagina informativa, tu web puede resolver tareas reales de tu negocio.
              </p>
            </div>
          </MotionReveal>

          <ServicesCapabilitiesSection items={useCases} />
        </div>
      </section>

      <section
        className="relative overflow-hidden px-6 py-16 lg:px-8 lg:py-24"
        style={{
          background:
            'radial-gradient(circle at 10% 82%, rgba(91, 46, 255, 0.08) 0%, rgba(91, 46, 255, 0) 26%), radial-gradient(circle at 88% 10%, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0) 26%)',
        }}
      >
        <div className="container-shell">
          <MotionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionChip label="Por que Cuysite" index={0} />
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl" style={{ color: 'var(--text)' }}>Mas que una pagina web</h2>
              <p className="mt-4" style={{ color: 'var(--text-soft)' }}>
                No solo construimos sitios. Creamos una presencia digital que trabaja por tu negocio.
              </p>
            </div>
          </MotionReveal>

          <MotionStagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {benefitPillars.map(({ title, description, accent, border, shell, items }) => (
              <MotionStaggerItem key={title}>
                <div
                  className={`group relative h-full overflow-hidden rounded-[2rem] border p-7 lg:p-8 ${border} ${shell}`}
                  style={{ boxShadow: 'var(--shadow-md)' }}
                >
                  <div className={`absolute -right-10 top-14 h-28 w-28 rounded-full bg-gradient-to-br ${accent} blur-3xl`} />
                  <div className="relative flex h-full flex-col gap-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-soft)]">Pilar</p>
                      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]" style={{ color: 'var(--text)' }}>
                        {title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 lg:text-base" style={{ color: 'var(--text-soft)' }}>
                        {description}
                      </p>
                    </div>
                    <div className="space-y-4">
                      {items.map(({ title: itemTitle, desc, icon: Icon }, index) => {
                        const itemStyle = benefitStyles[(index + benefitPillars.findIndex(pillar => pillar.title === title) * 2) % benefitStyles.length]
                        return (
                          <div
                            key={itemTitle}
                            className="rounded-[1.4rem] border border-white/50 bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:border-white/8 dark:bg-white/4"
                          >
                            <div className="flex items-start gap-4">
                              <div className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${itemStyle.icon}`}>
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{itemTitle}</h4>
                                <p className="mt-1 text-xs leading-6" style={{ color: 'var(--text-soft)' }}>{desc}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
