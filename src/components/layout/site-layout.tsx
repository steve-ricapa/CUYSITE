import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

export function SiteLayout() {
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    mainRef.current?.focus()
  }, [pathname])

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Ir al contenido principal
      </a>
      <SiteHeader />
      <main id="main-content" ref={mainRef} tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
