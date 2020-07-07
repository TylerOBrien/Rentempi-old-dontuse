/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

/**
 * Local Imports
*/

import { Text, View } from '~/components/TailwindCss';
import { Input } from './Input';

/**
 * Exports
*/

/**
 * 
 */
export function UnderlinedInput(props) {
  return (
    <Fragment>
      <Input
        { ...props }
        tailwind={{
          label: [ 'text-lg', props.tailwind?.label ],
          input: [ props.name in (props.error?.errors || {}) && 'text-red-600', props.tailwind?.input ],
          container: [
            'px-8 border-b',
            props.name in (props.error?.errors || {}) ? 'border-red-600' : 'border-gray-400',
            props.tailwind?.container
          ]
        }}
      />
      {
        props.name in (props.error?.errors || {}) &&
          <View>
            {
              props.error.errors[props.name].map((error, index) => (
                <Text key={ index } tailwind='px-8 py-2 text-lg text-red-600'>
                  { error }
                </Text>
              ))
            }
          </View>
      }
    </Fragment>
  );
}

UnderlinedInput.propTypes = {
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