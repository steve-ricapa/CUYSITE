import { FinalCta } from '../../components/marketing/final-cta'
import { MotionHover, MotionStagger, MotionStaggerItem } from '../../components/motion/motion-primitives'
import { PageHero } from '../../components/ui/page-hero'
import { SectionShell } from '../../components/ui/section-shell'
import { benefitItems } from '../../content/site-content'

export function BenefitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Beneficios"
        title="Una pagina web profesional puede trabajar por tu negocio incluso cuando tu no estas atendiendo."
        description="No se trata solo de estar presente en internet. Se trata de generar confianza, ordenar tu propuesta y facilitar que mas personas te escriban o compren."
      />
      <SectionShell>
        <MotionStagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefitItems.map(({ icon: Icon, title, description }) => (
            <MotionStaggerItem key={title}>
              <MotionHover>
                <article className="feature-card">
                  <div className="icon-chip">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="headline-md mt-6 !text-[1.45rem]">{title}</h2>
                  <p className="body-md mt-4">{description}</p>
                </article>
              </MotionHover>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </SectionShell>
      <FinalCta />
    </>
  )
}
