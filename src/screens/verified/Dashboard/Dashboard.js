/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { useEffect, useContext, useState } from 'react';

/**
 * Local Imports
*/

import { View } from '~/components/TailwindCss';
import { PrimaryLayout } from '~/layouts/verified/PrimaryLayout';

/**
 * Exports
*/

/**
 * 
 */
export function Dashboard(props) {
  return (
    <PrimaryLayout>
      <Text>Dashboard</Text>
    </PrimaryLayout>
  );
}