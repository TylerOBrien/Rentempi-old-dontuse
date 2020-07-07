/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Local Imports
*/

import { Message } from './Message';

/**
 * Exports
*/

/**
 * 
 */
export function ErrorMessage({ tailwind, ...props }) {
  return (
    <Message { ...props } tailwind={[ 'msg', tailwind ]}>
      { props.children }
    </Message>
  );
}

ErrorMessage.propTypes = {
  title: PropTypes.string,

  container: PropTypes.func,
  titleContainer: PropTypes.func,
  bodyContainer: PropTypes.func,

  onClose: PropTypes.func
};