import { FinalCta } from '../../components/marketing/final-cta'
import { ServicesProcessHero } from './sections/services-process-hero'
import { ServicesProcessTimeline } from './sections/services-process-timeline'
import { ServicesProcessSteps } from './sections/services-process-steps'
import { ServicesProcessGuide } from './sections/services-process-guide'
import { ServicesProcessRequirements } from './sections/services-process-requirements'
import { ServicesProcessDeliverables } from './sections/services-process-deliverables'
import { ServicesProcessValues } from './sections/services-process-values'

export function ProcessPage() {
  return (
    <>
      <ServicesProcessHero />
      <ServicesProcessTimeline />
      <ServicesProcessSteps />
      <ServicesProcessGuide />
      <ServicesProcessRequirements />
      <ServicesProcessDeliverables />
      <ServicesProcessValues />
      <FinalCta />
    </>
  )
}
