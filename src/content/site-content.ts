import {
  BadgeCheck,
  BriefcaseBusiness,
  Globe,
  Headset,
  Instagram,
  LayoutTemplate,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  ShoppingBag,
  Store,
  WalletCards,
  type LucideIcon,
} from 'lucide-react'

export type IconItem = {
  icon: LucideIcon
  title: string
  description: string
}

export const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/beneficios', label: 'Beneficios' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proceso', label: 'Proceso' },
  { to: '/precios', label: 'Precios' },
  { to: '/contacto', label: 'Contacto' },
]

export const benefitItems: IconItem[] = [
  {
    icon: Globe,
    title: 'Mas clientes',
    description: 'Tu negocio puede ser encontrado por personas que hoy buscan soluciones como la tuya.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Presencia 24/7',
    description: 'Tu web sigue trabajando incluso cuando tu local esta cerrado o tu equipo ya termino el dia.',
  },
  {
    icon: BadgeCheck,
    title: 'Mayor confianza',
    description: 'Una presencia profesional transmite seriedad, orden y seguridad desde el primer vistazo.',
  },
  {
    icon: WalletCards,
    title: 'Mas ventas',
    description: 'Guiamos al usuario hacia la accion correcta: escribirte, pedir una cita o comprar.',
  },
]

export const serviceItems: IconItem[] = [
  {
    icon: LayoutTemplate,
    title: 'Landing Pages',
    description: 'Ideales para campañas, anuncios, lanzamientos y ofertas con una sola accion clara.',
  },
  {
    icon: Store,
    title: 'Paginas para negocios',
    description: 'Sitios corporativos para marcas, servicios y empresas que buscan verse mas profesionales.',
  },
  {
    icon: ShoppingBag,
    title: 'Tiendas online',
    description: 'Catálogos y escaparates digitales listos para mostrar productos y captar pedidos.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Portafolios profesionales',
    description: 'Para mostrar experiencia, proyectos y propuesta de valor con una imagen fuerte.',
  },
  {
    icon: Headset,
    title: 'Mantenimiento y soporte',
    description: 'Ajustes, mejoras y acompañamiento para que tu pagina se mantenga actualizada.',
  },
]

export const processSteps = [
  {
    title: 'Cuentanos tu idea',
    description: 'Empezamos entendiendo tu negocio, tus objetivos y a quien quieres llegar.',
  },
  {
    title: 'Diseñamos',
    description: 'Definimos estructura, estilo visual y experiencia para que tu marca se vea clara y confiable.',
  },
  {
    title: 'Desarrollamos',
    description: 'Construimos una web moderna, rapida y adaptada a celular, tablet y escritorio.',
  },
  {
    title: 'Publicamos',
    description: 'Ponemos tu sitio online y revisamos que todo quede listo para mostrarlo al mundo.',
  },
  {
    title: 'Brindamos soporte',
    description: 'Seguimos contigo para resolver dudas, hacer mejoras y mantener todo en orden.',
  },
]

export const faqItems = [
  {
    question: '¿Cuanto demora?',
    answer: 'Una web informativa suele tomar entre 1 y 3 semanas. El tiempo exacto depende del alcance y del contenido disponible.',
  },
  {
    question: '¿Incluye dominio?',
    answer: 'Podemos ayudarte a comprarlo y configurarlo. Segun el proyecto, puede incluirse o cotizarse por separado.',
  },
  {
    question: '¿Incluye hosting?',
    answer: 'Si lo necesitas, podemos incluir una propuesta con hosting o recomendarte una opcion adecuada para tu negocio.',
  },
  {
    question: '¿Puedo pagar en partes?',
    answer: 'Si. Normalmente trabajamos con adelanto inicial y pagos por etapas segun el avance del proyecto.',
  },
  {
    question: '¿La pagina se adapta a celulares?',
    answer: 'Si. Todos nuestros proyectos se diseñan y desarrollan para verse bien en celulares, tablets y escritorio.',
  },
]

export const contactLinks = [
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

export const quickLinks = [
  {
    title: 'Beneficios',
    description: 'Descubre por que una web profesional ayuda a atraer y convencer mejor.',
    to: '/beneficios',
  },
  {
    title: 'Servicios',
    description: 'Conoce los tipos de paginas que desarrollamos para marcas y negocios.',
    to: '/servicios',
  },
  {
    title: 'Proceso',
    description: 'Revisa como trabajamos desde la idea hasta la entrega final.',
    to: '/proceso',
  },
  {
    title: 'Precios',
    description: 'Mira la referencia inicial y los factores que influyen en tu cotizacion.',
    to: '/precios',
  },
  {
    title: 'Contacto',
    description: 'Escribenos por formulario o directo por tus canales favoritos.',
    to: '/contacto',
  },
]

export const trustPoints = [
  'Diseño profesional y claro',
  'Compatibilidad total con celulares',
  'Acompañamiento cercano en cada etapa',
]
