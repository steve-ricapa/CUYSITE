import { FinalCta } from '../../components/marketing/final-cta'
import { PageHero } from '../../components/ui/page-hero'
import { SectionShell } from '../../components/ui/section-shell'
import { ContactIntroSection } from './sections/contact-intro-section'
import { ContactFormSection } from './sections/contact-form-section'
import { FaqSection } from './sections/faq-section'

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Cuéntanos tu proyecto y te ayudamos a convertirlo en una web moderna, clara y profesional."
        description="Puedes escribirnos por formulario, WhatsApp, Instagram o correo. Tambien resolvemos aqui las preguntas frecuentes para que avances con mas seguridad."
      />
      <SectionShell muted>
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <ContactIntroSection />
          <ContactFormSection />
        </div>
      </SectionShell>
      <FaqSection />
      <FinalCta />
    </>
  )
}
