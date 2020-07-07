/**
 * Global Imports
*/

import { Image, StyleSheet } from 'react-native';
import React from 'react';

/**
 * Local Imports
*/

import { Link } from '~/components/Link';
import { Button } from '~/components/Form';
import { Col, Row } from '~/components/Grid';
import { Text, View } from '~/components/TailwindCss';
import { WelcomeLayout } from '~/layouts/guest';

import { Logo } from '@images';

/**
 * Exports
*/

/**
 * 
 */
export function Welcome(props) {
  return (
    <WelcomeLayout>
      <View tailwind='flex flex-auto items-center' style={ styles.logoContainer }>
        <Image source={ Logo.source } style={ styles.logo } />
      </View>
      <Col tailwind='p-8'>
        <Link
          to='Register'
          label='Create Account'
          container={ Button }
        />
        <Link
          to='Login'
          container={ Button }
          tailwind='mt-4'
        />
        <Row tailwind='justify-center items-center mt-8'>
          <View tailwind='w-1/2'>
            <Link
              to='Terms'
              label='Terms of Service'
              tailwind='mr-4 text-right text-xl text-fmhero-blue-400'
            />
          </View>
          <Text tailwind='text-2xl text-fmhero-blue-400'>|</Text>
          <View tailwind='w-1/2'>
            <Link
              to='PrivacyPolicy'
              label='Privacy Policy'
              tailwind='ml-4 text-xl text-fmhero-blue-400'
            />
          </View>
        </Row>
      </Col>
    </WelcomeLayout>
  );
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    resizeMode: 'contain'
  },
  logoContainer: {
    height: 240,
    marginLeft: -40
  }
});