/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { useEffect, useContext, useState } from 'react';

/**
 * Local Imports
*/

import { Text, TouchableOpacity, View } from '~/components/TailwindCss';
import { AuthContext } from '~/providers';
import { PrimaryLayout } from '~/layouts/verified/PrimaryLayout';

/**
 * Exports
*/

/**
 * 
 */
export function Dashboard(props) {
  /** Contexts **/

  const auth = useContext(AuthContext);

  /** Output **/

  return (
    <PrimaryLayout>
      <Text>Dashboard</Text>
      <TouchableOpacity onPress={ () => auth.logout() }>
        <Text>Logout</Text>
      </TouchableOpacity>
    </PrimaryLayout>
  );
}