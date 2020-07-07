/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Local Imports
*/

import { View } from '~/components/TailwindCss';
import { Col } from './Col';

/**
 * Exports
*/

/**
 * 
 */
export function Row(props) {
  return (
    <props.container tailwind={[ 'flex flex-row', props.tailwind ]} style={ props.style }>
      {
        !props.cols
          ? props.children
          : React.Children.map(
              props.children, child => (
                (child && child.type === Col)
                  ? child
                  : <Col tailwind={ `w-1/${ props.cols }` }>{ child }</Col>
              )
            )
      }
    </props.container>
  );
}

Row.propTypes = {
  container: PropTypes.func,
  cols: PropTypes.oneOf([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.object, PropTypes.array ])
};

Row.defaultProps = {
  container: View
};