import { MotionReveal } from '../../../components/motion/motion-primitives'
import { ContactMethods } from '../../../components/marketing/contact-methods'
import { contactLinks } from '../../../content/site-content'

export function ContactIntroSection() {
  return (
    <MotionReveal>
      <div>
        <p className="eyebrow">Canales de contacto</p>
        <h2 className="headline-lg mt-6 max-w-xl !text-white">Hablemos del objetivo real de tu pagina web.</h2>
        <p className="body-lg mt-5 max-w-xl !text-white/72">
          Cuanto mas nos cuentes sobre tu negocio, tus metas y el tipo de cliente al que quieres llegar, mejor podremos orientarte.
        </p>
        <div className="mt-8">
          <ContactMethods items={contactLinks} />
        </div>
      </div>
    </MotionReveal>
  )
}
