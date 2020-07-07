/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { View } from '~/components/TailwindCss';

/**
 * Exports
*/

/**
 * 
 */
export function Col(props) {
  return (
    <View tailwind={[ 'flex flex-col', props.tailwind ]}>
      { props.children }
    </View>
  );
}