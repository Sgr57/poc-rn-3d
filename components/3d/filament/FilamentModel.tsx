import React from 'react';
import { Model } from 'react-native-filament';

// Import model
const telaModel = require('../../../assets/tela.glb');

interface FilamentModelProps {
  texture?: 'texture1' | 'texture2';
}

/**
 * FilamentModel Component
 *
 * Renders the tela.glb model using react-native-filament.
 *
 * GLB Model Structure:
 * - Material Name: "telaBlinn" (from original react-three-fiber implementation)
 * - The model includes its own embedded textures from the GLB file
 *
 * Note: Texture switching with useBuffer and EntitySelector requires
 * additional configuration based on the GLB model's entity structure.
 * This can be added once entity names are inspected in Blender.
 */
export default function FilamentModel({ texture = 'texture1' }: FilamentModelProps) {
  // Currently renders the model with its embedded textures
  // TODO: Implement texture switching using useBuffer and EntitySelector
  // once entity names are properly identified from the GLB model

  return <Model source={telaModel} />;
}
