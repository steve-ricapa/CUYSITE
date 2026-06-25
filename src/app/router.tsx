import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '../components/layout/site-layout'
import { BenefitsPage } from '../pages/benefits'
import { ContactPage } from '../pages/contact'
import { HomePage } from '../pages/home'
import { PricingPage } from '../pages/pricing'
import { ProcessPage } from '../pages/process'
import { ServicesPage } from '../pages/services'

export function AppRouter() {
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
