/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator } from 'react-native';

/**
 * Local Imports
*/

import { Default } from '~/config/Theme';
import { Text, TouchableOpacity, View } from '~/components/TailwindCss';
import { getTailwind } from '~/util/TailwindCss';

/**
 * Exports
*/

/**
 * 
 */
export function Button(props) {
  /** Renderers **/

  /**
   * 
   */
  const renderLabel = () => (
    <View tailwind='relative'>
      <View tailwind='absolute flex justify-center items-center w-full h-full'>
        <ActivityIndicator
          color={ Default.tailwind.button?.spinner?.color }
          animating={ !!props.loading }
        />
      </View>
      <Text
        style={{ ...Default.style.button?.label }}
        tailwind={[
          Default.tailwind.button?.label,
          props.loading && 'text-transparent',
          getTailwind(props.tailwind, 'label', false)
        ]}
      >
        { props.children || props.label }
      </Text>
    </View>
  );

  /** Output **/

  return (
    <props.container
      { ...props.containerProps }
      tailwind={[ Default.tailwind.button?.container, getTailwind(props.tailwind, 'container') ]}
      style={{ ...Default.style.button?.container, ...props.style }}
      disabled={ props.disabled }
      onPress={ props.onPress }
    >
      { renderLabel() }
    </props.container>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  container: PropTypes.func,
  containerProps: PropTypes.object,

  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.object, PropTypes.array ]),
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array, ]),

  disabled: PropTypes.bool,
  loading: PropTypes.bool,

  onPress: PropTypes.func
};

Button.defaultProps = {
  container: TouchableOpacity
};