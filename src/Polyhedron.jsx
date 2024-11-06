
import {useRef} from 'react'
import {useControls} from 'leva'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export default function Polyhedron(props) {
    const ref = useRef()
    
    useFrame((_, delta) => {
        ref.current.rotation.x += 0.2 * delta
        ref.current.rotation.y += 0.05 * delta
    })

    return (
        <mesh {...props} ref={ref} castShadow receiveShadow>
            <icosahedronGeometry args={[1, 1]} />
        </mesh>
    )


import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Polyhedron({ position, polyhedron }) {
  const ref = useRef()
  const [count, setCount] = useState(0)

  console.log(polyhedron)

  useFrame((_, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += 0.5 * delta
  })

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerDown={() => {
        setCount((count + 1) % 3)
      }}
      geometry={polyhedron[count]}
    >
      <meshBasicMaterial color={'lime'} wireframe />
    </mesh>
  )
}