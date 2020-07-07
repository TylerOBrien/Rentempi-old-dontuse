/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Local Imports
*/

import { TouchableOpacity, Text, View } from '~/components/TailwindCss';
import { getTailwind } from '~/util/TailwindCss';

/**
 * Exports
*/

/**
 * 
 */
export function Message(props) {
  /** Renderers **/

  /**
   * 
   */
  const renderTitle = () => (
    <props.titleContainer tailwind={[ getTailwind(props.tailwind, 'title', false) ]}>
      { props.title }
    </props.titleContainer>
  );

  /**
   * 
   */
  const renderBody = () => (
    React.Children.map(
      props.children, child => (
        React.cloneElement(child, {
          tailwind: getTailwind(props.tailwind, 'item', false)
        })
      )
    )
  );

  /**
   * 
   */
  const renderClose = () => (
    <View tailwind={[ 'absolute top-0 right-0 p-4', getTailwind(props.tailwind, 'closeContainer', false) ]}>
      <TouchableOpacity onPress={ props.onClose }>
        <Icon name='times' tailwind={ getTailwind(props.tailwind, 'close', false) } />
      </TouchableOpacity>
    </View>
  );

  /** Output **/
  
  return (
    <View tailwind={[ 'msg', getTailwind(props.tailwind, 'container') ]}>
      {
        props.title && renderTitle()
      }
      <props.bodyContainer>
        { renderBody() }
      </props.bodyContainer>
      {
        props.onClose && renderClose()
      }
    </View>
  );
}

Message.propTypes = {
  title: PropTypes.string,

  container: PropTypes.func,
  titleContainer: PropTypes.func,
  bodyContainer: PropTypes.func,

  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.array , PropTypes.object ]),
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),

  onClose: PropTypes.func
};

Message.defaultProps = {
  container: View,
  titleContainer: Text,
  bodyContainer: View
};