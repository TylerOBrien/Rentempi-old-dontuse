/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Local Imports
*/

import { Default } from '~/config/Theme';
import { TextInput } from '~/components/TailwindCss';
import { getTailwind } from '~/util/TailwindCss';
import { LabeledField } from './LabeledField';

/**
 * Exports
*/

/**
 * 
 */
export function Input({ style, placeholder, secureTextEntry, ...props }) {
  /** Settings **/

  const config = {
    name: props.name,
    style,
    secureTextEntry,
    placeholder,
    tailwind: [
      Default.tailwind.input.input, getTailwind(props.tailwind, 'input')
    ]
  };
  
  /** Output **/

  return (
    <LabeledField { ...props }>
      <TextInput { ...config } />
    </LabeledField>
  );
}

Input.propTypes = {
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

  hasError: PropTypes.bool,
  secureTextEntry: PropTypes.bool
};