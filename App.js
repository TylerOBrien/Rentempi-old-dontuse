/**
 * Global Imports
*/

import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

/**
 * Root Imports
*/

import { AuthGuard } from '~/components';
import { AuthProvider, ApiProvider, ServiceProvider, TmpProvider } from '~/providers';
import { GuestRouter, VerifiedRouter } from '~/routers';

/**
 * Exports
*/

/**
 * 
 */
export default function App() {
  return (
    <Text>Test</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});