import { FinalCta } from '../../components/marketing/final-cta'
import { SectionShell } from '../../components/ui/section-shell'
import { ContactHeroSection } from './sections/contact-hero-section'
import { ContactIntroSection } from './sections/contact-intro-section'
import { ContactFormSection } from './sections/contact-form-section'
import { FaqSection } from './sections/faq-section'

export function ContactPage() {
  const darkPageBackground = '#040812'

  return (
    <>
      <ContactHeroSection />
      <SectionShell style={{ background: darkPageBackground }}>
        <div id="contact-form" className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] scroll-mt-32">
          <ContactIntroSection />
          <ContactFormSection />
        </div>
      </SectionShell>
      <FaqSection />
      <FinalCta />
    </>
  )
}
