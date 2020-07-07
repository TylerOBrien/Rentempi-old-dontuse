/**
 * Global Imports
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Root Imports
*/

import { VerifiedRouterConfig } from '~/config/Router';
import { Router } from '~/components';
import { VerifiedScreens } from '~/screens';

/**
 * Locals
*/

const VerifiedRouterStack = createStackNavigator();

/**
 * Exports
*/

/**
 * 
 */
export function VerifiedRouter(props) {
  return (
    <Router
      { ...VerifiedRouterConfig.defaultProps }
      stack={ VerifiedRouterStack }
      screens={ VerifiedScreens }
    />
  );
}