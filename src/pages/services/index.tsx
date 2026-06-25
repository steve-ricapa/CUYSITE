import { FinalCta } from '../../components/marketing/final-cta'
import { MotionHover, MotionStagger, MotionStaggerItem } from '../../components/motion/motion-primitives'
import { PageHero } from '../../components/ui/page-hero'
import { SectionShell } from '../../components/ui/section-shell'
import { serviceItems } from '../../content/site-content'

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="No todas las paginas web cumplen el mismo objetivo. Diseñamos segun lo que tu negocio necesita lograr."
        description="Cada formato resuelve una necesidad distinta: captar leads, mostrar credibilidad, presentar tu trabajo o ayudar a que un cliente compre."
      />
      <SectionShell muted>
        <MotionStagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map(({ icon: Icon, title, description }) => (
            <MotionStaggerItem key={title}>
              <MotionHover>
                <article className="feature-card group">
                  <div className="icon-chip transition duration-200 group-hover:bg-[var(--secondary)] group-hover:text-white">
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
