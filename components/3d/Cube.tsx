import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
// import { useTexture } from '@react-three/drei';

interface CubeProps {
  texture?: 'texture1' | 'texture2';
}

export default function Cube({ texture }: CubeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Load textures using the idiomatic useTexture hook from drei
  // const textures = {
  //   texture1: useTexture({map: '../../assets/textures/texture1.png'}),
  //   texture2: useTexture({map: '../../assets/textures/texture2.png'}),
  // };

  // Select the appropriate texture based on prop
  // const selectedTexture = texture ? textures[texture] : undefined;

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
          color={texture === "texture1" ? "green" : "orange"}
      />
    </mesh>
  );
}
