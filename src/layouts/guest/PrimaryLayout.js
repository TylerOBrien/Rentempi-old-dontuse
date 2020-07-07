/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Local Imports
*/

import { Col, Row } from '~/components/Grid';
import { ScrollView, Text, TouchableOpacity, View } from '~/components/TailwindCss';

/**
 * Exports
*/

/**
 * 
 */
export function PrimaryLayout(props) {
  /** Contexts **/

  const navigation = useNavigation();

  /** Output **/

  return (
    <Col tailwind='items-center w-full h-full py-16'>
      <Row tailwind='relative justify-center items-center w-1/2'>
        <View tailwind='absolute left-0'>
          <TouchableOpacity onPress={ () => navigation.goBack() }>
            <Icon name='chevron-left' size={ 24 } color='black' />
          </TouchableOpacity>
        </View>
        <Text tailwind='flex flex-row justify-center font-bold text-2xl'>
          { props.title }
        </Text>
      </Row>
      { props.children }
    </Col>
  );
}