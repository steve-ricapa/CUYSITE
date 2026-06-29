import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '../components/layout/site-layout'
import { HomePage } from '../pages/home'

const BenefitsPage = lazy(() => import('../pages/benefits').then((module) => ({ default: module.BenefitsPage })))
const ContactPage = lazy(() => import('../pages/contact').then((module) => ({ default: module.ContactPage })))
const PricingPage = lazy(() => import('../pages/pricing').then((module) => ({ default: module.PricingPage })))
const ProcessPage = lazy(() => import('../pages/process').then((module) => ({ default: module.ProcessPage })))
const ServicesPage = lazy(() => import('../pages/services').then((module) => ({ default: module.ServicesPage })))

function RouteFallback() {
  return <div className="section-shell" />
}

export function AppRouter() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="beneficios" element={<Suspense fallback={<RouteFallback />}><BenefitsPage /></Suspense>} />
        <Route path="servicios" element={<Suspense fallback={<RouteFallback />}><ServicesPage /></Suspense>} />
        <Route path="proceso" element={<Suspense fallback={<RouteFallback />}><ProcessPage /></Suspense>} />
        <Route path="precios" element={<Suspense fallback={<RouteFallback />}><PricingPage /></Suspense>} />
        <Route path="contacto" element={<Suspense fallback={<RouteFallback />}><ContactPage /></Suspense>} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
