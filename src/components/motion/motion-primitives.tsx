import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type BaseProps = {
  children: ReactNode
  className?: string
}

type RevealProps = BaseProps & {
  delay?: number
  y?: number
  amount?: number
}

export function MotionReveal({
  children,
  className,
  delay = 0,
  y = 24,
  amount = 0.25,
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? undefined : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export function MotionStagger({ children, className }: BaseProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? undefined : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function MotionStaggerItem({ children, className }: BaseProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={
        reduceMotion
          ? undefined
          : {
              hidden: { opacity: 0, y: 22 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }
      }
    >
      {children}
    </motion.div>
  )
}

export function MotionFloat({ children, className }: BaseProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
      transition={
        reduceMotion
          ? undefined
          : {
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }
      }
    >
      {children}
    </motion.div>
  )
}

export function MotionHover({ children, className }: BaseProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function MotionGlow({ className = '' }: { className?: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={
        reduceMotion
          ? undefined
          : {
              scale: [1, 1.08, 1],
              opacity: [0.45, 0.72, 0.45],
            }
      }
      transition={
        reduceMotion
          ? undefined
          : {
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }
      }
    />
  )
}
