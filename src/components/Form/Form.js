/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

/**
 * Local Imports
*/

import { View } from '~/components/TailwindCss';

/**
 * Exports
*/

/**
 * 
 */
export function Form({ style, tailwind, ...props }) {
  /** Helpers **/

  const isFragment = (props.container === Fragment);

  /** Output **/

  return (
    <props.container { ...(isFragment ? {} : { style, tailwind }) }>
      { props.children }
    </props.container>
  );
}

Form.propTypes = {
  container: PropTypes.oneOfType([ PropTypes.func, PropTypes.symbol ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.object, PropTypes.array ]),
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
};

Form.defaultProps = {
  container: View
};