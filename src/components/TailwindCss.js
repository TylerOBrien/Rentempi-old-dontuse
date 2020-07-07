/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import { create } from 'tailwind-rn';
import {
  SafeAreaView as BaseSafeAreaView,
  ScrollView as BaseScrollView,
  Text as BaseText,
  TextInput as BaseTextInput,
  TouchableHighlight as BaseTouchableHighlight,
  TouchableOpacity as BaseTouchableOpacity,
  TouchableWithoutFeedback as BaseTouchableWithoutFeedback,
  View as BaseView
} from 'react-native';

import BaseDash from 'react-native-dash';

/**
 * Local Imports
*/

import { getPropsWithTailwind } from '~/util/TailwindCss';
import styles from '@resources/tailwind/styles.json';

/**
 * Locals
*/

const { tailwind, getColor } = create(styles);

/**
 * Exports
*/

export { getColor }

/**
 * 
 */
export function SafeAreaView(props) {
  return <BaseSafeAreaView { ...getPropsWithTailwind(props) } />;
}

SafeAreaView.propTypes = {
  ...BaseSafeAreaView.propTypes
};

/**
 * 
 */
export function ScrollView(props) {
  return <BaseScrollView { ...getPropsWithTailwind(props) } />;
}

ScrollView.propTypes = {
  ...BaseScrollView.propTypes
};

/**
 * 
 */
export function Text(props) {
  return <BaseText { ...getPropsWithTailwind(props) } />;
}

Text.propTypes = {
  ...BaseText.propTypes
};

/**
 * 
 */
export function TextInput(props) {
  return <BaseTextInput { ...getPropsWithTailwind(props) } />;
}

TextInput.propTypes = {
  ...BaseTextInput.propTypes
};

/**
 * 
 */
export function TouchableHighlight(props) {
  return <BaseTouchableHighlight { ...getPropsWithTailwind(props) } />;
}

TouchableHighlight.propTypes = {
  ...BaseTouchableHighlight.propTypes
};

/**
 * 
 */
export function TouchableOpacity(props) {
  return <BaseTouchableOpacity { ...getPropsWithTailwind(props) } />;
}

TouchableOpacity.propTypes = {
  ...BaseTouchableOpacity.propTypes
};

/**
 * 
 */
export function TouchableWithoutFeedback(props) {
  return <BaseTouchableWithoutFeedback { ...getPropsWithTailwind(props) } />;
}

TouchableWithoutFeedback.propTypes = {
  ...BaseTouchableWithoutFeedback.propTypes
};

/**
 * 
 */
export function View(props) {
  return <BaseView { ...getPropsWithTailwind(props) } />;
}

View.propTypes = {
  ...BaseView.propTypes
};

/**
 * 
 */
export function Dash(props) {
  return <BaseDash { ...getPropsWithTailwind(props) } />;
}

Dash.propTypes = {
  ...BaseDash.propTypes
};