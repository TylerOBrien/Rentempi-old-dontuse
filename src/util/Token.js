/**
 * Global Imports
*/

import AsyncStorage from '@react-native-community/async-storage';

/**
 * Root Imports
*/

import { StorageConfig, TokenConfig } from '~/config';

/**
 * Locals
*/

/**
 * 
 */
function getToken() {
  return AsyncStorage.getItem(`@${ StorageConfig.store }:${ TokenConfig.name }`);
}

/**
 * 
 */
function setToken(token) {
  return AsyncStorage.setItem(`@${ StorageConfig.store }:${ TokenConfig.name }`, JSON.stringify(token));
}

/**
 * 
 */
function clearToken() {
  return AsyncStorage.removeItem(`@${ StorageConfig.store }:${ TokenConfig.name }`);
}

/**
 * Exports
*/

/**
 * 
 */
export const TokenStorage = {
  get: ()      => getToken(),
  set: (token) => setToken(token),
  clear: ()    => clearToken(),
  type: ()     => TokenConfig.type
};