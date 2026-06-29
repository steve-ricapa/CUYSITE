import { contactLinks } from '../../content/site-content'

const whatsappLink = contactLinks.find((link) => link.label === 'WhatsApp')
const instagramLink = contactLinks.find((link) => link.label === 'Instagram')
const facebookLink = contactLinks.find((link) => link.label === 'Facebook')

export function FloatingSocialBubble() {
  if (!whatsappLink || !instagramLink || !facebookLink) return null

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="absolute bottom-[112%] right-[14%] hidden flex-col items-end gap-3 lg:flex">
        <a
          href={instagramLink.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 shadow-lg shadow-black/8 backdrop-blur-2xl transition hover:bg-white/12"
        >
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram" className="h-4 w-4 object-contain [filter:invert(76%)_sepia(31%)_saturate(1895%)_hue-rotate(279deg)_brightness(108%)_contrast(101%)]" loading="lazy" />
        </a>
        <a
          href={facebookLink.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 shadow-lg shadow-black/8 backdrop-blur-2xl transition hover:bg-white/12"
        >
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg" alt="Facebook" className="h-4 w-4 object-contain [filter:invert(70%)_sepia(50%)_saturate(922%)_hue-rotate(183deg)_brightness(103%)_contrast(102%)]" loading="lazy" />
        </a>
      </div>

      <a
        href={whatsappLink.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 shadow-lg shadow-black/10 backdrop-blur-2xl transition hover:bg-white/12 lg:h-14 lg:w-14"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm lg:h-11 lg:w-11">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg" alt="WhatsApp" className="h-4 w-4 object-contain lg:h-5 lg:w-5 [filter:invert(56%)_sepia(77%)_saturate(571%)_hue-rotate(89deg)_brightness(96%)_contrast(88%)]" loading="lazy" />
        </span>
      </a>
    </div>
  )
}
