/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import { useFormikContext } from 'formik';

/**
 * Locals
*/

import { Button } from './Button';

/**
 * Exports
*/

/**
 * 
 */
export function Submit(props) {
  /** Contexts **/

  const formik = !!props.formik && useFormikContext();

  /** Output **/

  return (
    <Button
      { ...props }
      loading={ formik ? formik.isSubmitting : props.loading }
      disabled={ formik ? formik.isSubmitting : props.disabled }
      onPress={ formik ? formik.handleSubmit : props.onPress }
    />
  );
}

Submit.propTypes = {
  formik: PropTypes.bool,
  container: PropTypes.func,
  label: PropTypes.string,
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ])
};

Submit.defaultProps = {
  formik: true
};