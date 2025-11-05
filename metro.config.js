const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add custom asset extensions
config.resolver.assetExts.push('glb', 'gltf', 'obj', 'mtl');

module.exports = config;
