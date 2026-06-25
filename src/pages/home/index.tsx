import { FinalCta } from '../../components/marketing/final-cta'
import { HeroSection } from './sections/hero-section'
import { QuickLinksSection } from './sections/quick-links-section'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickLinksSection />
      <FinalCta />
    </>
  )
}
