/**
 * Global Imports
*/

import React from 'react';
import { useNavigationState } from '@react-navigation/native';

/**
 * Local Imports
*/

import { Link } from './Link';
import { extendTailwind } from '@util/TailwindCss';

/**
 * Exports
*/

/**
 * 
 */
export function NavLink(props) {
  /** Contexts **/

  const routes = useNavigationState(state => state.routes);

  /** Constants **/

  const current = ( routes && routes.length ? routes[routes.length-1] : {} );
  const isActive = !!( current && current.name === props.to );
  
  /** Output **/
  
  return (
    <Link
      { ...props }
      tailwind={
        extendTailwind(props.tailwind, { label: isActive ? props.activeTailwind : props.inactiveTailwind }, 'label')
      }
    />
  );
}