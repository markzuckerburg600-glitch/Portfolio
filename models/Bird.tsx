import { useGLTF, useAnimations } from "@react-three/drei"
import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"

export default function Bird({ isRotating }: { isRotating: boolean }) {
  const birdRef = useRef<THREE.Mesh>(null)
  const { scene, animations } = useGLTF("/bird.glb")
  const { actions } = useAnimations(animations, birdRef)
  const scale = 0.002
  // Rotating bird radius 
  const radius = 3.75
  const speed = -0.75
  useEffect(() => {
    birdRef.current.position.y = 1
    actions["Take 001"]?.play()
  }, [])

  // Permanent flying bird around the island 
  useFrame(({ clock }) => {
    const angle = clock.elapsedTime * speed
    birdRef.current.position.x = -Math.cos(angle) * radius + 0.5
    birdRef.current.position.z = -Math.sin(angle) * radius - 3

    birdRef.current.rotation.y = -(angle + Math.PI / 2)
  })

  return (
   <mesh ref = {birdRef} scale = {[scale,scale,scale]}>
    <primitive object={scene} />
   </mesh>
  )
}

