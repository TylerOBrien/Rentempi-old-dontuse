/**
 * Global Imports
*/

import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

/**
 * Local Imports
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
    <NavigationContainer>
      <TmpProvider>
        <AuthProvider>
          <ApiProvider>
            <ServiceProvider>
              <StatusBar backgroundColor='rgba(0, 0, 0, 0.885)' barStyle='light-content' />
              <SafeAreaView style={ styles.container }>
                <AuthGuard
                  guest={ GuestRouter }
                  verified={ VerifiedRouter }
                />
              </SafeAreaView>
            </ServiceProvider>
          </ApiProvider>
        </AuthProvider>
      </TmpProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});