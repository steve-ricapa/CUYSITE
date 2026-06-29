import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

const PROMO_STORAGE_KEY = 'cuysite:promo-invierno-seen'
const PROMO_IMAGE_SRC = '/assets/Promo-invierno.png'

export function SeasonalPromoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const hasSeenPromo = window.localStorage.getItem(PROMO_STORAGE_KEY)
    if (hasSeenPromo) return

    window.localStorage.setItem(PROMO_STORAGE_KEY, 'true')
    setIsOpen(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/72 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/12 bg-[var(--surface-dark)] shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Cerrar promoción"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/28 text-white/78 transition hover:bg-black/40 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={PROMO_IMAGE_SRC}
              alt="Promoción de invierno Cuysite"
              className="block h-auto w-full"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
