// @ts-nocheck
/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { Environment, Lightformer, useTexture } from '@react-three/drei'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import * as THREE from 'three'
import './lanyard.css'

extend({ MeshLineGeometry, MeshLineMaterial })

function createBandTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 32

  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  ctx.fillStyle = '#0c1e62'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = '#a89bff'
  ctx.fillRect(0, 0, 128, 5)
  ctx.fillRect(0, 14, 128, 2)
  ctx.fillRect(0, 27, 128, 3)

  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 12px sans-serif'
  ctx.textBaseline = 'middle'
  ctx.fillText('CUYSITE', 12, 16)

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

function createBadgeTexture(sourceImage, { subtitle, footer, accent }) {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 1408

  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
  gradient.addColorStop(0, '#ffffff')
  gradient.addColorStop(1, '#eef3ff')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = accent
  ctx.fillRect(0, 0, canvas.width, 164)

  ctx.fillStyle = '#ffffff'
  ctx.font = '700 52px "Century Gothic", sans-serif'
  ctx.fillText('CUYSITE', 74, 102)

  ctx.fillStyle = '#4c5a84'
  ctx.font = '600 30px "Century Gothic", sans-serif'
  ctx.fillText('Credencial de contacto', 74, 226)

  const circleX = canvas.width / 2
  const circleY = 460
  const circleRadius = 188

  ctx.save()
  ctx.beginPath()
  ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2)
  ctx.closePath()
  ctx.clip()

  const scale = Math.max((circleRadius * 2) / sourceImage.width, (circleRadius * 2) / sourceImage.height)
  const drawWidth = sourceImage.width * scale
  const drawHeight = sourceImage.height * scale
  ctx.drawImage(sourceImage, circleX - drawWidth / 2, circleY - drawHeight / 2, drawWidth, drawHeight)
  ctx.restore()

  ctx.lineWidth = 18
  ctx.strokeStyle = '#ffffff'
  ctx.beginPath()
  ctx.arc(circleX, circleY, circleRadius + 8, 0, Math.PI * 2)
  ctx.stroke()

  ctx.fillStyle = '#09154a'
  ctx.font = '700 66px "Century Gothic", sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('Cuy Contacto', circleX, 760)

  ctx.fillStyle = '#5b2eff'
  ctx.font = '600 38px "Century Gothic", sans-serif'
  ctx.fillText(subtitle, circleX, 824)

  ctx.fillStyle = '#5d6984'
  ctx.font = '600 30px "Century Gothic", sans-serif'
  ctx.fillText('WhatsApp: 939 036 955', circleX, 930)
  ctx.fillText('Correo: cuysite.pe@gmail.com', circleX, 982)

  ctx.fillStyle = '#dfe7ff'
  ctx.beginPath()
  ctx.roundRect(160, 1080, 704, 132, 36)
  ctx.fill()

  ctx.fillStyle = '#09154a'
  ctx.font = '700 34px "Century Gothic", sans-serif'
  ctx.fillText(footer, circleX, 1158)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.needsUpdate = true
  return texture
}

function CardFaces({ frontTexture, backTexture }) {
  const geometry = useMemo(() => new THREE.PlaneGeometry(1.6, 2.2), [])

  return (
    <group>
      <mesh position={[0, 0, 0.02]} geometry={geometry}>
        <meshStandardMaterial map={frontTexture} roughness={0.62} metalness={0.08} />
      </mesh>
      <mesh rotation={[0, Math.PI, 0]} position={[0, 0, -0.02]} geometry={geometry}>
        <meshStandardMaterial map={backTexture} roughness={0.66} metalness={0.08} />
      </mesh>
      <mesh>
        <boxGeometry args={[1.58, 2.18, 0.02]} />
        <meshPhysicalMaterial color="#ffffff" roughness={0.72} metalness={0.04} clearcoat={0.4} />
      </mesh>
      <mesh position={[0, 1.22, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.06, 32]} />
        <meshStandardMaterial color="#1c2d66" metalness={0.45} roughness={0.35} />
      </mesh>
      <mesh position={[0, 1.22, 0.02]}>
        <ringGeometry args={[0.05, 0.09, 32]} />
        <meshStandardMaterial color="#dbe7ff" metalness={0.2} roughness={0.45} />
      </mesh>
    </group>
  )
}

function Band({ frontImage, backImage, lanyardImage, isMobile = false, lanyardWidth = 1 }) {
  const band = useRef()
  const fixed = useRef()
  const j1 = useRef()
  const j2 = useRef()
  const j3 = useRef()
  const card = useRef()
  const vec = new THREE.Vector3()
  const ang = new THREE.Vector3()
  const rot = new THREE.Vector3()
  const dir = new THREE.Vector3()
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 }
  const frontTexture = useTexture(frontImage)
  const backTexture = useTexture(backImage || frontImage)
  const photoLanyardTexture = useTexture(lanyardImage || frontImage)
  const lanyardTexture = useMemo(() => {
    if (lanyardImage) {
      photoLanyardTexture.wrapS = photoLanyardTexture.wrapT = THREE.RepeatWrapping
      photoLanyardTexture.colorSpace = THREE.SRGBColorSpace
      return photoLanyardTexture
    }

    return createBandTexture()
  }, [lanyardImage, photoLanyardTexture])
  const [curve] = useState(
    () => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]),
  )
  const [dragged, drag] = useState(false)
  const [hovered, hover] = useState(false)
  const badgeFrontTexture = useMemo(
    () => createBadgeTexture(frontTexture.image, { subtitle: 'Asesor web', footer: 'Respuesta clara y directa', accent: '#5b2eff' }),
    [frontTexture],
  )
  const badgeBackTexture = useMemo(
    () => createBadgeTexture(backTexture.image, { subtitle: 'Equipo Cuysite', footer: 'Webs modernas para negocios', accent: '#0c1e62' }),
    [backTexture],
  )

  frontTexture.colorSpace = THREE.SRGBColorSpace
  backTexture.colorSpace = THREE.SRGBColorSpace

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1])
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]])

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => {
        document.body.style.cursor = 'auto'
      }
    }
  }, [hovered, dragged])

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z })
    }

    if (!fixed.current || !j1.current || !j2.current || !j3.current || !card.current) return

    ;[j1, j2].forEach((ref) => {
      if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
      const distance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
      ref.current.lerped.lerp(ref.current.translation(), delta * (14 + distance * 26))
    })

    curve.points[0].copy(j3.current.translation())
    curve.points[1].copy(j2.current.lerped)
    curve.points[2].copy(j1.current.lerped)
    curve.points[3].copy(fixed.current.translation())
    band.current.geometry.setPoints(curve.getPoints(isMobile ? 18 : 30))

    ang.copy(card.current.angvel())
    rot.copy(card.current.rotation())
    card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.2, z: ang.z })
  })

  curve.curveType = 'chordal'

  return (
    <>
      <group position={[1.15, 5.4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.82, 1.12, 0.06]} />
          <group
            scale={2.95}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(event) => {
              event.target.releasePointerCapture(event.pointerId)
              drag(false)
            }}
            onPointerDown={(event) => {
              event.target.setPointerCapture(event.pointerId)
              drag(new THREE.Vector3().copy(event.point).sub(vec.copy(card.current.translation())))
            }}
          >
            <CardFaces frontTexture={badgeFrontTexture || frontTexture} backTexture={badgeBackTexture || backTexture} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [800, 1200] : [1200, 1200]}
          useMap
          map={lanyardTexture}
          repeat={[-3.5, 1]}
          lineWidth={lanyardWidth}
        />
      </mesh>
    </>
  )
}

type LanyardProps = {
  position?: [number, number, number]
  gravity?: [number, number, number]
  fov?: number
  frontImage: string
  backImage?: string
  lanyardImage?: string
  lanyardWidth?: number
  className?: string
}

export default function Lanyard({
  position = [0, 0, 24],
  gravity = [0, -40, 0],
  fov = 20,
  frontImage,
  backImage,
  lanyardImage,
  lanyardWidth = 1,
  className = '',
}: LanyardProps) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={`relative flex h-full w-full items-start justify-center ${className}`.trim()}>
      <div
        className="absolute inset-x-8 bottom-8 top-18 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(168,155,255,0.34) 0%, rgba(255,255,255,0.18) 42%, rgba(255,255,255,0) 76%)',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 lanyard-wrapper">
        <Canvas
          camera={{ position: isMobile ? [0, 0, 26] : position, fov: isMobile ? fov + 4 : fov }}
          dpr={[1, isMobile ? 1.5 : 2]}
          gl={{ alpha: true, antialias: true }}
          onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), 0)}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[3, 4, 4]} intensity={1.45} color="#ffffff" />
          <Suspense fallback={null}>
            <Physics gravity={gravity} timeStep={isMobile ? 1 / 40 : 1 / 60}>
              <Band
                frontImage={frontImage}
                backImage={backImage}
                lanyardImage={lanyardImage}
                isMobile={isMobile}
                lanyardWidth={lanyardWidth}
              />
            </Physics>
          </Suspense>
          <Environment blur={0.8}>
            <Lightformer intensity={2} color="white" position={[0, 0, 5]} scale={[12, 1, 1]} />
            <Lightformer intensity={3} color="#c4baff" position={[2, 3, 3]} scale={[8, 1, 1]} />
            <Lightformer intensity={2.8} color="#ffffff" position={[-3, -1, 2]} scale={[10, 1, 1]} />
          </Environment>
        </Canvas>
      </div>
    </div>
  )
}
