/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Field, useFormikContext } from 'formik';

/**
 * Local Imports
*/

import { TextInput } from '~/components/TailwindCss';
import { getTailwind } from '~/util/TailwindCss';

/**
 * Exports
*/

/**
 * 
 */
export function ValuedField(props) {
  /** Contexts **/

  const formik = !!props.formik && useFormikContext();

  /** States **/

  const [ value, setValue ] = useState(props.value || '');

  /** Side-Effects **/

  useEffect(() => {
    handleUpdatedValue();
  }, [ formik ? formik.values[props.name] : value ]);

  useEffect(() => {
    if (!formik && props.value !== value) {
      setValue(props.value || '');
    }
  }, [ props.value ]);

  /** Event Handlers **/

  /**
   * 
   */
  const handleUpdatedValue = () => {
    if (props.onChange) {
      //
    }
  };

  /**
   * 
   */
  const handleChange = (newValue) => {
    if (formik) {
      formik.setFieldValue(props.name, newValue);
    } else {
      setValue(newValue);
    }
  };

  /**
   * 
   */
  const handleBlur = (touched) => {
    if (formik) {
      formik.setFieldTouched(props.name, touched);
    }
  };

  /**
   * 
   */
  const handleRenderChildren = (field, children) => {
    return React.Children.map(
      children, handleRenderChild.bind(this, field)
    );
  };
  
  /**
   * 
   */
  const handleRenderChild = (field, child) => {
    if (!child) {
      return null;
    }

    if ([TextInput].includes(child.type)) {
      return React.cloneElement(child, {
        name: field.name,
        value: field.value,
        onChangeText: handleChange,
        onBlur: handleBlur
      });
    } else if (child.props && child.props.children) {
      return React.cloneElement(child, {
        ...child.props,
        children: handleRenderChildren(field, child.props.children)
      });
    }

    return child;
  };

  /** Renderers **/

  /**
   * 
   */
  const renderField = ({ field }) => {
    return handleRenderChildren(field, props.children);
  };

  /**
   * 
   */
  const renderFormik = () => (
    <Field name={ props.name }>
      { renderField }
    </Field>
  );

  /**
   * 
   */
  const renderContent = () => (
    formik ? renderFormik()
      : renderField({ field: { name: props.name, value } })
  );

  /**
   * 
   */
  const renderContainer = () => {
    const config = {
      tailwind: [ 'relative', getTailwind(props.tailwind, 'container', false) ],
      children: renderContent()
    };

    return typeof props.container === 'function'
      ? React.createElement(props.container, config)
      : React.cloneElement(props.container, config)
    ;
  };

  /** Output **/

  return props.container ? renderContainer() : renderContent();
}

ValuedField.propTypes = {
  formik: PropTypes.bool,
  name: PropTypes.string.isRequired,
  container: PropTypes.oneOfType([ PropTypes.func, PropTypes.node, PropTypes.symbol ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.object, PropTypes.array ])
};

ValuedField.defaultProps = {
  formik: true
};