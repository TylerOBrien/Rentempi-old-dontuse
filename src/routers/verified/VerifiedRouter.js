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
import { ResourceProvider } from '~/providers';

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
      container={ ResourceProvider }
      stack={ VerifiedRouterStack }
      screens={ VerifiedScreens }
    />
  );
}