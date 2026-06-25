import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

type VideoBackgroundProps = {
  playing?: boolean
}

export function VideoBackground({ playing = false }: VideoBackgroundProps) {
  const reduceMotion = useReducedMotion()
  const [loaded, setLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleCanPlay = useCallback(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (video?.readyState && video.readyState >= 3) {
      setLoaded(true)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (playing) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [playing])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? undefined : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          style={{ opacity: 0.7 }}
          onCanPlay={handleCanPlay}
        >
          <source src="/assets/video-fondo-cuysite.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, #060C20 0%, rgba(6,12,32,0.72) 40%, rgba(6,12,32,0.32) 100%)',
        }}
      />
    </div>
  )
}
