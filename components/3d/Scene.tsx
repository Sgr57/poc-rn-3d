import { Canvas } from '@react-three/fiber/native';
import { View, StyleSheet } from 'react-native';
import {Suspense} from "react";
import { DirectionalLight } from 'three';

interface SceneProps {
  children: React.ReactNode;
}

export default function Scene({ children }: SceneProps) {

  const directionalLight = new DirectionalLight("#fbfbfb", 4);
  directionalLight.position.set(0, 3, 10);
  
  return (
    <View style={styles.container}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }}
        onCreated={({camera, scene}) => {
          camera.attach(directionalLight);
          scene.add(camera);
        }}
      >
        <color attach="background" args={["#dddddd"]}></color>
        <Suspense>
          {children}
        </Suspense>
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
