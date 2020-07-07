/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

/**
 * Local Imports
*/

import { Text, View } from '~/components/TailwindCss';
import { getTailwind } from '~/util/TailwindCss';
import { ValuedField } from './ValuedField';

/**
 * Exports
*/

/**
 * 
 */
export function LabeledField({ labelPosition, labelType, ...props }) {
  /** Renderers **/

  /**
   * 
   */
  const renderLabelContent = () => (
    <Text tailwind={ getTailwind(props.tailwind, 'label', false) }>
      { props.label }
    </Text>
  );

  /**
   * 
   */
  const renderLabelContainer = () => (
    <props.labelContainer>
      { 
        labelPosition === 'before' &&
          renderLabelContent()
      }
      {
        labelType === 'contain' &&
          props.children
      }
      { 
        labelPosition === 'after' &&
          renderLabelContent()
      }
    </props.labelContainer>
  );

  /**
   * 
   */
  const renderBeforeLabel = () => (
    <Fragment>
      {
        props.label && renderLabelContainer()
      }
      {
        !props.label || labelType === 'outside'
          ? props.children : null
      }
    </Fragment>
  );

  /**
   * 
   */
  const renderAfterLabel = () => (
    <Fragment>
      {
        !props.label || labelType === 'outside'
          ? props.children : null
      }
      {
        props.label && renderLabelContainer()
      }
    </Fragment>
  );
  
  /** Output **/

  return (
    <ValuedField { ...props }>
      {
        labelPosition === 'before'
          ? renderBeforeLabel()
        : labelPosition === 'after'
          ? renderAfterLabel()
        : null
      }
    </ValuedField>
  );
}

LabeledField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.oneOfType([ PropTypes.string, PropTypes.func, PropTypes.node ]),

  container: PropTypes.oneOfType([ PropTypes.func, PropTypes.node, PropTypes.symbol ]),

  labelContainer: PropTypes.func,
  labelType: PropTypes.oneOf([ 'outside', 'contain' ]),
  labelPosition: PropTypes.oneOf([ 'before', 'after' ]),

  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.object, PropTypes.array ]),

  hasError: PropTypes.bool
};

LabeledField.defaultProps = {
  container: View,
  labelContainer: View,
  labelType: 'outside',
  labelPosition: 'before'
};