/**
 * Global Imports
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Root Imports
*/

import { GuestRouterConfig } from '~/config/Router';
import { Router } from '~/components';
import { GuestScreens } from '~/screens';

/**
 * Locals
*/

const GuestRouterStack = createStackNavigator();

/**
 * Exports
*/

/**
 * 
 */
export function GuestRouter(props) {
  return (
    <Router
      { ...GuestRouterConfig.defaultProps }
      stack={ GuestRouterStack }
      screens={ GuestScreens }
    />
  );
}