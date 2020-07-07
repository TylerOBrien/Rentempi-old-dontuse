/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { useEffect, useContext, useState } from 'react';
import { Formik } from 'formik';

/**
 * Local Imports
*/

import { AuthContext } from '~/providers';
import { View } from '~/components/TailwindCss';
import { PrimaryLayout } from '~/layouts/guest/PrimaryLayout';
import { LoginService } from '~/services/Auth';

/**
 * Locals
*/



/**
 * Exports
*/

/**
 * 
 */
export function Login(props) {
  /** Contexts **/
  
  const auth = useContext(AuthContext);

  /** States **/
  
  const [ error, setError ] = useState(null);

  /** Formik **/
  
  const initialValues = {
    email: '',
    password: ''
  };
  
  /** Event Handlers **/
  
  /**
   * 
   */
  const handleSubmit = (values, { setSubmitting }) => {
    LoginService(values)
      .then(response => auth.authenticate(response.data))
      .catch(error => {
        setError(error.response.data);
        setSubmitting(false);
      })
    ;
  };
  
  /** Renderers **/
  
  /**
   * 
   */
  const renderForm = ({ isSubmitting }) => (
    <Form container={ View } tailwind='pb-8'>
      <Text>testing</Text>
    </Form>
  );
  
  /** Output **/
  
  return (
    <PrimaryLayout>
      <Formik initialValues={ initialValues } onSubmit={ handleSubmit }>
        { renderForm }
      </Formik>
    </PrimaryLayout>
  );
}