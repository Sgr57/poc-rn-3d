import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Asset } from 'expo-asset';

interface CubeProps {
  texture?: 'texture1' | 'texture2';
}

export default function Cube({ texture }: CubeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Load textures using standard Three.js TextureLoader with expo-asset
  const textures = useMemo(() => {
    const texture1Asset = Asset.fromModule(require('../../assets/textures/texture1.png'));
    const texture2Asset = Asset.fromModule(require('../../assets/textures/texture2.png'));

    const loader = new THREE.TextureLoader();

    return {
      texture1: loader.load(texture1Asset.localUri ?? texture1Asset.uri),
      texture2: loader.load(texture2Asset.localUri ?? texture2Asset.uri),
    };
  }, []);

  // Select the appropriate texture based on prop
  const selectedTexture = texture === 'texture1' ? textures.texture1 : textures.texture2;

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={selectedTexture} />
    </mesh>
  );
}
