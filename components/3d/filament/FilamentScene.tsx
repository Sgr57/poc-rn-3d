import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { FilamentView, FilamentScene, DefaultLight, Camera } from 'react-native-filament';

interface FilamentSceneWrapperProps {
  children: ReactNode;
}

export default function FilamentSceneWrapper({ children }: FilamentSceneWrapperProps) {
  return (
    <FilamentView style={styles.container}>
      <FilamentScene>
        <DefaultLight />
        <Camera />
        {children}
      </FilamentScene>
    </FilamentView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
