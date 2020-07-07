/**
 * Global Imports
*/

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Local Imports
*/

import { Button } from '~/components/Form';
import { Row } from '~/components/Grid';
import { Link } from '~/components/Link';
import { View } from '~/components/TailwindCss';
import { PrimaryLayout } from '~/layouts/guest/PrimaryLayout';

/**
 * Exports
*/

/**
 * 
 */
export function Login(props) {
  return (
    <PrimaryLayout title='Login'>
      <Row tailwind='justify-center mt-24'>
        <View tailwind='mx-6'><Icon name='apple' size={ 32 } /></View>
        <View tailwind='mx-6'><Icon name='facebook' size={ 32 } /></View>
        <View tailwind='mx-6'><Icon name='google' size={ 32 } /></View>
      </Row>
      <View tailwind='w-full mt-8 px-8'>
        <Link
          to='LoginForm'
          label='Login with Email'
          container={ Button }
        />
      </View>
    </PrimaryLayout>
  );
}