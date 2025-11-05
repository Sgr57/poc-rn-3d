import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber/native';
import { Asset } from 'expo-asset';
import { Mesh } from "three";
import ExpoTHREE from 'expo-three';

interface CubeProps {
    texture?: 'texture1' | 'texture2';
}

export default function Cube({ texture }: CubeProps) {
    const meshRef = useRef<Mesh>(null);

    // Load textures using ExpoTHREE for cross-platform compatibility
    const textures = useMemo(() => {
        const texture1Asset = Asset.fromModule(require('../../assets/textures/texture1.png'));
        const texture2Asset = Asset.fromModule(require('../../assets/textures/texture2.png'));

        return {
            texture1: new ExpoTHREE.TextureLoader().load(texture1Asset),
            texture2: new ExpoTHREE.TextureLoader().load(texture2Asset),
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
            <meshStandardMaterial
                color={"orange"}
                map={selectedTexture}
            />
        </mesh>
    );
}
