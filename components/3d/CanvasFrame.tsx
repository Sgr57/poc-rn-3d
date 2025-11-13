import { useMemo, useLayoutEffect, useRef } from 'react';
import { GLTF } from "three-stdlib";
import { useFrame } from '@react-three/fiber/native';
import { useGLTF } from "@react-three/drei/native";
import modelPath from "../../assets/Tela-Photosi-Textured/Tela-Photosi-Textured.gltf";
import { Asset } from 'expo-asset';
import ExpoTHREE from 'expo-three';
import * as THREE from "three";

interface CanvasFrameProps {
  texture?: 'texture1' | 'texture2';
}

type CanvasFrameGLTF = GLTF & {
  nodes: {
    Scene: THREE.Group,
    polySurface2: THREE.Object3D,
    polySurface2_1: THREE.Mesh,
    polySurface2_2: THREE.Object3D,
    polySurface2_3: THREE.Mesh,
    polySurface2_4: THREE.Object3D,
    polySurface2_5: THREE.Mesh,
    root: THREE.Object3D,
  },
  materials: {
    legnoBlinn: THREE.MeshStandardMaterial,
    telaBlinn: THREE.MeshStandardMaterial,
    telaRetroBlinn: THREE.MeshStandardMaterial,
  }
}

export default function CanvasFrame({ texture = 'texture1' }: CanvasFrameProps) {
  // Load GLTF model
  const group = useRef<THREE.Group>(null);
  const tela = useRef<THREE.Mesh>(null);
  const {nodes, materials} = useGLTF(modelPath) as unknown as CanvasFrameGLTF;

  const texture1 = useMemo(() => {
    const texture1Asset = Asset.fromModule(require('../../assets/textures/texture1.png'));
    return new ExpoTHREE.TextureLoader().load(texture1Asset);
  }, []);
  
  const texture2 = useMemo(() => {
    const texture2Asset = Asset.fromModule(require('../../assets/textures/texture2.png'));
    return new ExpoTHREE.TextureLoader().load(texture2Asset);
  }, []);

  // Apply texture to all meshes in the cloned scene
  useLayoutEffect(() => {
    const selectedTexture = texture === 'texture1' ? texture1 : texture2;
    console.debug("tela:", tela.current);
    if (tela && tela.current) {
      tela.current.material.map = selectedTexture;
      tela.current.material.needsUpdate = true;
    }
  }, [texture, tela, texture1, texture2]);

  // Rotation animation
  useFrame((state, delta) => {
  });

  return (
      <group ref={group} rotation={[ Math.PI / 2, 0, Math.PI / 16]} position={[0, 0, 0]}>
        <group> 
          <mesh name="polySurface2_1" geometry={nodes.polySurface2_1.geometry} material={materials.legnoBlinn}></mesh>
          <mesh name="polySurface2_3" geometry={nodes.polySurface2_3.geometry} material={materials.telaRetroBlinn}></mesh>
          <mesh ref={tela} name="polySurface2_5" geometry={nodes.polySurface2_5.geometry} material={materials.telaBlinn}></mesh>
        </group>
      </group>
  );
}
