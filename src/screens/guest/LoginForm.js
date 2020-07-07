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
import { Button, Form, UnderlinedInput, Submit } from '~/components/Form';
import { Text, View } from '~/components/TailwindCss';
import { PrimaryLayout } from '~/layouts/guest/PrimaryLayout';
import { LoginAuthService } from '~/services/Auth';

/**
 * Exports
*/

/**
 * 
 */
export function LoginForm(props) {
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
    LoginAuthService(values)
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
    <Form container={ View } tailwind='w-full mt-16'>
      <UnderlinedInput
        name='email'
        label='Email Address'
        error={ error }
      />
      <UnderlinedInput
        name='password'
        label='Password'
        error={ error }
        tailwind={{
          container: 'mt-4'
        }}
      />
      <View tailwind='px-8'>
        <Submit
          label='Login'
          tailwind='mt-12 bg-fmhero-navy-400'
        />
      </View>
    </Form>
  );
  
  /** Output **/
  
  return (
    <PrimaryLayout title='Login'>
      <Formik initialValues={ initialValues } onSubmit={ handleSubmit }>
        { renderForm }
      </Formik>
    </PrimaryLayout>
  );
}