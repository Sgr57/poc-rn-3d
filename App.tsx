import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { OrbitControls } from "@react-three/drei/native";
import CanvasFrame from './components/3d/CanvasFrame';
import Scene from './components/3d/Scene';

export default function App() {
  const [selectedTexture, setSelectedTexture] = useState<'texture1' | 'texture2' | 'texture3'>('texture1');

  return (
    <View style={styles.container}>
      <Scene>
        <CanvasFrame texture={selectedTexture} />
        <OrbitControls enableDamping={true}
        dampingFactor={0.05}
        minDistance={3}
        maxDistance={20}
        maxAzimuthAngle={Math.PI / 4}/>
      </Scene>

      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => setSelectedTexture('texture1')}
        >
          <Text style={styles.buttonText}>Photo One</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => setSelectedTexture('texture2')}
        >
          <Text style={styles.buttonText}>Photo Two</Text>
        </Pressable>
        
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => setSelectedTexture('texture3')}
        >
          <Text style={styles.buttonText}>Photo Three</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 16,
    backgroundColor: '#dddddd',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#333',
    backgroundColor: '#fff',
    minWidth: 120,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none'
  },
  buttonPressed: {
    opacity: 0.6,
    backgroundColor: '#f0f0f0',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
