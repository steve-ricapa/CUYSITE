import { Link } from 'react-router-dom'
import { navItems } from '../../content/site-content'
import { BrandLogo } from '../brand/brand-logo'

export function SiteFooter() {

  return (
    <footer className="section-shell pt-0">
      <div className="container-shell">
        <div className="panel-dark px-8 py-10 sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <BrandLogo variant="light" className="h-12 w-auto" />
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Desarrollamos paginas web modernas para negocios, profesionales y marcas que quieren verse mejor y vender con mas confianza.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} className="text-sm text-white/80 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/60">
            © 2026 Cuysite. Hecho con una mezcla de cercania, diseño y tecnologia moderna.
          </div>
        </div>
      </div>
    </footer>
  )
}
