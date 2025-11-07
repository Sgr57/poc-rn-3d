import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FilamentScene from './components/3d/filament/FilamentScene';
import FilamentModel from './components/3d/filament/FilamentModel';

export default function App() {
  const [selectedTexture, setSelectedTexture] = useState<'texture1' | 'texture2'>('texture1');

  return (
    <View style={styles.container}>
      <FilamentScene>
        <FilamentModel texture={selectedTexture} />
      </FilamentScene>

      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => setSelectedTexture('texture1')}
        >
          <Text style={styles.buttonText}>Texture 1</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => setSelectedTexture('texture2')}
        >
          <Text style={styles.buttonText}>Texture 2</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 16,
    backgroundColor: '#fff',
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
