import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { contactLinks, navItems } from '../../content/site-content'
import { BrandLogo } from '../brand/brand-logo'

export function SiteFooter() {

  return (
    <footer className="section-shell pt-12 sm:pt-14" style={{ background: 'var(--surface-dark)' }}>
      <div className="container-shell">
        <div className="px-2 py-10 sm:px-4 lg:px-0 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:items-start">
            <div>
              <BrandLogo variant="light" className="h-12 w-auto" />
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/70 sm:text-base">
                Desarrollamos páginas web modernas para negocios, profesionales y marcas que quieren verse mejor y vender con más confianza.
              </p>
              <div className="mt-6 flex gap-3">
                {contactLinks.filter((l) => l.label !== 'WhatsApp' && l.label !== 'Correo').map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/70 transition hover:bg-white/15 hover:text-white"
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                ))}
                <a
                  href={contactLinks.find((l) => l.label === 'Correo')!.href}
                  aria-label="Correo"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/70 transition hover:bg-white/15 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-white/90">Navegación</p>
              <nav className="mt-4 grid gap-2.5">
                {navItems.map((item) => (
                  <Link key={item.to} to={item.to} className="text-sm text-white/60 transition hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-sm font-semibold text-white/90">Contacto</p>
              <div className="mt-4 grid gap-3">
                {contactLinks.filter((l) => l.label === 'WhatsApp' || l.label === 'Correo').map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label === 'Correo' ? undefined : '_blank'}
                    rel={link.label === 'Correo' ? undefined : 'noopener noreferrer'}
                    className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
                  >
                    <link.icon className="h-4 w-4 shrink-0" />
                    {link.label === 'WhatsApp' ? '939 036 955' : link.value}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
            © 2026 Cuysite. Hecho con cercanía, diseño y tecnología moderna.
          </div>
        </div>
      </div>
    </footer>
  )
}
