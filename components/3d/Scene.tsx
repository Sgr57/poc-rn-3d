import { Canvas } from '@react-three/fiber';
import { View, StyleSheet } from 'react-native';

interface SceneProps {
  children: React.ReactNode;
}

export default function Scene({ children }: SceneProps) {
  return (
    <View style={styles.container}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {children}
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
