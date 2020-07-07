/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

/**
 * Local Imports
*/

import { Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from '~/components/TailwindCss';
import { getTailwind } from '~/util/TailwindCss';

/**
 * Exports
*/

/**
 * 
 */
export function Link(props) {
  /** Contexs **/

  const navigation = useNavigation();

  /** Components **/

  const Container = props.container || TouchableOpacity;

  /** Event Handlers **/

  /**
   * 
   */
  const handlePress = () => {
    navigation.navigate(props.to);
  };

  /** Renderers **/

  /**
   * 
   */
  const renderContainedLabel = () => (
    <props.labelContainer
      tailwind={ getTailwind(props.tailwind, 'label') }
    >
      { props.label || props.to }
    </props.labelContainer>
  );

  /**
   * 
   */
  const renderLabel = () => (
    [ TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback ].includes(Container)
      ? renderContainedLabel()
      : props.label || props.to
  );

  /** Output **/

  return (
    <Container
      { ...props.containerProps }
      tailwind={ getTailwind(props.tailwind, 'container') }
      disabled={ props.disabled }
      onPress={ handlePress }
    >
      { props.children || renderLabel() }
    </Container>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelContainer: PropTypes.func,

  container: PropTypes.func,
  containerProps: PropTypes.object,

  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.object, PropTypes.arrayOf(PropTypes.string) ]),
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array, ]),

  disabled: PropTypes.bool
};

Link.defaultProps = {
  labelContainer: Text
};