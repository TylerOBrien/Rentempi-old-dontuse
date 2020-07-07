/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Local Imports
*/

import { FormErrorMessage } from './FormErrorMessage';
import { SuccessMessage } from './SuccessMessage';

/**
 * Exports
*/

/**
 * 
 */
export function FormResultMessage(props) {
  return (
      props.success ? <SuccessMessage { ...props } />
    : props.error   ? <FormErrorMessage { ...props } />
    : null
  );
}

FormResultMessage.propTypes = {
  title: PropTypes.string,
  success: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ]),
  error: PropTypes.object,

  container: PropTypes.func,
  titleContainer: PropTypes.func,
  bodyContainer: PropTypes.func,

  onClose: PropTypes.func
};