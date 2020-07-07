/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Local Imports
*/

import { Text } from '~/components/TailwindCss';
import { ErrorMessage } from './ErrorMessage';

/**
 * Exports
*/

/**
 * 
 */
export function FormErrorMessage(props) {
  return (
    <ErrorMessage { ...props }>
      {
        !props.error.errors
          ? <Text>{ props.error.message }</Text>
          : Object.entries(props.error.errors).map(([ field, messages ]) => (
              messages.map((message, index) => (
                <Text key={ index }>{ message }</Text>
              ))
            ))
      }
    </ErrorMessage>
  );
}

FormErrorMessage.propTypes = {
  title: PropTypes.string,
  error: PropTypes.object.isRequired,

  container: PropTypes.func,
  titleContainer: PropTypes.func,
  bodyContainer: PropTypes.func,

  onClose: PropTypes.func
};