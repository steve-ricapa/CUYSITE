import { MotionReveal } from '../../../components/motion/motion-primitives'
import { ContactForm } from '../components/contact-form'

export function ContactFormSection() {
  return (
    <MotionReveal delay={0.08}>
      <div className="panel px-6 py-6 sm:px-8 sm:py-8">
        <ContactForm />
      </div>
    </MotionReveal>
  )
}
