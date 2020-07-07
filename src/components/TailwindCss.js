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

import aliases from '@resources/tailwind/aliases.json';
import styles from '@resources/tailwind/styles.json';

/**
 * Locals
*/

const { tailwind, getColor } = create(styles);

/**
 * 
 */
function applyAlias(name) {
  if (!name) {
    return undefined;
  }

  const names = name.split('.');
  let alias = aliases;

  for (let i = 0; i < names.length; i++) {
    if ( !(alias = alias[names[i]]) ) {
      return name;
    }
  }
  
  return typeof alias === 'string'
    ? styles[names[0]]
      ? `${ names[0] } ${ alias }`
      : alias
    : name
  ;
}

/**
 * 
 */
function getWithAliases(names) {
  names = getTruthyNames(names);
  
  return names && names.split(' ').map(applyAlias).join(' ');
}

/**
 * 
 */
function getTruthyNames(names) {
  return !Array.isArray(names) ? names
    : names.filter(
        name => Array.isArray(name)
          ? getTruthyNames(name)
          : name && `${ name }`.trim().length
        )
        .join(' ');
}

/**
 * 
 */
function getPropsWithTailwind({ style={}, ...props }) {
  return {
    ...props,
    style: {
      ...style,
      ...tailwind( getWithAliases(props.tailwind) )
    }
  };
}

/**
 * Exports
*/

export { getColor }

/**
 * 
 */
export function extendTailwind(prop, extension, fallback='container') {
  if (typeof prop === 'string') {
    return extendTailwind({ [fallback]: prop }, extension);
  }

  const result = { ...prop };

  Object.entries(extension).forEach(([ name, tailw ]) => {
    result[name] = getTruthyNames([ result[name], tailw ]);
  });

  return result;
}

/**
 * 
 */
export function getTailwind(prop, key, useFallback=true) {
  if (typeof prop === 'string' || Array.isArray(prop)) {
    return useFallback && prop;
  } else {
    return prop && prop[key];
  }
}

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