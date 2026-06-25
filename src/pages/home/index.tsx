import { FinalCta } from '../../components/marketing/final-cta'
import { HeroSection } from './sections/hero-section'
import { TechTrustSection } from './sections/tech-trust-section'
import { InfrastructureSection } from './sections/infrastructure-section'
import { PricingSummarySection } from './sections/pricing-summary-section'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TechTrustSection />
      <InfrastructureSection />
      <PricingSummarySection />
      <FinalCta />
    </>
  )
}
