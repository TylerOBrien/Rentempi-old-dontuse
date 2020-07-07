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
export function PrivacyPolicy(props) {
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
          <Text tailwind='ml-8 text-2xl font-bold'>Privacy Policy</Text>
        </Row>
        <Text tailwind='mt-4 text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus justo quis mattis porttitor.
          Duis lacinia libero massa, sit amet tincidunt lectus sollicitudin eget. Vivamus fermentum nisi a arcu
          egestas pretium. Ut dui elit, porttitor vitae sapien a, gravida euismod diam. Maecenas justo sapien,
          molestie vel tincidunt accumsan, ultrices efficitur dolor. Aliquam sed magna sed magna sodales lacinia.
          Nam condimentum, libero eu volutpat rhoncus, ipsum erat vehicula nunc, ut finibus massa diam quis nunc.
          Quisque et massa arcu.
        </Text>
        <Text tailwind='mt-4 text-xl'>
          Curabitur sodales elit turpis, in hendrerit lorem pulvinar sollicitudin. Praesent malesuada turpis non nibh fringilla aliquet.
          Maecenas blandit ultrices suscipit. Etiam aliquam felis et elit efficitur efficitur. Cras consequat turpis vitae augue dignissim,
          vel hendrerit tortor vulputate. Nam laoreet elementum porta.
        </Text>
      </View>
    </WelcomeLayout>
  );
}