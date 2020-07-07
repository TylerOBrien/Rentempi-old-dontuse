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

import { ScrollView, Text, View } from '~/components/TailwindCss';

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
    <Fragment>
      { props.children }
    </Fragment>
  );
}