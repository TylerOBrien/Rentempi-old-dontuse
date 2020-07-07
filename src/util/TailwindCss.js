/**
 * Global Imports
*/

import { create } from 'tailwind-rn';

/**
 * Local Imports
*/

import { getTruthyStrings } from './Helpers';

import aliases from '@resources/tailwind/aliases.json';
import styles from '@resources/tailwind/styles.json';

/**
 * Locals
*/

const { tailwind, getColor } = create(styles);

/**
 * 
 */
function applyAlias(name) {
  if (!name) {
    return undefined;
  }

  const names = name.split('.');
  let alias = aliases;

  for (let i = 0; i < names.length; i++) {
    if ( !(alias = alias[names[i]]) ) {
      return name;
    }
  }
  
  return typeof alias === 'string'
    ? styles[names[0]]
      ? `${ names[0] } ${ alias }`
      : alias
    : name
  ;
}

/**
 * 
 */
function getWithAliases(names) {
  names = getTruthyStrings(names);
  
  return names && names.split(' ').map(applyAlias).join(' ');
}

/**
 * Exports
*/

/**
 * 
 */
export function getTailwind(prop, key='container', useFallback=true) {
  if (typeof prop === 'string' || Array.isArray(prop)) {
    return (useFallback && prop) || undefined;
  } else {
    return (prop && prop[key]) || undefined;
  }
}

/**
 * 
 */
export function getPropsWithTailwind({ style={}, ...props }) {
  return {
    ...props,
    style: {
      ...style,
      ...tailwind( getWithAliases(props.tailwind) )
    }
  };
}