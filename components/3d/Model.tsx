import { useMemo, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber/native';
import { useGLTF, useTexture } from "@react-three/drei/native";
import modelPath from "../../assets/Tela-Photosi-Textured/Tela-Photosi-Textured.gltf";
import { Asset } from 'expo-asset';
import ExpoTHREE from 'expo-three';

interface ModelProps {
  texture?: 'texture1' | 'texture2';
}

export default function Model({ texture = 'texture1' }: ModelProps) {
  // Load GLTF model
  const { scene } = useGLTF(modelPath);
  console.log("scene", scene);

    // Load textures using ExpoTHREE for cross-platform compatibility
    const texture1 = useMemo(() => {
        const texture1Asset = Asset.fromModule(require('../../assets/textures/texture1.png'));
        return new ExpoTHREE.TextureLoader().load(texture1Asset);
    }, []);
    const texture2 = useMemo(() => {
        const texture2Asset = Asset.fromModule(require('../../assets/textures/texture2.png'));
        return new ExpoTHREE.TextureLoader().load(texture2Asset);
    }, []);
  console.log("textures", texture1, texture2);

  // Clone the scene to avoid mutating the cached GLTF data
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  // Apply texture to all meshes in the cloned scene
  useLayoutEffect(() => {
    const selectedTexture = texture === 'texture1' ? texture1 : texture2;

    clonedScene.traverse((obj: any) => {
      if (obj.isMesh && obj.material) {
        obj.material.map = selectedTexture;
        obj.material.needsUpdate = true;
      }
    });


    console.log("clonedScene", clonedScene);
  }, [texture, clonedScene, texture1, texture2]);

  // Rotation animation
  useFrame((state, delta) => {
    clonedScene.rotation.x += delta * 0.5;
    clonedScene.rotation.y += delta * 0.3;
  });

  return (
      <primitive object={clonedScene} />
  );
}
