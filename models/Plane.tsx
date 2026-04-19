import { useRef, useEffect } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

export default function Plane({ isRotating }: { isRotating: boolean }) {
  const ref = useRef(null)
  const { scene, animations } = useGLTF("/plane.glb")
  const { actions } = useAnimations(animations, ref)
  const scale = 0.003

  useEffect(() => {
      if (isRotating) {
         actions?.Main?.play()
      } else {
         actions?.Main?.stop()
      }
  }, [actions, isRotating])
  return (
   <mesh ref = {ref} scale = {[scale,scale,scale]}>
    <primitive object={scene} />
   </mesh>
  )
}

