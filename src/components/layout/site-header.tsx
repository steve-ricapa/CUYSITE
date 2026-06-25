import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../../content/site-content'
import { ThemeToggle } from '../ui/theme-toggle'
import { ButtonLink } from '../ui/button-link'
import { BrandLogo } from '../brand/brand-logo'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <header className="sticky top-0 z-50">
      <div className="container-shell py-4">
        <div className="relative flex items-center justify-center">
          <Link to="/" className="absolute left-0 top-1/2 -translate-y-1/2">
            <span className="block rounded-xl bg-white px-3 py-2 shadow-sm">
              <BrandLogo variant="dark" className="h-12 w-auto" />
            </span>
          </Link>

          <div className="hidden items-center gap-4 rounded-full border border-white/15 bg-white/8 px-6 py-2.5 shadow-lg shadow-black/5 backdrop-blur-2xl xl:flex">
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `rounded-full px-3 py-1.5 text-sm font-medium transition duration-200 ease-out ${isActive ? 'bg-white/15 text-[var(--primary)]' : 'text-[var(--text-soft)] hover:bg-white/10 hover:text-[var(--primary)]'}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <ButtonLink to="/contacto" className="text-sm">Solicitar cotizacion</ButtonLink>
            </div>
          </div>

          <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-2 xl:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-soft)] transition hover:bg-white/10 hover:text-[var(--primary)]"
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen ? (
            <motion.div
              id="mobile-navigation"
              className="mx-auto mt-3 w-fit overflow-hidden rounded-2xl border border-white/15 bg-white/8 p-3 shadow-lg shadow-black/5 backdrop-blur-2xl xl:hidden"
              initial={reduceMotion ? undefined : { opacity: 0, height: 0, y: -10 }}
              animate={reduceMotion ? undefined : { opacity: 1, height: 'auto', y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className="grid gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={reduceMotion ? undefined : { opacity: 0, x: -10 }}
                    animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, x: -8 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) => `block rounded-xl px-4 py-2.5 text-sm font-medium transition ${isActive ? 'bg-white/15 text-[var(--primary)]' : 'text-[var(--text-soft)] hover:bg-white/10 hover:text-[var(--primary)]'}`}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                className="mt-3 flex flex-col gap-2 sm:flex-row"
                initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.2, delay: 0.08 }}
              >
                <ThemeToggle />
                <ButtonLink to="/contacto" onClick={() => setMenuOpen(false)}>
                  Solicitar cotizacion
                </ButtonLink>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}
