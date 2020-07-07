/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Local Imports
*/

import { Input } from './Input';

/**
 * Exports
*/

/**
 * 
 */
export function Password(props) {
  return <Input { ...props } secureTextEntry={ true } />;
}

Password.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,

  labelContainer: PropTypes.func,
  labelType: PropTypes.oneOf([ 'outside', 'contain' ]),
  labelPosition: PropTypes.oneOf([ 'before', 'after' ]),

  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.object, PropTypes.array ]),
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),

  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,

  hasError: PropTypes.bool
};