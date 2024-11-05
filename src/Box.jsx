import {useRef, useLayoutEffect} from 'react'
import { useFrame } from '@react-three/fiber'

export default function Box(props) {
    const ref = useRef()

    // useLayoutEffect(()=>{
    //     if(ref.current.name === 'B'){
    //         ref.current.position.y = 1;
    //     }
    // })

    useFrame((_, delta) => {
        ref.current.rotation.x += 1 * delta;
        ref.current.rotation.y += 0.5 * delta;
    })
    return (
        <mesh {...props} ref={ref}>
            <boxGeometry />
            <meshBasicMaterial color={0x00ff00} wireframe />
        </mesh>
    )
}