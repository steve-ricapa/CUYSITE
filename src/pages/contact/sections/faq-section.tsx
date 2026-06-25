import { MotionReveal, MotionStagger, MotionStaggerItem } from '../../../components/motion/motion-primitives'
import { FaqItem } from '../../../components/ui/faq-item'
import { SectionShell } from '../../../components/ui/section-shell'
import { faqItems } from '../../../content/site-content'

export function FaqSection() {
  return (
    <SectionShell>
      <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
        <MotionReveal>
          <div>
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 className="headline-lg mt-6 max-w-xl">Resolvemos las dudas mas comunes antes de empezar.</h2>
          </div>
        </MotionReveal>
        <MotionStagger className="grid gap-4">
          {faqItems.map((item) => (
            <MotionStaggerItem key={item.question}>
              <FaqItem question={item.question} answer={item.answer} />
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </SectionShell>
  )
}
