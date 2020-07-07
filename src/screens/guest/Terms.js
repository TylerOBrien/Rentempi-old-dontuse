/**
 * Global Imports
*/

import { Image, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

/**
 * Local Imports
*/

import { Row } from '~/components/Grid';
import { Text, TouchableOpacity, View } from '~/components/TailwindCss';
import { WelcomeLayout } from '~/layouts/guest';

/**
 * Exports
*/

/**
 * 
 */
export function Terms(props) {
  /** Contexts **/

  const navigation = useNavigation();

  /** Output **/

  return (
    <WelcomeLayout>
      <View tailwind='p-8'>
        <Row tailwind='items-center'>
          <TouchableOpacity tailwind='mt-1' onPress={ () => navigation.goBack() }>
            <Icon name='chevron-left' size={ 24 } color='black' />
          </TouchableOpacity>
          <Text tailwind='ml-8 text-2xl font-bold'>Terms of Service</Text>
        </Row>
        <Text tailwind='mt-4 text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque mattis quam id molestie varius. Praesent vel vulputate leo, id sollicitudin ligula.
          Maecenas in varius sem.
        </Text>
        <Text tailwind='mt-4 text-xl'>
          Nam tellus quam, pulvinar hendrerit augue in, imperdiet congue magna. Vivamus sapien odio,
          faucibus id turpis vel, ultricies molestie purus. Morbi aliquam, justo et interdum tincidunt,
          enim mauris malesuada justo, nec imperdiet dolor lorem et mi. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Vivamus id lobortis augue. Aliquam
          justo enim, sodales eget semper ut, porta in tellus. Mauris aliquet dictum tempor.
        </Text>
        <Text tailwind='mt-4 text-xl'>
          Vestibulum id egestas urna. Fusce feugiat purus venenatis risus eleifend, vel venenatis lectus interdum.
          Sed et quam varius, laoreet nibh sed, pretium ligula. Pellentesque placerat pharetra cursus. Sed elementum
          in leo sed ultrices. Morbi dignissim nisl nisi, in lacinia elit vehicula sed.
        </Text>
      </View>
    </WelcomeLayout>
  );
}