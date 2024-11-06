export default function Floor(props) {
    return (
        <mesh rotation-x={-Math.PI / 2} receiveShadow>
            <circleGeometry args={[10]} />
            <meshStandardMaterial />
        </mesh>
    )
}