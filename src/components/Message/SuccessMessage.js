/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Local Imports
*/

import { Text } from '~/components';
import { Message } from './Message';

/**
 * Exports
*/

/**
 * 
 */
export function SuccessMessage({ tailwind, ...props }) {
  return (
    <Message { ...props } tailwind={[ 'msg msg-success', tailwind ]}>
      {
        props.children || 
        <Text>{ props.success?.message || props.success }</Text>
      }
    </Message>
  );
}

SuccessMessage.propTypes = {
  title: PropTypes.string,
  success: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ]),

  container: PropTypes.func,
  titleContainer: PropTypes.func,
  bodyContainer: PropTypes.func,

  onClose: PropTypes.func
};