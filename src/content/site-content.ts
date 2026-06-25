import {
  BadgeCheck,
  BriefcaseBusiness,
  Facebook,
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
    value: '939 036 955',
    href: 'https://wa.me/51939036955',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@cuysite',
    href: 'https://instagram.com/cuysite',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: '@cuysite',
    href: 'https://facebook.com/cuysite',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: 'cuysite.pe@gmail.com',
    href: 'mailto:cuysite.pe@gmail.com',
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

export type TechItem = {
  name: string
  iconUrl?: string
  icon?: LucideIcon
  title: string
  description: string
}

export const frontendTechItems: TechItem[] = [
  {
    name: 'React',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    title: 'React + TypeScript',
    description: 'La misma base moderna que usan muchas empresas grandes. Nos ayuda a construir sitios rápidos y fáciles de mantener.',
  },
  {
    name: 'JavaScript',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    title: 'JavaScript',
    description: 'Hace que la web responda rápido y se sienta viva cuando el usuario interactúa con ella.',
  },
  {
    name: 'TypeScript',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    title: 'TypeScript',
    description: 'Nos ayuda a construir páginas más ordenadas y estables, con menos errores en el camino.',
  },
  {
    name: 'HTML5',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    title: 'HTML5',
    description: 'Ordena la estructura del contenido para que la página sea clara, sólida y fácil de entender.',
  },
  {
    name: 'CSS3',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    title: 'CSS3',
    description: 'Define colores, espacios y detalles para que la web se vea profesional y pulida.',
  },
]

export const infrastructureTechItems: TechItem[] = [
  {
    name: 'AWS',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    title: 'AWS',
    description: 'La base en la nube donde vive y se mantiene disponible tu sitio.',
  },
  {
    name: 'CloudFront',
    iconUrl: '/assets-aws/Architecture-Service-Icons_07312025/Arch_Networking-Content-Delivery/48/Arch_Amazon-CloudFront_48.svg',
    title: 'CloudFront',
    description: 'Entrega el contenido más rápido desde la red de distribución de AWS.',
  },
  {
    name: 'S3',
    iconUrl: '/assets-aws/Architecture-Service-Icons_07312025/Arch_Storage/48/Arch_Amazon-Simple-Storage-Service_48.svg',
    title: 'S3',
    description: 'Guarda archivos y contenido estático de forma segura y ordenada.',
  },
  {
    name: 'Route 53',
    iconUrl: '/assets-aws/Architecture-Service-Icons_07312025/Arch_Networking-Content-Delivery/48/Arch_Amazon-Route-53_48.svg',
    title: 'Route 53',
    description: 'Gestiona el dominio y ayuda a que la web encuentre su dirección correcta.',
  },
  {
    name: 'AWS Certificate Manager',
    iconUrl: '/assets-aws/Architecture-Service-Icons_07312025/Arch_Security-Identity-Compliance/48/Arch_AWS-Certificate-Manager_48.svg',
    title: 'Certificate Manager',
    description: 'Gestiona el certificado SSL para que la conexión del sitio sea segura en el navegador.',
  },
]

export type PricingPlan = {
  name: string
  price: number | null
  priceLabel?: string
  maintenance: number | null
  maintenanceLabel?: string
  features: string[]
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Landing',
    price: 399,
    maintenance: 50,
    features: [
      'Diseño personalizado',
      '1 página',
      'Responsive',
      'Formulario de contacto',
      'Botón de WhatsApp',
      'SEO básico',
      'Certificado SSL',
    ],
  },
  {
    name: 'Business',
    price: 649,
    maintenance: 80,
    features: [
      'Hasta 5 páginas',
      'Diseño personalizado',
      'Responsive',
      'Formulario de contacto',
      'Google Maps',
      'WhatsApp',
      'SEO básico',
      'Certificado SSL',
    ],
  },
  {
    name: 'Premium',
    price: null,
    priceLabel: 'Desde S/ 1,199',
    maintenance: null,
    maintenanceLabel: 'Desde S/ 120/mes',
    features: [
      'Todo lo de Business + funcionalidades personalizadas',
      'Reservas / tienda virtual',
      'Panel de administración',
      'Integraciones',
    ],
  },
]

export const maintenanceIncludes = [
  'Administración del hosting',
  'Monitoreo del sitio',
  'Actualizaciones de seguridad',
  'Copias de seguridad',
  'Administración del SSL',
  'Soporte técnico',
  'Cambios menores de contenido',
]

export const pricingNotes = [
  'Dominio: se cotiza según la extensión elegida (.com, .pe, .org) y el precio vigente del proveedor.',
  'Hosting: se cotiza según las necesidades del proyecto.',
]
