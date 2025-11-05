// import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber/native';
import { useGLTF } from "@react-three/drei/native";
// import { Asset } from 'expo-asset';
// import THREE from 'expo-three';
import modelPath from "../../assets/iphone.glb";

interface ModelProps {
  texture?: 'texture1' | 'texture2';
}

export default function Model({ texture }: ModelProps) {
  // const meshRef = useRef(null);

  // Load textures using ExpoTHREE for cross-platform compatibility
  // const textures = useMemo(() => {
  //   const texture1Asset = Asset.fromModule(require('../../assets/textures/texture1.png'));
  //   const texture2Asset = Asset.fromModule(require('../../assets/textures/texture2.png'));
  //
  //   return {
  //     texture1: new THREE.TextureLoader().load(texture1Asset),
  //     texture2: new THREE.TextureLoader().load(texture2Asset),
  //   };
  // }, []);

  // Select the appropriate texture based on prop
  // const selectedTexture = texture === 'texture1' ? textures.texture1 : textures.texture2;

  const { scene } = useGLTF(modelPath);

  useFrame((state, delta) => {
    scene.rotation.x += delta * 0.5;
    scene.rotation.y += delta * 0.3;
  });

  return (
      <primitive object={scene} />
  );
}
