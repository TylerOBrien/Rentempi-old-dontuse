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
import { Button, Form, UnderlinedInput, Password, Submit } from '~/components/Form';
import { FormResultMessage } from '~/components/Message';
import { Text, View } from '~/components/TailwindCss';
import { PrimaryLayout } from '~/layouts/guest/PrimaryLayout';
import { RegisterAuthService } from '~/services/Auth';

/**
 * Exports
*/

/**
 * 
 */
export function RegisterForm(props) {
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
    RegisterAuthService(values)
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
    <Form container={ View } tailwind='w-full mt-8'>
      <UnderlinedInput
        name='email'
        label='Email Address'
        error={ error }
      />
      <UnderlinedInput
        name='password'
        label='Password'
        error={ error }
        secureTextEntry={ true }
        tailwind={{
          container: 'mt-4'
        }}
      />
      <UnderlinedInput
        name='password_confirmation'
        label='Confirm Password'
        error={ error }
        secureTextEntry={ true }
        tailwind={{
          container: 'mt-4'
        }}
      />
      <View tailwind='px-8'>
        <Text tailwind='mt-12 text-xl'>I accept the Terms of Service &amp; Privacy Policy.</Text>
        <Submit
          label='Create Account'
          tailwind='mt-12 bg-fmhero-navy-400'
        />
      </View>
    </Form>
  );
  
  /** Output **/
  
  return (
    <PrimaryLayout title='Create Account'>
      <Formik initialValues={ initialValues } onSubmit={ handleSubmit }>
        { renderForm }
      </Formik>
    </PrimaryLayout>
  );
}