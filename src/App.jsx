import { Canvas } from "@react-three/fiber";
import Polyhedron from "./Polyhedron";
import * as THREE from "three";
import { Stats, OrbitControls, PointerLockControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function App() {
    const polyhedron = [
        new THREE.BoxGeometry(),
        new THREE.SphereGeometry(0.785398),
        new THREE.DodecahedronGeometry(0.785398)
    ]
    return (
        <Canvas camera={{position: [0, 0, 2]}}>
            <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
            <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
            <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
            <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} />
            {/* <Stats /> */}
            <OrbitControls />
            <Perf position="top-left" />
        </Canvas>

    )
}