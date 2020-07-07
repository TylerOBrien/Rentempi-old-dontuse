/**
 * Global Imports
*/

import { Image } from 'react-native';

/**
 * Local Imports
*/

import LogoIpsum from './LogoIpsum.png';

/**
 * Locals
*/

/**
 * 
 */
function getImageInfo(image) {
  const info = Image.resolveAssetSource(image);

  info.aspectRatio = info.width / info.height;

  return info;
}

/**
 * Exports
*/

export const Logo = {
  source: LogoIpsum,
  ...getImageInfo(LogoIpsum)
};