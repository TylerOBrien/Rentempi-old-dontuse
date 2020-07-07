/**
 * Global Imports
*/

import React, { useState } from 'react';

/**
 * Local Imports
*/

import { getObjectExcept } from '~/util/Helpers';

/**
 * Exports
*/

export const TmpContext = React.createContext({});

/**
 * 
 */
export function TmpProvider(props) {
  /** States **/
  
  const [ data, setData ] = useState({});
  
  /** Helpers **/
  
  /**
   * 
   */
  const get = (key) => {
    return data[key];
  };
  
  /**
   * 
   */
  const set = (key, value) => {
    setData({ ...data, [key]: value });
  };
  
  /**
   * 
   */
  const remove = (key) => {
    setData({ ...getObjectExcept(data, key) });
  };
  
  /** Output **/
  
  return (
    <TmpContext.Provider value={{ get, set, remove }}>
      { props.children }
    </TmpContext.Provider>
  );
}